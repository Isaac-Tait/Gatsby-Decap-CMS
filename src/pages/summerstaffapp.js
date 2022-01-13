import React from "react";

import Header from "../components/header";
import Footer from "../components/footer";

const SummerStaffApp = () => {
    return (
        <div className="bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-200">
            <Header />
                <div className='flex flex-col snap-x'>
                    <div className='flex h-screen'>
                        <div className="flex overflow-x-scroll">
                            <div className='flex'>
                                {/*Introduction*/}
                                <div className=' inline-block px-3'>
                                    <div className='w-screen text-center px-4 text-xs md:text-base'>
                                        <p>Thank you for considering Royal Ridges Retreat as your Summer Mission Field!</p>
                                        <p>Applications for Summer 2022 will be accepted from December 1st, 2021 through May 31, 2022.</p>
                                        <p>Please read the following documents carefully and make sure you have read ALL of them before you submit your application.</p>
                                        <p>The commitment to serve at Royal Ridges includes a three week minimum time commitment.</p>
                                        <p>You must also complete all the online and onsite training prior to your committed time period.</p>
                                        <p>Onsite training will be on the weekends in June. The dates and training information will be sent to you once you are hired.</p>
                                        <p>If you have a specific question before applying, please email Chrisy our Program Director <a href="mailto:chrisy@royalridges.org" className='text-green-200 underline hover:text-indigo-400'>chrisy@royalridges.org</a></p>
                                        
                                        <div className='flex flex-wrap justify-end italic text-red-500 mt-6 text-sm'>
                                        <p>Proceed to step I</p>
                                        <svg 
                                            className='animate-pulse pl-2'
                                            xmlns="http://www.w3.org/2000/svg" 
                                            fill-rule="evenodd" 
                                            clip-rule="evenodd"
                                        >
                                            <path d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z"/>
                                        </svg>
                                        </div>
                                    </div>
                                </div>

                                
                                
                                {/*Summer Staff Application*/}
                                <div className='inline-block px-3'>
                                    <div className='w-screen text-center my-auto px-4 text-xs md:text-base'>
                                        <p className='text-3xl text-yellow-400 mb-6'>Step I</p>
                                        <p>Summer Camp Job Descriptions and Information</p>
                                        <p className='text-green-200 italic text-sm underline hover:text-indigo-400 mt-4'>Link</p>
                                    </div>
                                </div>

                                {/*Summer Staff Application*/}
                                <div className='inline-block px-3'>
                                    <div className='w-screen text-center my-auto px-4 text-xs md:text-base'>
                                        <p className='text-3xl text-yellow-400 mb-6'>Step II</p>
                                        <p>A letter to the parents of prospective Royal Ridges employees</p>
                                        <p className='text-green-200 italic text-sm underline hover:text-indigo-400 mt-4'>Link</p>
                                    </div>
                                </div>

                                {/*Summer Staff Application*/}
                                <div className='inline-block px-3'>
                                    <div className='w-screen text-center my-auto px-4 text-xs md:text-base'>
                                        <p className='text-3xl text-yellow-400 mb-6'>Step III</p>
                                        <p>What you need to know about our references requirements</p>
                                        <p className='text-green-200 italic text-sm underline hover:text-indigo-400 mt-4'>Link</p>
                                    </div>
                                </div>
                                
                                {/*Summer Staff Application*/}
                                <div className='inline-block px-3'>
                                    <div className='w-screen text-center my-auto px-4 text-xs md:text-base'>
                                        <p className='text-3xl text-yellow-400 mb-6'>Step IV</p>
                                        <p>The Summer Staff Application for Summer 2022</p>
                                        <p className='text-green-200 italic text-sm underline hover:text-indigo-400 mt-4'>Link</p>
                                    </div>
                                </div>

                                {/*References Link*/}
                                <div className=' inline-block px-3'>
                                    <div className='w-screen text-center my-auto px-4 text-xs md:text-base'>
                                        <p className='text-3xl text-yellow-400 mb-6'>Step V</p>
                                        <p>Please send this to your references for them to fill out</p>
                                        <p className='text-green-200 italic text-sm underline hover:text-indigo-400 mt-4'>Link</p>
                                    </div>
                                </div>
                                {/*References Link*/}
                                <div className=' inline-block px-3'>
                                    <div className='w-screen text-center my-auto px-4 text-xs md:text-base'>
                                        <p className='text-3xl text-yellow-400 mb-6'>Step VI</p>
                                        <p>Your application has been completed <span className='underline'>successfully</span>&nbsp;!!! Please give us three(3) to five(5) business days to process it.</p>
                                        <p>If you have not heard from us within six(6) business days than please contact us using the link below to make sure we received it. Thank you.</p>
                                        <p className='text-green-200 italic text-sm underline hover:text-indigo-400 mt-4'>Link</p>
                                    </div>
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