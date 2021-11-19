import * as React from 'react'
import { graphql, Link } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'

import Header from '../components/header'
import Bio from '../components/bio'

const BlogPost = ({data, pageContext}) => {
  const post = data.mdx
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
            <nav className="flex flex-wrap justify-between w-1/2 my-2">
                <div>
                {previous && (
                    <Link to={previous.slug} rel="prev">
                        <button className="bg-yellow-400 rounded-xl px-2 text-gray-700 hover:text-white mb-2">← Previous Post{previous.title}</button> 
                    </Link>
                    )}
                </div>

                <div>
                {next && (
                    <Link to={next.slug} rel="next">
                        <button className="bg-yellow-400 rounded-xl px-2 text-gray-700 hover:text-white">{next.title}Next Post →</button>
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
query MyQuery($id: String) {
  mdx(id: {eq: $id}) {
    body
    frontmatter {
      date(formatString: "MMMM DD, YYYY")
      title
    }
    excerpt(pruneLength: 160, truncate: false)
    slug
  }
}
`