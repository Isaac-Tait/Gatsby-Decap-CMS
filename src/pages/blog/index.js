import React from "react";
import { graphql, Link } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'

import Header from "../../components/header";
import Footer from "../../components/footer";

const BlogPosts = ({ data }) => {
    return (
        <div className="bg-gradient-to-r from-yellow-400 via-red-200 to-indigo-200">
          <Header />
            <div className="h-screen">
              <div className="max-w-6xl md:mx-auto">
                {
                  data.allMdx.nodes.map((node) => (
                    <div className="flex justify-center">
                      <article key={node.id}>
                      <div className="text-gray-800 underline hover:text-indigo-400 text-4xl mt-2">
                        <Link to={`/blog/${node.slug}`}>
                          {node.frontmatter.title}
                        </Link>
                      </div>
                        <p className="ml-2 text-gray-600">Posted: {node.frontmatter.date}</p>
                        <p className="ml-4 italic text-gray-700">{node.excerpt}</p>
                      </article>
                    </div>
                  ))
                }
              </div>
            </div>
          <Footer />
        </div>
    );
}

export const query = graphql`
  query {
    allMdx(sort: {fields: frontmatter___date, order: DESC}) {
      nodes {
        excerpt(truncate: true, pruneLength: 100)
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
        }
        id
        slug
      }
    }
  }
`

export default BlogPosts;