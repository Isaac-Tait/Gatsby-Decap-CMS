import React from "react";
import { Link } from "gatsby";

import Header from "../components/header";
import Footer from "../components/footer";

const SummerStaffApp = () => {
    return (
        <div className="bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-200">
            <Header />
                <div className='max-w-6xl mx-auto h-screen overflow-y-scroll'>
                    <img 
                        src='https://royal-ridges-retreat.s3.us-west-1.amazonaws.com/summer_camp_page/headers/SummerStaffApplication.png'
                        alt='faqs'
                        className='w-1/2 flex mx-auto rounded-xl my-6'
                    />
                    {/*Introduction*/}
                    <div className='text-center mb-1'>
                        <p>Thank you for considering Royal Ridges Retreat as your Summer Mission Field!</p>
                        <p>Applications for Summer 2022 will be accepted from December 1st, 2021 through May 31, 2022.</p>
                        <p>Please read the following documents carefully and make sure you have read <span className="uppercase underline">all</span> of them before you submit your application.</p>
                        <p>The commitment to serve at Royal Ridges includes a three week minimum time commitment.</p>
                        <p>You must also complete all the online and onsite training prior to your committed time period.</p>
                        <p>Onsite training will be on the weekends in June. The dates and training information will be sent to you once you are hired.</p>
                        <p>If you have a specific question before applying, please email Chrisy our Program Director <a href="mailto:chrisy@royalridges.org" className='text-green-200 underline hover:text-indigo-400'>chrisy@royalridges.org</a></p>
                    </div>
                    <div className='flex flex-col justify-between h-screen text-center heropattern-bamboo-indigo-100 rounded-2xl'>
                        {/*Summer Staff Job Descriptions*/}
                        <div className='mt-4'>
                            <p className='text-3xl text-yellow-400'>Step I</p>
                            <p>Summer Camp Job Descriptions and Information</p>
                            <a 
                                href="https://royal-ridges-retreat.s3.us-west-1.amazonaws.com/PDFs/Summer_Camp_Job_Descriptions.pdf" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className='text-green-200 italic text-sm underline hover:text-indigo-400'
                            >Link</a>
                        </div>
                        {/*Letter to the parents*/}
                        <div className=''>
                            <p className='text-3xl text-yellow-400'>Step II</p>
                            <p>A letter to the parents of prospective Royal Ridges employees</p>
                            <a 
                                href="https://royal-ridges-retreat.s3.us-west-1.amazonaws.com/PDFs/Parent_Letter.pdf"
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className='text-green-200 italic text-sm underline hover:text-indigo-400'
                            >Link</a>
                        </div>
                        {/*All about references*/}
                        <div className=''>
                            <p className='text-3xl text-yellow-400'>Step III</p>
                            <p>What you need to know about our references requirements</p>
                            <a 
                                href="https://royal-ridges-retreat.s3.us-west-1.amazonaws.com/PDFs/All_About_References.pdf" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className='text-green-200 italic text-sm underline hover:text-indigo-400'
                            >Link</a>
                        </div>
                        {/*Summer Staff Application*/}
                        <div className=''>
                            <p className='text-3xl text-yellow-400'>Step IV</p>
                            <p>The Summer Staff Application for Summer 2022</p>
                            <Link 
                                to={'/application'}
                                className='text-green-200 italic text-sm underline hover:text-indigo-400'
                            >Link</Link>
                        </div>
                        {/*References Link*/}
                        <div className=''>
                            <p className='text-3xl text-yellow-400'>Step V</p>
                            <p>Send the link below to your references for them to fill out.</p>
                            <p className='text-xs italic'>(Right click the link and select copy then paste the link into an email body to your references of choice)</p>
                            <a 
                                href="https://docs.google.com/forms/d/1T55_5bN0zDRQbfhwftNR0HVEs1FyK2Iny7ET_AJL_is/edit" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className='text-green-200 italic text-sm underline hover:text-indigo-400 mt-4'
                            >Link</a>
                        </div>
                        {/*References Link*/}
                        <div className='mb-4'>
                            <p className='text-3xl text-yellow-400'>Step VI</p>
                            <p>Your application has been completed <span className='underline'>successfully</span>&nbsp;!!! Please give us three(3) to five(5) business days to process it.</p>
                            <p>If you have not heard from us within six(6) business days than please contact us using the link below to make sure we received it. Thank you.</p>
                            <Link to={'/contact'} className='text-green-200 italic text-sm underline hover:text-indigo-400'>Link</Link>
                        </div>
                    </div>
                </div>
            <Footer />
        </div>
    );
}

export default SummerStaffApp;