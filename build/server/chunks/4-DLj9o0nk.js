import { r as redirect } from './index-CstSBD0C.js';
import sqlite3 from 'sqlite3';
import 'mysql2/promise';

const sqlite = sqlite3.verbose();
function remove_weight_bracket(id) {
  return new Promise((resolve, reject) => {
    let database_instance = new sqlite.Database("./db/projectdb.sl3");
    database_instance.serialize(() => {
      let statement = `DELETE FROM WeightTable WHERE ID='${id}';`;
      console.log(statement);
      database_instance.run(statement, (error) => {
        if (error)
          console.log(error);
        resolve();
      });
    });
  });
}
async function load({ params }) {
  let remove_id = params.remove;
  console.log(remove_id);
  await remove_weight_bracket(remove_id);
  redirect(301, "/");
}

var _page_server = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 4;
const server_id = "src/routes/administration/[remove]/+page.server.js";
const imports = [];
const stylesheets = [];
const fonts = [];

export { fonts, imports, index, _page_server as server, server_id, stylesheets };
//# sourceMappingURL=4-DLj9o0nk.js.map
