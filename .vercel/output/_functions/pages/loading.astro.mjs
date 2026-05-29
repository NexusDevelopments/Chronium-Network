/* empty css                                  */
import { c as createComponent, r as renderComponent, a as renderScript, b as renderTemplate } from '../chunks/astro/server_BXYMPdlv.mjs';
import { $ as $$Loading$1 } from '../chunks/Loading_75EEizIu.mjs';
import { $ as $$Layout } from '../chunks/Layout_Cx6AcNfo.mjs';
export { r as renderers } from '../chunks/_@astro-renderers_CoKgzUc8.mjs';

const $$Loading = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Loading page...", "noHeader": "true" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "LoadingComponent", $$Loading$1, {})} ` })} ${renderScript($$result, "/workspaces/Chronium-Network/src/pages/loading.astro?astro&type=script&index=0&lang.ts")}`;
}, "/workspaces/Chronium-Network/src/pages/loading.astro", void 0);

const $$file = "/workspaces/Chronium-Network/src/pages/loading.astro";
const $$url = "/loading";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Loading,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
