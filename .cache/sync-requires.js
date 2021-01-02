const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---node-modules-gatsby-plugin-offline-app-shell-js": hot(preferDefault(require("/Users/rayngan/Desktop/my-profolio-website/node_modules/gatsby-plugin-offline/app-shell.js"))),
  "component---src-pages-404-jsx": hot(preferDefault(require("/Users/rayngan/Desktop/my-profolio-website/src/pages/404.jsx"))),
  "component---src-pages-about-jsx": hot(preferDefault(require("/Users/rayngan/Desktop/my-profolio-website/src/pages/about.jsx"))),
  "component---src-pages-blog-jsx": hot(preferDefault(require("/Users/rayngan/Desktop/my-profolio-website/src/pages/blog.jsx"))),
  "component---src-pages-index-jsx": hot(preferDefault(require("/Users/rayngan/Desktop/my-profolio-website/src/pages/index.jsx"))),
  "component---src-pages-project-jsx": hot(preferDefault(require("/Users/rayngan/Desktop/my-profolio-website/src/pages/project.jsx"))),
  "component---src-pages-tags-jsx": hot(preferDefault(require("/Users/rayngan/Desktop/my-profolio-website/src/pages/tags.jsx"))),
  "component---src-templates-post-jsx": hot(preferDefault(require("/Users/rayngan/Desktop/my-profolio-website/src/templates/post.jsx"))),
  "component---src-templates-tag-jsx": hot(preferDefault(require("/Users/rayngan/Desktop/my-profolio-website/src/templates/tag.jsx")))
}

