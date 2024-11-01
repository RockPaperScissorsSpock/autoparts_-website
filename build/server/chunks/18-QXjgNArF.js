import 'nodemailer';

async function load() {
  const test_data = {
    hello: "world"
  };
  return { data: test_data };
}

var _page_server = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 18;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-B3MqkCbD.js')).default;
const server_id = "src/routes/test/mail/+page.server.js";
const imports = ["_app/immutable/nodes/18.BMNdt_26.js","_app/immutable/chunks/14.NBuK3kfd.js","_app/immutable/chunks/index.BkIfBQf8.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, _page_server as server, server_id, stylesheets };
//# sourceMappingURL=18-QXjgNArF.js.map
