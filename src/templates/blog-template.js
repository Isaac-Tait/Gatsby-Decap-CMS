import * as React from 'react'
import { graphql, Link } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'

import Header from '../components/header'
import Bio from '../components/bio'

export const pageQuery = graphql`
query MyQuery {
  allMdx {
    edges {
      node {
        body
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
        }
        excerpt(pruneLength: 160, truncate: true)
      }
    }
  }
}
`

const BlogPost = ({data, pageContext}) => {
  const post = data.allMdx
  const { previous, next } = pageContext

    return (
    <div>
        <Header /> 
        {/*👇🏼Blog post content*/}
        <div className="grid place-items-center bg-yellow-200 my-2">
          <div className="mt-2">
            </div>
                <p className="font-semibold text-3xl uppercase text-gray-700">{post.frontmatter.title}</p>
                <p className="text-gray-600">Posted: {post.frontmatter.date}</p>
                <hr />
            <div className="mx-4 text-gray-800">
                <MDXRenderer>       
                    {post.body}
                </MDXRenderer>
            </div>
            {/*👇🏼Blog post navigation*/}
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