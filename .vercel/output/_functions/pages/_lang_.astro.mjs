/* empty css                                  */
import { c as createComponent, m as maybeRenderHead, b as renderTemplate, d as createAstro, r as renderComponent, a as renderScript, e as addAttribute } from '../chunks/astro/server_BXYMPdlv.mjs';
import { g as getLangFromUrl, $ as $$Layout, u as useTranslations } from '../chunks/Layout_Cx6AcNfo.mjs';
import { V as VERSION } from '../chunks/client_5pRn_Q30.mjs';
export { r as renderers } from '../chunks/_@astro-renderers_CoKgzUc8.mjs';

const $$Logo = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="256" height="256" role="img" aria-labelledby="chronium-logo-title"> <title id="chronium-logo-title">Chronium Logo</title> <rect width="256" height="256" rx="56" fill="#000000"></rect> <circle cx="128" cy="128" r="84" fill="none" stroke="#FFFFFF" stroke-width="12" opacity="0.28"></circle> <path d="M170 83c-11-9-24-14-42-14-33 0-59 26-59 59s26 59 59 59c17 0 31-5 42-14" fill="none" stroke="#FFFFFF" stroke-width="16" stroke-linecap="round"></path> <path d="M144 108l38 20-38 20" fill="none" stroke="#FFFFFF" stroke-width="13" stroke-linecap="round" stroke-linejoin="round"></path> <circle cx="192" cy="96" r="8" fill="#FFFFFF"></circle> <circle cx="60" cy="166" r="6" fill="#FFFFFF" opacity="0.72"></circle> </svg>`;
}, "/workspaces/Chronium-Network/src/components/Logo.astro", void 0);

const $$Astro = createAstro("http://localhost:4321");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const lang = getLangFromUrl(Astro2.url);
  const t = useTranslations(lang);
  let currentYear = getCurrentYear();
  function getCurrentYear() {
    return (/* @__PURE__ */ new Date()).getFullYear();
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Home" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="flex flex-wrap mt-16 justify-center content-center w-full bg-primary fixed inset-0 h-[calc(100%-4rem)] z-0 flex-col items-center"> <div class="w-full flex flex-col justify-center items-center content-center h-2/4"> <div class="flex flex-row items-center mb-8"> <div class="h-32 w-32 fill-navbar-text-color"> ${renderComponent($$result2, "Logo", $$Logo, {})} </div> <h1 class="font-roboto whitespace-nowrap text-navbar-text-color sm:visible text-5xl sm:text-7xl roboto">
Chronium
</h1> </div> <input id="chronium-input" class="transition-all duration-300 font-roboto h-14 rounded-t-2xl w-10/12 rounded-b-2xl border border-input-border-color bg-input p-2 text-center text-xl text-input-text placeholder:text-input-text roboto focus:outline-none md:w-3/12"${addAttribute(t("home.placeholder"), "placeholder")}> <div id="omnibox" class="hidden p-1 transition-all duration-300 flex flex-col w-10/12 md:w-3/12 h-full flex-grow bg-input text-center items-center rounded-b-2xl border-input-border-color border-b border-r border-l"></div> </div> <iframe id="neb-iframe" class="hidden z-100 w-full h-full absolute top-0 bottom-0 bg-primary" src="/loading"></iframe> <div id="version" class="flex flex-row w-full absolute bottom-4 pr-4 pl-4 text-text-color h-6 justify-between items-center font-roboto"> <p>Version: ${VERSION}</p> <div class="hidden md:flex gap-2 flex-grow ml-16 justify-center items-center"> <p> Having problems? </p> <button id="reset" class="underline underline-offset-4 hover:decoration-input-border-color active:decoration-input-text">
Click here to reset your instance
</button> </div> <p>&copy; Chronium Network ${currentYear}</p> </div> </div> ` })} ${renderScript($$result, "/workspaces/Chronium-Network/src/pages/[lang]/index.astro?astro&type=script&index=0&lang.ts")}`;
}, "/workspaces/Chronium-Network/src/pages/[lang]/index.astro", void 0);

const $$file = "/workspaces/Chronium-Network/src/pages/[lang]/index.astro";
const $$url = "/[lang]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
