import { a as authorize } from './creditprocessor-tKPNl1OJ.js';
import 'axios';
import 'uuid';

async function load() {
  let name = "Richard Enballs";
  let credit_card_number = "6011 1234 4321 1234";
  let expire = "12/2027";
  let amount = "21.69";
  let result = await authorize(name, credit_card_number, expire, amount);
  return { data: result.data };
}

var _page_server = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 16;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-BFfgwdnX.js')).default;
const server_id = "src/routes/test/ccprocessor/+page.server.js";
const imports = ["_app/immutable/nodes/16.BMNdt_26.js","_app/immutable/chunks/14.NBuK3kfd.js","_app/immutable/chunks/index.BkIfBQf8.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, _page_server as server, server_id, stylesheets };
//# sourceMappingURL=16-FnwJpBL4.js.map
