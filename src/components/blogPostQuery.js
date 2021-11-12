import { useStaticQuery, graphql } from "gatsby"

const useBlogPosts = () => {
    const BlogPosts = useStaticQuery(graphql`
        query MyQuery {
  allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}) {
    edges {
      node {
        frontmatter {
          date (formatString: "MMMM DD, YYYY")
          title
        }
        excerpt(format: PLAIN, pruneLength: 150, truncate: true)
        fields {
          slug
        }
      }
    }
  }
}
`)
    return BlogPosts;
}

export default useBlogPosts;