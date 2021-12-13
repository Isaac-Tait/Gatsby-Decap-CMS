import React from 'react';
import { graphql } from 'gatsby';

import algoliasearch from 'algoliasearch/lite';
import {
    InstantSearch,
    SearchBox,
    Hits,
} from 'react-instantsearch-dom';

import Header from '../components/header';
import SearchPreview from '../components/search-preview';
import Footer from '../components/footer';

const searchClient = algoliasearch(
    'JJGJY0EWYM',
    'eeb888a5db812975b58d095e719aad92'
);

class Search extends React.Component {
    render() {
        return (
            <div className="bg-gradient-to-r from-yellow-400 via-yellow-200 to-indigo-200">
                <Header />
                <div class="max-w-6xl h-screen flex flex-col mx-auto">
                    {/*👇🏼 Search component*/}
                    <InstantSearch searchClient={searchClient} indexName="Pages">
                        {/*👇🏼 Search Box */}
                        <div class="flex justify-center content-center mt-4">
                            <p className="text-green-200 font-semibold mr-2">Enter your search query:</p>
                            <SearchBox />
                        </div>
                        {/*👇🏼 Hits */}
                        <div className="my-4">
                            <Hits hitComponent={SearchPreview}/>
                        </div>
                    </InstantSearch>

                </div>
                <Footer />
            </div>
    )}
}

export default Search;

export const searchQuery = graphql`
query {
  allMdx(sort: {fields: frontmatter___date, order: DESC}) {
    edges {
      node {
        fields {
          slug
        }
        slug
        frontmatter {
          title
          date(formatString: "MMMM DD, YYYY")
        }
      }
    }
  }
}
`