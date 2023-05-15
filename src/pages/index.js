import * as React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import Seo from '../components/seo';
import HomePage from '../components/homePage';

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title || `Title`;

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="Explore" />
      <HomePage />
    </Layout>
  );
};

export default BlogIndex;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(sort: { frontmatter: { date: DESC } }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
        }
      }
    }
  }
`;
