import React from "react"

import SEO from "../components/seo"
import Pagination from "../templates/blog-pagination"

const BlogPostsLanding = () => {
    return (
        <div>
            <SEO />
                {posts.map(({ node }) => {
                const title = node.frontmatter.title || node.fields.slug
                return (
                    <div>
                        <article key={node.fields.slug}>
                        <header class="ml-16 mr-2">
                            <p class="font-bold text-sm text-gray-800">
                            <Link to={node.fields.slug}>{title}</Link>
                            </p>
                            <small class="italic text-lg text-gray-700 tracking-wide">{node.frontmatter.date}</small>
                        </header>
                        <hr />
                        <section class="ml-16 text-gray-700 mb-2 tracking-wide">
                            <p 
                            dangerouslySetInnerHTML={{
                                __html: node.frontmatter.description || node.excerpt,
                            }}
                            />
                        </section>
                        </article>
                    </div>    
                ) 
            })}
        <Pagination />
        </div>
    )
};

export default BlogPostsLanding