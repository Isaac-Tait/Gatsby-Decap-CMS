import React from 'react'
import { Link } from 'gatsby'

import Header from "../components/header";
import Footer from "../components/footer";

const DayPaintBall = () => {
    return (
        <div className='bg-gradient-to-r from-yellow-400 via-yellow-200 to-indigo-200'>
            <Header />
                <div className='h-screen grid grid-cols-2 max-w-6xl mx-auto'>
                    {/*Column 1*/}
                    <div className='flex flex-col mx-auto'>
                        <Link to={'/registration'} className='my-4 underline font-extrabold text-xl text-green-200 hover:text-indigo-500'>
                            <p>Registration</p>
                        </Link>
                        <hr /> 
                        <Link to={'/day-camp'} className='my-4 underline text-green-200 hover:text-indigo-500'>
                            <p>Traditional Day Camp</p>
                        </Link>
                        <Link to={'/day-horse-camp'} className='my-4 underline text-green-200 hover:text-indigo-500'>
                            <p>Day Horse Camp</p>
                        </Link>
                        <Link to={'/day-adventure-camp'} className='my-4 underline text-green-200 hover:text-indigo-500'>
                            <p>Day Adventure Camp</p>
                        </Link>
                        <Link to={'/summer-giddy-up-program'} className='my-4 underline text-green-200 hover:text-indigo-500'>
                            <p>Summer Giddy Up Program</p>
                        </Link>
                        <Link to={'/bus-transportation'} className='my-4 underline text-green-200 hover:text-indigo-500'>
                            <p>Bus Transportation</p>
                        </Link>
                        <Link to={'/faq'} className='my-4 underline text-green-200 hover:text-indigo-500'>
                            <p>FAQs</p>
                        </Link>
                    </div>
                    {/*Column 2*/}
                    <div className='mr-4 overflow-y-scroll'>
                        <img 
                            src='https://royal-ridges-retreat.s3.us-west-1.amazonaws.com/summer_camp_page/Paintball_Day_Camp_100.png'
                            alt='paintball_day_camp'
                            className='w-1/2 flex mx-auto rounded-xl my-6'
                        />
                        <a 
                            href='https://www.ultracamp.com/clientlogin.aspx?idCamp=1145&campCode=151' 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className='text-yellow-400 font-extrabold text-3xl underline'
                        >Register for Paintball Camp</a>
                        <div className='font-semibold text-green-200 ml-4 my-4'>
                            <p>Monday-Friday 9am-3:30pm</p>        
                            <p>$315 for the week</p>             
                            <p>$50 Bus Transportation</p>
                            <p>SPLAT Entering Grades 3rd - 6th</p> 
                            <p>EXTREME Entering Grades 6th - 10th</p> 
                        </div>
                        <hr />
                        <p><span className='text-green-200 font-semibold'>Paintball Day Camp</span>&nbsp;~&nbsp;Campers learn and play the extreme sport of Paintball.  In the morning, campers learn the finer points of the game while fine-tuning their skills. Team building activities help teach communication skills while we grow our character through a daily Bible Study. The last three hours of the day are game-time, where it is time to sling paint!</p>
                        <p className='italic mt-4'>Extreme uses conventional markers and balls at 290 fps, with woodsball being the primary emphasis.</p>
                        <p className='italic my-4'>Splat is our low-impact paintball which uses pump markers, a smaller ball, max. speed at 130 fps and is played mainly in the Tactical Village.</p>
                        <hr />
                        <div className='my-2 ml-2'>
                            <p><span className='text-green-200 font-semibold'>Week #1</span> - June 20-24<span className='text-green-200 font-bold'>&nbsp;SPLAT</span></p>
                            <p><span className='text-green-200 font-semibold'>Week #2</span> - June 27-July 1<span className='text-green-200 font-bold'>&nbsp;SPLAT</span></p>  
                            <p><span className='text-green-200 font-semibold'>Week #3</span> - July 4-8<span className='text-yellow-400 font-bold'>&nbsp;EXTREME</span></p>              
                            <p><span className='text-green-200 font-semibold'>Week #4</span> - July 11-15<span className='text-green-200 font-bold'>&nbsp;SPLAT</span></p>           
                            <p><span className='text-green-200 font-semibold'>Week #5</span> - July 18-22<span className='text-green-200 font-bold'>&nbsp;SPLAT</span></p>           
                            <p><span className='text-green-200 font-semibold'>Week #6</span> - July 25-29<span className='text-yellow-400 font-bold'>&nbsp;EXTREME</span></p>
                            <p><span className='text-green-200 font-semibold'>Week #7</span> - August 1-5<span className='text-green-200 font-bold'>&nbsp;SPLAT</span></p>
                            <p><span className='text-green-200 font-semibold'>Week #8</span> - August 8-12<span className='text-green-200 font-bold'>&nbsp;SPLAT</span></p>
                            <p><span className='text-green-200 font-semibold'>Week #9</span> - August 15-19<span className='text-yellow-400 font-bold'>&nbsp;EXTREME</span></p>
                        </div>
                        <a 
                            href='https://www.ultracamp.com/clientlogin.aspx?idCamp=1145&campCode=151' 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className='text-yellow-400 font-extrabold text-3xl underline'
                        >Register for Paintball Camp</a>
                        <p className='my-20'></p>{/* Spacer */}
                    </div>    
                </div>
            <Footer />
        </div>
    )
}

export default DayPaintBall