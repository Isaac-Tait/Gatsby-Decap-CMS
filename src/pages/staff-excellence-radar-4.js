import React from "react";

import { Link } from "gatsby"

import Header from "../components/header";
import Footer from "../components/footer";

const SummerStaffTwo = () => {
    return (
        <div className="bg-yellow-200">
          <Header />
            <div className="max-w-7xl mx-2 md:mx-auto text-xs md:text-base h-screen overflow-y-scroll">
                <h3 className='text-2xl my-6 font-semibold text-center'>Online Training</h3>
                <div className='grid grid-cols-2 gap-12'>
                    {/*Column 1*/}
                    <div className='flex flex-col text-center'>
                        <Link to={'/ser-traditional-adventure-paintball'} className='mx-auto my-4 font-cursive hover:underline text-green-200 hover:text-indigo-500'>
                            <p>TRADITIONAL DAY CAMP STAFF, PAINTBALL STAFF and ADVENTURE CAMP STAFF</p>
                        </Link>
                        <div class="py-4">
                            <div class="w-full border-t border-gray-800"></div>
                        </div>
                        <Link to={'/ser-high-ropes'} className='mx-auto my-4 font-cursive hover:underline text-green-200 hover:text-indigo-500'>
                            <p>HIGH ROPE STAFF</p>
                        </Link>
                        <div class="py-4">
                            <div class="w-full border-t border-gray-800"></div>
                        </div>
                        <Link to={'/ser-horsecamp'} className='mx-auto my-4 font-cursive hover:underline text-green-200 hover:text-indigo-500'>
                            <p>HORSE CAMP STAFF</p>
                        </Link>
                        <div class="py-4">
                            <div class="w-full border-t border-gray-800"></div>
                        </div>
                        <Link to={'/ser-paintball'} className='mx-auto my-4 font-cursive hover:underline text-green-200 hover:text-indigo-500'>
                            <p>PAINTBALL STAFF</p>
                        </Link>
                    </div>
                    {/*Column 2*/}
                    <div className='flex flex-col mr-4 overflow-y-scroll'>
                    <p className='text-center font-semibold text-2xl'>ALL STAFF</p>
                    <p>Everyone (seniors and juniors) must complete the following videos and review the Staff Manual below as well as complete the quiz.</p>
                    {/* Camp Training Intro */}
                    <a href='https://www.youtube.com/watch?v=GQJPGipLLMg' target="_blank" rel="noopener noreferrer" className='text-green-200 hover:underline hover:text-indigo-400 ml-2 my-2 w-1/2'>Camp Training Introduction</a>
                    {/* Policy and General Rules */}
                    <a href='https://www.youtube.com/watch?v=CuTmtYRsy4U' target="_blank" rel="noopener noreferrer" className='text-green-200 hover:underline hover:text-indigo-400 ml-2 my-2'>Policy and General Rules</a>
                    {/* Emergency Protocol */}
                    <a href='https://www.youtube.com/watch?v=ySUB4qoOvjM' target="_blank" rel="noopener noreferrer" className='text-green-200 hover:underline hover:text-indigo-400 ml-2 my-2 w-1/2'>Emergency Protocols</a>
                    {/* Nurse Procedures */}
                    <a href='https://www.youtube.com/watch?v=CAXUWDI99MM' target="_blank" rel="noopener noreferrer" className='text-green-200 hover:underline hover:text-indigo-400 ml-2 my-2 w-1/2'>Nurse Procedures</a>
                    {/* Cleaning */}
                    <a href='https://www.youtube.com/watch?v=Ww_bnhp5Ask' target="_blank" rel="noopener noreferrer" className='text-green-200 hover:underline hover:text-indigo-400 ml-2 my-2 w-1/2'>Cleaning</a>
                    {/* Staff Manual */}
                    <a href='https://docs.google.com/document/d/1Lg6t1oQ0ajEVWgxW4fX8xBTxHsr0KkJLVktfB1o0bII/edit?usp=sharing' target="_blank" rel="noopener noreferrer" className='text-green-200 hover:underline hover:text-indigo-400 ml-2 my-2 w-1/2'>Staff Manual</a>
                    {/* Camp Song Book */}
                    <a href='https://docs.google.com/document/d/1oXGjHUTLZHPHw0UYkk9wVXtq8JBmBGqJKOoEgdV9WgY/edit?usp=sharing' target="_blank" rel="noopener noreferrer" className='text-green-200 hover:underline hover:text-indigo-400 ml-2 my-2 w-1/2'>Song Book</a>
                    {/* All Staff Quiz */}
                    <a href='https://docs.google.com/forms/d/e/1FAIpQLSf3l0Bsv67uskSbCEdXbhilple-K2Duopa_afeH0XIxi01oyQ/viewform?usp=sf_link' target="_blank" rel="noopener noreferrer" className='text-green-200 hover:underline hover:text-indigo-400 ml-2 my-2 w-1/2'>ALL STAFF QUIZ</a>
                    <p>Please also read over and study this year's camper Bible Curriculum from the link below. It is important that you are familiar enough with the curriculum to be able to teach it to the campers and not just read the paper.</p>
                    {/* Bible Curriculum */}
                    <a href='https://docs.google.com/document/d/12CwxRjw0YVrUDOFHACI1fE1TlanHeucJ-XwQFeEX0ac/edit?usp=sharing' target="_blank" rel="noopener noreferrer" className='text-green-200 hover:underline hover:text-indigo-400 ml-2 my-2 w-1/2'>Bible Curriculum 2022</a>
                    {/* Extended Bible Curriculum */}
                    <a href='https://docs.google.com/document/d/1sXUM8Vr375OF_mLfceHkDDf6Ph1P1R-qVbaBt3rvDeE/edit?usp=sharing' target="_blank" rel="noopener noreferrer" className='text-green-200 hover:underline hover:text-indigo-400 ml-2 my-2 w-1/2'>Day Horse Extended Stay Curriculum 2022</a>
                    </div>
                </div>
                <div className='text-center flex flex-col'>
                    <Link 
                        to='/staff-excellence-radar-3'
                        className='text-medium lg:text-2xl my-6 font-semibold w-full lg:w-1/4 mx-auto text-gray-600 hover:underline hover:text-indigo-600'
                    > {"<"}{"<"}{' '}Training{' '}{"<"}{"<"}</Link>
                    <Link 
                        to='/staff-excellence-radar-2'
                        className='text-medium lg:text-2xl my-6 font-semibold w-full lg:w-1/4 mx-auto text-gray-600 hover:underline hover:text-indigo-600'
                    > {"<"}{"<"}{' '}Paperwork{' '}{"<"}{"<"}</Link>
                    <Link 
                        to='/staff-excellence-radar'
                        className='text-medium lg:text-2xl my-6 font-semibold w-full lg:w-1/4 mx-auto text-gray-600 hover:underline hover:text-indigo-600'
                    > {"<"}{"<"}{' '}Beginning{' '}{"<"}{"<"}</Link>
                </div>
            </div>
          <Footer />
      </div>
    );
}

export default SummerStaffTwo;