import React from 'react'
import { Link } from 'gatsby';

const Pagination = ({ numPages, currentPage }) => {
	if(numPages === 0) return ""

	const pagesArray = Array.from(Array(numPages).keys()).map( (_, index) => index + 1);
	const previousPage = currentPage - 1 <= 1 ? "" : currentPage - 1;
	const nextPage = currentPage === numPages ? currentPage : currentPage + 1;

	return(
		<div className="flex flex-wrap justify-between">
			<Link 
				className=""
				to={`/${previousPage}`}
			>
				{"<"}
			</Link>
			{
				pagesArray.map( num => {
					return(
						<Page key={num} num={num} current={num === currentPage} />
					)
				})
			}
			<Link 
				className="" 
				to={`/${nextPage}`}>
					{">"}
			</Link>
		</div>
	)
}

const Page = ({ num, current }) => {
	const toPage = num === 1 ? "" : num;

	return(
		<Link className="" to={`/${toPage}`}>{num}</Link>
	)
}

export default Pagination