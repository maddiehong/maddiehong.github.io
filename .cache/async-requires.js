// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---src-pages-404-js": () => import("./../src/pages/404.js" /* webpackChunkName: "component---src-pages-404-js" */),
  "component---src-pages-code-js": () => import("./../src/pages/code.js" /* webpackChunkName: "component---src-pages-code-js" */),
  "component---src-pages-contact-js": () => import("./../src/pages/contact.js" /* webpackChunkName: "component---src-pages-contact-js" */),
  "component---src-pages-film-js": () => import("./../src/pages/film.js" /* webpackChunkName: "component---src-pages-film-js" */),
  "component---src-pages-index-js": () => import("./../src/pages/index.js" /* webpackChunkName: "component---src-pages-index-js" */),
  "component---src-pages-me-js": () => import("./../src/pages/me.js" /* webpackChunkName: "component---src-pages-me-js" */)
}

