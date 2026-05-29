import { d as createAstro, c as createComponent, m as maybeRenderHead, e as addAttribute, n as renderSlot, b as renderTemplate, r as renderComponent } from './astro/server_BXYMPdlv.mjs';
import { g as getLangFromUrl, u as useTranslations, a as $$Icon } from './Layout_Cx6AcNfo.mjs';

const $$Astro$2 = createAstro("http://localhost:4321");
const $$SidebarButton = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$SidebarButton;
  const { title, route } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(route, "href")} class="snap-center snap-always group flex flex-col items-center md:p-0 max-sm:p-3 sm:p-3 bg-navbar-color w-full rounded-3xl md:flex-row md:bg-none md:rounded-none"> <div class="xl:p-2 max-sm:p-2 sm:p-2 md:p-0"> ${renderSlot($$result, $$slots["default"])} </div> <div class="max-md:min-w-24 font-roboto text-center font-bold text-text-color roboto transition duration-500 group-hover:text-text-hover-color md:text-xl text-nowrap"> ${title} </div> </a>`;
}, "/workspaces/Chronium-Network/src/components/SidebarButton.astro", void 0);

const $$Astro$1 = createAstro("http://localhost:4321");
const $$SettingsLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$SettingsLayout;
  const lang = getLangFromUrl(Astro2.url);
  const t = useTranslations(lang);
  const { title } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="flex flex-row font-roboto"> <div class="text-text-color mt-16 fixed inset-0 h-[calc(100%-4rem)] z-0 bg-primary flex-col flex md:flex-row"> <div class="items-center md:p-3 sm:p-3 flex flex-row border-border-color md:gap-10 xl:gap-10 max-sm:gap-5 sm:gap-5 md:border-r-2 lg:w-2/12 md:w-3/12 md:flex-col md:bg-navbar-color md:gap-0 overflow-x-auto md:overflow-x-hidden overflow-y-hidden max-md:ml-1 max-md:mr-1 max-md:max-h-24 max-md:min-h-24 max-md:justify-left max-md:scroll-ml-3 max-md:scroll-mr-3 max-md:snap-x max-md:snap-mandatory"> ${renderComponent($$result, "SidebarButton", $$SidebarButton, { "title": t("settings.appearance"), "route": `/${lang}/settings/appearance` }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Icon", $$Icon, { "name": "ph:palette", "class": "h-6 w-6 text-text-color transition duration-500 group-hover:text-text-hover-color md:h-6 md:w-6" })} ` })} ${renderComponent($$result, "SidebarButton", $$SidebarButton, { "title": t("settings.proxy"), "route": `/${lang}/settings/pr` }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Icon", $$Icon, { "name": "ph:globe-hemisphere-east-fill", "class": "h-6 w-6 text-text-color transition duration-500 group-hover:text-text-hover-color md:h-6 md:w-6" })} ` })} ${renderComponent($$result, "SidebarButton", $$SidebarButton, { "title": t("settings.tab"), "route": `/${lang}/settings/tab/` }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Icon", $$Icon, { "name": "ph:laptop-fill", "class": "h-6 w-6 text-text-color transition duration-500 group-hover:text-text-hover-color md:h-6 md:w-6" })} ` })} ${renderComponent($$result, "SidebarButton", $$SidebarButton, { "title": "Misc", "route": `/${lang}/settings/misc` }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Icon", $$Icon, { "name": "ph:gear", "class": "h-6 w-6 text-text-color transistion duration-500 group-hover:text-text-hover-color md:h-6 md:w=6" })} ` })} ${renderComponent($$result, "SidebarButton", $$SidebarButton, { "title": "Credits", "route": `/${lang}/settings/credits` }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Icon", $$Icon, { "name": "ph:user", "class": "h-6 w-6 text-text-color transistion duration-500 group-hover:text-text-hover-color md:h-6 md:w=6" })} ` })} </div> <div class="p-8 md:pb-2 w-full flex-grow overflow-y-auto"> <p class="text-5xl font-semibold mb-5">${t("settings.settings")}</p> <p class="text-2xl">${title}</p> ${renderSlot($$result, $$slots["default"])} </div> </div> </div>`;
}, "/workspaces/Chronium-Network/src/layouts/SettingsLayout.astro", void 0);

const $$Astro = createAstro("http://localhost:4321");
const $$SettingsSection = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$SettingsSection;
  const { title, subtitle } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="mt-5 font-roboto"> <hr> <div class="mt-3"> <div class="text-2xl font-semibold">${title}</div> <div class="text-lg mb-5">${subtitle}</div> ${renderSlot($$result, $$slots["default"])} </div> </div>`;
}, "/workspaces/Chronium-Network/src/layouts/SettingsSection.astro", void 0);

export { $$SettingsLayout as $, $$SettingsSection as a };
