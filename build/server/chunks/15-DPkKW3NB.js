import { s as set_connection } from './legacydb-C6Uji1Fu.js';
import { c as cart_body } from './helpers-BeB4rNKG.js';
import { r as redirect } from './index-CstSBD0C.js';
import 'mysql2/promise';

const actions = {
  default: async (request) => {
    const form_data = await request.request.formData();
    const item_number = form_data.get("item");
    const item_qty = form_data.get("qty");
    let current_cart = request.cookies.get("cart");
    let cart_body$1 = cart_body();
    if (!(current_cart == null || current_cart == "")) {
      let cookie_cart = JSON.parse(current_cart);
      cookie_cart.items.forEach((item) => {
        cart_body$1.items.push(item);
      });
    }
    let found = false;
    cart_body$1.items.forEach((element) => {
      if (element.item == item_number) {
        element.qty = Number(element.qty) + Number(item_qty);
        found = true;
      }
    });
    if (found == false) {
      cart_body$1.items.push({ item: item_number, qty: Number(item_qty) });
    }
    let cookie_string = JSON.stringify(cart_body$1);
    console.log(cookie_string);
    request.cookies.set("cart", cookie_string, { path: "/" });
    redirect(301, "/cart");
  }
};
async function load({ params }) {
  let connection = await set_connection();
  try {
    let results = await connection.query(`SELECT * FROM parts WHERE number = '${params.slug}'`).then(([rows, fields]) => {
      return rows;
    });
    return {
      product_listing: results[0]
    };
  } catch (error) {
    console.error("Unable to perform query!");
    console.log(error);
    return error;
  }
}

var _page_server = /*#__PURE__*/Object.freeze({
  __proto__: null,
  actions: actions,
  load: load
});

const index = 15;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-BSCJ1UVe.js')).default;
const server_id = "src/routes/product/[slug]/+page.server.js";
const imports = ["_app/immutable/nodes/15.BiV8sQJJ.js","_app/immutable/chunks/14.NBuK3kfd.js","_app/immutable/chunks/index.BkIfBQf8.js","_app/immutable/chunks/helpers.C7bBOv7j.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, _page_server as server, server_id, stylesheets };
//# sourceMappingURL=15-DPkKW3NB.js.map
