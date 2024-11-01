import 'mysql2/promise';
import sqlite3 from 'sqlite3';

const sqlite = sqlite3.verbose();
function fetch_orders() {
  return new Promise((resolve, reject) => {
    let database_instance = new sqlite.Database("./db/projectdb.sl3");
    database_instance.serialize(() => {
      let fetch_orders2 = `
                SELECT * FROM Purchase JOIN Customer ON Purchase.Customer_ID=Customer.ID;
            `;
      database_instance.all(fetch_orders2, (error, data) => {
        if (error)
          console.log(error);
        return resolve(data);
      });
    });
  });
}
async function load() {
  let orders = await fetch_orders();
  return {
    orders
  };
}

var _page_server = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 8;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-BDiHFxR7.js')).default;
const server_id = "src/routes/employee/+page.server.js";
const imports = ["_app/immutable/nodes/8.Dc-xnH9m.js","_app/immutable/chunks/14.NBuK3kfd.js","_app/immutable/chunks/index.BkIfBQf8.js","_app/immutable/chunks/each.D6YF6ztN.js","_app/immutable/chunks/helpers.C7bBOv7j.js","_app/immutable/chunks/entry.Dlt0aQ84.js"];
const stylesheets = ["_app/immutable/assets/8.C-4B5bc4.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server as server, server_id, stylesheets };
//# sourceMappingURL=8-Bo0KFo3e.js.map
