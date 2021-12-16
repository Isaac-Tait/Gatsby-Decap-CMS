import React from 'react';
import { graphql, Link } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx'

import Header from '../../components/header'
import Bio from '../../components/bio'

const BlogPostPage = ({ data, pageContext, location }) => {
  const post = data.mdx
  const { previous, next } = pageContext

    return (
      <div location={location}>
          <Header /> 
          {/* 👇🏼 Blog post content*/}
          <div className="grid place-items-center bg-yellow-200 md:h-screen overflow-y-scroll">
            <p className="font-semibold text-3xl uppercase text-gray-700">{post.frontmatter.title}</p>
            <div className="mx-4 text-gray-800">
                <MDXRenderer>       
                    {post.body}
                </MDXRenderer>
            </div>
            <nav className="flex flex-wrap w-full justify-between px-4">
            <div>
                {next && (
                    <Link to={next.fields.slug} rel="next">
                        <button className="bg-green-200 px-2 my-4 rounded-xl text-gray-200">⬅️ Next Article</button>
                    </Link>
                )}
              </div>
              <div>
                {previous && (
                    <Link to={previous.fields.slug} rel="prev">
                        <button className="bg-green-200 px-2 my-4 rounded-xl text-gray-200">Previous Article ➡️</button>
                    </Link>
                )}
              </div>
            </nav>              
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

export default BlogPostPage

export const query = graphql`
query ($slug: String!) {
  mdx(fields: { slug: { eq: $slug } }) {
    body
    frontmatter {
      title
      date
    }
  }
}
`