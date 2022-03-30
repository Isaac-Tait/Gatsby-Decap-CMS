import React from "react";

import { Link } from "gatsby";

import Header from "../components/header";
import Footer from "../components/footer";

const SerPaintball = () => {
    return (
        <div className="bg-yellow-200">
          <Header />
            <div className="max-w-6xl mx-2 md:mx-auto text-xs md:text-base h-screen overflow-y-scroll">
                <p className='text-center font-semibold text-3xl mb-4'>PAINTBALL STAFF</p>
                <div className='ml-2 flex flex-col'>
                    <a href='https://www.youtube.com/watch?v=tjab07IpM5U' target="_blank" rel="noopener noreferrer" className='text-green-200 hover:underline hover:text-indigo-400 ml-2 w-1/4'>Paintball Rules Video</a>
                    <a href='https://royal-ridges-retreat.s3.us-west-1.amazonaws.com/summer_staff/Paintball_Rules.pdf' target="_blank" rel="noopener noreferrer" className='text-green-200 hover:underline hover:text-indigo-400 ml-2 w-1/4'>Paintball Rules Printed</a>
                    <div class="py-4">
                        <div class="w-full border-t border-gray-800"></div>
                    </div>
                    <a href='https://docs.google.com/forms/d/e/1FAIpQLSfOGCjj2Q3ZA1iLqQj7p3heD8s-Pmvzl6EfnFhuhhN_2dk8cA/viewform?usp=sf_link' target="_blank" rel="noopener noreferrer" className='text-green-200 hover:underline hover:text-indigo-400 ml-2 w-1/4'>PAINTBALL QUIZ</a>
                </div>
                <div className='text-center flex flex-col'>
                    <Link 
                        to='/staff-excellence-radar-4'
                        className='text-medium lg:text-2xl my-6 font-semibold w-full lg:w-1/4 mx-auto text-gray-600 hover:underline hover:text-indigo-600'
                    > {"<"}{"<"}{' '}Online Training{' '}{"<"}{"<"}</Link>
                </div>
            </div>
          <Footer />
      </div>
    );
}

export default SerPaintball;