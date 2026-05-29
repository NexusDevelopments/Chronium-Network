import { r as renderers } from './chunks/_@astro-renderers_CoKgzUc8.mjs';
import { c as createExports, s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_Dckao0r0.mjs';
import { manifest } from './manifest_DoX9qKQU.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/loading.astro.mjs');
const _page2 = () => import('./pages/robots.txt.astro.mjs');
const _page3 = () => import('./pages/_lang_/catalog/package/_---packagename_.astro.mjs');
const _page4 = () => import('./pages/_lang_/catalog/pagination.astro.mjs');
const _page5 = () => import('./pages/_lang_/catalog/_---page_.astro.mjs');
const _page6 = () => import('./pages/_lang_/games.astro.mjs');
const _page7 = () => import('./pages/_lang_/settings/appearance.astro.mjs');
const _page8 = () => import('./pages/_lang_/settings/credits.astro.mjs');
const _page9 = () => import('./pages/_lang_/settings/misc.astro.mjs');
const _page10 = () => import('./pages/_lang_/settings/pr.astro.mjs');
const _page11 = () => import('./pages/_lang_/settings/tab.astro.mjs');
const _page12 = () => import('./pages/_lang_.astro.mjs');
const _page13 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/.pnpm/astro@5.17.3_@types+node@22.15.32_@vercel+functions@2.2.13_jiti@1.21.7_lightningcss@1.2_cbcfe021f81e60ad4df71f8383b7b8ca/node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/loading.astro", _page1],
    ["src/pages/robots.txt.ts", _page2],
    ["src/pages/[lang]/catalog/package/[...packageName].astro", _page3],
    ["src/pages/[lang]/catalog/pagination.astro", _page4],
    ["src/pages/[lang]/catalog/[...page].astro", _page5],
    ["src/pages/[lang]/games.astro", _page6],
    ["src/pages/[lang]/settings/appearance.astro", _page7],
    ["src/pages/[lang]/settings/credits.astro", _page8],
    ["src/pages/[lang]/settings/misc.astro", _page9],
    ["src/pages/[lang]/settings/pr.astro", _page10],
    ["src/pages/[lang]/settings/tab.astro", _page11],
    ["src/pages/[lang]/index.astro", _page12],
    ["src/pages/index.astro", _page13]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./noop-entrypoint.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "19a62bc8-876d-4793-a865-5d2a06bd8378",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (Object.prototype.hasOwnProperty.call(serverEntrypointModule, _start)) ;

export { __astrojsSsrVirtualEntry as default, pageMap };
