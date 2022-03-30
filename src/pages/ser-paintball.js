import React from "react";

import { Link } from "gatsby";

import Header from "../components/header";
import Footer from "../components/footer";

const SerPaintball = () => {
    return (
        <div className="bg-gradient-to-t from-yellow-200 to-indigo-200">
          <Header />
            <div className="max-w-6xl mx-2 md:mx-auto text-xs md:text-base h-screen">
                <div className='text-center flex flex-col'>
                    <Link 
                        to='/staff-excellence-radar-3'
                        className='text-2xl my-6 font-semibold w-1/4 mx-auto text-gray-300 hover:underline hover:text-indigo-600'
                    > {"<"}{"<"}{' '}Online Training{' '}{"<"}{"<"}</Link>
                </div>
            </div>
          <Footer />
      </div>
    );
}

export default SerPaintball;