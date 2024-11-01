import { s as set_connection } from './legacydb-C6Uji1Fu.js';
import 'mysql2/promise';

async function load() {
  let connection = await set_connection();
  try {
    let results = await connection.query("SELECT * FROM parts").then(([rows, fields]) => {
      return rows;
    });
    return {
      product_listing: results
    };
  } catch (error) {
    console.error("Unable to perform query!");
    console.log(error);
    return error;
  }
}
const actions = {
  default: async (request) => {
    const form_data = await request.request.formData();
    const filter = form_data.get("filter");
    return {
      query: filter
    };
  }
};

var _page_server = /*#__PURE__*/Object.freeze({
  __proto__: null,
  actions: actions,
  load: load
});

const index = 2;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-CNDaQJ1B.js')).default;
const server_id = "src/routes/+page.server.js";
const imports = ["_app/immutable/nodes/2.BESGR4g5.js","_app/immutable/chunks/14.NBuK3kfd.js","_app/immutable/chunks/index.BkIfBQf8.js","_app/immutable/chunks/each.D6YF6ztN.js","_app/immutable/chunks/helpers.C7bBOv7j.js","_app/immutable/chunks/entry.Dlt0aQ84.js"];
const stylesheets = ["_app/immutable/assets/2.CdjkGvAy.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server as server, server_id, stylesheets };
//# sourceMappingURL=2-nTRtQ7Iy.js.map
