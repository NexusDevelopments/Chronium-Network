/* empty css                                        */
import { d as createAstro, c as createComponent, m as maybeRenderHead, e as addAttribute, r as renderComponent, b as renderTemplate } from '../../../chunks/astro/server_BXYMPdlv.mjs';
import { g as getLangFromUrl, $ as $$Layout } from '../../../chunks/Layout_Cx6AcNfo.mjs';
import { $ as $$SettingsLayout, a as $$SettingsSection } from '../../../chunks/SettingsSection_BrKAWws_.mjs';
import { $ as $$Image } from '../../../chunks/_astro_assets_BcALbkAQ.mjs';
export { r as renderers } from '../../../chunks/_@astro-renderers_CoKgzUc8.mjs';

const $$Astro$1 = createAstro("http://localhost:4321");
const $$CreditsCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$CreditsCard;
  const images = /* #__PURE__ */ Object.assign({"/src/assets/credits/libcurl.png": () => import('../../../chunks/libcurl_CmaAvoXr.mjs'),"/src/assets/credits/mercury.png": () => import('../../../chunks/mercury_CPqmBy9O.mjs'),"/src/assets/credits/motortruck1221.png": () => import('../../../chunks/motortruck1221_OXf-8jCw.mjs'),"/src/assets/credits/rift.jpeg": () => import('../../../chunks/rift_BqZhAAzE.mjs'),"/src/assets/credits/scaratek.jpg": () => import('../../../chunks/scaratek_Br_o5m28.mjs'),"/src/assets/credits/scramjet.webp": () => import('../../../chunks/scramjet_opQRfLP5.mjs'),"/src/assets/credits/skylink.png": () => import('../../../chunks/skylink_D9K4beK4.mjs'),"/src/assets/credits/uv.png": () => import('../../../chunks/uv_CIeUKyPk.mjs')

});
  const { image, name, link } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a class="rounded-md bg-navbar-color h-50 w-50 p-2 flex flex-col items-center"${addAttribute(link, "href")} target="_blank" rel="noopener noreferrer"> ${image && renderTemplate`${renderComponent($$result, "Image", $$Image, { "loading": "lazy", "class": "w-32 h-32 object-cover rounded-md", "src": images[image](), "alt": name })}`} <p class="h-12 w-full text-text-color flex items-center justify-center text-xl font-semibold">${name}</p> </a>`;
}, "/workspaces/Chronium-Network/src/components/settings/CreditsCard.astro", void 0);

const $$Astro = createAstro("http://localhost:4321");
const $$Credits = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Credits;
  getLangFromUrl(Astro2.url);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Settings" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "SettingsLayout", $$SettingsLayout, { "title": "Credits" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "SettingsSection", $$SettingsSection, { "title": "Site Developers & Maintainers", "subtitle": "Thank you to all of the devs and maintainers!" }, { "default": ($$result4) => renderTemplate` ${maybeRenderHead()}<div class="flex flex-row flex-wrap gap-4 items-center font-roboto"> <div class="justify-center flex flex-row gap-6 flex-wrap md:justify-normal"> ${renderComponent($$result4, "CreditsCard", $$CreditsCard, { "image": "/src/assets/credits/rift.jpeg", "name": "Rifting", "link": "https://github.com/rifting" })} ${renderComponent($$result4, "CreditsCard", $$CreditsCard, { "image": "/src/assets/credits/motortruck1221.png", "name": "MotorTruck1221", "link": "https://motortruck1221.com" })} ${renderComponent($$result4, "CreditsCard", $$CreditsCard, { "image": "/src/assets/credits/scaratek.jpg", "name": "Scaratek", "link": "https://github.com/scaratech" })} ${renderComponent($$result4, "CreditsCard", $$CreditsCard, { "image": "/src/assets/credits/skylink.png", "name": "Skylink", "link": "https://skylinkhosting.com" })} </div> </div> ` })} ${renderComponent($$result3, "SettingsSection", $$SettingsSection, { "title": "Tools & Projects", "subtitle": "Chronium wouldn't be possible without these tools & projects" }, { "default": ($$result4) => renderTemplate` <div class="flex flex-row flex-wrap gap-6 items-center font-roboto"> ${renderComponent($$result4, "CreditsCard", $$CreditsCard, { "image": "/src/assets/credits/uv.png", "name": "Ultraviolet", "link": "https://github.com/titaniumnetwork-dev/ultraviolet" })} ${renderComponent($$result4, "CreditsCard", $$CreditsCard, { "image": "/src/assets/credits/scramjet.webp", "name": "Scramjet", "link": "https://github.com/mercuryworkshop/scramjet" })} ${renderComponent($$result4, "CreditsCard", $$CreditsCard, { "image": "/src/assets/credits/libcurl.png", "name": "Libcurl.js", "link": "https://github.com/ading2210/libcurl.js" })} ${renderComponent($$result4, "CreditsCard", $$CreditsCard, { "image": "/src/assets/credits/mercury.png", "name": "Epoxy TLS", "link": "https://github.com/mercuryworkshop/epoxy-tls" })} </div> ` })} ${renderComponent($$result3, "SettingsSection", $$SettingsSection, { "title": "Contact" }, { "default": ($$result4) => renderTemplate` <div class="flex flex-row flex-wrap gap-4 items-center font-roboto"> <ul> <li>
Legal concerns: <a href="mailto:legal@chronium.network">legal@chronium.network</a> </li> <li>
General contact: <a href="mailto:legal@chronium.network">contact@chronium.network</a> </li> </ul> </div>   ` })} ` })} ` })}`;
}, "/workspaces/Chronium-Network/src/pages/[lang]/settings/credits.astro", void 0);

const $$file = "/workspaces/Chronium-Network/src/pages/[lang]/settings/credits.astro";
const $$url = "/[lang]/settings/credits";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Credits,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
