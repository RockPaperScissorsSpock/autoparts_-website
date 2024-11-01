import { c as create_ssr_component, d as each, e as escape } from './ssr-BR1K4ql6.js';
import { u as unix_to_time } from './helpers-BeB4rNKG.js';
import './client-CjdeEz1m.js';
import './exports-DuWZopOC.js';

const css = {
  code: ".table-hover.svelte-y7k97z tbody tr.svelte-y7k97z{cursor:pointer\n    }.colsort.svelte-y7k97z.svelte-y7k97z{cursor:pointer;text-decoration:underline}.colsort.svelte-y7k97z.svelte-y7k97z:hover{color:gray;transition:275ms ease}",
  map: null
};
function get_status_value(order_detail) {
  let order_status_value = 0;
  if (order_detail.order_status == "Processing")
    order_status_value = 0;
  else if (order_detail.order_status == "Completed")
    order_status_value = 1;
  else
    order_status_value = 2;
  return order_status_value;
}
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `<div class="container-md mt-3"><div class="container-fluid bg-white mb-3" style="border-radius: 12px; padding-top: 10px; padding-bottom: 10px"><h3 data-svelte-h="svelte-14hw39p">Order Detail Inspection</h3><br> <table id="sortable" class="table table-hover svelte-y7k97z"><thead><tr class="svelte-y7k97z"><th class="colsort svelte-y7k97z" scope="col" data-svelte-h="svelte-1qh2naw">Customer ID</th> <th scope="col" data-svelte-h="svelte-1lwjm0y">Transaction ID</th> <th scope="col" data-svelte-h="svelte-f7d6f9">First</th> <th scope="col" data-svelte-h="svelte-k5q5k7">Last</th> <th class="colsort svelte-y7k97z" scope="col" data-svelte-h="svelte-1ajboay">Total Sale</th> <th class="colsort svelte-y7k97z" scope="col" data-svelte-h="svelte-1eicay6">Order Status</th> <th class="colsort svelte-y7k97z" hidden scope="col" data-svelte-h="svelte-1sx6gbt">Status Value</th> <th class="colsort svelte-y7k97z" hidden scope="col" data-svelte-h="svelte-qhunzi">Timestamp</th> <th class="colsort svelte-y7k97z" scope="col" data-svelte-h="svelte-1r436ak">Date</th> <th scope="col" data-svelte-h="svelte-t6xti2">Address Detail</th></tr></thead> <tbody>${each(data.orders, (order_detail) => {
    return `<tr class="svelte-y7k97z"><td>${escape(order_detail.customer_ID)}</td> <td>${escape(order_detail.transaction_ID)}</td> <td>${escape(order_detail.first_name)}</td> <td>${escape(order_detail.last_name)}</td> <td>${escape(order_detail.total)}</td> <td>${escape(order_detail.order_status)}</td> <td hidden>${escape(get_status_value(order_detail))}</td> <td hidden>${escape(order_detail.DateAndTime)}</td> <td>${escape(unix_to_time(order_detail.DateAndTime))}</td> <td>${escape(order_detail.Address_line1)} <br> ${escape(order_detail.Address_line2)} <br> ${escape(order_detail.country)}, ${escape(order_detail.city)}, ${escape(order_detail.postal_code)} <br></td> </tr>`;
  })}</tbody></table></div> </div>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-BDiHFxR7.js.map
