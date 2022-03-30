import React from "react";

import { Link } from "gatsby";

import Header from "../components/header";
import Footer from "../components/footer";

const SerHorseCamp = () => {
    return (
        <div className="bg-yellow-200">
          <Header />
            <div className="max-w-6xl mx-2 md:mx-auto text-xs md:text-base h-screen">
                <p className='text-center font-semibold text-3xl mb-4'>HORSE CAMP STAFF</p>
                <p className='my-2'>View these videos and documents and take this quiz if you are serving in Corral, Day Horse or Resident Horse.</p>
                <p className='mb-4'>Senior Staff are responsible for teaching Horse Science and Horse Activity but it would be good for Junior Staff to be familiar with the material as well.</p>
                <div className='ml-2 flex flex-col'>
                    <a href='https://www.youtube.com/watch?v=ufeUMoIau14' target="_blank" rel="noopener noreferrer" className='text-green-200 hover:underline hover:text-indigo-400 ml-2 w-1/4'>Camp Songs</a>
                    <a href='https://www.youtube.com/watch?v=Ww_bnhp5Ask' target="_blank" rel="noopener noreferrer" className='text-green-200 hover:underline hover:text-indigo-400 ml-2 w-1/4'>Cleaning</a>
                    <a href='https://www.youtube.com/watch?v=r6zHAm3YLc8' target="_blank" rel="noopener noreferrer" className='text-green-200 hover:underline hover:text-indigo-400 ml-2 w-1/4'>Gaga Ball</a>
                    <a href='https://www.youtube.com/watch?v=-qC6SlcFF1k' target="_blank" rel="noopener noreferrer" className='text-green-200 hover:underline hover:text-indigo-400 ml-2 w-1/4'>Campfire & Bible Study</a>
                    <a href='https://www.youtube.com/watch?v=a1e7aQRm2H8' target="_blank" rel="noopener noreferrer" className='text-green-200 hover:underline hover:text-indigo-400 ml-2 w-1/4'>Pool</a>
                    <a href='https://www.youtube.com/watch?v=aqQiSC_NozQ' target="_blank" rel="noopener noreferrer" className='text-green-200 hover:underline hover:text-indigo-400 ml-2 w-1/4'>Big Swing</a>
                    <a href='https://www.youtube.com/watch?v=8rmFNiJuYVM' target="_blank" rel="noopener noreferrer" className='text-green-200 hover:underline hover:text-indigo-400 ml-2 w-1/4'>Barn Rules</a>
                    <a href='https://www.youtube.com/watch?v=L6ostFwy0m4' target="_blank" rel="noopener noreferrer" className='text-green-200 hover:underline hover:text-indigo-400 ml-2 w-1/4'>Horse 101</a>
                    <a href='https://www.youtube.com/watch?v=trzWfarwxmM' target="_blank" rel="noopener noreferrer" className='text-green-200 hover:underline hover:text-indigo-400 ml-2 w-1/4'>Grooming</a>
                    <a href='https://www.youtube.com/watch?v=B0LcnhdLRjA' target="_blank" rel="noopener noreferrer" className='text-green-200 hover:underline hover:text-indigo-400 ml-2 w-1/4'>Tacking</a>
                    <a href='https://www.youtube.com/watch?v=ytc--2KjBrc' target="_blank" rel="noopener noreferrer" className='text-green-200 hover:underline hover:text-indigo-400 ml-2 w-1/4'>Mounting</a>
                    <a href='https://www.youtube.com/watch?v=WHBPDMLjii4' target="_blank" rel="noopener noreferrer" className='text-green-200 hover:underline hover:text-indigo-400 ml-2 w-1/4'>Bridling</a>
                    <a href='https://www.royalridges.upcsites.org/f/Horsemanship_Manual.pdf' target="_blank" rel="noopener noreferrer" className='text-green-200 hover:underline hover:text-indigo-400 ml-2 w-1/4'>Horsemanship Manual</a>
                    <a href='https://www.royalridges.upcsites.org/f/Horse_Care_Horse_Science_Summer_-_Google_Docs.pdf' target="_blank" rel="noopener noreferrer" className='text-green-200 hover:underline hover:text-indigo-400 ml-2 w-1/4'>Horse Science</a>
                    <a href='https://www.royalridges.upcsites.org/f/Horse_Care_Horse_Activity_Summer_-_Google_Docs.pdf' target="_blank" rel="noopener noreferrer" className='text-green-200 hover:underline hover:text-indigo-400 ml-2 w-1/4'>Horse Activity</a> 
                    <div class="py-4">
                        <div class="w-full border-t border-gray-800"></div>
                    </div>
                    <a href='https://docs.google.com/forms/d/e/1FAIpQLSc8kTZFOXCR-4tKWa-HKFmYZq3b5s4yHdJ-TfdvYBZfvMhaAA/viewform?usp=sf_link' target="_blank" rel="noopener noreferrer" className='text-green-200 hover:underline hover:text-indigo-400 ml-2 w-1/4'>HORSE CAMP QUIZ</a>
                </div>
                <div className='text-center flex flex-col'>
                    <Link 
                        to='/staff-excellence-radar-3'
                        className='text-2xl my-6 font-semibold w-1/4 mx-auto text-gray-600 hover:underline hover:text-indigo-600'
                    > {"<"}{"<"}{' '}Online Training{' '}{"<"}{"<"}</Link>
                </div>
            </div>
          <Footer />
      </div>
    );
}

export default SerHorseCamp;