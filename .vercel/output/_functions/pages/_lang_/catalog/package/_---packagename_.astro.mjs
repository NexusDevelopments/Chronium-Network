/* empty css                                           */
import { d as createAstro, c as createComponent, r as renderComponent, a as renderScript, b as renderTemplate, m as maybeRenderHead, e as addAttribute } from '../../../../chunks/astro/server_BXYMPdlv.mjs';
import { $ as $$Layout } from '../../../../chunks/Layout_Cx6AcNfo.mjs';
import { A as API_URL } from '../../../../chunks/server_CArYTYL4.mjs';
export { r as renderers } from '../../../../chunks/_@astro-renderers_CoKgzUc8.mjs';

const $$Astro = createAstro("http://localhost:4321");
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const { packageName } = Astro2.params;
  const response = await fetch(
    new URL("/api/packages/" + packageName, API_URL)
  );
  const assetsJson = await response.json();
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `Package: ${assetsJson.title}`, "description": `${assetsJson.title} is a package on Chronium. Start using this package on Chronium today!`, "image": `/packages/${packageName}/${assetsJson.image}` }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="flex flex-wrap min-[1032px]:mt-16 mt-8 w-full fixed inset-0 h-full md:h-[calc(100%-4rem)] z-0 bg-primary flex-col items-center content-center justify-center lg:pb-64 font-roboto max-md:p-4"> ${assetsJson.error && renderTemplate`<h1 class="text-text-color text-3xl font-bold"> ${" "}
Unexpected error. Is the name right?${" "} </h1>`} ${!assetsJson.error && renderTemplate`<div class="flex flex-col max-md:min-[1032px]:justify-center md:min-[1032px]:flex-row items-center text-text-color bg-navbar-color rounded-2xl"> ${assetsJson.background_video && renderTemplate`<video${addAttribute(`/packages/${packageName}/${assetsJson.background_video}`, "src")} controls class="md:w-[44rem] md:h-[25rem] h-[12rem] w-full object-cover rounded-xl">
Your browser does not support the video tag.
</video>`} ${assetsJson.backgroundImage && renderTemplate`<div${addAttribute({
    backgroundImage: `url(/packages/${packageName}/${assetsJson.backgroundImage})`
  }, "style")} class="md:w-[44rem] md:h-[25rem] h-[12rem] w-full object-cover bg-center rounded-xl"></div>`} ${!assetsJson.background_video && !assetsJson.backgroundImage && renderTemplate`<img loading="lazy"${addAttribute(`/packages/${packageName}/${assetsJson.image}`, "src")}${addAttribute(assetsJson.title, "alt")} class="md:w-[44rem] md:h-[25rem] h-[12rem] w-full object-cover rounded-xl">`} <div class="flex flex-col ml-7 md:p-16 p-10"> <p class="text-xl"> ${assetsJson.type === "plugin-page" || assetsJson.type === "plugin-sw" ? "plugin" : assetsJson.type} </p> <h1 class="text-4xl font-roboto font-semibold"> ${assetsJson.title} </h1> <p class="text-xl"> ${" "}
By: <strong>${assetsJson.author}</strong> </p> <p class="text-xl">${assetsJson.description}</p> <button class="bg-primary text-text-color border border-transparent rounded-lg px-6 py-3 hover:bg-navbar-color transition-colors duration-300 mt-9" id="install">
Install
</button> <button class="hidden bg-primary text-text-color border border-transparent rounded-lg px-6 py-3 hover:bg-navbar-color transition-colors duration-300 mt-9" id="uninstall">
Uninstall
</button> <a href="../1" class="w-full bg-background text-text-color border-none rounded-lg text-l max-md:mt-7 px-4 py-4 h-full flex-grow md:text-right text-center font-bold underline underline-offset-4 decoration-2 hover:decoration-border-color transition-colors duration-300">
Go Back
</a> </div> </div>`} </div> ${renderComponent($$result2, "package-vars", "package-vars", { "data-assets": JSON.stringify(assetsJson), "data-name": packageName, "data-type": assetsJson.type })} ` })} ${renderScript($$result, "/workspaces/Chronium-Network/src/pages/[lang]/catalog/package/[...packageName].astro?astro&type=script&index=0&lang.ts")}`;
}, "/workspaces/Chronium-Network/src/pages/[lang]/catalog/package/[...packageName].astro", void 0);

const $$file = "/workspaces/Chronium-Network/src/pages/[lang]/catalog/package/[...packageName].astro";
const $$url = "/[lang]/catalog/package/[...packageName]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
