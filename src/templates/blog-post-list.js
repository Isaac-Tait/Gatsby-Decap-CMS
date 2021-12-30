import React from 'react'
import { graphql, Link } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

import Header from '../components/header'
import Pagination from '../components/pager'
import Footer from '../components/footer'

const BlogPosts = ({ data, pageContext }) => {
  return (
    <div className="bg-gradient-to-r from-yellow-400 via-red-200 to-indigo-200">
      <Header />
      <div className="md:h-screen grid place-content-center overflow-y-scroll">
        <div className="max-w-6xl md:mx-auto">
          {data.allMdx.nodes.map((node) => {
            const { frontmatter } = node
            const image = getImage(frontmatter.image)
            return (
              <div className="flex justify-center align-middle">
                <article key={node.id}>
                  <div className="text-pink-800 hover:text-indigo-400 text-4xl mt-2">
                    <Link to={`/updates/${node.slug}`}>
                      {node.frontmatter.title}
                    </Link>
                  </div>
                  <GatsbyImage
                    image={image}
                    alt={frontmatter.imageAlt}
                    className="w-1/4 mt-2 rounded-xl"
                  />
                  <p className="mb-4 italic text-gray-700">{node.excerpt}</p>
                  <hr />
                </article>
              </div>
            )
          })}
          <div>
            <Pagination pageContext={pageContext} />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default BlogPosts

export const query = graphql`
  query ($skip: Int, $limit: Int) {
    allMdx(
      sort: { fields: frontmatter___date, order: DESC }
      skip: $skip
      limit: $limit
    ) {
      nodes {
        excerpt
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          imageAlt
          image {
            childImageSharp {
              gatsbyImageData(layout: CONSTRAINED)
            }
          }
        }
        id
        slug
      }
    }
  }
`
