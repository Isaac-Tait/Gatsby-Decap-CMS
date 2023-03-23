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
      <div className="flex flex-1">
        <div className="max-w-6xl md:mx-auto">
          {data.allMdx.nodes.map((node) => {
            const { frontmatter } = node;
            const image = getImage(frontmatter.image);
            return (
              <div>
                <article key={node.id}>
                  <div className="mx-2 lg:m-0">
                    <Link to={`/updates/${node.slug}`}>
                      {/*
                        <p className="flex justify-center text-pink-800 hover:text-indigo-400 font-cursive text-3xl">
                          {node.frontmatter.title}
                        </p>
                      */}
                      <div className="flex justify-center">
                        <GatsbyImage
                          image={image}
                          alt={frontmatter.imageAlt}
                          className="mt-2 border-2 border-gray-300 rounded-md"
                        />
                      </div>
                      <p className="text-center italic font-light text-sm text-gray-800 mb-6">
                        Click To Read More....
                      </p>
                    </Link>
                  </div>
                  {/* 
                  <p className="mb-4 italic text-gray-700 text-center lg:font-bold lg:text-lg">
                    {node.excerpt}
                  </p>
                  */}
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
              gatsbyImageData(
                layout: CONSTRAINED
                width: 500
                placeholder: BLURRED
              )
            }
          }
        }
        id
        slug
      }
    }
  }
`;
