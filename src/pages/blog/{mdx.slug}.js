import React from 'react';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx'

import Header from '../../components/header'
import Bio from '../../components/bio'

const BlogPostPage = ({ data }) => {
  const post = data.mdx

    return (
      <div>
          <Header /> 
          {/*👇🏼Blog post content*/}
          <div className="grid place-items-center bg-yellow-200 h-screen my-2">
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
          </div>
          <Bio />
        </div>
      )
}

export const query = graphql`
query BlogPostById($id: String) {
  mdx(id: {eq: $id}) {
    body
    frontmatter {
      date(formatString: "MMMM DD, YYYY")
      title
    }
  }
}
  `

export default BlogPostPage