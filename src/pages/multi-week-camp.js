import React from 'react'
import { Link } from 'gatsby'

import Header from "../components/header";
import Footer from "../components/footer";

import Camp from '../images/multiWeekCamp.jpeg';

const MultiWeekCamp = () => {
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
                        <Link to={'/day-horse-camp'} className='my-4 font-cursive hover:underline text-green-200 hover:text-indigo-500'>
                            <p>Day Horse Camp</p>
                        </Link>
                        <Link to={'/specialty-horse-camp'} className='my-4 font-cursive hover:underline text-green-200 hover:text-indigo-500'>
                            <p>Specialty Horse Camp</p>
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
                        <img src={Camp}
                            alt='multi-week-camp' 
                            className='w-1/2 flex mx-auto rounded-xl my-6' 
                        />
                        <a 
                            href='https://www.ultracamp.com/clientlogin.aspx?idCamp=1145&campCode=151' 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className='text-yellow-400 font-extrabold text-3xl hover:underline hover:text-indigo-400 flex justify-center'
                        >Register for Multi Week Camp</a>
                        <div className='font-semibold text-green-200 ml-4 my-4 text-center'>
                            <p>Monday-Friday 9am-3:30pm</p>        
                            <p>$525 for three (3) weeks</p>             
                            <p>$60 Bus Transportation (You must purchase bus for each week your child attends.)</p>
                            <p><span className='uppercase'>juniper</span>Entering Grades 1st - 5th</p> 
                            <p><span className='uppercase'>pine</span>Entering Grades 4th - 6th</p>
                        </div>
                        <hr />
                        <p className='my-4'>Our MultiWeek Camp option is ideal for the repeating camper who wants to experience multiple weeks at Royal Ridges. Multi-week participants will enjoy various activities (including a special surprise activity each week), fun games, and a different Bible Story focus each week. Purchased three weeks at a time, you choose the three weeks that work best for your schedule</p>
                        <hr />
                        <div className='my-2 ml-2 text-center'>
                            <p><span className='text-green-200 font-semibold'>Week #1</span> - June 19-23</p>
                            <p><span className='text-green-200 font-semibold'>Week #2</span> - June 26-30</p>  
                            <p><span className='text-green-200 font-semibold'>Week #3</span> - July 3-7</p>              
                            <p><span className='text-green-200 font-semibold'>Week #4</span> - July 10-14</p>           
                            <p><span className='text-green-200 font-semibold'>Week #5</span> - July 17-21</p>           
                            <p><span className='text-green-200 font-semibold'>Week #6</span> - July 24-28</p>
                            <p><span className='text-green-200 font-semibold'>Week #7</span> - July 31 - August 4</p>
                            <p><span className='text-green-200 font-semibold'>Week #8</span> - August 7-11</p>
                            <p><span className='text-green-200 font-semibold'>Week #9</span> - August 14-18</p>
                        </div>
                        <a 
                            href='https://www.ultracamp.com/clientlogin.aspx?idCamp=1145&campCode=151' 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className='text-yellow-400 font-extrabold text-3xl hover:underline hover:text-indigo-400 flex justify-center py-10'
                        >Register for a Multi Week Camp</a>
                    </div>    
                </div>
            <Footer />
        </div>
    )
}

export default MultiWeekCamp