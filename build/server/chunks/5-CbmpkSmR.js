import { c as cart_body } from './helpers-BeB4rNKG.js';
import { s as set_connection } from './legacydb-C6Uji1Fu.js';
import { r as redirect } from './index-CstSBD0C.js';
import sqlite3 from 'sqlite3';
import 'mysql2/promise';

const sqlite = sqlite3.verbose();
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
  console.log(current_cart);
  let cart_items = cart_body();
  if (current_cart) {
    cart_items = JSON.parse(current_cart);
  } else {
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
  update: async (request) => {
    const form_data = await request.request.formData();
    let item_number = form_data.get("item");
    let item_qty = form_data.get("qty");
    let current_cart = request.cookies.get("cart");
    let cart_body$1 = cart_body();
    if (!(current_cart == null || current_cart == "")) {
      let cookie_cart = JSON.parse(current_cart);
      cookie_cart.items.forEach((item) => {
        if (item.item == item_number) {
          if (Number(item_qty) > 0) {
            item.qty = Number(item_qty);
            cart_body$1.items.push(item);
          }
        } else {
          cart_body$1.items.push(item);
        }
      });
      if (cart_body$1.items.length == 0) {
        request.cookies.delete("cart", { path: "/" });
        redirect(301, "/cart");
      } else {
        let cookie_string = JSON.stringify(cart_body$1);
        console.log(cookie_string);
        request.cookies.set("cart", cookie_string, { path: "/" });
        redirect(301, "/cart");
      }
    }
  }
};

var _page_server = /*#__PURE__*/Object.freeze({
  __proto__: null,
  actions: actions,
  load: load
});

const index = 5;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-BGkk8MQ3.js')).default;
const server_id = "src/routes/cart/+page.server.js";
const imports = ["_app/immutable/nodes/5.BQK6O2h9.js","_app/immutable/chunks/14.NBuK3kfd.js","_app/immutable/chunks/index.BkIfBQf8.js","_app/immutable/chunks/each.D6YF6ztN.js","_app/immutable/chunks/helpers.C7bBOv7j.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, _page_server as server, server_id, stylesheets };
//# sourceMappingURL=5-CbmpkSmR.js.map
