import './index-CstSBD0C.js';
import sqlite3 from 'sqlite3';
import { s as set_connection } from './legacydb-C6Uji1Fu.js';
import { a as send_confirmation } from './mailer-B2Jso4_p.js';
import 'mysql2/promise';
import 'nodemailer';

const sqlite = sqlite3.verbose();
function fetch_order(id) {
  return new Promise((resolve, reject) => {
    let database_instance = new sqlite.Database("./db/projectdb.sl3");
    database_instance.serialize(() => {
      let fetch_full_order = `
        SELECT * FROM LineItem
          JOIN Purchase ON Purchase.transaction_ID = LineItem.ID
          JOIN Customer ON Purchase.Customer_ID = Customer.ID
          WHERE LineItem.ID = '${id}';
        `;
      database_instance.all(fetch_full_order, (error, data) => {
        if (error)
          console.log(error);
        return resolve(data);
      });
    });
  });
}
async function load({ params }) {
  let order_details = await fetch_order(params.manage);
  return {
    order: order_details
  };
}
async function set_status(id, status) {
  let statement = `UPDATE Purchase SET order_status = '${status}' WHERE transaction_ID = '${id}';`;
  return new Promise((resolve, reject) => {
    let database_instance = new sqlite.Database("./db/projectdb.sl3");
    database_instance.serialize(() => {
      database_instance.run(statement, function() {
        resolve();
      });
    });
  });
}
async function send_email(id) {
  let order_details = await fetch_order(id);
  let cart_data = { is_empty: false, items: [], weights: [] };
  let connection = await set_connection();
  for (let i = 0; i < order_details.length; ++i) {
    let res = await connection.query(`SELECT * FROM parts WHERE number = '${order_details.part_number}'`).then(([rows, fields]) => {
      return rows;
    });
    cart_data.items.push({
      item: res,
      qty: order_details.quantity
    });
  }
  let details = {
    first: order_details[0].first_name,
    last: order_details[0].last_name,
    email: order_details[0].email,
    country: order_details[0].country,
    city: order_details[0].city,
    state: order_details[0].customer_state,
    zip: order_details[0].postal_code,
    addr1: order_details[0].Address_line1,
    addr2: order_details[0].Address_line2,
    orderid: id,
    total: order_details[0].total,
    cart: cart_data
  };
  if (order_details[0].email == "magiktrikdev@gmail.com")
    send_confirmation(order_details[0].email, details);
  else
    console.log("Not emailing...");
}
const actions = {
  shipped: async (request) => {
    const form_data = await request.request.formData();
    const id = form_data.get("id");
    await set_status(id, "Completed");
    await send_email(id);
  },
  delivered: async (request) => {
    const form_data = await request.request.formData();
    const id = form_data.get("id");
    await set_status(id, "Delivered");
  },
  reset: async (request) => {
    const form_data = await request.request.formData();
    const id = form_data.get("id");
    await set_status(id, "Processing");
  }
};

var _page_server = /*#__PURE__*/Object.freeze({
  __proto__: null,
  actions: actions,
  load: load
});

const index = 11;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-CtQBqU50.js')).default;
const server_id = "src/routes/order/customer/[manage]/+page.server.js";
const imports = ["_app/immutable/nodes/11.nnffvyy6.js","_app/immutable/chunks/14.NBuK3kfd.js","_app/immutable/chunks/index.BkIfBQf8.js","_app/immutable/chunks/each.D6YF6ztN.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, _page_server as server, server_id, stylesheets };
//# sourceMappingURL=11-ZKesznBh.js.map
