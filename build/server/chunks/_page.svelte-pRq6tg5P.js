import { c as create_ssr_component, d as each, v as validate_component, e as escape, f as add_attribute } from './ssr-BR1K4ql6.js';
import './client-CjdeEz1m.js';
import './exports-DuWZopOC.js';

const Weightrow = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { weight } = $$props;
  let { price } = $$props;
  let { id } = $$props;
  if ($$props.weight === void 0 && $$bindings.weight && weight !== void 0)
    $$bindings.weight(weight);
  if ($$props.price === void 0 && $$bindings.price && price !== void 0)
    $$bindings.price(price);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  return `<div class="input-group mb-2"><span class="input-group-text">Bracket ID #${escape(id)}</span> <span class="input-group-text" data-svelte-h="svelte-t4uakm">lbs.</span> <input type="number" name="weight"${add_attribute("value", weight, 0)} class="form-control"> <span class="input-group-text" data-svelte-h="svelte-12pyh7n">$</span> <input type="text" name="price"${add_attribute("value", price, 0)} class="form-control"> <button class="btn btn-outline-secondary" type="button" data-svelte-h="svelte-1igrlo3">Remove</button></div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let brackets = data.weight_table;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `${$$result.head += `<!-- HEAD_svelte-1woxml4_START -->${$$result.title = `<title>Administration Portal</title>`, ""}<!-- HEAD_svelte-1woxml4_END -->`, ""} <div class="container-md"><div class="container-fluid bg-white mt-3 mb-3" style="border-radius: 12px; padding-top: 10px; padding-bottom: 10px"><h2 style="text-center" data-svelte-h="svelte-19u92hz">Shipping Pricing Administration</h2><br> <button class="btn btn-primary mb-2" data-svelte-h="svelte-11l9f7j">Insert Row</button> <form method="POST" action="?/updateWeights">${each(brackets, (weight) => {
    return `${validate_component(Weightrow, "WeightRow").$$render(
      $$result,
      {
        price: weight.price,
        weight: weight.weight,
        ",": true,
        id: weight.id
      },
      {},
      {}
    )}`;
  })} <button class="btn btn-primary" data-svelte-h="svelte-ec7u1f">Submit Changes</button></form></div> </div>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-pRq6tg5P.js.map
