import React from "react";
import { graphql, Link } from 'gatsby'

import Header from "../components/header";
import Pager from "../components/pager";
import Footer from "../components/footer";

const BlogPosts = ({ data, pageContext }) => {
  const posts = data.allMdx.edges;

    return (
        <div className="bg-gradient-to-r from-yellow-400 via-red-200 to-indigo-200">
          <Header />
        <div className="h-screen grid place-content-center">
            {posts.map(({ node }) => {
              return (
                <div className="max-w-6xl md:mx-auto">
                  <div className="flex justify-center align-middle">
                    <article key={node.fields.id}>
                      <header className="text-pink-800 underline hover:text-indigo-400 text-4xl mt-2">
                        <Link to={node.fields.slug}>
                          {title}
                        </Link>
                      </header>
                        <p className="ml-2 text-gray-600">Posted: {node.frontmatter.date}</p>
                        <p className="ml-4 italic text-gray-700">{node.excerpt}</p>
                    </article>
                  </div>
                </div>
              )
              })}
            <Pager pageContext={pageContext} />
          </div>
            <Footer />
        </div>
    );
}

export default BlogPosts;

export const query = graphql`
  query ($skip: Int!, $limit: Int!){
    allMdx(
      sort: {fields: frontmatter___date, order: DESC}
      skip: $skip 
      limit: $limit
      ) {
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