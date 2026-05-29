/* empty css                                        */
import { d as createAstro, c as createComponent, r as renderComponent, b as renderTemplate, a as renderScript, m as maybeRenderHead } from '../../../chunks/astro/server_BXYMPdlv.mjs';
import { $ as $$SettingsCard } from '../../../chunks/SettingsCard_BKqb5Sg7.mjs';
import { g as getLangFromUrl, $ as $$Layout } from '../../../chunks/Layout_Cx6AcNfo.mjs';
import { $ as $$SettingsLayout, a as $$SettingsSection } from '../../../chunks/SettingsSection_BrKAWws_.mjs';
export { r as renderers } from '../../../chunks/_@astro-renderers_CoKgzUc8.mjs';

const $$Astro = createAstro("http://localhost:4321");
const $$Misc = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Misc;
  Astro2.url.origin;
  getLangFromUrl(Astro2.url);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Settings" }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "SettingsLayout", $$SettingsLayout, { "title": "Miscellaneous" }, { "default": async ($$result3) => renderTemplate` ${renderComponent($$result3, "SettingsSection", $$SettingsSection, { "title": "Misc", "subtitle": "All of our miscellaneous settings" }, { "default": async ($$result4) => renderTemplate` ${maybeRenderHead()}<div class="w-full h-full flex flex-col items-center justify-center flex-wrap md:flex-row md:items-start md:justify-start gap-4"> ${renderComponent($$result4, "SettingsCard", $$SettingsCard, { "title": "Language", "description": "Choose your language", "input": { input: false }, "button": { name: "Change Language", id: "setlang" }, "select": {
    select: true,
    name: "lang",
    options: [
      { name: "English", value: "en_US", disabled: false },
      { name: "Japanese", value: "jp", disabled: false }
    ]
  }, "both": { enabled: false } })} ${renderComponent($$result4, "SettingsCard", $$SettingsCard, { "title": "Reset instance", "description": "Reset your instance if your having troubles or problems.", "input": { input: false }, "button": { name: "Reset", id: "resetinstance" }, "select": { select: false }, "both": { enabled: false } })} </div> ` })} ${renderScript($$result3, "/workspaces/Chronium-Network/src/pages/[lang]/settings/misc.astro?astro&type=script&index=0&lang.ts")}` })}` })}`;
}, "/workspaces/Chronium-Network/src/pages/[lang]/settings/misc.astro", void 0);

const $$file = "/workspaces/Chronium-Network/src/pages/[lang]/settings/misc.astro";
const $$url = "/[lang]/settings/misc";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Misc,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
