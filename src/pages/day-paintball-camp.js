import React from 'react'

import Navigation from '../components/summerNav'
import Header from "../components/header";
import Footer from "../components/footer";

import Image from '../images/paintballDayCamp.jpeg'

const DayPaintBall = () => {
    return (
        <div className='bg-gradient-to-l from-yellow-200 to-indigo-200'>
            <Header />
                <div className='h-screen overflow-y-scroll px-1 sm:grid sm:grid-cols-2'>
                    {/*Column 1*/}
                    <div>
                        <Navigation />
                    </div> 
                    {/*Column 2*/}
                    <div className='mr-4 overflow-y-scroll'>
                        <img 
                            src={Image}
                            alt='paintball_day_camp'
                            className='w-1/2 flex mx-auto rounded-xl my-6'
                        />
                        <a 
                            href='https://www.ultracamp.com/clientlogin.aspx?idCamp=1145&campCode=151' 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className='text-yellow-400 font-extrabold text-3xl text-center hover:underline hover:text-indigo-400 flex justify-center'
                        >Register for Paintball Camp</a>
                        <div className='font-semibold text-green-200 ml-4 my-4 text-center'>
                            <p>Monday-Friday 9am-3:30pm</p>        
                            <p>$350 for the week</p>             
                            <p>$60 Bus Transportation</p>
                            <p>SPLAT Entering Grades 3rd - 6th</p> 
                            <p>EXTREME Entering Grades 6th - 10th</p> 
                        </div>
                        <hr />
                        <p><span className='text-green-200 font-semibold'>Paintball Day Camp</span>&nbsp;~&nbsp;Paintball Day Camp ~ Campers learn and play the extreme sport of Paintball. In the morning, campers learn the game's finer points while fine-tuning their skills. Team building activities help teach communication skills while we grow our character through daily Bible Study. The last three hours of the day are game time, where it is time to sling paint!</p>
                        <p className='italic mt-4'>Extreme uses conventional markers and balls at 290 fps, with woodsball being the primary emphasis.</p>
                        <p className='italic my-4'>Splat is our low-impact paintball which uses pump markers, a smaller ball, max. speed at 130 fps and is played mainly in the Tactical Village.</p>
                        <hr />
                        <div className='my-2 ml-2 text-center'>
                            <p><span className='text-green-200 font-semibold'>Week #1</span> - June 19-23<span className='text-green-200 font-bold'>&nbsp;SPLAT</span></p>
                            <p><span className='text-green-200 font-semibold'>Week #2</span> - June 26-30<span className='text-green-200 font-bold'>&nbsp;SPLAT</span></p>  
                            <p><span className='text-green-200 font-semibold'>Week #3</span> - July 3-7<span className='text-yellow-400 font-bold'>&nbsp;EXTREME</span></p>              
                            <p><span className='text-green-200 font-semibold'>Week #4</span> - July 10-14<span className='text-green-200 font-bold'>&nbsp;SPLAT</span></p>           
                            <p><span className='text-green-200 font-semibold'>Week #5</span> - July 17-21<span className='text-green-200 font-bold'>&nbsp;SPLAT</span></p>           
                            <p><span className='text-green-200 font-semibold'>Week #6</span> - July 24-28<span className='text-yellow-400 font-bold'>&nbsp;EXTREME</span></p>
                            <p><span className='text-green-200 font-semibold'>Week #7</span> - July 31 - August 4<span className='text-green-200 font-bold'>&nbsp;SPLAT</span></p>
                            <p><span className='text-green-200 font-semibold'>Week #8</span> - August 7-11<span className='text-green-200 font-bold'>&nbsp;SPLAT</span></p>
                            <p><span className='text-green-200 font-semibold'>Week #9</span> - August 14-18<span className='text-yellow-400 font-bold'>&nbsp;EXTREME</span></p>
                        </div>
                        <a 
                            href='https://www.ultracamp.com/clientlogin.aspx?idCamp=1145&campCode=151' 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className='text-yellow-400 font-extrabold text-3xl text-center hover:underline hover:text-indigo-400 flex justify-center py-10'
                        >Register for Paintball Camp</a>
                    </div>    
                </div>
            <Footer />
        </div>
    )
}

export default DayPaintBall