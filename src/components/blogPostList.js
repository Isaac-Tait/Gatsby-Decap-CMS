//Helpful blog post https://blog.bitsrc.io/gatsby-fetching-data-at-the-component-level-with-usestaticquery-397e35e648e

import React from 'react';
import { Link } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import useBlogPosts from './useBlogPosts';

const BlogPostList = () => {
  const getPostList = () => {
    const postList = [];
    const posts = useBlogPosts();
    posts.allMdx.edges.forEach((postEdge) => {
      postList.push({
        path: postEdge.node.fields.slug,
        title: postEdge.node.frontmatter.title,
        excerpt: postEdge.node.excerpt,
        image: postEdge.node.frontmatter.image.childImageSharp.gatsbyImageData,
        alt: postEdge.node.frontmatter.imageAlt,
      });
    });
    return postList;
  };

  const postList = getPostList();

  return (
    <div className="overflow-auto">
      {postList.map((post) => (
        <div className="max-w-6xl">
          <Link to={`/updates${post.path}`} key={post.title}>
            <p className="uppercase text-xl text-yellow-400 font-bold underline hover:text-green-200 flex justify-center">
              {post.title}
            </p>
            <div className="border-2 border-gray-300 rounded-md w-2/3 m-auto">
              <GatsbyImage image={post.image} alt={post.alt} />
            </div>
          </Link>
          <p className="italic text-gray-600 lg:font-semibold lg:text-lg mb-2">
            {post.excerpt}
          </p>
          <hr />
        </div>
      ))}
      <p className="mt-4 flex justify-center">
        Want to read more?&nbsp;
        <Link
          to={`/updates`}
          className="uppercase text-xl text-yellow-400 underline hover:text-red-400"
        >
          Click here
        </Link>
        .
      </p>
    </div>
  );
};

export default BlogPostList;
