
import React from "react"

import { Link } from "gatsby"

import { Highlight } from "react-instantsearch-dom";

const SearchPreview = ({ hit }) => {
    return (
        <div>
            <Link to={hit.slug} className="text-2xl text-green-200 hover:text-indigo-600">
                <Highlight hit={hit} attribute="title" tagName="mark" />
            </Link>

            <div class="italic ml-2">
                <Highlight hit={hit} attribute="excerpt" tagName="mark" />
            </div>
        </div>
    )
};

export default SearchPreview