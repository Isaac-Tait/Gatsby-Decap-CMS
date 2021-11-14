import React from "react";
import { graphql, Link } from 'gatsby'

import Header from "../../components/header";
import Footer from "../../components/footer";

const BlogPosts = ({ data }) => {
    return (
        <div className="bg-gradient-to-r from-yellow-400 via-red-200 to-indigo-200">
        <Header />
        <div className="h-screen">
        <ul>
        {
        data.allMdx.nodes.map((node) => (
          <article key={node.id}>
            <Link to={`/blog/${node.slug}`}>
              {node.frontmatter.title}
            </Link>
            <p>Posted: {node.frontmatter.date}</p>
          </article>
        ))
      }
      </ul>
        </div>
        <Footer />
        </div>
    );
}

export const query = graphql`
  query {
    allMdx(sort: {fields: frontmatter___date, order: DESC}) {
      nodes {
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