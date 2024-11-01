import { c as create_ssr_component, f as add_attribute, e as escape } from './ssr-BR1K4ql6.js';
import { t as to_pretty } from './helpers-BeB4rNKG.js';

const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `${$$result.head += `<!-- HEAD_svelte-qikx7b_START -->${$$result.title = `<title>Product Listing</title>`, ""}<meta name="description" content="Product listing"><!-- HEAD_svelte-qikx7b_END -->`, ""} <div class="container-md mt-3"><div class="container-fluid bg-white mt-3 mb-3" style="border-radius: 12px; padding-top: 10px; padding-bottom: 10px"><section><div class="row"><div class="col-3"><img${add_attribute("src", data.product_listing.pictureURL, 0)} class="object-fit-contain border rounded" width="100%" alt="..."></div> <div class="col-9 text-start"><h1>${escape(to_pretty(data.product_listing.description))}</h1> <strong data-svelte-h="svelte-1b5ssm9">Price:</strong> $${escape(data.product_listing.price)} <br> <strong data-svelte-h="svelte-1txq27s">Weight:</strong> $${escape(data.product_listing.weight)} <br> <strong data-svelte-h="svelte-x23e7y">Product Identifier:</strong> ${escape(data.product_listing.number)} <br></div></div> <div class="d-flex justify-content-end p-2"><form method="POST"><div class="input-group mb-3"><input type="number" min="1" class="form-control" placeholder="Quantity" value="1" name="qty"> <button class="btn btn-secondary" type="cart" name="item"${add_attribute("value", data.product_listing.number, 0)} id="button-addon1">Add to Cart</button></div></form></div></section></div> </div>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-BSCJ1UVe.js.map
