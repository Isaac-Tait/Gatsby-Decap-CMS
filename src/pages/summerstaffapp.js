import React from "react";

import Header from "../components/header";
import Footer from "../components/footer";

const SummerStaffApp = () => {
    return (
        <div className="bg-gray-100">
            <Header />
                <div className='flex flex-col max-w-8xl mx-auto'>
                    <div className='flex h-screen'>
                        <svg 
                            className='h-6 w-6 animate-ping my-auto overflow-visible'
                            xmlns="http://www.w3.org/2000/svg" 
                            fill-rule="evenodd" 
                            clip-rule="evenodd"
                        >
                            <path d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z"/>
                        </svg>
                        <div className="flex overflow-x-scroll pb-10">
                            <div className='flex flex-nowrap snap-x'>
                                {/*Introduction*/}
                                <div className=' inline-block px-3 snap-center'>
                                    <div className='w-screen h-screen overflow-hidden rounded-full shadow-md heropattern-topography-indigo-100 text-center flex flex-col justify-center'>
                                        <p>Thank you for considering Royal Ridges Retreat as your Summer Mission Field!</p>
                                        <p>Applications for Summer 2022 will be accepted from December 1st, 2021 through May 31, 2022.</p>
                                        <p>Please read the following documents carefully and make sure you have read ALL of them before you submit your application.</p>
                                        <p>The commitment to serve at Royal Ridges includes a three week minimum time commitment.</p>
                                        <p>You must also complete all the online and onsite training prior to your committed time period.</p>
                                        <p>Onsite training will be on the weekends in June. The dates and training information will be sent to you once you are hired.</p>
                                        <p>If you have a specific question before applying, please email Chrisy our Program Director <a href="mailto:chrisy@royalridges.org" className='text-green-200 underline hover:text-indigo-400'>chrisy@royalridges.org</a></p>
                                    </div>
                                </div>
                                {/*Job Description*/}
                                <div className=' inline-block px-3 snap-center'>
                                    <div className='w-screen h-screen overflow-hidden rounded-full shadow-md heropattern-topography-indigo-200 hover:shadow-xl transition-shadow duration-300 ease-in-out'></div>
                                </div>
                                
                                {/*Letter to Parents*/}
                                <div className=' inline-block px-3 snap-center'>
                                    <div className='w-screen h-screen overflow-hidden rounded-full shadow-md heropattern-topography-indigo-300 hover:shadow-xl transition-shadow duration-300 ease-in-out'></div>
                                </div>

                                {/*All About References*/}
                                <div className='inline-block px-3 snap-center'>
                                    <div className='w-screen h-screen overflow-hidden rounded-full shadow-md heropattern-topography-indigo-400 hover:shadow-xl transition-shadow duration-300 ease-in-out'></div>
                                </div>
                                
                                {/*Summer Staff Application*/}
                                <div className='inline-block px-3 snap-center'>
                                    <div className='w-screen h-screen overflow-hidden rounded-full shadow-md heropattern-topography-indigo-500 hover:shadow-xl transition-shadow duration-300 ease-in-out'></div>
                                </div>

                                {/*References Link*/}
                                <div className=' inline-block px-3 snap-center'>
                                    <div className='w-screen h-screen overflow-hidden rounded-full shadow-md heropattern-topography-indigo-600 hover:shadow-xl transition-shadow duration-300 ease-in-out'></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            <Footer />
        </div>
    );
}

export default SummerStaffApp;