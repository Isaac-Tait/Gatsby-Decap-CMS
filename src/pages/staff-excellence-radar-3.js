import React from "react";

import { Link } from "gatsby"

import Header from "../components/header";
import Footer from "../components/footer";

const SummerStaffTwo = () => {
    return (
        <div className="bg-gradient-to-b from-yellow-200 to-emerald-500">
          <Header />
            <div className="max-w-6xl mx-2 md:mx-auto text-xs md:text-base h-screen">
                <h3 className='text-2xl my-6 font-semibold text-center'>Training</h3>
                <p>Review the staff onsite training dates and summer activities and mark your calendars for the training dates that apply to you. Onsite training is mandatory!</p>
                <div className='text-center'>
                    <p className='text-lg font-medium mt-2'>Summer Staff Onsite Training Dates</p>
                    <p className='text-lg'>2022</p>
                </div>
                <div className='text-center'>
                    <Link 
                        to='/staff-excellence-radar'
                        className='text-2xl my-6 font-semibold text-gray-300 hover:underline hover:text-indigo-600'
                    > {">"}{">"}{' '}Back to the beginning{' '}{"<"}{"<"}</Link>
                </div>
            </div>
          <Footer />
      </div>
    );
}

export default SummerStaffTwo;