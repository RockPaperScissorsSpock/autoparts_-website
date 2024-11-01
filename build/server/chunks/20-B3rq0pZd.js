import { r as redirect } from './index-CstSBD0C.js';
import sqlite3 from 'sqlite3';
import { s as set_connection } from './legacydb-C6Uji1Fu.js';
import 'mysql2/promise';

const sqlite = sqlite3.verbose();
async function fetch_parts() {
  let connection = await set_connection();
  let res = await connection.query(`SELECT * FROM parts;`).then(([rows, fields]) => {
    return rows;
  });
  return res;
}
async function warehouse_query(id) {
  return new Promise((resolve, reject) => {
    let database_instance = new sqlite.Database("./db/projectdb.sl3");
    database_instance.serialize(() => {
      let fetch_full_order = `
      SELECT * FROM Warehouse WHERE PartID = '${id}';
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
  let parts = await fetch_parts();
  let warehouse_data = [];
  for (let i = 0; i < parts.length; ++i) {
    let whr = await warehouse_query(parts[i].number);
    let avail = 0;
    let set = false;
    if (whr.length == 1) {
      avail = whr[0].quantity;
      set = true;
    }
    warehouse_data.push({
      item: parts[i],
      qty: avail,
      set,
      img: parts[i].pictureURL
    });
  }
  return {
    parts: warehouse_data
  };
}
async function warehouse_update(id, qty) {
  let original = await warehouse_query(id);
  let add = original.length == 0;
  let query;
  if (add) {
    query = `INSERT INTO Warehouse (PartID, quantity) VALUES
      (${id}, ${qty});`;
  } else {
    query = `UPDATE Warehouse SET quantity = 
      ${qty} WHERE PartID = ${id};`;
  }
  return new Promise((resolve, reject) => {
    let database_instance = new sqlite.Database("./db/projectdb.sl3");
    database_instance.serialize(() => {
      database_instance.run(query, function() {
        resolve();
      });
    });
  });
}
const actions = {
  update: async (request) => {
    const form_data = await request.request.formData();
    const id = form_data.get("id");
    const adjust = form_data.get("qty");
    if (adjust < 0)
      redirect(301, "/warehouse?nonegative");
    await warehouse_update(id, adjust);
  }
};

var _page_server = /*#__PURE__*/Object.freeze({
  __proto__: null,
  actions: actions,
  load: load
});

const index = 20;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-Dwk90mjw.js')).default;
const server_id = "src/routes/warehouse/+page.server.js";
const imports = ["_app/immutable/nodes/20.Ew7N7lkk.js","_app/immutable/chunks/14.NBuK3kfd.js","_app/immutable/chunks/index.BkIfBQf8.js","_app/immutable/chunks/each.D6YF6ztN.js","_app/immutable/chunks/helpers.C7bBOv7j.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, _page_server as server, server_id, stylesheets };
//# sourceMappingURL=20-B3rq0pZd.js.map
