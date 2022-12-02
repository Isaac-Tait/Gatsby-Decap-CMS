import React from "react";
import { Link } from "gatsby";

import Header from "../components/header";
import Footer from "../components/footer";

const SummerStaffApp = () => {
    return (
        <div className="bg-gradient-to-l from-yellow-200 to-indigo-200">
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
                        <p>Applications for Summer 2022 will be accepted from December 1st through May 31 each year.</p>
                        <p>Please read the following documents carefully and make sure you have read <span className="uppercase underline">all</span> of them before you submit your application.</p>
                        <p>Please note that summer staff are required to serve Royal Ridges for a minimum of three weeks.</p>
                        <p>You must also complete all of the paperwork and online training prior to attending the onsite training. Onsite training is required. Onsite training will be on the Saturdays in June and the first week of camp. The dates and training information will be sent to you once you are hired.</p>
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
                            >Job Descriptions</a>
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
                            >A letter for the parents</a>
                        </div>
                        {/*All about references*/}
                        <div className=''>
                            <p className='text-3xl text-yellow-400'>Step III</p>
                            <p>The Summer Staff Application and References</p>
                            <p>(Note: You will need to create an account in order to complete the application)</p>
                            <a 
                                href="https://www.ultracamp.com/clientlogin.aspx?idCamp=1145&campCode=151" 
                                className='text-green-200 underline hover:text-indigo-400 italic text-sm'
                                target="_blank" 
                                rel="noopener noreferrer" 
                            >(Create an Account)</a>
                            <p>Once you have made account click the link below to be directed to the staff application.</p>
                            <a 
                                href="https://royal-ridges-retreat.s3.us-west-1.amazonaws.com/PDFs/All_About_References.pdf" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className='text-green-200 italic text-sm underline hover:text-indigo-400'
                            >All about references</a>
                        </div>
                        {/*Summer Staff Application*/}
                        <div className=''>
                            <p className='text-3xl text-yellow-400'>Step IV</p>
                            <p className="mx-10">Please give us some time to process your application. If you have not heard from us after a week, please contact the Program Director to make sure we received it. Thank you for considering Royal Ridges for your summer!</p>
                            <Link 
                                to={'/application'}
                                className='text-green-200 italic text-sm underline hover:text-indigo-400'
                            >Click here to be taken to the application</Link>
                        </div>
                        {/*References Link*/}
                        <div className=''>
                            <p className='text-3xl text-yellow-400'>Step V</p>
                            <p>Send the link below to your references for them to fill out.</p>
                            <p className='text-xs italic'>(Right click the link then select copy. Next paste the link into the email body addressed to the references of your choice)</p>
                            <a 
                                href="https://docs.google.com/forms/d/1T55_5bN0zDRQbfhwftNR0HVEs1FyK2Iny7ET_AJL_is/edit" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className='text-green-200 italic text-sm underline hover:text-indigo-400 mt-4'
                            >Right click me please...</a>
                        </div>
                        {/*References Link*/}
                        <div className='mb-4'>
                            <p className='text-3xl text-yellow-400'>Step VI</p>
                            <p>Your application has been completed <span className='underline'>successfully</span>&nbsp;!!! Please give us three(3) to five(5) business days to process it.</p>
                            <p>If you have not heard from us within six(6) business days than please contact us using the link below to make sure we received it. Thank you.</p>
                            <Link 
                                to={'/contact'} 
                                className='text-green-200 italic text-sm underline hover:text-indigo-400'>How to contact us if you have not heard from us in at least six business days</Link>
                        </div>
                    </div>
                </div>
            <Footer />
        </div>
    );
}

export default SummerStaffApp;