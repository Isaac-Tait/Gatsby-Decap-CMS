import React from 'react'
import { Link } from 'gatsby'

import Header from "../components/header";
import Footer from "../components/footer";

import Image from '../images/dayHorseCamp.jpeg'

const DayHorseCamp = () => {
    return (
        <div className='bg-gradient-to-l from-yellow-200 to-indigo-200'>
            <Header />
                <div className='h-screen grid grid-cols-2'>
                    {/*Column 1*/}
                    <div className='flex flex-col mx-auto'>
                        <Link to={'/registration'} className='my-4 font-cursive hover:underline font-extrabold text-xl text-green-200 hover:text-indigo-500'>
                            <p>Registration</p>
                        </Link>
                        <hr /> 
                        <Link to={'/day-camp'} className='my-4 font-cursive hover:underline text-green-200 hover:text-indigo-500'>
                            <p>Traditional Day Camp</p>
                        </Link>
                        <Link to={'/day-adventure-camp'} className='my-4 font-cursive hover:underline text-green-200 hover:text-indigo-500'>
                            <p>Day Adventure Camp</p>
                        </Link>
                        <Link to={'/specialty-horse-camp'} className='my-4 font-cursive hover:underline text-green-200 hover:text-indigo-500'>
                            <p>Specialty Horse Camp</p>
                        </Link>
                        <Link to={'/day-paintball-camp'} className='my-4 font-cursive hover:underline text-green-200 hover:text-indigo-500'>
                            <p>Day Paintball Camp</p>
                        </Link>
                        <Link to={'/multi-week-camp'} className='my-4 font-cursive hover:underline text-green-200 hover:text-indigo-500'>
                            <p>Multi Week Camp</p>
                        </Link>
                        <Link to={'/bus-transportation'} className='my-4 font-cursive hover:underline text-green-200 hover:text-indigo-500'>
                            <p>Bus Transportation</p>
                        </Link>
                        <Link to={'/faq'} className='my-4 font-cursive hover:underline text-green-200 hover:text-indigo-500'>
                            <p>FAQs</p>
                        </Link>
                    </div>
                    {/*Column 2*/}
                    <div className='mr-4 overflow-y-scroll'>
                        <img 
                            src={Image}
                            alt='day_horse_camp'
                            className='w-1/2 mx-auto rounded-xl my-6'
                        />
                        <a 
                            href='https://www.ultracamp.com/clientlogin.aspx?idCamp=1145&campCode=151' 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className='text-yellow-400 font-extrabold text-3xl hover:underline hover:text-indigo-400 flex justify-center'
                        >Register for Day Horse Camp</a>
                        <div className=' text-green-200 ml-4 my-4 text-center'>                            <p>Monday-Friday 9am-3:30pm</p>   
                            <p>8-14 Years Old</p>      
                            <p>$400 for the week</p>
                            <p>$60 Bus Transportation</p>             
                            <p>$125 ADD ON Overnight Blast Weeks 2, 4, 6, 8</p>
                            <p>New this year! Special groups designed for the younger and older horse lovers</p>
                            <p>Cowpoke Day Horse Camp /Arena Ride Only (Ages 7-8) Weeks 3 & 7</p>
                            <p>Teen Wrangler Day Horse Camp (Ages 13-16) Weeks 4 & 8</p>
                            <p className='mt-2'><span className='font-semibold'>New this year!</span> Day Horse Specialty Theme Camps Weeks 1, 3, 5, 7</p>
                        </div>
                        <hr />
                        <div>
                            <p>Do you have a kiddo who is crazy about horses? Our Day Horse Camp may be the perfect solution! Your camper will have the opportunity to take riding lessons each day from our skilled instructors, learn exciting information in horse science, grow valuable skills like grooming and saddling, explore the Bible during the daily Bible lesson and make friends along the way! In addition to the horsemanship activities, they will engage in team building, group Bible studies, and go on a scenic trail ride. Riders must wear closed-toe shoes and long pants to ride. Helmets are provided.</p>
                            {/*Updated for 2023*/}
                            <p className='text-xl font-bold'>Day Horse Camp Overnight Blast Option</p>
                            <p>Our Overnight Blast Day Horse Program will allow campers to experience additional horse time and stay overnight in the cabins on Thursday night of their week at camp. Campers will remain after camp Thursday during their Day Horse week to continue their day at camp. Dinner on Thursday, Breakfast on Friday, and a packed lunch for Friday are provided! There is limited availability, and <span className='uppercase font-semibold'>onb</span> will only be available on certain weeks. Please sign up for this option early to reserve your space. Don’t forget your sleeping bag and items needed for the next day!</p>
                            <p className='mt-4'>Activities to Include:</p>
                            <p className='italic ml-2'>* Dinner and Campfire</p>
                            <p className='italic ml-2'>* Additional Trail and Arena Rides</p>
                            <p className='italic ml-2'>* More Horse Science, Horse Activities and Groom/Saddle Time</p>
                            <p className='italic ml-2'>* Outdoor Games</p>
                        </div>
                        <hr />
                        <div className='my-2 ml-2 text-center'>
                            <p><span className='text-green-200 font-semibold'>Week #1</span> - June 19-23</p>
                            <p><span className='text-green-200 font-semibold'>Week #2</span> - June 26-30&nbsp;<span className='text-sm italic font-bold text-green-200'>(ONB Available)</span></p>  
                            <p><span className='text-green-200 font-semibold'>Week #3</span> - July 3-7&nbsp;<span className='text-sm italic font-bold text-green-200'>(Cowpoke Group Available)</span></p>              
                            <p><span className='text-green-200 font-semibold'>Week #4</span> - July 10-14&nbsp;<span className='text-sm italic font-bold text-green-200'>(ONB and Teen Wrangler Groups Adventure Available)</span></p>           
                            <p><span className='text-green-200 font-semibold'>Week #5</span> - July 17-21</p>           
                            <p><span className='text-green-200 font-semibold'>Week #6</span> - July 24-28&nbsp;<span className='text-sm italic font-bold text-green-200'>(ONB Available)</span></p>
                            <p><span className='text-green-200 font-semibold'>Week #7</span> - July 31 - August 4&nbsp;<span className='text-sm italic font-bold text-green-200'>(Cowpoke Group Available)</span></p>
                            <p><span className='text-green-200 font-semibold'>Week #8</span> - August 7-11&nbsp;<span className='text-sm italic font-bold text-green-200'>(ONB and Teen Wrangler Groups Adventure Available)</span></p>
                            <p><span className='text-green-200 font-semibold'>Week #9</span> - August 14-18</p>
                        </div>
                        <a 
                            href='https://www.ultracamp.com/clientlogin.aspx?idCamp=1145&campCode=151' 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className='text-yellow-400 py-10 font-extrabold text-3xl hover:underline hover:text-indigo-400 flex justify-center'
                        >Register for Day Horse Camp</a>
                    </div>    
                </div>
            <Footer />
        </div>
    )
}

export default DayHorseCamp