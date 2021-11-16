const path = require('path')
const { paginate } =require('gatsby-awesome-pagination')

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

module.exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions
	const blogTemplate = path.resolve('./src/pages/blog/{mdx.slug}.js')
	
	// Change query from 'allMarkdownRemark' to 'allMdx'
	// Also, explcitly set sorting to be the same as in index.js
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
	

	// Create pages for pagination.
	const posts = res.data.allMdx.edges
	const postsPerPage = 1 // Change this to get more resutls per page.
	const numPages = Math.ceil(posts.length / postsPerPage)

	Array.from( {length: numPages} ).forEach( (_, i) => {
		createPage({
			path: i === 0 ? '/' : `/${i + 1}`,
			component: path.resolve('./src/pages/blog/{mdx.slug}.js'),
			context: {
				limit: postsPerPage,
				skip: i * postsPerPage,
				numPages,
				currentPage: i + 1
			}
		});
	})


	// Change query from 'allMarkdownRemark' to 'allMdx' so that it matches the query
    res.data.allMdx.edges.forEach((edge) => {
        createPage({
            component:blogTemplate,
            path: `/blog/${edge.node.fields.slug}`,
            context: {
                slug: edge.node.fields.slug
            }
        })
    })
}

// exports.onCreateNode = ({ node, actions, getNode }) => {
//   const { createNodeField } = actions

//   if (node.internal.type === `Mdx`) {
//     const value = createFilePath({ node, getNode })

//     createNodeField({
//       name: `slug`,
//       node,
//       value,
//     })
//   }
// }

// exports.createSchemaCustomization = ({ actions }) => {
//   const { createTypes } = actions

//   // Explicitly define the siteMetadata {} object
//   // This way those will always be defined even if removed from gatsby-config.js

//   // Also explicitly define the Markdown frontmatter
//   // This way the "MarkdownRemark" queries will return `null` even when no
//   // blog posts are stored inside "content/blog" instead of returning an error
//   createTypes(`
//     type SiteSiteMetadata {
//       author: Author
//       siteUrl: String
//       social: Social
//     }
//     type Author {
//       name: String
//       summary: String
//     }
//     type Social {
//       twitter: String
//     }
//     type Mdx implements Node {
//       frontmatter: Frontmatter
//       fields: Fields
//     }
//     type Frontmatter {
//       title: String
//       description: String
//       date: Date @dateformat
//     }
//     type Fields {
//       slug: String
//     }
//   `)
// }