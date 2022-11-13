import React from 'react'

import Header from "../components/header";
import Footer from "../components/footer";

import Navigation from "../components/summerNav"
import Image from '../images/traditionalDayCamp.jpeg'

const DayCamp = () => {
    return (
        <div className='bg-gradient-to-l from-yellow-200 to-indigo-200'>
            <Header />
                <div className='h-screen overflow-y-scroll px-1 sm:grid sm:grid-cols-2'> 
                    {/*Column 1*/}
                    <div>
                        <Navigation />
                    </div>                    
                    {/*Column 2*/}
                    <div className='flex flex-col mr-4 overflow-y-scroll'>
                        <img 
                            src={Image}
                            alt='traditional_day_camp' 
                            className='w-1/2 mx-auto rounded-xl my-6' 
                        />
                        <a 
                            href='https://www.ultracamp.com/clientlogin.aspx?idCamp=1145&campCode=151' 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className='text-yellow-400 font-extrabold text-3xl hover:underline hover:text-indigo-400 text-center'
                        >Register for Day Camp</a>
                        <div className='font-semibold text-green-200 ml-4 my-4 text-center'>
                            <p>Monday-Friday 9am-3:30pm</p>   
                            <p>Entering Grades 1st-7th</p>      
                            <p>Spruce and Cedar Groups - $190</p>             
                            <p>Fir Group - $200</p>
                            <p>$60 Bus Transportation</p>
                            <p>Multi-Week Option $540</p>
                        </div>
                        <hr />
                        <div className='my-4'>
                            <p>Our Traditional Day Camps are jam-packed with activities and fun! Campers will play games, experience team-building activities, explore the Bible during the daily Bible lesson and sing songs. Traditional camps are divided into three age level groups:</p>
                            <p className='font-bold underline mt-4'>Spruce Group - Grades 1st - 3rd</p>
                                <p>The Spruce Group&#8217;s week is brimming with fun. Campers will experience the pony corral and petting zoo, have fun on the giant jump pillow, play games, and participate in group team building activities, and more!</p>
                            <p className='font-bold underline mt-4'>Cedar Group - Grades 3rd - 5th</p>
                                <p>Fun times abound for the Cedar Group campers! From visiting the pony corral to an adventurous hike, your child is sure to have a great time. Additional activities include fun games, team challenges and a visit to the giant jump pillow and so much more! </p>
                            <p className='font-bold underline mt-4'>Fir Group - 5th - 7th</p>
                                <p>Designed for your pre-teen, the Fir Group campers will have all the fun of Traditional Day Camp with a sampling of our Day Adventure Camp thrown in. Your camper will challenge themselves on the climbing wall, find their inner Robin Hood at the archery field, and glide across the Andersen Reservoir in a canoe.</p>
                            <p className='font-bold underline mt-4'>Multi-Week Traditional Day Camp Option:</p>
                                <p>Campers eager to spend several weeks at Traditional Day Camp may enjoy this option to keep their weeks at camp exciting. Campers will enjoy the activities of Traditional Day camp with an additional adventure or team-building activity each week, as well as a different Bible Story focus each week. You choose the weeks that work best for you.</p>
                        </div>
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
                            className='text-yellow-400 font-extrabold text-3xl my-10 hover:underline hover:text-indigo-400 text-center'
                        >Register for Day Camp</a>
                    </div>    
                </div>
            <Footer />
        </div>
    )
}

export default DayCamp