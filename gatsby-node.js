const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const blogTemplate = path.resolve(`./src/templates/Blogpost.js`) //template for individual blog posts
  const blogPosts = path.resolve(`./src/templates/blog-post-list.js`) //template for url/blog page
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
      const previous = index === 0 ? null : posts[index - 1].node.id
      const next = index === posts.length - 1 ? null : posts[index + 1].node.id
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
