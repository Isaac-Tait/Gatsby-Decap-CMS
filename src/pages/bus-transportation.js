import React from 'react'
import { Link } from 'gatsby'

import Header from "../components/header";
import Footer from "../components/footer";

const DayCamp = () => {
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
                        <Link to={'/day-adventure-camp'} className='my-4 font-cursive hover:underline text-green-200 hover:text-indigo-500'>
                            <p>Day Adventure Camp</p>
                        </Link>
                        <Link to={'/day-paintball-camp'} className='my-4 font-cursive hover:underline text-green-200 hover:text-indigo-500'>
                            <p>Day Paintball Camp</p>
                        </Link>
                        <Link to={'/summer-giddy-up-program'} className='my-4 font-cursive hover:underline text-green-200 hover:text-indigo-500'>
                            <p>Summer Giddy Up Program</p>
                        </Link>
                        <Link to={'/faq'} className='my-4 font-cursive hover:underline text-green-200 hover:text-indigo-500'>
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
                            className='text-yellow-400 font-extrabold text-3xl hover:underline hover:text-indigo-400 flex justify-center'
                        >Register for Bus Service</a>
                        <div className='my-4'>
                            <h3 className="text-green-200 font-semibold text-xl">East One Bus Route</h3>
                            <h4 className='font-semibold'>NW Gospel Church - Camas</h4>
                                <p className='ml-2'>7:50am - Departure Time</p>
                                <p className='ml-2'>4:20pm - Drop Off Time (Final Stop)</p>
                                <a 
                                    href='https://goo.gl/maps/NPJ6W8WAqDRRATzj7' 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className='ml-2 hover:underline text-green-200 hover:text-indigo-500'
                                >1420 NE 3rd Avenue Camas, WA</a>
                            <h4 className='font-semibold'>NW Gospel Church - East Vancouver</h4>
                                <p className='ml-2'>8:10am - Departure Time</p>
                                <p className='ml-2'>4:00pm - Drop Off Time (Final Stop)</p>
                                <a 
                                    href='https://goo.gl/maps/hpvKZQcPRKAxzEKo9' 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className='ml-2 hover:underline text-green-200 hover:text-indigo-500'
                                >305 NE 192nd Avenue Vancouver, WA</a>
                            <h3 className="text-green-200 font-semibold text-xl">East Two Bus Route</h3>
                            <h4 className='font-semibold'>East Park Church</h4>
                                <p className='ml-2'>8:05am - Departure Time</p>
                                <p className='ml-2'>4:15pm - Drop Off Time (Final Stop)</p>
                                <a 
                                    href='https://goo.gl/maps/qKhgGZcQhy5oNzPV8' 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className='ml-2 hover:underline text-green-200 hover:text-indigo-500'
                                >15815 NE 18th Street Vancouver, WA</a>
                                <p className='italic ml-2 text-xs'>(NE Side of parking lot)</p>
                            <h4 className='font-semibold'>Fourth Plains Church of the Nazarene</h4>
                                <p className='ml-2'>8:20am - Departure Time</p>
                                <p className='ml-2'>4:00pm - Drop Off Time (Final Stop)</p>
                                <a 
                                    href='https://goo.gl/maps/YKX8bJS4H76KNDXp6' 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className='ml-2 hover:underline text-green-200 hover:text-indigo-500'
                                >16807 NE Fourth Plain Boulevard Vancouver, WA</a>
                            <h3 className="text-green-200 font-semibold text-xl">East Three Bus Route</h3>
                            <h4 className='font-semibold'>Brush Prairie Baptist Church</h4>
                                <p className='ml-2'>8:30am - Departure Time</p>
                                <p className='ml-2'>4:00pm - Drop Off Time (Final Stop)</p>
                                <a 
                                    href='https://goo.gl/maps/Lewa8HyenUBhNw2q9' 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className='ml-2 hover:underline text-green-200 hover:text-indigo-500'
                                >11814 NE 117th Avenue Vancouver, WA</a>
                            <h4 className='font-semibold'>Battle Ground Baptist Church</h4>
                                <p className='ml-2'>8:30am - Departure Time</p>
                                <p className='ml-2'>3:50pm - Drop Off Time (Final Stop)</p>
                                <a 
                                    href='https://goo.gl/maps/cTXDh6qwmtNUxHHQ7' 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className='ml-2 hover:underline text-green-200 hover:text-indigo-500'
                                >1110 NW 6th Avenue Battle Ground, WA</a>
                                <p className='italic ml-2 text-xs'>(Front parking lot)</p>
                            <h3 className="text-green-200 font-semibold text-xl mt-4">West One Bus Route</h3>
                            <h4 className='font-semibold'>Hudson Bay High School</h4>
                                <p className='ml-2'>7:45am - Departure Time</p>
                                <p className='ml-2'>4:25pm - Drop Off Time (Final Stop)</p>
                                <a 
                                    href='https://goo.gl/maps/mo8xkcVFBjK2j2k16' target="_blank" 
                                    rel="noopener noreferrer" 
                                    className='ml-2 hover:underline text-green-200 hover:text-indigo-500'
                                >1206 E Reserve Street Vancouver, WA</a>
                                <p className='italic ml-2 text-xs'>(West side under Oak tree by tennis courts)</p>
                                <h4 className='font-semibold'>City Harvest Church</h4>
                                <p className='ml-2'>8:05am - Departure Time</p>
                                <p className='ml-2'>4:00pm - Drop Off Time (Final Stop)</p>
                                <a 
                                    href='https://goo.gl/maps/WUrB2xMB1T1FbZFT7' 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className='ml-2 hover:underline text-green-200 hover:text-indigo-500'
                                >8100 NW 9th Avenue Vancouver, WA</a>
                            <h3 className="text-green-200 font-semibold text-xl mt-4">West Two Bus Route</h3>
                            <h4 className='font-semibold'>Albertsons at Salmon Creek</h4>
                                <p className='ml-2'>8:15am - Departure Time</p>
                                <p className='ml-2'>3:50pm - Drop Off Time (Final Stop)</p>
                                <a 
                                    href='https://goo.gl/maps/uwcH583GVrLgoi61A' 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className='ml-2 hover:underline text-green-200 hover:text-indigo-500'
                                >14300 NE 20th Avenue Vancouver, WA</a>
                                <p className='italic ml-2 text-xs'>(North side by Dumpster)</p>
                            <h3 className="text-green-200 font-semibold text-xl mt-4">West Three Bus Route</h3>
                            <h4 className='font-semibold'>La Center Church</h4>
                                <p className='ml-2'>7:50am - Departure Time</p>
                                <p className='ml-2'>4:20pm - Drop Off Time (Final Stop)</p>
                                <a 
                                    href='https://goo.gl/maps/B4EQXNsazyMuFy4e9' 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className='ml-2 hover:underline text-green-200 hover:text-indigo-500'
                                >111 E 5th Street LaCenter, WA</a>
                                <p className='italic ml-2 text-xs'>(South parking lot - bus on the street)</p>
                                <h4 className='font-semibold'>Ridgefield Church of the Nazarene</h4>
                                <p className='ml-2'>8:10am - Departure Time</p>
                                <p className='ml-2'>4:00pm - Drop Off Time (Final Stop)</p>
                                <a 
                                    href='https://goo.gl/maps/HMZbNaLseeihz8ZY9' 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className='ml-2 hover:underline text-green-200 hover:text-indigo-500'
                                >747 Pioneer Street Ridgefield, WA</a>
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
                            <p className='italic ml-2'>d) Knowing the color and number of your child's wrist band.</p>
                            <p className='italic ml-2'>e) Requesting your children in numerical order of the wrist band.</p>
                            <p>Parents at the NEXT stop will appreciate your help in avoiding delay of bus departure.</p>
                        </div>
                            <a 
                                href='https://www.ultracamp.com/clientlogin.aspx?idCamp=1145&campCode=151' 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className='text-yellow-400 font-extrabold text-3xl hover:underline hover:text-indigo-400 flex justify-center py-10'
                            >Register for Bus Service</a>
                        </div>    
                    </div>
            <Footer />
        </div>
    )
}

export default DayCamp