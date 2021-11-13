/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      site {
        siteMetadata {
          author {
            name
            summary
          }
        }
      }
    }
  `)

  // Set these values by editing "siteMetadata" in gatsby-config.js
  const author = data.site.siteMetadata?.author

  return (
    <div className="flex flex-wrap justify-between heropattern-topography-yellow-400">
      <StaticImage
        layout="constrained"
        formats={["auto", "webp", "avif"]}
        src="https://royal-ridges-retreat.s3.us-west-1.amazonaws.com/staff/joshuaTait.jpg"
        width={75}
        height={75}
        quality={95}
        alt="Profile picture"
        className="rounded-2xl ml-2 my-2"
      />
      {author?.name && (
        <p className="text-green-200 font-semibold flex flex-wrap justify-center content-center mr-2">
          Written by <strong>&nbsp;{author.name}&nbsp;</strong> {author?.summary || null}
          {` `}
        </p>
      )}
    </div>
  )
}

export default Bio
