/* empty css                          */
import { c as createComponent, m as maybeRenderHead, a as renderScript, b as renderTemplate } from './astro/server_BXYMPdlv.mjs';

const $$Pagination = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<input class="w-10 h-8 bg-navbar-color items-center text-center content-center text-text-color rounded-md [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none" type="number" id="pageinationInput" placeholder="..."> ${renderScript($$result, "/workspaces/Chronium-Network/src/pages/[lang]/catalog/pagination.astro?astro&type=script&index=0&lang.ts")}`;
}, "/workspaces/Chronium-Network/src/pages/[lang]/catalog/pagination.astro", void 0);

const $$file = "/workspaces/Chronium-Network/src/pages/[lang]/catalog/pagination.astro";
const $$url = "/[lang]/catalog/pagination";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Pagination,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Pagination as $, _page as _ };
