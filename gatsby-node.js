const path = require('path');

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  return new Promise((resolve, reject) => {
    // const postTemplate = path.resolve('src/templates/post.jsx');
    // const tagPage = path.resolve('src/pages/tags.jsx');
    // const tagPosts = path.resolve('src/templates/tag.jsx');

    resolve(
      graphql(
        `
          query {
            allMarkdownRemark(
              sort: { order: ASC, fields: [frontmatter___date] }
            ) {
              edges {
                node {
                  frontmatter {
                    path
                    title
                  }
                }
              }
            }
          }
        `
      ).then(result => {
        if (result.errors) {
          return reject(result.errors);
        }

        // const posts = result.data.allMarkdownRemark.edges;


        // // create posts
        // posts.forEach(({ node }, index) => {
        //   const path = node.frontmatter.path;
        //   const prev = index === 0 ? null : posts[index - 1].node;
        //   const next =
        //     index === posts.length - 1 ? null : posts[index + 1].node;const path = require(`path`)
        //     // Log out information after a build is done
        //     exports.onPostBuild = ({ reporter }) => {
        //       reporter.info(`Your Gatsby site has been built!`)
        //     }
        //     // Create blog pages dynamically
        //     exports.createPages = async ({ graphql, actions }) => {
        //       const { createPage } = actions
        //       const blogPostTemplate = path.resolve(`src/templates/blog-post.js`)
        //       const result = await graphql(`
        //         query {
        //           allSamplePages {
        //             edges {
        //               node {
        //                 slug
        //                 title
        //               }
        //             }
        //           }
        //         }
        //       `)
        //       result.data.allSamplePages.edges.forEach(edge => {
        //         createPage({
        //           path: `${edge.node.slug}`,
        //           component: blogPostTemplate,
        //           context: {
        //             title: edge.node.title,
        //           },
        //         })
        //       })
        //     }
        //   createPage({
        //     path,
        //     component: postTemplate,
        //     context: {
        //       pathSlug: path,
        //       prev,
        //       next,
        //     },
        //   });
        // });
      })
    );
  });
};

/* Allows named imports */
exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, 'src'), 'node_modules'],
    },
  });
};
