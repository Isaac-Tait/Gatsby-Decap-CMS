import React from 'react';
import { graphql, Link } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

import Header from '../components/header';
import Pagination from '../components/pager';
import Footer from '../components/footer';

const BlogPosts = ({ data, pageContext }) => {
  return (
    <div className="bg-gradient-to-l from-green-200 to-yellow-200">
      <Header />
      <div className="grid place-content-center overflow-y-scroll px-1 pb-2">
        <div className="max-w-6xl md:mx-auto h-screen flex flex-col justify-center">
          {data.allMdx.nodes.map((node) => {
            const { frontmatter } = node;
            const image = getImage(frontmatter.image);
            return (
              <div>
                <article key={node.id}>
                  <div className="mt-2 flex flex-col">
                    <Link to={`/updates/${node.slug}`}>
                      <p className="flex justify-center text-pink-800 hover:text-indigo-400 font-cursive text-3xl ">
                        {node.frontmatter.title}
                      </p>
                      <div className="flex justify-center">
                        <GatsbyImage
                          image={image}
                          alt={frontmatter.imageAlt}
                          className="w-1/2 mt-2 border-2 border-gray-300 rounded-md"
                        />
                      </div>
                    </Link>
                  </div>

                  <p className="mb-4 italic text-gray-700 lg:font-bold lg:text-lg">
                    {node.excerpt}
                  </p>
                  <hr />
                </article>
              </div>
            );
          })}
          <div>
            <Pagination pageContext={pageContext} />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BlogPosts;

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
`;
