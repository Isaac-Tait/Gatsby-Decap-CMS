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
                    <p className='mt-4 text-red-600 font-medium text-xl'>Wrangler Training</p>
                    <p>Who: All senior staff Wranglers are required to attend.</p>
                    <p className='font-bold underline text-lg'>When: Tuesdays May 3rd, 10th, 17th, and 24th, 10 am to 2 pm.</p>
                    <p>What to Bring: Binder, note paper, pen/pencil, CHA manuals if you have them, packed lunch, snack, water bottle. Clothes appropriate for riding and riding boots.</p>
                    <p>Where: Meet in the Main Barn. Training to include safety for riding instruction and skill expansion for teaching.</p>
                    <p className='mt-4 text-red-600 font-medium text-xl'>Supervisor Leadership Training</p>
                    <p>Who: Supervisors, Facilitators and Wranglers are required to attend.</p>
                    <p className='font-bold underline text-lg'>When: Friday June 3rd, 1 pm to 4 pm</p>
                    <p>What to Bring: Snack, water bottle. Be prepared to participate in any camp activity.</p>
                    <p>Where: Meet in the Main Office. Training to include leadership responsibilities and curriculum overview.</p> 
                    <p className='mt-4 text-red-600 font-medium text-xl'>Senior Staff Activity Training</p>
                    <p>Who: Supervisors, Facilitators, Wranglers and Senior Staff Group Leaders for all camps are required to attend.</p>
                    <p className='font-bold underline text-lg'>When: Saturday June 4th, 9 am to 4 pm</p>
                    <p>What to Bring: Sack lunch, snack, water bottle. Be prepared to participate in any camp activity with long pants, closed toed shoes.</p>
                    <p>Where: Meet at the lower camp amphitheater.</p>
                    <p className='mt-4 text-red-600 font-medium text-xl'>Senior Staff 1st Aid/CPR and Activity Training</p>
                    <p>Who: Supervisors, Facilitators, Wranglers and Senior Staff Group Leaders for all camps are required to attend.</p>
                    <p className='font-bold underline text-lg'>When: Saturday June 11th, 9 am to 4 pm</p>
                    <p>What to Bring: Sack lunch, snack, water bottle. Be prepared to participate in any camp activity with long pants, closed toed shoes.</p>
                    <p>Where: Meet at the lower camp amphitheater. First Aid/CPR located at the Day Camp Barn 9:30-noon.</p>
                    <p className='mt-4 text-red-600 font-medium text-xl'>All Staff Training</p>
                    <p>Who: Supervisors, Facilitators, Wranglers, Senior Staff Group Leaders and Juniors for all camps are required to attend.</p>
                    <p className='font-bold underline text-lg'>When: Saturday June 18th, 9 am to 4 pm</p>
                    <p>What to Bring: Sack lunch, snack, water bottle. Be prepared to participate in any camp activity with long pants, closed toed shoes.</p>
                    <p>Where: Meet at the lower camp amphitheater.</p>
                <div className='text-center flex flex-col'>
                    <Link 
                        to='/staff-excellence-radar-4'
                        className='text-2xl my-6 font-semibold w-1/4 mx-auto text-gray-300 hover:underline hover:text-indigo-600'
                    > {">"}{">"}{' '}Online training{' '}{">"}{">"}</Link>
                    <Link 
                        to='/staff-excellence-radar-2'
                        className='text-2xl my-6 font-semibold w-1/4 mx-auto text-gray-300 hover:underline hover:text-indigo-600'
                    > {"<"}{"<"}{' '}Paperwork{' '}{"<"}{"<"}</Link>
                    <Link 
                        to='/staff-excellence-radar'
                        className='text-2xl my-6 font-semibold w-1/4 mx-auto text-gray-300 hover:underline hover:text-indigo-600'
                    > {"<"}{"<"}{' '}Beginning{' '}{"<"}{"<"}</Link>
                </div>
            </div>
          <Footer />
      </div>
    );
}

export default SummerStaffTwo;