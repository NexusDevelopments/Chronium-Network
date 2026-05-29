/* empty css                                        */
import { c as createComponent, m as maybeRenderHead, r as renderComponent, a as renderScript, b as renderTemplate, d as createAstro } from '../../../chunks/astro/server_BXYMPdlv.mjs';
import { g as getLangFromUrl, $ as $$Layout, u as useTranslations } from '../../../chunks/Layout_Cx6AcNfo.mjs';
import { $ as $$SettingsLayout, a as $$SettingsSection } from '../../../chunks/SettingsSection_BrKAWws_.mjs';
import { M as MARKETPLACE_ENABLED } from '../../../chunks/client_5pRn_Q30.mjs';
export { r as renderers } from '../../../chunks/_@astro-renderers_CoKgzUc8.mjs';

const $$InstalledThemes = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div id="parent" class="flex flex-row flex-wrap gap-4 items-center font-roboto justify-center"> <div id="main-theme" class="rounded-3xl bg-navbar-color w-64 flex flex-col cursor-pointer"> <div class="w-full"> <img src="/classic_theme.png" alt="Classic chronium" class="aspect-[16/9] rounded-t-3xl" loading="eager"> </div> <div class="h-2/6 text-center content-center p-3 font-semibold items-center flex flex-col text-2xl">
Classic Chronium
</div> </div> </div> <div class="w-0 h-0 visibility-none hidden"> ${renderComponent($$result, "asset-loader", "asset-loader", {})} </div> ${renderScript($$result, "/workspaces/Chronium-Network/src/components/catalog/InstalledThemes.astro?astro&type=script&index=0&lang.ts")}`;
}, "/workspaces/Chronium-Network/src/components/catalog/InstalledThemes.astro", void 0);

const $$Astro = createAstro("http://localhost:4321");
const $$Appearance = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Appearance;
  const lang = getLangFromUrl(Astro2.url);
  const t = useTranslations(lang);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Settings" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "SettingsLayout", $$SettingsLayout, { "title": t("settings.appearance") }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "SettingsSection", $$SettingsSection, { "title": "Theme", "subtitle": "Choose a theme so your eyes don't hate us." }, { "default": ($$result4) => renderTemplate` ${maybeRenderHead()}<div class="flex flex-row flex-wrap gap-4 items-center font-roboto"> <div class="justify-center flex flex-row gap-6 flex-wrap md:justify-normal"> ${renderComponent($$result4, "InstalledThemes", $$InstalledThemes, {})} ${MARKETPLACE_ENABLED} </div> <div class="text-3xl font-roboto font-bold text-text-color"></div> </div> ` })} ` })} ` })}`;
}, "/workspaces/Chronium-Network/src/pages/[lang]/settings/appearance.astro", void 0);

const $$file = "/workspaces/Chronium-Network/src/pages/[lang]/settings/appearance.astro";
const $$url = "/[lang]/settings/appearance";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Appearance,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
