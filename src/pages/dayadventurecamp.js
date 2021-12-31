import React from 'react'
import { Link } from 'gatsby'

import Header from "../components/header";
import Footer from "../components/footer";

const DayAdventureCamp = () => {
    return (
        <div className='bg-gradient-to-r from-yellow-400 via-yellow-200 to-indigo-200'>
            <Header />
            <p className='text-2xl font-extrabold text-green-200 flex justify-center mb-4'>Summer Camp Information</p>
                <div className='h-screen grid grid-cols-2 max-w-6xl mx-auto'>
                    {/*Column 1*/}
                    <div className='flex flex-col mx-auto '>
                        <Link to={'/registration'} className='my-4 underline font-extrabold text-xl text-green-200 hover:text-indigo-500'>
                            <p>Registration</p>
                        </Link>
                        <hr /> 
                        <Link to={'/daycamp'} className='my-4 underline text-green-200 hover:text-indigo-500'>
                            <p>Traditional Day Camp</p>
                        </Link>
                        <Link to={'/dayhorsecamp'} className='my-4 underline text-green-200 hover:text-indigo-500'>
                            <p>Day Horse Camp</p>
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
                            src='https://royal-ridges-retreat.s3.us-west-1.amazonaws.com/summer_camp_page/Day_Adventure_Camp_100.png' 
                            alt='day_adventure_camp' 
                            className='w-1/2 flex mx-auto rounded-xl mb-2'
                        />
                        <a 
                            href='https://www.ultracamp.com/clientlogin.aspx?idCamp=1145&campCode=151' 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className='text-yellow-400 font-extrabold text-3xl underline'
                        >Register for Adventure Camp</a>
                        <div className='font-semibold text-green-200 ml-4 my-4'>
                            <p>Monday-Friday 9am-3:30pm</p>   
                            <p>Entering Grades 4th - 9th</p>      
                            <p>$250 for the week</p>             
                            <p>$50 Bus Transportation</p>
                        </div>
                        <hr />
                        <p className='mt-4'>Our Day Adventure Camp is back and better than ever! Throughout the week, your camper will learn new outdoor survival skills, test their ability on the climbing wall, play fun team games like gaga ball and human foosball, hone their expertise with slingshots and archery, spend meaningful time exploring the Bible, and, of course, end their week at the high ropes course and zipline. Each day your camper will go home tired, dirty, and ready for the next day's adventures! Day Adventure Campers are divided into the following groups:</p>
                        <p className='font-semibold text-green-200'>Explorers: Grades 4-6</p>
                        <p className='font-semibold text-green-200 mb-4'>Navigators: Grades 6-9</p>
                        <hr />
                        <div className='my-2 ml-2'>
                            <p><span className='text-green-200 font-semibold'>Week #1</span> - June 20-24</p>
                            <p><span className='text-green-200 font-semibold'>Week #2</span> - June 27-July 1</p>  
                            <p><span className='text-green-200 font-semibold'>Week #3</span> - July 4-8</p>              
                            <p><span className='text-green-200 font-semibold'>Week #4</span> - July 11-15</p>           
                            <p><span className='text-green-200 font-semibold'>Week #5</span> - July 18-22</p>           
                            <p><span className='text-green-200 font-semibold'>Week #6</span> - July 25-29</p>
                            <p><span className='text-green-200 font-semibold'>Week #7</span> - August 1-5</p>
                            <p><span className='text-green-200 font-semibold'>Week #8</span> - August 8-12</p>
                            <p><span className='text-green-200 font-semibold'>Week #9</span> - August 15-19</p>
                        </div>
                        <a 
                            href='https://www.ultracamp.com/clientlogin.aspx?idCamp=1145&campCode=151' 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className='text-yellow-400 font-extrabold text-3xl underline'
                        >Register for Adventure Camp</a>
                        <p className='my-20'></p>{/* Spacer */}
                    </div>    
                </div>
            <Footer />
        </div>
    )
}

export default DayAdventureCamp