const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-pages-404-js": hot(preferDefault(require("/Users/maddiehong/Website/CurrentPortfolio/src/pages/404.js"))),
  "component---src-pages-code-js": hot(preferDefault(require("/Users/maddiehong/Website/CurrentPortfolio/src/pages/code.js"))),
  "component---src-pages-contact-js": hot(preferDefault(require("/Users/maddiehong/Website/CurrentPortfolio/src/pages/contact.js"))),
  "component---src-pages-film-js": hot(preferDefault(require("/Users/maddiehong/Website/CurrentPortfolio/src/pages/film.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/maddiehong/Website/CurrentPortfolio/src/pages/index.js"))),
  "component---src-pages-me-js": hot(preferDefault(require("/Users/maddiehong/Website/CurrentPortfolio/src/pages/me.js")))
}

