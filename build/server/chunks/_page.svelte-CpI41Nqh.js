import { c as create_ssr_component, d as each, e as escape } from './ssr-BR1K4ql6.js';

const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `${$$result.head += `<!-- HEAD_svelte-15osji8_START -->${$$result.title = `<title>Home</title>`, ""}<meta name="description" content="Homepage"><!-- HEAD_svelte-15osji8_END -->`, ""} <section>${each(data.data, (row) => {
    return `<p>${escape(JSON.stringify(row))}</p>`;
  })} </section>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-CpI41Nqh.js.map
