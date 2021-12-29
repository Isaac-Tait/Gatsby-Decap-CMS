//Helpful blog post https://blog.bitsrc.io/gatsby-fetching-data-at-the-component-level-with-usestaticquery-397e35e648e

import React from "react"
import { Link } from "gatsby"
import {GatsbyImage} from "gatsby-plugin-image"

//import Pager from "../components/pager"
import blogPostQuery from "./blogPostQuery"

const BlogPostList = () => {
  const getPostList = () => {
    const postList = [];
    const posts = blogPostQuery();
    posts.allMdx.edges.forEach((postEdge) => {
      postList.push({
        path: postEdge.node.fields.slug,
        title: postEdge.node.frontmatter.title,
        excerpt: postEdge.node.excerpt,
        image: postEdge.node.frontmatter.image.childImageSharp.gatsbyImageData,
        alt: postEdge.node.frontmatter.imageAlt,
      })
  })
  return postList;
}

const postList = getPostList();

return (
  <div>
   {postList.map((post) => (
     <div className="max-w-6xl">
      <Link to={`/updates${post.path}`} key={post.title}>
        <p className="uppercase text-xl text-yellow-400 underline hover:text-red-400">{post.title}</p>
      </Link>
      
        <div className="w-1/4 ml-2">
          <GatsbyImage
              image={post.image}
              alt={post.alt}
            />
        </div >
      <p className="ml-2 italic">{post.excerpt}</p>
      <hr />
     </div>
   ))}
    <p className="mt-4 flex justify-center">Want to read more?&nbsp;<Link to={`/updates`} className="uppercase text-xl text-yellow-400 underline hover:text-red-400">Click here</Link>.</p>
    
  </div>
);
};

export default BlogPostList;