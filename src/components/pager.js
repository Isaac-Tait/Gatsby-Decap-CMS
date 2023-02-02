import React from 'react'
import { Link } from 'gatsby'

const Pagination = ({ pageContext }) => {
  console.log(pageContext)
  const { numPages, currentPage } = pageContext
  const isFirst = currentPage === 1
  const isLast = currentPage === numPages
  const prevPage =
    currentPage - 1 === 1 ? '/updates' : (currentPage - 1).toString()
  const nextPage = (currentPage + 1).toString()

  return (
    <nav>
      <div className="flex flex-wrap justify-between">      
        {/* Nav Menu*/}
        {Array.from({ length: numPages }, (_, i) => (
          <div key={`pagination-number${i + 1}`}>
            <Link
              to={`/updates/${i === 0 ? '' : i + 1}`}
              className="bg-yellow-400 rounded-xl px-2 text-gray-700 hover:text-indigo-400 hover:bg-white"
            >
              {i + 1}
            </Link>
          </div>
        ))}
      </div>
    </nav>
  )
}

export default Pagination
