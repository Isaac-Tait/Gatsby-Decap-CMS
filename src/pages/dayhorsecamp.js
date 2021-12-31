import React from 'react'
import { Link } from 'gatsby'

import Header from "../components/header";
import Footer from "../components/footer";

const DayHorseCamp = () => {
    return (
        <div className='bg-gradient-to-r from-yellow-400 via-yellow-200 to-indigo-200'>
            <Header />
            <p className='text-2xl font-extrabold text-green-200 flex justify-center mb-4'>Summer Camp Information</p>
                <div className='h-screen grid grid-cols-2 max-w-6xl mx-auto'>
                    {/*Column 1*/}
                    <div className='flex flex-col mx-auto'>
                        <Link to={'/registration'} className='my-4 underline font-extrabold text-xl text-green-200 hover:text-indigo-500'>
                            <p>Registration</p>
                        </Link>
                        <hr /> 
                        <Link to={'/daycamp'} className='my-4 underline text-green-200 hover:text-indigo-500'>
                            <p>Traditional Day Camp</p>
                        </Link>
                        <Link to={'/dayadventurecamp'} className='my-4 underline text-green-200 hover:text-indigo-500'>
                            <p>Day Adventure Camp</p>
                        </Link>
                        <Link to={'/daypaintballcamp'} className='my-4 underline text-green-200 hover:text-indigo-500'>
                            <p>Day Paintball Camp</p>
                        </Link>
                        <Link to={'/summergiddyupprogram'} className='my-4 underline text-green-200 hover:text-indigo-500'>
                            <p>Summer Giddy Up Program</p>
                        </Link>
                        <Link to={'/bustransportation'} className='my-4 underline text-green-200 hover:text-indigo-500'>
                            <p>Bus Transportation</p>
                        </Link>
                        <Link to={'/faq'} className='my-4 underline text-green-200 hover:text-indigo-500'>
                            <p>FAQs</p>
                        </Link>
                    </div>
                    {/*Column 2*/}
                    <div className='mr-4'>
                        <img 
                            src='https://royal-ridges-retreat.s3.us-west-1.amazonaws.com/summer_camp_page/Day_Horse_Camp_100.png'
                            alt='day_horse_camp'
                            className='w-1/2'
                        />
                        <p>Day Horse Camp Information</p>
                    </div>    
                </div>
            <Footer />
        </div>
    )
}

export default DayHorseCamp