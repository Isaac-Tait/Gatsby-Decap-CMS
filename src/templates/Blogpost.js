import React from 'react'
import { graphql, Link } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'

import Header from '../components/header'
import Bio from '../components/bio'

const BlogPostPage = ({ data, pageContext, location }) => {
  console.log(data, pageContext)
  const post = data.mdx
  const { previous, next } = data

  return (
    <div location={location} className="bg-gradient-to-r from-pink-200 to-indigo-200">
      <Header />
      {/* 👇🏼 Blog post content*/}
      <div className="max-w-6xl mx-auto md:h-screen overflow-y-scroll">
        <h1 className="font-semibold text-3xl uppercase text-gray-700 flex flex-row justify-center">
          {post.frontmatter.title}
        </h1>
        <div className="mx-4 text-gray-800">
          <MDXRenderer>{post.body}</MDXRenderer>
        </div>
        <nav className="flex flex-wrap w-full justify-between px-4">
          <div>
            {next && (
              <Link to={`/updates${data.next.fields.slug}`} rel="next">
                <button className="bg-green-200 px-2 my-4 rounded-xl text-gray-200">
                  Older Updates
                </button>
              </Link>
            )}
          </div>
          <div>
            {previous && (
              <Link to={`/updates${data.previous.fields.slug}`} rel="prev">
                <button className="bg-green-200 px-2 my-4 rounded-xl text-gray-200">
                  Newer Updates
                </button>
              </Link>
            )}
          </div>
        </nav>
      </div>

      <div className="flex flex-wrap justify-center content-center">
        <p className="text-gray-600">
          Were you looking for something else? Head on over to our&nbsp;
        </p>
        <Link to={'/search'} className="underline text-red-400">
          search page
        </Link>
      </div>
      {/* 👆🏻 End of blog post content*/}
      <Bio />
    </div>
  )
}

export const pageQuery = graphql`
  query blogPost($id: String!, $previous: String, $next: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
      }
      body
      id
    }
    previous: mdx(id: { eq: $previous }) {
      fields {
        slug
      }
    }
    next: mdx(id: { eq: $next }) {
      fields {
        slug
      }
    }
  }
`

export default BlogPostPage

//What the heck gatsby!