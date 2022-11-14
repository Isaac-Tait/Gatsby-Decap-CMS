import React from 'react'
import { Link } from 'gatsby'

import Navigation from '../components/summerNav'
import Header from "../components/header";
import Footer from "../components/footer";

import Image from '../images/summerCamp.jpeg'

const SummerReg = () => {
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
                            alt='summer camp descriptions'
                            className='w-1/2 flex mx-auto rounded-xl my-6'
                        />
                        <h3 className='font-cursive text-center text-xl mb-4'>Check Availability{' '}<a 
                            href='https://royalridges.org/updates/2022-summer-camp-availability/'
                            className='text-green-200 hover:text-indigo-400 hover:underline'
                            target="_blank" 
                            rel="noopener noreferrer"
                        >Here</a>!</h3>
                        <p>All of our Summer Day Camps include lots of fun games, team building activities, Bible Studies, singing camp songs, and visits to the Camp Store.</p>
                        <p>Campers will come home dirty and tuckered out from their day at camp.</p>
                        <p>The Bible themes and main activities repeat each week within each camp.</p> 
                        <p>All campers should wear weather-appropriate clothing <span className='italic'>(it is often chilly in the morning so remember a coat)</span> and closed-toe shoes.</p>
                        <p>Please bring a lunch packed in a self-insulated lunch box, a water bottle, and <span className='font-bold underline'>please do not</span> send your camper with any electronic devices.</p>
                        {/*New Content for 2023*/}
                        <p className='font-semibold text-xl text-green-200 text-center mt-4'>What&#39;s New for Summer Camp 2023!</p>
                        <p className='text-center font-bold'>We&#39;re looking forward to Summer Camp 2023 and are delighted to let you know about some exciting new adventures and changes.</p>
                        <ul className="list-disc mb-2 ml-6">
                            <li className='mt-2'>
                                Overnight Blast (ONB) - Campers will spend Thursday night at camp! <span className='font-semibold'>ONB</span> will be an opportunity to continue the camp experience with special activities for our <span className='font-semibold'>ONB</span> participants. Dinner, breakfast, and a sack lunch for Friday will be provided. <span className='font-semibold'>ONB</span> will be available for Day Horse and Adventure Camps only. Space is limited, so don&#39;t wait too long!
                            </li>
                            <li className='mt-2'>
                                <Link to={'/specialty-horse-camp'} className='underline text-green-200 hover:text-indigo-500' target="_blank" rel="noopener noreferrer">Day Horse Camp Specialty Themes</Link> - Theme weeks designed for returning campers or experienced riders looking for some variety at horse camp. Four different disciplines to choose from: <span className="font-semibold">English, Vaulting, Ranch Rodeo, and Trail</span>. Group size will be limited, so order your camp soon!
                            </li>
                            <li className='mt-2'>
                                Summer GiddyUp has been renamed <Link to={'/multi-week-camp'} className='underline text-green-200 hover:text-indigo-500' target="_blank" rel="noopener noreferrer">Multi-Week Camp</Link>. Our Multi-Week Camp option is ideal for the repeating camper who wants to experience multiple weeks at Royal Ridges. Multi-week participants will enjoy various activities (including a special surprise activity each week), fun games, and a different Bible Story focus each week. Purchased three weeks at a time, you choose the three weeks that work best for your schedule.
                            </li>
                        </ul>
                        <p className='text-xs italic mt-4'>* For questions regarding registrations, please email <a href="mailto:registrations@royalridges.org" className='underline text-green-200 hover:text-indigo-500'>our Registrations department</a></p>
                        <p className='text-xs italic'>* For questions regarding our summer camp programs please email <a href="mailto:programs@royalridges.org" className='underline text-green-200 hover:text-indigo-500'>our Programs department</a></p>
                    </div>    
                </div>
            <Footer />
        </div>
    )
}

export default SummerReg