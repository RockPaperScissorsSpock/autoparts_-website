import { c as create_ssr_component, d as each, f as add_attribute, e as escape } from './ssr-BR1K4ql6.js';
import { t as to_pretty } from './helpers-BeB4rNKG.js';

const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `${$$result.head += `<!-- HEAD_svelte-naigqb_START -->${$$result.title = `<title>Warehouse Portal</title>`, ""}<!-- HEAD_svelte-naigqb_END -->`, ""} <div class="container-md"><div class="container-fluid bg-white mt-3 mb-3" style="border-radius: 12px; padding-top: 10px; padding-bottom: 10px"><h2 style="text-center" data-svelte-h="svelte-116fmwf">Warehouse Management</h2> <table class="table table-striped table-hover"><thead data-svelte-h="svelte-1n8ox7b"><tr><th scope="col"></th> <th scope="col">Part Number</th> <th scope="col">Part Name</th> <th scope="col">Database Set</th> <th scope="col">Current Quantity</th> <th scope="col">Adjust</th></tr></thead> <tbody>${each(data.parts, (part) => {
    return `<tr><td><img height="40px" class="float-start img-thumbnail"${add_attribute("src", part.img, 0)} alt="productimage"></td> <td># ${escape(part.item.number)}</td> <td>${escape(to_pretty(part.item.description))}</td> <td>${escape(to_pretty(`${part.set}`))}</td> <td>${escape(part.qty)}</td> <td><form method="POST" action="?/update"><div class="input-group mb-3"><input type="text" class="form-control"${add_attribute("value", part.qty, 0)} name="qty"${add_attribute("placeholder", part.qty, 0)}> <input type="hidden" name="id"${add_attribute("value", part.item.number, 0)}> <button class="btn btn-outline-secondary" type="submit" id="button-addon2" data-svelte-h="svelte-1h9so6k">Adjust</button></div> </form></td> </tr>`;
  })}</tbody></table></div> </div>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-Dwk90mjw.js.map
