import { c as create_ssr_component, d as each, e as escape, f as add_attribute } from './ssr-BR1K4ql6.js';
import { t as to_pretty } from './helpers-BeB4rNKG.js';

const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let yes = true;
  let subtotal = 0;
  let subweight = 0;
  data.items.forEach((product) => {
    subtotal += product.qty * product.item.price;
    subweight += product.qty * product.item.weight;
  });
  let last_weight_price = data.weights[0].price;
  let weight_index = data.weights[0].ID;
  data.weights.forEach((winfo) => {
    if (subweight >= winfo.weight_maximum) {
      last_weight_price = winfo.price;
      weight_index = winfo.ID;
    }
  });
  let total = subtotal + last_weight_price;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `${$$result.head += `<!-- HEAD_svelte-1c6eiiz_START -->${$$result.title = `<title>Checkout</title>`, ""}<meta name="description" content="Checkout"><!-- HEAD_svelte-1c6eiiz_END -->`, ""} <div class="container-md"><div class="container-fluid bg-white mt-3 mb-3" style="border-radius: 12px; padding-top: 10px; padding-bottom: 10px"><section><ul class="list-group p-2">${each(data.items, (product) => {
    return `<li class="list-group-item"><img height="60px" class="float-start"${add_attribute("src", product.img, 0)} alt="productimage"> <div class="d-flex justify-content-between"><div class="p-1"><strong>${escape(to_pretty(product.item.description))}</strong> <p>Quantity: ${escape(product.qty)} </p></div>
            $${escape((product.item.price * product.qty).toFixed(2))}</div> </li>`;
  })}</ul> <div class="d-flex justify-content-end"><div class="d-flex justify-content-between" style="width: 300px;"><div class="p-2" data-svelte-h="svelte-s8924k">Subtotal:</div> <div class="p-2">$${escape(subtotal.toFixed(2))}</div></div></div> <div class="d-flex justify-content-end"><div class="d-flex justify-content-between" style="width: 300px;"><div class="p-2" data-svelte-h="svelte-qep6du">Shipping:</div> <div class="p-2">$${escape(last_weight_price.toFixed(2))}</div></div></div> <div class="d-flex justify-content-end"><div class="d-flex justify-content-between" style="width: 300px;"><div class="p-2" data-svelte-h="svelte-1gml68o">Total:</div> <div class="p-2">$${escape(total.toFixed(2))}</div></div></div></section> <section><div class="container bd-gutter my-3 bd-layout"><form class="was-validated p-2" method="POST" action="?/ordersend"><input type="hidden" name="weight_class"${add_attribute("value", weight_index, 0)}> <input type="hidden" name="order_total"${add_attribute("value", total.toFixed(2), 0)}> <h2 data-svelte-h="svelte-985vw0">Shipping Address</h2> <div class="row" style="width: 600px;"><div class="col-md-6 mb-2" data-svelte-h="svelte-d7bqfw"><label for="deliveryFirstName" class="form-label">First Name*</label> <input type="text" class="form-control" name="deliveryFirstName" required></div> <div class="col-md-6 mb-2" data-svelte-h="svelte-nnx50i"><label for="deliveryLastName" class="form-label">Last Name*</label> <input type="text" class="form-control" name="deliveryLastName" required></div> <div class="col-md-4 mb-2" data-svelte-h="svelte-1w1x2ck"><label for="deliveryPhone" class="form-label">PhoneNumber*</label> <input type="text" class="form-control" name="deliveryPhone" required></div> <div class="col-md-8 mb-2" data-svelte-h="svelte-1jp63f7"><label for="deliveryEmail" class="form-label">Email*</label> <input type="text" class="form-control" name="deliveryEmail" required></div> <div class="col-md-12 mb-2" data-svelte-h="svelte-121zlge"><label for="deliveryAddress" class="form-label">Address*</label> <input type="text" class="form-control" name="deliveryAddress" required></div> <div class="col-md-12 mb-2" data-svelte-h="svelte-1e8bahp"><label for="deliveryAddress2" class="form-label">Address 2</label> <input type="text" class="form-control" name="deliveryAddress2"></div> <div class="col-md-6 mb-2" data-svelte-h="svelte-1002eu"><label for="deliveryCity" class="form-label">City*</label> <input type="text" class="form-control" name="deliveryCity" required></div> <div class="col-md-4 mb-2" data-svelte-h="svelte-t8p4b6"><label for="deliveryState" class="form-label">State*</label> <input type="text" class="form-control" name="deliveryState" required></div> <div class="col-md-2 mb-2" data-svelte-h="svelte-nkm4c2"><label for="deliveryZip" class="form-label">Zip*</label> <input type="text" class="form-control" name="deliveryZip" required></div> <h2 class="mt-2" data-svelte-h="svelte-1urm0lg">Billing Address</h2> <div class="col-12"><div class="form-check"><input class="form-check-input" type="checkbox" name="billing"${add_attribute("checked", yes, 1)}> <label class="form-check-label" for="billing" data-svelte-h="svelte-mammss">Same as Shipping Address</label></div></div> ${``}</div> <h2 class="mt-2" data-svelte-h="svelte-1o0pq3v">Payment Information</h2> <div class="mb-2" style="width: 500px;" data-svelte-h="svelte-3csvo8"><label for="cardName" class="form-label">Name on Card*</label> <input type="text" class="form-control" name="cardName" required></div> <div class="mb-2" style="width: 500px;" data-svelte-h="svelte-kc1ks1"><label for="cardNumber" class="form-label">Card Number*</label> <input type="text" class="form-control" name="cardNumber" required></div> <div class="row mb-2" style="width: 500px;" data-svelte-h="svelte-19b2uj9"><div class="col-md"><label for="cardDate" class="form-label">Valid Thru*</label> <input type="text" class="form-control" name="cardDate" required></div> <div class="col-md"><label for="cardcvv" class="form-label">CVV*</label> <input type="text" class="form-control" name="cardcvv" required></div></div> <div data-svelte-h="svelte-1t4iqwi"><button class="btn btn-primary mt-2" type="submit">Submit</button></div></form></div></section></div> </div>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-D4W0xOak.js.map
