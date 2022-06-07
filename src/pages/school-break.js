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
                        <p>Looking for a great way for your kids to spend their school breaks. Then sign them up for one of our amazing day camp options and get them outside, discovering new skills, connecting with friends, and making new ones, while growing in their confidence. Our school break camps are aligned with the Battle Ground School District calender. Click on the specific camps for more details.</p>
                    </div>    
                </div>
            <Footer />
        </div>
    )
}

export default SchoolBreak;