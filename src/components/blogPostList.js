//Helpful blog post https://blog.bitsrc.io/gatsby-fetching-data-at-the-component-level-with-usestaticquery-397e35e648e

import React from "react"
import { Link } from "gatsby"

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
        date: postEdge.node.frontmatter.date,
      })
  })
  return postList;
}

const postList = getPostList();

return (
  <div>
   {postList.map((post) => (
     <div className="max-w-6xl flex flex-col mx-auto">
      <Link to={post.path} key={post.title}>
        <p className="uppercase text-xl text-yellow-400 underline hover:text-red-400">{post.title}</p>
      </Link>
      <p className="ml-2">{post.date}</p>
      <p className="ml-4 italic">{post.excerpt}</p>
     </div>
   ))}
   <p className="mt-4 flex justify-center">Want to read more?&nbsp;<Link to={`/blog`} className="uppercase text-xl text-yellow-400 underline hover:text-red-400">Click here</Link>.</p>
  </div>
);
};

export default BlogPostList;