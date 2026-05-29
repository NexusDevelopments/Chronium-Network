/* empty css                                  */
import { c as createComponent, r as renderComponent, a as renderScript, m as maybeRenderHead, b as renderTemplate } from '../chunks/astro/server_BXYMPdlv.mjs';
import { $ as $$Loading } from '../chunks/Loading_75EEizIu.mjs';
import { $ as $$Layout } from '../chunks/Layout_Cx6AcNfo.mjs';
export { r as renderers } from '../chunks/_@astro-renderers_CoKgzUc8.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "", "noHeader": "true" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Loading", $$Loading, {})} ` })} ${renderScript($$result, "/workspaces/Chronium-Network/src/pages/index.astro?astro&type=script&index=0&lang.ts")} ${maybeRenderHead()}<noscript>
JavaScript is required to run this app.
</noscript>`;
}, "/workspaces/Chronium-Network/src/pages/index.astro", void 0);

const $$file = "/workspaces/Chronium-Network/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
