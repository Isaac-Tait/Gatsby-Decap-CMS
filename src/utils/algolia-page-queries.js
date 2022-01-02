const escapeStringRegexp = require("escape-string-regexp")

const pagePath = `src/pages`
const indexName = `staticPages`

const pageQuery = `{
  pages:  allSitePage (
      filter: {
          fileAbsolutePath: {regex: "/${escapeStringRegexp(pagePath)}/"},
        }
    ) {
    edges {
      node {
        path
      }
    }
  }
}`

function pageToAlgoliaRecord({ node: { id, path, ...rest } }) {
  return {
    objectID: id,
    ...path,
    ...rest,
  }
}

const queries = [
  {
    query: pageQuery,
    transformer: ({ data }) => data.pages.edges.map(pageToAlgoliaRecord),
    indexName,
    settings: { attributesToSnippet: [`excerpt:20`] },
  },
]

module.exports = queries