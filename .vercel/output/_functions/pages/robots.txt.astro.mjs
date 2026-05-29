import { S as SEO } from '../chunks/client_5pRn_Q30.mjs';
export { r as renderers } from '../chunks/_@astro-renderers_CoKgzUc8.mjs';

const SEOConfig = JSON.parse(SEO);
const genRobotsTXT = (sitemap) => `
User-Agent: *
Allow: /
User-Agent: *
Disallow: /uv
SiteMap: ${sitemap.href}
`;
const otherDomainTXT = `
User-Agent: *
Disallow: /*
`;
const GET = ({ site, request }) => {
  const url = new URL("sitemap-index.xml", site);
  const host = new URL(request.url).host;
  if (SEOConfig.enabled && host === SEOConfig.domain) {
    return new Response(genRobotsTXT(url));
  }
  return new Response(otherDomainTXT);
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    GET
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
