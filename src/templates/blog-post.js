import * as React from 'react'
import { graphql, Link } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

import Bio from '../components/bio'
import Logo from '../images/logo.png';

const BlogPostTemplate = ({ data }) => {
    const image = getImage(data.mdx.frontmatter.heroImage)
    
    return (
    <div>
    <div className="">
      <header className="md:flex flex-wrap items-center heropattern-topography-yellow-400 px-8 py-6">
              <div className="md:flex md:flex-1">
              <Link to="/">
                  <div className="flex-grow mt-1 text-center md:text-left">
                      <img src={Logo} alt="logo" className="w-56 inline-block"/>
                  </div>
              </Link>
              </div>
                  <nav className="flex-grow sm:flex-grow-0 md:font-semibold md:uppercase min-h-screenmt-4 mt-4 md:mt-0 overflow-y-auto">
                      <ul className="flex justify-center content-center">
                          <li className="mx-4">
                              <Link to={'/summercamp'} className="underline text-green-200 font-semibold uppercase">Summer Camp</Link>
                          </li>
                          <li className="mx-4">
                              <Link to={'/programs'} className="underline text-green-200 font-semibold uppercase">Programs</Link>
                          </li>
                          <li className="mx-4">
                            <Link to={'/blog'} className="underline text-green-200">Blog</Link>
                        </li>
                          <li className="mx-4">
                              <Link to={'/support'} className="underline text-green-200 font-semibold uppercase">Support</Link>
                          </li>
                          <li className="mx-4">
                              <Link to={'/about'} className="underline text-green-200 font-semibold uppercase">About</Link>
                          </li>
                          <li className="mx-4">
                              <Link to={'/contact'} className="underline text-green-200 font-semibold uppercase">Contact</Link>
                          </li>
                      </ul>
                  </nav> 
          </header>
        </div>  
        {/*👇🏼Controls blog post content*/}
        <div className="grid place-items-center bg-yellow-200 my-2">
          <div className="mt-2">
              <GatsbyImage
                      image={image}
                      alt={data.mdx.frontmatter.heroImageAlt}
                      className="rounded-2xl shadow-xl ml-2"
                  />
            </div>
                <p className="font-semibold text-3xl uppercase text-gray-700">{data.mdx.frontmatter.title}</p>
                <p className="text-gray-600">Posted: {data.mdx.frontmatter.date}</p>
                <hr />
            <div className="mx-4 text-gray-800">
                <MDXRenderer>       
                    {data.mdx.body}
                </MDXRenderer>
            </div>
        </div>
        {/*👇🏼Controls blog post navigation*/}
        <div>
            <p class="font-semibold flex w-1/2 justify-center mx-auto">Blog Navigation</p>
            <nav class="text-xs md:text-base flex w-1/2 justify-between mx-auto">

            <div>
            {previous && (
                <Link to={previous.fields.slug} rel="prev">
                    <button class="tracking-wide m-2 inline-block px-3 py-1 rounded-lg shadow-lg bg-red-500 text-white hover:bg-gray-300 hover:text-black">← {previous.frontmatter.title}</button> 
                </Link>
                )}
            </div>

            <div>
            {next && (
                <Link to={next.fields.slug} rel="next">
                    <button class="tracking-wide m-2 inline-block px-3 py-1 rounded-lg shadow-lg bg-red-500 text-white hover:bg-gray-300 hover:text-black">{next.frontmatter.title} →</button>
                </Link>
                )}
            </div>
      
            </nav>
        </div>
        <Bio />
      </div>
    )
  }

export const query = graphql`
query MyQuery($id: String) {
  mdx(id: {eq: $id}) {
    body
    frontmatter {
      heroImageAlt
      heroImage {
        childImageSharp {
          gatsbyImageData
        }
      }
      title
      date(formatString: "MMMM DD, YYYY")
    }
    excerpt(pruneLength: 100, truncate: false)
  }
}
`

export default BlogPostTemplate;