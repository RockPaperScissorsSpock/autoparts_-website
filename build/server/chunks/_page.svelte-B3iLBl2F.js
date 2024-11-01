import { c as create_ssr_component, e as escape } from './ssr-BR1K4ql6.js';

const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `${$$result.head += `<!-- HEAD_svelte-15osji8_START -->${$$result.title = `<title>Home</title>`, ""}<meta name="description" content="Homepage"><!-- HEAD_svelte-15osji8_END -->`, ""} <section><p data-svelte-h="svelte-1mkvvq6">This is the PDF page.</p> <p>${escape(JSON.stringify(data.data))}</p> </section>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-B3iLBl2F.js.map
