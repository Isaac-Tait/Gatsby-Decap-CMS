import React from 'react'
import { Link } from 'gatsby'

import Header from "../components/header";
import Footer from "../components/footer";

const DayCamp = () => {
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
                        <Link to={'/dayhorsecamp'} className='my-4 underline text-green-200 hover:text-indigo-500'>
                            <p>Day Horse Camp</p>
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
                            src='https://royal-ridges-retreat.s3.us-west-1.amazonaws.com/summer_camp_page/Traditional_Day_Camp_100.png' 
                            alt='traditional_day_camp' 
                            className='w-1/2 flex mx-auto rounded-xl mb-2' 
                        />
                        <a 
                            href='https://www.ultracamp.com/clientlogin.aspx?idCamp=1145&campCode=151' 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className='text-yellow-400 font-extrabold text-3xl underline'
                        >Register for Day Camp</a>
                        <div className='font-semibold text-green-200 ml-4 my-4'>
                            <p>Monday-Friday 9am-3:30pm</p>   
                            <p>Entering Grades 1st-7th</p>      
                            <p>Spruce and Cedar Groups - $175</p>             
                            <p>Fir Group - $185</p>
                            <p>$50 Bus Transportation</p>
                        </div>
                        <hr />
                        <div className='my-4'>
                            <p>Our Traditional Day Camps are jam-packed with activities and fun! Traditional camps are divided into three age level groups:</p>
                            <p className='font-bold underline'>Spruce Group - Grades 1st - 3rd</p>
                                <p>The Spruce Group&#8217;s week is brimming with fun. Campers will experience the pony corral and petting zoo, have fun on the giant jump pillow, play games, and participate in group team building activities, and more!</p>
                            <p className='font-bold underline'>Cedar Group - Grades 3rd - 5th</p>
                                <p>Fun times abound for the Cedar Group campers! From visiting the pony corral to an adventurous hike, your child is sure to have a great time. Additional activities include fun games, team challenges and a visit to the giant jump pillow and so much more! </p>
                            <p className='font-bold underline'>Fir Group - 5th - 7th</p>
                                <p>Designed for your pre-teen, the Fir Group campers will have all the fun of Traditional Day Camp with a sampling of our Day Adventure Camp thrown in. Your camper will challenge themselves on the climbing wall, find their inner Robin Hood at the archery field, and glide across the Andersen Reservoir in a canoe.</p>
                        </div>
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
                        >Register for Day Camp</a>
                    </div>    
                </div>
            <Footer />
        </div>
    )
}

export default DayCamp