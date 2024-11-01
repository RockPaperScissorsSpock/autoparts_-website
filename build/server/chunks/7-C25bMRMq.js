import { e as error } from './index-CstSBD0C.js';

const orders = [
  {
    slug: "123",
    name: "Chris Dejong",
    items: ["item1", "item3"],
    quantities: ["3", "5"]
  },
  {
    slug: "69",
    name: "Richard EnBalls",
    items: ["item1", "item2", "item3"],
    quantities: ["2", "1", "5"]
  },
  {
    slug: "133",
    name: "Christopher",
    items: ["item1", "item2"],
    quantities: ["1", "4"]
  },
  {
    slug: "321",
    name: "Jason",
    items: ["item3", "item4"],
    quantities: ["8", "2"]
  }
];
function load({ params }) {
  console.log(params);
  const post = orders.find((inst) => {
    return inst.slug === params.status;
  });
  if (post == null)
    throw error(404);
  return {
    post
  };
}

var _page_server = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 7;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-BP0OY9RJ.js')).default;
const server_id = "src/routes/checkout/[status]/+page.server.js";
const imports = ["_app/immutable/nodes/7.DraCp9Cy.js","_app/immutable/chunks/14.NBuK3kfd.js","_app/immutable/chunks/index.BkIfBQf8.js","_app/immutable/chunks/each.D6YF6ztN.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, _page_server as server, server_id, stylesheets };
//# sourceMappingURL=7-C25bMRMq.js.map
