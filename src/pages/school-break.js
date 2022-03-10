import React from "react";

import { Link } from 'gatsby'

import Header from "../components/header";
import Footer from "../components/footer";

const SchoolBreak = () => {
    return (
        <div className="bg-gradient-to-r from-yellow-200 to-green-200">
            <Header />
            <div className='h-screen grid grid-cols-2 max-w-6xl mx-auto'>
                    {/*Column 1*/}
                    <div className='flex flex-col mx-auto'>
                        <Link to={'/spring-day-camp'} className='font-cursive my-4 hover:underline text-green-200 hover:text-indigo-500'>
                            <p>Spring Day Camp</p>
                        </Link>
                        <Link to={'/winter-day-camp'} className='font-cursive my-4 hover:underline text-green-200 hover:text-indigo-500'>
                            <p>Winter Day Camp</p>
                        </Link>
                    </div>
                    {/*Column 2*/}
                    <div className='mr-4 overflow-y-scroll'>
                        <img 
                            src='https://royal-ridges-retreat.s3.us-west-1.amazonaws.com/programs-page/headerPhotos/SchoolBreakCamps.png' 
                            alt='summer camp descriptions'
                            className='rounded-xl mt-1'
                        />
                        <p>Oops migrating sites is not without its little hiccups... Stay tuned this page will be live asap. (3/10/22)</p>
                    </div>    
                </div>
            <Footer />
        </div>
    )
}

export default SchoolBreak;