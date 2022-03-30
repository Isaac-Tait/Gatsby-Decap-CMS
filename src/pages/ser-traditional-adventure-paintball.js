import React from "react";

import { Link } from "gatsby";

import Header from "../components/header";
import Footer from "../components/footer";

const SerTraditionalAdventurePaintBall = () => {
    return (
        <div className="bg-yellow-200">
          <Header />
            <div className="max-w-6xl mx-2 md:mx-auto text-xs md:text-base h-screen overflow-y-scroll">
                <p className='text-center font-semibold text-3xl mb-4'>TRADITIONAL DAY CAMP STAFF, PAINTBALL STAFF and ADVENTURE CAMP STAFF</p>
                <p>View these videos and take this quiz if you are serving in Traditional Day Camp, Paintball Day Camp, or Day Adventure Camp.</p>
                <div className='flex flex-col ml-2'>
                    <a href='https://www.youtube.com/watch?v=ufeUMoIau14' target="_blank" rel="noopener noreferrer" className='text-green-200 hover:underline hover:text-indigo-400 ml-2 my-2 w-1/4'>Camp Songs</a>
                    <a href='https://www.youtube.com/watch?v=r6zHAm3YLc8' target="_blank" rel="noopener noreferrer" className='text-green-200 hover:underline hover:text-indigo-400 ml-2 my-2 w-1/4'>Gaga Ball</a>
                    <a href='https://www.youtube.com/watch?v=M68xZPjBZlw' target="_blank" rel="noopener noreferrer" className='text-green-200 hover:underline hover:text-indigo-400 ml-2 my-2 w-1/4'>Nature Hike</a>
                    <p>Low Ropes  [ <a href='https://www.youtube.com/watch?v=Oj9V54PLWoQ' target="_blank" rel="noopener noreferrer" className='text-green-200 hover:underline hover:text-indigo-400 ml-2 my-2 w-1/4'>Intro</a>{' '}&nbsp;&nbsp;| <a href='https://www.youtube.com/watch?v=6LbqPRhkmZU' target="_blank" rel="noopener noreferrer" className='text-green-200 hover:underline hover:text-indigo-400 ml-2 my-2 w-1/4'>Part 1</a>{' '}&nbsp;&nbsp;| <a href='https://www.youtube.com/watch?v=hgCOmBErhvc' target="_blank" rel="noopener noreferrer" className='text-green-200 hover:underline hover:text-indigo-400 ml-2 my-2 w-1/4'>Part 2</a>{' '}&nbsp;&nbsp;]</p>
                    <a href='https://www.youtube.com/watch?v=-qC6SlcFF1k' target="_blank" rel="noopener noreferrer" className='text-green-200 hover:underline hover:text-indigo-400 ml-2 my-2 w-1/4'>Campfire & Bible Study</a>
                    <a href='https://www.youtube.com/watch?v=a1e7aQRm2H8' target="_blank" rel="noopener noreferrer" className='text-green-200 hover:underline hover:text-indigo-400 ml-2 my-2 w-1/4'>Pool</a>
                    <a href='https://www.youtube.com/watch?v=GoMvZOApzlI' target="_blank" rel="noopener noreferrer" className='text-green-200 hover:underline hover:text-indigo-400 ml-2 my-2 w-1/4'>Jump Pillow</a>
                    <a href='https://www.youtube.com/watch?v=aqQiSC_NozQ' target="_blank" rel="noopener noreferrer" className='text-green-200 hover:underline hover:text-indigo-400 ml-2 my-2 w-1/4'>Big Swing</a>
                    <a href='https://www.youtube.com/watch?v=YGhkwnkRWfg' target="_blank" rel="noopener noreferrer" className='text-green-200 hover:underline hover:text-indigo-400 ml-2 my-2 w-1/4'>Canoes</a>
                    <a href='https://www.youtube.com/watch?v=bhUdEzDnACI' target="_blank" rel="noopener noreferrer" className='text-green-200 hover:underline hover:text-indigo-400 ml-2 my-2 w-1/4'>Archery</a>
                    <a href='https://www.youtube.com/watch?v=SKbjQXXYyYc' target="_blank" rel="noopener noreferrer" className='text-green-200 hover:underline hover:text-indigo-400 ml-2 my-2 w-1/4'>Corral</a>
                    <a href='https://www.youtube.com/watch?v=vC8yBeDVJ0c' target="_blank" rel="noopener noreferrer" className='text-green-200 hover:underline hover:text-indigo-400 ml-2 my-2 w-1/4'>Knots</a>
                    <a href='https://www.youtube.com/watch?v=-mQxc4nyubw' target="_blank" rel="noopener noreferrer" className='text-green-200 hover:underline hover:text-indigo-400 ml-2 my-2 w-1/4'>Rock Wall Set Up</a>
                    <a href='https://www.youtube.com/watch?v=l80a0bA8B_4' target="_blank" rel="noopener noreferrer" className='text-green-200 hover:underline hover:text-indigo-400 ml-2 my-2 w-1/4'>Rock Wall Climbing</a>
                    <a href='https://www.youtube.com/watch?v=SZbXxMLrhzo' target="_blank" rel="noopener noreferrer" className='text-green-200 hover:underline hover:text-indigo-400 ml-2 my-2 w-1/4'>Sling Shots</a>
                    <a href='https://youtu.be/n0WNNg4m21s' target="_blank" rel="noopener noreferrer" className='text-green-200 hover:underline hover:text-indigo-400 ml-2 my-2 w-1/4'>Hatchet Throwing</a>
                    <a href='https://www.youtube.com/watch?v=8rmFNiJuYVM' target="_blank" rel="noopener noreferrer" className='text-green-200 hover:underline hover:text-indigo-400 ml-2 mt-2 w-1/4 mb-6'>Barn Rules</a>
                        <div class="py-4">
                            <div class="w-full border-t border-gray-800"></div>
                        </div>
                    <a href='https://docs.google.com/forms/d/e/1FAIpQLSdOTGGtH_XRyYW4UMHe43g8L3NpvsiCCIARez_AnbjdiZjR_A/viewform?usp=sf_link' target="_blank" rel="noopener noreferrer" className='text-green-200 hover:underline hover:text-indigo-400 ml-2 mt-6 w-1/4'>TRADITONAL DAY CAMP, PAINTBALL DAY CAMP and ADVENTURE CAMP QUIZ</a>
                </div>
                <div className='text-center flex flex-col'>
                    <Link 
                        to='/staff-excellence-radar-4'
                        className='text-medium lg:text-2xl my-6 font-semibold w-full lg:w-1/4 mx-auto text-gray-600 hover:underline hover:text-indigo-600'
                    > {"<"}{"<"}{' '}Online Training{' '}{"<"}{"<"}</Link>
                </div>
            </div>
          <Footer />
      </div>
    );
}

export default SerTraditionalAdventurePaintBall;