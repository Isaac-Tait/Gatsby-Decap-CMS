const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

// Creates path to the nodes (md files from Mdx)
// onCreateNode runs during server start
// bunch of nodes created from the filesystem during server starts
// we are only interested on node.internal.type Mdx nodes (md files)
// other node.internal.type is SitePage, which is our .js files inside src

// Dynamically create pages based on graphql query on slugs from each node, put component of that page from {mdx.slug}.js template
// Create pagination using src/templates/blog-post-list.js
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const blogTemplate = path.resolve(`./src/pages/updates/{mdx.slug}.js`) //template for individual blog posts
  const blogPosts = path.resolve(`./src/templates/blog-post-list.js`) //template for url/blog page

  // this graphql is function string to pass graphql query, this is a node version of graphql
  // this query returns a promise of slugs. use then instead of async await
  const result = await graphql(
    `
      {
        allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
          edges {
            node {
              body
              id
              frontmatter {
                title
              }
              fields {
                slug
              }
            }
          }
        }
      }
    `
  )

  const posts = result.data.allMdx.edges
  if (posts.length > 0) {
    posts.forEach((post, index) => {
      // create prev and next on each posts render (for Blog Post Pagination, BPP)
      const previous = index === 0 ? null : posts[index - 1].node.id
      const next = index === posts.length - 1 ? null : posts[index + 1].node.id
      // previous and next are objects props sent as pageContext object to blogPostTemplate
      createPage({
        path: `/updates${post.node.fields.slug}`,
        component: blogTemplate,
        context: {
          id: post.node.id,
          previous,
          next,
        },
      })
    })
  }
  // Create blog list pages (for Blog List Pagination, BLP)
  // Assign path /updates/2, /updates/3, /updates/4, etc
  const postsPerPage = 3
  const numPages = Math.ceil(posts.length / postsPerPage)

  Array.from({ length: numPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/updates` : `/updates/${i + 1}`,
      component: blogPosts,
      context: {
        limit: postsPerPage,
        skip: i * postsPerPage,
        numPages,
        currentPage: i + 1,
      },
    })
  })
}

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `Mdx`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      value,
      node,
    })
  }
}