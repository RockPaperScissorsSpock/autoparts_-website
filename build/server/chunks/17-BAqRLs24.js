import { s as set_connection } from './legacydb-C6Uji1Fu.js';
import 'mysql2/promise';

async function load() {
  let connection = await set_connection();
  try {
    let results = await connection.query("SELECT * FROM parts").then(([rows, fields]) => {
      return rows;
    });
    return {
      data: results
    };
  } catch (error) {
    console.error("Unable to perform query!");
    console.log(error);
    return error;
  }
}

var _page_server = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 17;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-CpI41Nqh.js')).default;
const server_id = "src/routes/test/legacy/+page.server.js";
const imports = ["_app/immutable/nodes/17.DGvu9QwH.js","_app/immutable/chunks/14.NBuK3kfd.js","_app/immutable/chunks/index.BkIfBQf8.js","_app/immutable/chunks/each.D6YF6ztN.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, _page_server as server, server_id, stylesheets };
//# sourceMappingURL=17-BAqRLs24.js.map
