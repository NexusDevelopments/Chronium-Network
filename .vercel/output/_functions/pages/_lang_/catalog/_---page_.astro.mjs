/* empty css                                        */
import { d as createAstro, c as createComponent, m as maybeRenderHead, e as addAttribute, b as renderTemplate, r as renderComponent } from '../../../chunks/astro/server_BXYMPdlv.mjs';
import { A as API_URL } from '../../../chunks/server_CArYTYL4.mjs';
import { g as getLangFromUrl, $ as $$Layout } from '../../../chunks/Layout_Cx6AcNfo.mjs';
import { $ as $$Pagination } from '../../../chunks/pagination_DyFE4wNf.mjs';
export { r as renderers } from '../../../chunks/_@astro-renderers_CoKgzUc8.mjs';

const $$Astro$1 = createAstro("http://localhost:4321");
const $$CatalogCard = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$CatalogCard;
  const { page, lang } = Astro2.props;
  const getAssets = async () => {
    const res = await fetch(new URL(`/api/catalog-assets?page=${page}`, API_URL));
    const data = await res.json();
    return data.assets;
  };
  const assets = await getAssets();
  return renderTemplate`${maybeRenderHead()}<div class="text-3xl font-roboto font-bold text-text-color p-10"> ${Object.keys(assets).length > 0 && renderTemplate`<div class="flex flex-row gap-6 flex-wrap justify-center"> ${Object.entries(assets).map(
    (asset) => {
      const pName = asset[0];
      const a = asset[1];
      return renderTemplate`<a${addAttribute(`/${lang}/catalog/package/${pName}`, "href")}> <div class="bg-navbar-color w-64 rounded-3xl shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105 text-text-color"> <img${addAttribute(`/packages/${pName}/${a.image}`, "src")}${addAttribute(a.title, "alt")} class="w-full h-40 object-cover"> <div class="p-6 text-sm"> <p class="font-semibold text-2xl mb-2"> ${a.title} </p> <p class="mb-4"> ${a.description} </p> <div class="flex flex-wrap gap-2 mb-4 w-full"> ${a.tags.map((tag) => renderTemplate`<p class="bg-navbar-text-color text-navbar-color font-bold px-3 py-1 rounded-md text-center"> ${tag} </p>`)} </div> <p> <strong>Version: </strong> ${a.version} </p> <p> <strong>Type: </strong> ${a.type === "plugin-page" || a.type === "plugin-sw" ? "plugin" : a.type} </p> </div> </div> </a>`;
    }
  )} </div>`} </div>`;
}, "/workspaces/Chronium-Network/src/components/catalog/CatalogCard.astro", void 0);

const $$Astro = createAstro("http://localhost:4321");
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const lang = getLangFromUrl(Astro2.url);
  const { page } = Astro2.params;
  const response = await fetch(new URL("/api/catalog-assets/", API_URL));
  const assetsJson = await response.json();
  const nextPage = parseInt(page) + 1;
  const previousPage = parseInt(page) - 1;
  const lastPage = assetsJson.pages;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Catalog" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="flex mt-16 w-full fixed inset-0 h-[calc(100%-4rem)] z-0 bg-primary flex-col items-center overflow-auto font-roboto"> <div class="w-full flex flex-col gap-4 jusitfy-center items-center text-text-color mt-9"> <h1 class="text-3xl md:text-5xl font-bold"> Chronium Catalog </h1> <p class="text-l md:text-xl max-md:text-center max-md:p-2"> The Chronium Catalog is a place for you to find user-created themes and plugins. </p> </div> ${renderComponent($$result2, "CatalogCard", $$CatalogCard, { "page": page, "lang": lang })} <div class="flex flex-row pb-8 gap-4 font-roboto">  ${parseInt(page) > 2 && renderTemplate`<a${addAttribute(`/${lang}/catalog/${1}`, "href")} class="w-8 h-8 bg-navbar-color items-center text-center content-center text-text-color rounded-md"> 1 </a>`} ${previousPage > 0 && renderTemplate`<a${addAttribute(`/${lang}/catalog/${previousPage}`, "href")} class="w-8 h-8 bg-navbar-color items-center text-center content-center text-text-color rounded-md">${previousPage}</a>`}  <a class="w-8 h-8 bg-lighter items-center text-center content-center text-text-color rounded-md">${page}</a> ${nextPage < lastPage && renderTemplate`<a${addAttribute(`/${lang}/catalog/${nextPage}`, "href")} class="w-8 h-8 bg-navbar-color items-center text-center content-center text-text-color rounded-md">${nextPage}</a>`}  ${renderComponent($$result2, "Pagination", $$Pagination, {})}  ${page != lastPage && renderTemplate`<a${addAttribute(`/${lang}/catalog/${assetsJson.pages}`, "href")} class="w-8 h-8 bg-navbar-color items-center text-center content-center text-text-color rounded-md"> ${assetsJson.pages} </a>`} </div> </div> ` })}`;
}, "/workspaces/Chronium-Network/src/pages/[lang]/catalog/[...page].astro", void 0);

const $$file = "/workspaces/Chronium-Network/src/pages/[lang]/catalog/[...page].astro";
const $$url = "/[lang]/catalog/[...page]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
