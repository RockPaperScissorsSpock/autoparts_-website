import { c as create_ssr_component, d as each, e as escape, f as add_attribute } from './ssr-BR1K4ql6.js';
import { t as to_pretty } from './helpers-BeB4rNKG.js';

const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let subtotal = 0;
  let subweight = 0;
  let last_weight_price = 0;
  let total = 0;
  if (!data.is_empty) {
    data.items.forEach((product) => {
      subtotal += product.qty * product.item.price;
      subweight += product.qty * product.item.weight;
    });
    last_weight_price = data.weights[0].price;
    data.weights[0].ID;
    data.weights.forEach((winfo) => {
      if (subweight >= winfo.weight_maximum) {
        last_weight_price = winfo.price;
        winfo.ID;
      }
    });
    total = subtotal + last_weight_price;
  }
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `${$$result.head += `<!-- HEAD_svelte-175z1p7_START -->${$$result.title = `<title>Cart</title>`, ""}<meta name="description" content="Cart"><!-- HEAD_svelte-175z1p7_END -->`, ""} <div class="container-md"><div class="container-fluid bg-white mt-3 mb-3" style="border-radius: 12px; padding-top: 10px; padding-bottom: 10px"><section><ul class="list-group p-2">${data.is_empty != true ? `${each(data.items, (product) => {
    return `<li class="list-group-item"><div class="d-flex justify-content-between"><div class="p-2"><img height="60px" class="float-start"${add_attribute("src", product.img, 0)} alt="productimage"> <strong>${escape(to_pretty(product.item.description))}</strong><br> <span>Weight: ${escape(product.item.weight)} lbs.</span> <form method="POST" action="?/update"><div class="input-group"><input type="number" min="0" class="form-control" placeholder="Quantity"${add_attribute("value", product.qty, 0)} name="qty"> <button class="btn btn-secondary" type="cart" name="item"${add_attribute("value", product.item.number, 0)} id="button-addon1">Update</button></div> </form></div> <div><strong data-svelte-h="svelte-1x95slo">Base Price:</strong> $${escape(product.item.price)}<br> <strong data-svelte-h="svelte-npkhnq">Ext. Price:</strong> $${escape((product.item.price * product.qty).toFixed(2))} </div></div> </li>`;
  })}` : `<h3 data-svelte-h="svelte-oqndz">Your cart is empty!</h3>`}</ul> <div class="d-flex justify-content-end"><div class="d-flex justify-content-between" style="width: 300px;"><div><div class="p-2">Subtotal: $${escape(subtotal.toFixed(2))}</div> <div class="p-2">Shipping: $${escape(last_weight_price.toFixed(2))}</div> <div class="p-2"><strong data-svelte-h="svelte-1h3ll1s">Total:</strong> $${escape(total.toFixed(2))}</div></div></div></div> <div class="d-flex justify-content-end p-2" data-svelte-h="svelte-1s9paf5"><a class="btn btn-secondary" href="../checkout" role="button">Checkout</a></div></section></div> </div>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-BGkk8MQ3.js.map
