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
                    <div className='mr-4 overflow-y-scroll'>
                        <img 
                            src='https://royal-ridges-retreat.s3.us-west-1.amazonaws.com/summer_camp_page/Day_Horse_Camp_100.png'
                            alt='day_horse_camp'
                            className='w-1/2 flex mx-auto rounded-xl mb-2'
                        />
                        <a 
                            href='https://www.ultracamp.com/clientlogin.aspx?idCamp=1145&campCode=151' 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className='text-yellow-400 font-extrabold text-3xl underline'
                        >Register for Day Horse Camp</a>
                        <div className='font-semibold text-green-200 ml-4 my-4'>
                            <p>Monday-Friday 9am-3:30pm</p>   
                            <p>8-14 Years Old</p>      
                            <p>$350 for the week</p>             
                            <p>$75 ADD ON Extend Day Horse Camp Weeks #2, #4, #6, & #8</p>
                            <p>$50 Bus Transportation</p>
                            <p>New this year! Special groups designed for the younger and older horse lovers - Cowpoke Day Horse Camp /Arena Ride Only (Ages 7-8) and Teen Wrangler Day Horse Camp (Ages 13-16) These groups will take place on certain weeks only. Please see schedule below.</p>
                        </div>
                        <hr />
                        <div>
                            <p>Do you have a kiddo who is crazy about horses? Our Day Horse Camp may be the perfect solution! Your camper will have the opportunity to take riding lessons each day from our skilled instructors, learn exciting information in horse science, grow valuable skills like grooming and saddling, and make friends along the way! In addition to the horsemanship activities, they will engage in team building, do group Bible studies, and go on a scenic trail ride.</p>
                            <p className='italic'>(Cowpoke group will only ride in Arena.)</p>
                            <p className='text-green-200'>Day Horse Camp Extended Camp Option Week #2, #4, #6, & #8:</p>
                            <p>Our extended Day Horse Program will allow campers to experience additional horse time. Campers will stay after camp on Tuesday and Thursday during their Day Horse week so they can continue their day at camp. Dinner will be provided!</p>
                            <p>Please pack a sack lunch for your Day Horse Camper and plan to pick them up at the lower camp Day Horse Flag at 8 pm on Tuesday and Thursday of their week at camp.</p>
                            <p className='mt-4'>Activities to Include:</p>
                            <p className='italic ml-2'>* Campfire, Dinner and S&#8217;Mores</p>
                            <p className='italic ml-2'>* Additional Trail and Arena Rides</p>
                            <p className='italic ml-2'>* More Horse Science, Horse Activities and Groom/Saddle Time</p>
                            <p className='italic ml-2'>* Outdoor Games and Crafts</p>
                        </div>
                        <hr />
                        <div className='my-2 ml-2'>
                            <p><span className='text-green-200 font-semibold'>Week #1</span> - June 20-24</p>
                            <p><span className='text-green-200 font-semibold'>Week #2</span> - June 27-July 1</p>  
                            <p><span className='text-green-200 font-semibold'>Week #3</span> - July 4-8 <span className='text-green-200'>(Cowpoke Group Available)</span></p>              
                            <p><span className='text-green-200 font-semibold'>Week #4</span> - July 11-15 <span className='text-green-200'>(Teen Wrangler Group Available)</span></p>           
                            <p><span className='text-green-200 font-semibold'>Week #5</span> - July 18-22 <span className='text-green-200'>(Cowpoke Group Available)</span></p>           
                            <p><span className='text-green-200 font-semibold'>Week #6</span> - July 25-29 <span className='text-green-200'>(Teen Wrangler Group Available)</span></p>
                            <p><span className='text-green-200 font-semibold'>Week #7</span> - August 1-5</p>
                            <p><span className='text-green-200 font-semibold'>Week #8</span> - August 8-12</p>
                            <p><span className='text-green-200 font-semibold'>Week #9</span> - August 15-19</p>
                        </div>
                        <a 
                            href='https://www.ultracamp.com/clientlogin.aspx?idCamp=1145&campCode=151' 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className='text-yellow-400 font-extrabold text-3xl underline'
                        >Register for Day Horse Camp</a>
                        <p className='my-20'></p>{/* Spacer */}
                    </div>    
                </div>
            <Footer />
        </div>
    )
}

export default DayHorseCamp