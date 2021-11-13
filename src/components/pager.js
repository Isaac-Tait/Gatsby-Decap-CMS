//Pagination for 10 count blog list
import React from 'react';
import { Link } from 'gatsby';

const Pager = ({ pageContext }) => {
  
  const { previousPagePath, nextPagePath } = pageContext;

    return (
      <nav class="flex flex-wrap w-full justify-between">
        <div class="flex">
          {previousPagePath && (
            <Link to={previousPagePath}>
              <button class="tracking-wide m-2 inline-block px-3 py-1 rounded-lg shadow-lg bg-blue-500 text-white hover:bg-gray-300 hover:text-black">← Newer Posts</button>
            </Link>
          )}
        </div>

        <div class="flex">
          {nextPagePath && (
            <Link to={nextPagePath}>
              <button class="tracking-wide m-2 inline-block px-3 py-1 rounded-lg shadow-lg bg-blue-500 text-white hover:bg-gray-300 hover:text-black">Older Posts →</button>
            </Link>
          )}
        </div>
      </nav>
    );
};

export default Pager;