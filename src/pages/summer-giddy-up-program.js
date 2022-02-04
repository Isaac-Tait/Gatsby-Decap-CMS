import React from 'react'
import { Link } from 'gatsby'

import Header from "../components/header";
import Footer from "../components/footer";

const SummerGiddyUp = () => {
    return (
        <div className='bg-gradient-to-l from-yellow-200 to-indigo-200'>
            <Header />
                <div className='h-screen grid grid-cols-2 max-w-6xl mx-auto'>
                    {/*Column 1*/}
                    <div className='flex flex-col mx-auto'>
                        <Link to={'/registration'} className='my-4 font-cursive hover:underline font-extrabold text-xl text-green-200 hover:text-indigo-500'>
                            <p>Registration</p>
                        </Link>
                        <hr /> 
                        <Link to={'/day-camp'} className='my-4 font-cursive hover:underline text-green-200 hover:text-indigo-500'>
                            <p>Traditional Day Camp</p>
                        </Link>
                        <Link to={'/day-horse-camp'} className='my-4 font-cursive hover:underline text-green-200 hover:text-indigo-500'>
                            <p>Day Horse Camp</p>
                        </Link>
                        <Link to={'/day-adventure-camp'} className='my-4 font-cursive hover:underline text-green-200 hover:text-indigo-500'>
                            <p>Day Adventure Camp</p>
                        </Link>
                        <Link to={'/day-paintball-camp'} className='my-4 font-cursive hover:underline text-green-200 hover:text-indigo-500'>
                            <p>Day Paintball Camp</p>
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
                        <img src='https://royal-ridges-retreat.s3.us-west-1.amazonaws.com/summer_camp_page/Summer_GiddyUp_15.png'
                            alt='summer_giddyup_info' 
                            className='w-1/2 flex mx-auto rounded-xl my-6' 
                        />
                        <a 
                            href='https://www.ultracamp.com/clientlogin.aspx?idCamp=1145&campCode=151' 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className='text-yellow-400 font-extrabold text-3xl hover:underline hover:text-indigo-400'
                        >Register for Summer Giddy Up</a>
                        <div className='font-semibold text-green-200 ml-4 my-4'>
                            <p>Monday-Friday 9am-3:30pm</p>   
                            <p>Entering Grades 1st - 5th</p>      
                            <p>$640 for four (4) weeks</p>             
                            <p>$75 ADD ON Extend Day Horse Camp Weeks #2, #4, #6, & #8</p>
                            <p>$50 Bus Transportation (You must purchase bus for each week your child attends.)</p>
                        </div>
                        <hr />
                        <p className='my-4'>Our popular GiddyUp Program will be continuing throughout the summer! This program is ideal for the repeating camper who wants to experience multiple weeks at Royal Ridges. GiddyUp participants will enjoy various activities (including a special surprise activity each week), fun games, and a different Bible Story focus each week. Purchased four weeks at a time, you choose the four weeks that work best for your schedule.</p>
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
                            className='text-yellow-400 font-extrabold text-3xl hover:underline hover:text-indigo-400'
                        >Register for Summer Giddy Up</a>
                        <p className='my-20'></p>{/* Spacer */}
                    </div>    
                </div>
            <Footer />
        </div>
    )
}

export default SummerGiddyUp