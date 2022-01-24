import React from 'react'
import { Link } from 'gatsby'

import Header from "../components/header";
import Footer from "../components/footer";

const DayCamp = () => {
    return (
        <div className='bg-gradient-to-r from-yellow-400 via-yellow-200 to-indigo-200'>
            <Header />
                <div className='h-screen grid grid-cols-2 max-w-6xl mx-auto'>
                    {/*Column 1*/}
                    <div className='flex flex-col mx-auto'>
                    <Link to={'/registration'} className='my-4 underline font-extrabold text-xl text-green-200 hover:text-indigo-500'>
                            <p>Registration</p>
                        </Link>
                        <hr /> 
                        <Link to={'/day-camp'} className='my-4 underline text-green-200 hover:text-indigo-500'>
                            <p>Traditional Day Camp</p>
                        </Link>
                        <Link to={'/day-horse-camp'} className='my-4 underline text-green-200 hover:text-indigo-500'>
                            <p>Day Horse Camp</p>
                        </Link>
                        <Link to={'/day-adventure-camp'} className='my-4 underline text-green-200 hover:text-indigo-500'>
                            <p>Day Adventure Camp</p>
                        </Link>
                        <Link to={'/day-paintball-camp'} className='my-4 underline text-green-200 hover:text-indigo-500'>
                            <p>Day Paintball Camp</p>
                        </Link>
                        <Link to={'/summer-giddy-up-program'} className='my-4 underline text-green-200 hover:text-indigo-500'>
                            <p>Summer Giddy Up Program</p>
                        </Link>
                        <Link to={'/faq'} className='my-4 underline text-green-200 hover:text-indigo-500'>
                            <p>FAQs</p>
                        </Link>
                    </div>
                    {/*Column 2*/}
                    <div className='mr-4 overflow-y-scroll'>
                        <img 
                            src='https://royal-ridges-retreat.s3.us-west-1.amazonaws.com/summer_camp_page/Summer_Bus_Service_-_10.png'
                            alt='bus_service'
                            className='w-1/2 flex mx-auto rounded-xl my-6'
                        />
                        <a 
                            href='https://www.ultracamp.com/clientlogin.aspx?idCamp=1145&campCode=151' 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className='text-yellow-400 font-extrabold text-3xl underline'
                        >Register for Bus Service</a>
                        <div className='my-4'>
                            <h3 className="text-green-200 font-semibold text-xl">East One (1) Bus Route</h3>
                                <p className='italic ml-2'>7:30am/4:50pm NW GOSPEL CHURCH/Camas - 1420 NE 3rd Ave, Camas</p>
                                <p className='italic ml-2'>8:10am/4:10pm NW GOSPEL CHURCH - 305 NE 192nd Ave, Vancouver</p>
                            <h3 className="text-green-200 font-semibold text-xl">East Two (2) Bus Route</h3>
                                <p className='italic ml-2'>8:05am/4:30pm EAST PARK CHURCH - 15815 NE 18th St, Vancouver</p>
                                <p className='italic ml-2 text-xs'>(NE Side of parking lot)</p>
                                <p className='italic ml-2'>8:15am/4:20pm CHURCH OF THE NAZARENE - 16807 NE 4th Plain Blvd, Vancouver </p>
                            <h3 className="text-green-200 font-semibold text-xl">East Three (3) Bus Route</h3>
                                <p className='italic ml-2'>8:30am/4:00pm BRUSH PRAIRIE BAPTIST CHURCH - 11814 NE 117th Ave, Vancouver</p>
                                <p className='italic ml-2 text-xs'>(West Parking Lot off of 119th St.)</p>
                                <p className='italic ml-2'>8:40am/3:50pm BATTLE GROUND BAPTIST CHURCH - 1110 NW 6th Ave, Battle Ground</p>
                                <p className='italic ml-2 text-xs'>(Front parking lot)</p>
                            <h3 className="text-green-200 font-semibold text-xl">West One (1) Bus Route</h3>
                                <p className='italic ml-2'>7:45am/4:30pm HUDSON BAY HIGH SCHOOL - 1206 E Reserve St, Vancouver</p>
                                <p className='italic ml-2 text-xs'>(West side under Oak tree by tennis courts)</p>
                                <p className='italic ml-2'>8:00am/4:15pm CITY HARVEST CHURCH - 8100 NW 9th Ave., Vancouver</p>
                            <h3 className="text-green-200 font-semibold text-xl">West Two (2) Bus Route</h3>
                                <p className='italic ml-2'>8:15am/4:00pm ALBERTSONS at SALMON CREEK - 14300 NE 20th Ave., Vancouver</p>
                                <p className='italic ml-2 text-xs'>(North side by Dumpster)</p>
                            <h3 className="text-green-200 font-semibold text-xl">West Three (3) Bus Route</h3>
                                <p className='italic ml-2'>8:00am/4:20pm LA CENTER CHURCH - 111 E 5th St, LaCenter</p>
                                <p className='italic ml-2 text-xs'>(South parking lot - bus on the street)</p>
                                <p className='italic ml-2'>8:20am/4:00pm RIDGEFIELD CHURCH OF THE NAZARENE - 747 Pioneer St, Ridgefield</p>
                        </div>
                        <hr />
                        <div className='my-4'>
                            <p>Please arrive at least 10 minutes prior to the times posted. Please understand that bus times are subject to change</p>
                            <p><span className='text-red-700 font-semibold'>NOTICE</span> All times are <span className='text-red-700 underline'>DEPARTURE</span> times.</p>
                            <p><span className='text-red-700 font-semibold'>NOTICE</span> The bus <span className='text-red-700 underline'>WILL NOT WAIT</span>. The bus will proceed to the next stop. This is true in the AM & PM.</p>
                            <p><span className='text-red-700 font-semibold'>PARENTS</span>: We need your help. You <span className='text-red-700 underline'>ARE REQUIRED</span> to <span className='text-red-700 underline'>SIGN</span> for the release of your child at the evening stops. You can help speed this process by:</p>
                            <p className='italic ml-2'>a) Arriving at the stop 10 minutes before the posted return time.</p>
                            <p className='italic ml-2'>b) Moving promptly from your car to the bus upon arrival.</p>
                            <p className='italic ml-2'>c) Encouraging your child to wear the bus wrist band at all times.</p>
                            <p>Parents at the NEXT stop will appreciate your help in avoiding delay of bus departure.</p>
                            <p>ALL BUSES WILL STAY AT THEIR LAST STOP UNTIL THE LAST KIDDO IS PICKED UP!</p>
                            <p>Please call the office at 360.686.3737 to determine the last stop.   </p>
                        </div>
                        <a 
                            href='https://www.ultracamp.com/clientlogin.aspx?idCamp=1145&campCode=151' 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className='text-yellow-400 font-extrabold text-3xl underline'
                        >Register for Bus Service</a>
                        <p className='my-20'></p>{/* Spacer */}
                    </div>    
                </div>
            <Footer />
        </div>
    )
}

export default DayCamp