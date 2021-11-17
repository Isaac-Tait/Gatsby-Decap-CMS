import * as React from 'react'
import { graphql, Link } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

import Header from '../components/header'
import Bio from '../components/bio'

const BlogPost = ({data, pageContext}) => {
  const image = getImage(data.allMdx.frontmatter.heroImage)
  const { previous, next } = pageContext

    return (
    <div>
        <Header /> 
        {/*👇🏼Controls blog post content*/}
        <div className="grid place-items-center bg-yellow-200 my-2">
          <div className="mt-2">
              <GatsbyImage
                      image={image}
                      alt={data.allMdx.frontmatter.heroImageAlt}
                      className="rounded-2xl shadow-xl ml-2"
                  />
            </div>
                <p className="font-semibold text-3xl uppercase text-gray-700">{data.allMdx.frontmatter.title}</p>
                <p className="text-gray-600">Posted: {data.allMdx.frontmatter.date}</p>
                <hr />
            <div className="mx-4 text-gray-800">
                <MDXRenderer>       
                    {data.allMdx.body}
                </MDXRenderer>
            </div>
            <nav>
                <div>
                {previous && (
                    <Link to={previous.fields.slug} rel="prev">
                        <button>← {previous.frontmatter.title}</button> 
                    </Link>
                    )}
                </div>

                <div>
                {next && (
                    <Link to={next.fields.slug} rel="next">
                        <button>{next.frontmatter.title} →</button>
                    </Link>
                    )}
                </div>
            </nav>
        </div>
        <Bio />
      </div>
    )
  }

export default BlogPost

export const pageQuery = graphql`
query MyQuery {
  allMdx {
    edges {
      node {
        body
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          heroImageAlt
          heroImage {
            childImageSharp {
              gatsbyImageData
            }
          }
          title
        }
        excerpt(pruneLength: 160, truncate: true)
      }
    }
  }
}
`