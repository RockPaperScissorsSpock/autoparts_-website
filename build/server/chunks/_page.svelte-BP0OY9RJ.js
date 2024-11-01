import { c as create_ssr_component, e as escape, f as add_attribute, d as each } from './ssr-BR1K4ql6.js';

const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let cost = [4, 2.99, 4.5, 5];
  let subtotal = 0;
  let shipping = 0;
  function calcSubtotal() {
    subtotal = 0;
    for (let i in data.post.items) {
      subtotal += data.post.quantities[i] * cost[i];
    }
    return subtotal;
  }
  function calcShipping() {
    shipping = 0;
    shipping++;
    return shipping;
  }
  calcSubtotal();
  calcShipping();
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `${$$result.head += `<!-- HEAD_svelte-1a6h76f_START -->${$$result.title = `<title>${escape(data.post.slug)}</title>`, ""}<meta name="description"${add_attribute("content", data.post.slug, 0)}><!-- HEAD_svelte-1a6h76f_END -->`, ""} <section><h1 class="py-4">Track Your Order, ${escape(data.post.name)}</h1> ${`${`<div class="position-relative m-4" data-svelte-h="svelte-110kdjk"><div class="progress" role="progressbar" aria-label="Progress" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" style="height: 1px;"><div class="progress-bar" style="width: 50%"></div></div> <button type="button" class="position-absolute top-0 start-0 translate-middle btn btn-sm btn-primary rounded-pill" style="width: 2rem; height:2rem;">1</button> <button type="button" class="position-absolute top-0 start-50 translate-middle btn btn-sm btn-primary rounded-pill" style="width: 2rem; height:2rem;">2</button> <button type="button" class="position-absolute top-0 start-100 translate-middle btn btn-sm btn-secondary rounded-pill" style="width: 2rem; height:2rem;">3</button></div>`}`} <div class="position-relative m-4 py-2" data-svelte-h="svelte-1fkph7n"><div class="position-absolute translate-middle">Processing</div> <div class="position-absolute start-50 translate-middle">Shipped</div> <div class="position-absolute start-100 translate-middle">Arrived</div></div></section> <section><h3 data-svelte-h="svelte-1zpy82">Items</h3> <ul class="list-group p-2">${each(data.post.items, (item, i) => {
    return `<li class="list-group-item"><div class="d-flex justify-content-between"><div class="p-1">${escape(item)} <p>Amount: ${escape(data.post.quantities[i])} </p></div>
          $${escape((cost[i] * data.post.quantities[i]).toFixed(2))}</div> </li>`;
  })}</ul> <div class="d-flex justify-content-end"><div class="d-flex justify-content-between" style="width: 300px;"><div class="p-2" data-svelte-h="svelte-s8924k">Subtotal:</div> <div class="p-2">$${escape(subtotal)}</div></div></div> <div class="d-flex justify-content-end"><div class="d-flex justify-content-between" style="width: 300px;"><div class="p-2" data-svelte-h="svelte-qep6du">Shipping:</div> <div class="p-2">$${escape(shipping)}</div></div></div> <div class="d-flex justify-content-end"><div class="d-flex justify-content-between" style="width: 300px;"><div class="p-2" data-svelte-h="svelte-1gml68o">Total:</div> <div class="p-2">$${escape(subtotal + shipping)}</div></div></div> </section>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-BP0OY9RJ.js.map
