/* empty css                                        */
import { d as createAstro, c as createComponent, r as renderComponent, a as renderScript, b as renderTemplate, m as maybeRenderHead } from '../../../chunks/astro/server_BXYMPdlv.mjs';
import { $ as $$SettingsCard } from '../../../chunks/SettingsCard_BKqb5Sg7.mjs';
import { g as getLangFromUrl, $ as $$Layout, u as useTranslations } from '../../../chunks/Layout_Cx6AcNfo.mjs';
import { $ as $$SettingsLayout, a as $$SettingsSection } from '../../../chunks/SettingsSection_BrKAWws_.mjs';
export { r as renderers } from '../../../chunks/_@astro-renderers_CoKgzUc8.mjs';

const $$Astro = createAstro("http://localhost:4321");
const $$Tab = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Tab;
  const lang = getLangFromUrl(Astro2.url);
  const t = useTranslations(lang);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Settings" }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "SettingsLayout", $$SettingsLayout, { "title": t("settings.tab") }, { "default": async ($$result3) => renderTemplate` ${renderComponent($$result3, "SettingsSection", $$SettingsSection, { "title": "Tab", "subtitle": "Customize and cloak your tab." }, { "default": async ($$result4) => renderTemplate` ${maybeRenderHead()}<div class="w-full h-full flex flex-col items-center justify-center md:flex-row md:items-start md:justify-start gap-4"> ${renderComponent($$result4, "SettingsCard", $$SettingsCard, { "title": "Cloaking", "description": "Choose how your tab looks", "input": { input: false }, "button": { name: "Cloak!", id: "cloak" }, "select": { select: true, name: "cloakselect", options: [
    { name: "Default", value: "reset", disabled: false },
    { name: "Google", value: "google", disabled: false },
    { name: "Wikipedia", value: "wikipedia", disabled: false },
    { name: "Canvas", value: "canvas", disabled: false },
    { name: "Google Classroom", value: "classroom", disabled: false },
    { name: "Powerschool", value: "powerschool", disabled: false }
  ] }, "both": { enabled: false } })} ${renderComponent($$result4, "SettingsCard", $$SettingsCard, { "title": "A:B & Blob", "description": "Choose to open your tab in about:blank or blob", "input": { input: false }, "button": { name: "Go!", id: "aboutblankbutton" }, "select": { select: true, name: "aboutblank", options: [
    { name: "About:Blank", value: "a:b", disabled: false },
    { name: "Blob", value: "blob", disabled: false }
  ] }, "both": { enabled: false } })} </div> ` })} ` })} ` })} ${renderScript($$result, "/workspaces/Chronium-Network/src/pages/[lang]/settings/tab.astro?astro&type=script&index=0&lang.ts")}`;
}, "/workspaces/Chronium-Network/src/pages/[lang]/settings/tab.astro", void 0);

const $$file = "/workspaces/Chronium-Network/src/pages/[lang]/settings/tab.astro";
const $$url = "/[lang]/settings/tab";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Tab,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
