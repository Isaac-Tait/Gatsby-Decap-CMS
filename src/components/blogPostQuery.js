import { useStaticQuery, graphql } from "gatsby"

const useBlogPosts = () => {
const BlogPosts = useStaticQuery(graphql`
query BlogPosts {
  allMdx {
    edges {
      node {
        excerpt
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          image {
            childImageSharp {
              gatsbyImageData(layout: CONSTRAINED)
            }
          }
          imageAlt
        }
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