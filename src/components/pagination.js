import React from 'react';
import { Link } from 'gatsby';

const Pagination = ({ pageContext }) => {
  
  const { previousPagePath, nextPagePath } = pageContext;

    return (
      <nav class="flex flex-wrap w-full justify-between">
        <div class="flex">
          {previousPagePath && (
            <Link to={previousPagePath}>
              <button className="">← Newer Posts</button>
            </Link>
          )}
        </div>

        <div class="flex">
          {nextPagePath && (
            <Link to={nextPagePath}>
              <button className="">Older Posts →</button>
            </Link>
          )}
        </div>
      </nav>
    );
};

export default Pagination;