import { graphql, useStaticQuery } from "gatsby"

const BlogPostsQuery = () => {
    const BlogPosts = useStaticQuery(graphql`
        query MyQuery {
  allMdx(sort: {fields: frontmatter___date, order: DESC}) {
    edges {
      node {
        frontmatter {
          date (formatString: "MMMM DD, YYYY")
          title
          heroImageAlt
          heroImage {
          childImageSharp {
            gatsbyImageData (
              width: 200
              placeholder: BLURRED
            )
          }
        }
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

export default BlogPostsQuery;