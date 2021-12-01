const path = require('path')

const { createFilePath } = require(`gatsby-source-filesystem`)
const { paginate } =require('gatsby-awesome-pagination')


module.exports.createPages = async ({ graphql, actions, reporter }) => {
    const { createPage } = actions

	  const blogTemplate = path.resolve('./src/pages/{mdx.slug}.js')//template for individual blog posts
    const blogPosts = path.resolve('./src/templates/blog-post-list.js')//template for url/blog page

    const res = await graphql(`
        query {
            allMdx(
				sort: { fields: [frontmatter___date], order: DESC}
			) {
                edges {
                    node {
                        fields {
                            slug
                        }
                    }
                }
            }
        }
	`)

//added below after reading https://github.com/gatsbyjs/gatsby/issues/11784
  if (res.errors) {
    reporter.panicOnBuild(
      `There was an error loading your blog posts`,
      result.errors
    )
    return
  }

  // Create blog posts pages (aka a template for)
	const posts = res.data.allMdx.edges
  
  posts.forEach((post, index) => {
    createPage({
      path: post.node.fields.slug,
      component: blogTemplate,
      context: {
        previous: index === 0 ? null : posts[index - 1].node,
        next: index === (posts.length - 1) ? null : posts[index + 1].node
      },
    })
  });

  res.data.allMdx.edges.forEach((edge) => {
    createPage({
        component:blogTemplate,
        path: edge.node.fields.slug,
        context: {
            slug: edge.node.fields.slug
        }
    })
})

//pagination for blog post list page
paginate({
  createPage,
  items: res.data.allMdx.edges,
  itemsPerPage: 4, // How many items you want per page
  pathPrefix: '/blog', // Creates pages like `/blog`, `/blog/2`, etc
  component: blogPosts,
})
}

//Do I need this? I do not know what it does
module.exports.onCreateNode = ({node, actions}) => {
  const { createNodeField } = actions

// Change 'MarkdownRemark' to 'Mdx'
  if(node.internal.type === 'Mdx') {
  /* 
  Basename only was only passed the .md extension,
  which meant the slug for for .mdx files would be incorrect.
  I changed it so that we read the ext fron absolutePath and put that into the basename method.
  */ 
  const absPath = node.fileAbsolutePath;
  const ext = path.extname(absPath);
      const slug = path.basename(node.fileAbsolutePath, ext)
      //console.log(JSON.stringify(node,undefined, 4))
      console.log('@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@', slug)
      createNodeField({
          node,
          name: 'slug',
          value: slug
      })
  }
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `Mdx`) {
    const value = createFilePath({ node, getNode })

    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions

  // Explicitly define the siteMetadata {} object
  // This way those will always be defined even if removed from gatsby-config.js

  // Also explicitly define the Markdown frontmatter
  // This way the "MarkdownRemark" queries will return `null` even when no
  // blog posts are stored inside "content/blog" instead of returning an error
  createTypes(`
    type SiteSiteMetadata {
      author: Author
      siteUrl: String
      social: Social
    }
    type Author {
      name: String
      summary: String
    }
    type Social {
      twitter: String
    }
    type Mdx implements Node {
      frontmatter: Frontmatter
      fields: Fields
    }
    type Frontmatter {
      title: String
      description: String
      date: Date @dateformat
    }
    type Fields {
      slug: String
    }
  `)
}