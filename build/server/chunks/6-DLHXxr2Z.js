import { c as cart_body } from './helpers-BeB4rNKG.js';
import { s as send_invoice } from './mailer-B2Jso4_p.js';
import { a as authorize } from './creditprocessor-tKPNl1OJ.js';
import { s as set_connection } from './legacydb-C6Uji1Fu.js';
import { r as redirect } from './index-CstSBD0C.js';
import sqlite3 from 'sqlite3';
import 'nodemailer';
import 'axios';
import 'uuid';
import 'mysql2/promise';

const sqlite = sqlite3.verbose();
function fetch_inventory(inventory_id) {
  return new Promise((resolve, reject) => {
    let database_instance = new sqlite.Database("./db/projectdb.sl3");
    database_instance.serialize(() => {
      let fetch_orders = `SELECT * FROM Warehouse WHERE PartID = ${inventory_id}`;
      database_instance.all(fetch_orders, (error, data) => {
        if (error)
          console.log(error);
        return resolve(data);
      });
    });
  });
}
function add_customer(details) {
  return new Promise((resolve, reject) => {
    let database_instance = new sqlite.Database("./db/projectdb.sl3");
    database_instance.serialize(() => {
      let fetch_orders = `
            INSERT INTO Customer (first_name, last_name, email, country, city, customer_state,
              postal_code, Address_line1, Address_line2) VALUES
              ('${details.first}', '${details.last}', '${details.email}', '${details.country}', '${details.city}',
              '${details.state}', '${details.zip}', '${details.addr1}', '${details.addr2}');
          `;
      console.log(fetch_orders);
      database_instance.run(fetch_orders, function() {
        send_invoice(details.email, details);
        resolve(this.lastID);
      });
    });
  });
}
function place_order(details) {
  return new Promise((resolve, reject) => {
    let database_instance = new sqlite.Database("./db/projectdb.sl3");
    database_instance.serialize(() => {
      let fetch_orders = `
          INSERT INTO Purchase (transaction_ID, customer_ID, bracket_ID, authorization_code, order_status, DateAndTime, total) VALUES
              ('${details.transaction_id}', ${details.customer}, ${details.weight_id}, ${details.auth_code}, 'Processing', '${details.data}', '${details.total}');
        `;
      database_instance.run(fetch_orders, function() {
        resolve();
      });
      for (let i = 0; i < details.line_items.items.length; ++i) {
        let citem = details.line_items.items[i];
        let set_litem = `
          INSERT INTO LineItem (ID, part_number, quantity) VALUES
          ('${details.transaction_id}', ${citem.item.number}, ${citem.qty});
          `;
        database_instance.run(set_litem, function() {
        });
        let set_warehouse = `UPDATE Warehouse SET quantity = ${citem.wh - citem.qty} WHERE PartID = ${citem.item.number}`;
        database_instance.run(set_warehouse, function() {
        });
      }
      resolve();
    });
  });
}
function fetch_weights() {
  return new Promise((resolve, reject) => {
    let database_instance = new sqlite.Database("./db/projectdb.sl3");
    database_instance.serialize(() => {
      let fetch_orders = `
              SELECT * FROM WeightTable;
          `;
      database_instance.all(fetch_orders, (error, data) => {
        if (error)
          console.log(error);
        return resolve(data);
      });
    });
  });
}
async function load({ cookies }) {
  let current_cart = cookies.get("cart");
  let cart_items = cart_body();
  if (current_cart != null) {
    cart_items = JSON.parse(current_cart);
  } else {
    redirect(301, "/cart");
    return { is_empty: true };
  }
  let connection = await set_connection();
  try {
    let cart_data = { is_empty: false, items: [], weights: [] };
    for (let i = 0; i < cart_items.items.length; ++i) {
      let res = await connection.query(`SELECT * FROM parts WHERE number = '${cart_items.items[i].item}'`).then(([rows, fields]) => {
        return rows;
      });
      cart_data.items.push({ item: res[0], qty: cart_items.items[i].qty, img: res[0].pictureURL });
    }
    let weight_brackets = await fetch_weights();
    cart_data.weights = weight_brackets;
    return cart_data;
  } catch (error) {
    console.error("Unable to perform query!");
    console.log(error);
    return error;
  }
}
const actions = {
  ordersend: async (request) => {
    const form_data = await request.request.formData();
    let first_name = form_data.get("deliveryFirstName");
    let last_name = form_data.get("deliveryLastName");
    let email = form_data.get("deliveryEmail");
    let country = "USA";
    let city = form_data.get("deliveryCity");
    let zipcode = form_data.get("deliveryZip");
    let state = form_data.get("deliveryState");
    let addr1 = form_data.get("deliveryAddress");
    let addr2 = form_data.get("deliveryAddress2");
    let card_name = form_data.get("cardName");
    let card_number = form_data.get("cardNumber");
    let card_date = form_data.get("cardDate");
    let order_total = form_data.get("order_total");
    let weight_class = form_data.get("weight_class");
    let current_cart = request.cookies.get("cart");
    if (!current_cart) {
      redirect(301, "/");
    }
    let cart_items = JSON.parse(current_cart);
    let order_status_result = await authorize(card_name, card_number, card_date, order_total);
    console.log(order_status_result.data);
    if (order_status_result.hasOwnProperty("errors")) {
      redirect(301, "/cart?error_" + order_status_result.errors[0]);
    }
    let transaction_id = order_status_result.data.trans;
    let auth_id = order_status_result.data.authorization;
    let order_time = order_status_result.data.timeStamp;
    let connection = await set_connection();
    let cart_data = { is_empty: false, items: [], weights: [] };
    for (let i = 0; i < cart_items.items.length; ++i) {
      let res = await connection.query(`SELECT * FROM parts WHERE number = '${cart_items.items[i].item}'`).then(([rows, fields]) => {
        return rows;
      });
      let inventory = await fetch_inventory(cart_items.items[i].item);
      console.log(inventory);
      if (inventory.length != 1 || inventory[0].quantity < cart_items.items[i].qty)
        redirect(301, "/cart?noinventory_" + cart_items.items[i].item);
      cart_data.items.push({ item: res[0], qty: cart_items.items[i].qty, wh: inventory[0].quantity });
    }
    cart_data.items.forEach((item) => console.log(item));
    let customer_id = await add_customer({
      first: first_name,
      last: last_name,
      email,
      country,
      city,
      state,
      zip: zipcode,
      addr1,
      addr2,
      orderid: transaction_id,
      total: order_total,
      cart: cart_data
    });
    await place_order({
      email,
      transaction_id,
      customer: customer_id,
      weight_id: weight_class,
      auth_code: auth_id,
      data: order_time,
      total: order_total,
      line_items: cart_data
    });
    request.cookies.delete("cart", { path: "/" });
    redirect(301, "/cart?ordersuccess");
  }
};

var _page_server = /*#__PURE__*/Object.freeze({
  __proto__: null,
  actions: actions,
  load: load
});

const index = 6;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-D4W0xOak.js')).default;
const server_id = "src/routes/checkout/+page.server.js";
const imports = ["_app/immutable/nodes/6.qsMVR1lD.js","_app/immutable/chunks/14.NBuK3kfd.js","_app/immutable/chunks/index.BkIfBQf8.js","_app/immutable/chunks/each.D6YF6ztN.js","_app/immutable/chunks/helpers.C7bBOv7j.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, _page_server as server, server_id, stylesheets };
//# sourceMappingURL=6-DLHXxr2Z.js.map
