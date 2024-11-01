import { c as create_ssr_component, d as each, e as escape, f as add_attribute } from './ssr-BR1K4ql6.js';
import { t as to_pretty } from './helpers-BeB4rNKG.js';
import './client-CjdeEz1m.js';
import './exports-DuWZopOC.js';

const css = {
  code: ".row.svelte-ck19df{margin-top:20px;margin-bottom:20px}",
  map: null
};
let item_count = 12;
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let { form } = $$props;
  let product_list = [];
  for (let i = 0; i < data.product_listing.length; ++i) {
    if (form && form.query != "") {
      if (isNaN(form.query)) {
        if (data.product_listing[i].description.toLowerCase().includes(form.query.toLowerCase())) {
          product_list.push(data.product_listing[i]);
        }
      } else {
        if (data.product_listing[i].number == form.query) {
          product_list.push(data.product_listing[i]);
        }
      }
    } else {
      product_list.push(data.product_listing[i]);
    }
  }
  let total_count = product_list.length;
  let current_page = 0;
  let max_page = Math.floor(total_count / item_count) + 1;
  let selection;
  function set_page(number) {
    current_page = number;
    let start = current_page * item_count;
    let end = current_page * item_count + item_count;
    selection = product_list.slice(start, end);
  }
  set_page(0);
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  if ($$props.form === void 0 && $$bindings.form && form !== void 0)
    $$bindings.form(form);
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-i7z6tq_START -->${$$result.title = `<title>Home</title>`, ""}<meta name="description" content="Homepage"><!-- HEAD_svelte-i7z6tq_END -->`, ""} <div id="carouselExample" class="carousel slide" data-bs-ride="carousel" data-svelte-h="svelte-9v8hum"><div class="carousel-inner"><div class="carousel-item active"><img style="object-fit: cover; width: 100%" height="650px" src="https://hips.hearstapps.com/hmg-prod/images/2025-porsche-911-spied-front-658200b0a3a5d.jpg" class="d-block" alt="..."></div> <div class="carousel-item"><img style="object-fit: cover; width: 100%" height="650px" src="https://hips.hearstapps.com/hmg-prod/images/2022-ford-mustang-shelby-gt500-02-1636734552.jpg" class="d-block" alt="..."></div> <div class="carousel-item"><img style="object-fit: cover; width: 100%" height="650px" src="https://upload.wikimedia.org/wikipedia/commons/3/3d/2018-Chevrolet-Camaro-ZL1-1LE-001-01.jpg" class="d-block" alt="..."></div></div> <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev"><span class="carousel-control-prev-icon" aria-hidden="true"></span> <span class="visually-hidden">Previous</span></button> <button id="prodtop" class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next"><span class="carousel-control-next-icon" aria-hidden="true"></span> <span class="visually-hidden">Next</span></button></div> <div class="container-md"><div class="container-fluid bg-white mt-3 mb-3" style="border-radius: 12px; padding-top: 10px; padding-bottom: 10px"><nav><ul class="pagination">${current_page == 0 ? `<li class="page-item disabled" data-svelte-h="svelte-krvhcs"><a class="page-link" href="#prodtop">Previous</a></li>` : `<li class="page-item"><a class="page-link" href="#prodtop" data-svelte-h="svelte-vhl64c">Previous</a></li>`} ${each({ length: max_page }, (_, i) => {
    return `${i == current_page ? `<li class="page-item active"><a class="page-link" href="#prodtop">${escape(i + 1)}</a> </li>` : `<li class="page-item"><a class="page-link" href="#prodtop">${escape(i + 1)}</a> </li>`}`;
  })} ${current_page == max_page - 1 ? `<li class="page-item disabled" data-svelte-h="svelte-18prmv0"><a class="page-link" href="#prodtop">Next</a></li>` : `<li class="page-item"><a class="page-link" href="#prodtop" data-svelte-h="svelte-2kh0ye">Next</a></li>`}</ul></nav> <div class="row row-cols-1 row-cols-md-3 g-4 svelte-ck19df">${each(selection, (product) => {
    return `<div class="col"><div class="card"><img${add_attribute("src", product.pictureURL, 0)} class="card-img-top" alt="..."> <div class="card-body"><h5 class="card-title"><a class="link-underline-opacity-0" href="${"/product/" + escape(product.number, true)}">${escape(to_pretty(product.description))}</a></h5> <p><strong data-svelte-h="svelte-984f5l">Product Weight:</strong> ${escape(product.weight)} lbs.<br> <strong data-svelte-h="svelte-a82zsc">Product Price:</strong> $${escape(product.price)}</p> </div></div> </div>`;
  })}</div> <nav><ul class="pagination">${current_page == 0 ? `<li class="page-item disabled" data-svelte-h="svelte-krvhcs"><a class="page-link" href="#prodtop">Previous</a></li>` : `<li class="page-item"><a class="page-link" href="#prodtop" data-svelte-h="svelte-vhl64c">Previous</a></li>`} ${each({ length: max_page }, (_, i) => {
    return `${i == current_page ? `<li class="page-item active"><a class="page-link" href="#prodtop">${escape(i + 1)}</a> </li>` : `<li class="page-item"><a class="page-link" href="#prodtop">${escape(i + 1)}</a> </li>`}`;
  })} ${current_page == max_page - 1 ? `<li class="page-item disabled" data-svelte-h="svelte-18prmv0"><a class="page-link" href="#prodtop">Next</a></li>` : `<li class="page-item"><a class="page-link" href="#prodtop" data-svelte-h="svelte-2kh0ye">Next</a></li>`}</ul></nav></div> </div>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-CNDaQJ1B.js.map
