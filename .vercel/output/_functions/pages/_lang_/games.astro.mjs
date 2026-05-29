/* empty css                                     */
import { c as createComponent, r as renderComponent, a as renderScript, b as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_BXYMPdlv.mjs';
import { $ as $$Layout } from '../../chunks/Layout_Cx6AcNfo.mjs';
export { r as renderers } from '../../chunks/_@astro-renderers_CoKgzUc8.mjs';

const $$Games = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Chango Games" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<iframe id="chango" class="w-full h-full" src="/loading"></iframe> ` })} ${renderScript($$result, "/workspaces/Chronium-Network/src/pages/[lang]/games.astro?astro&type=script&index=0&lang.ts")}`;
}, "/workspaces/Chronium-Network/src/pages/[lang]/games.astro", void 0);

const $$file = "/workspaces/Chronium-Network/src/pages/[lang]/games.astro";
const $$url = "/[lang]/games";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Games,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
