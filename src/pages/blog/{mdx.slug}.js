import React from 'react';
import { graphql, Link } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx'

import Header from '../../components/header'
import Bio from '../../components/bio'

const BlogPostPage = ({ data }) => {
  const post = data.mdx

    return (
      <div>
          <Header /> 
          {/* 👇🏼 Blog post content*/}
          <div className="grid place-items-center bg-yellow-200 md:h-screen">
              <p className="font-semibold text-3xl uppercase text-gray-700">{post.frontmatter.title}</p>
              <div className="mx-4 text-gray-800">
                  <MDXRenderer>       
                      {post.body}
                  </MDXRenderer>
              </div>              
          </div>
          <div className="bg-gray-100 flex flex-wrap justify-center content-center">
                <p className="text-gray-600">Were you looking for something else? Head on over to our&nbsp;</p>
                <Link to={'/search'} className="underline text-red-400">
                  search page
                </Link>
              </div>
          {/* 👆🏻 End of blog post content*/}
          <Bio />
        </div>
      )
}

export const query = graphql`
query BlogPostById($id: String) {
  mdx(id: {eq: $id}) {
    body
    frontmatter {
      title
    }
  }
}
  `

export default BlogPostPage