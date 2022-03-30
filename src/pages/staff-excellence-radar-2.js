import React from "react";

import { Link } from "gatsby"

import Header from "../components/header";
import Footer from "../components/footer";

const SummerStaffOne = () => {
    return (
        <div className="bg-yellow-200">
          <Header />
            <div className="max-w-6xl mx-2 md:mx-auto text-xs md:text-base h-screen">
                <h3 className='text-2xl my-6 font-semibold text-center'>Paperwork</h3>
                    <p>Please complete the following paperwork and send it in through email- chrisy@royalridges.org or print it out and mail it in.</p>
                    <p className='font-semibold text-xl mt-2'>Senior Staff: Supervisors, Facilitators, Wranglers and Group Leaders:</p>
                    <p>Please send in:</p>
                    <p className='ml-2'>1.&nbsp;<a
                        href='https://royal-ridges-retreat.s3.us-west-1.amazonaws.com/summer_staff/Summer_Senior_Staff_Contract_2022.pdf'
                        target="_blank" 
                        rel="noopener noreferrer"
                        className='text-green-200 hover:underline hover:text-indigo-400'
                    >Summer Staff Senior Contract</a>.</p>
                    <p className='ml-2'>2.&nbsp;<a
                        href='https://royal-ridges-retreat.s3.us-west-1.amazonaws.com/summer_staff/New_Employee_Form.pdf'
                        target="_blank" 
                        rel="noopener noreferrer"
                        className='text-green-200 hover:underline hover:text-indigo-400'
                    >New Hire Form</a>.</p>
                    <p className='ml-2'>3.&nbsp;<a
                        href='https://royal-ridges-retreat.s3.us-west-1.amazonaws.com/summer_staff/Parent_Authorization_Form.pdf'
                        target="_blank" 
                        rel="noopener noreferrer"
                        className='text-green-200 hover:underline hover:text-indigo-400'
                    >Parent Authorization Form if under 18</a>.</p>
                    <p className='italic text-center my-2'>Only the Employee Information, Employee Signature and Parent Authorization/signature is required for this form. You do not need to complete the School Authorization section since you will not be missing out on school hours to participate due to it being a summer program.</p>
                    <p className='ml-2'>4.&nbsp;<a
                        href='https://royal-ridges-retreat.s3.us-west-1.amazonaws.com/summer_staff/RRR_Background_Check_Form.pdf'
                        target="_blank" 
                        rel="noopener noreferrer"
                        className='text-green-200 hover:underline hover:text-indigo-400'
                    >Background Check Form if 18 or over</a>.</p>
                    <p className='ml-2'>5.&nbsp;Copies of two forms of government ID - one must be a picture ID. You can take a picture or scan it and email it to me.</p>
                    <p className='ml-2'>6.&nbsp;<a 
                            href='https://waiver.smartwaiver.com/w/5f3c5bc8e7afd/web/'
                            target="_blank" 
                            rel="noopener noreferrer"
                            className='text-green-200 hover:underline hover:text-indigo-400'
                        >Online Medical/Liabilitiy Waiver</a>(a new one must be completed each year)</p>
                    <p className='ml-2'>7.&nbsp;Email <a mailto="chrisy@royalridges.org" className='text-green-200 hover:underline hover:text-indigo-400'>chrisy@royalridges.org</a> your top 3 choices of camp name if you do not already have a camp name.</p>
                    <p className='mt-6'>We use OnPay and an outside payroll department for all payroll. It is important that all your paperwork is completed in a timely fashion so that we can send the necessary information to set you up.  You should receive an email from OnPay (it often goes to your spam folder so look there when prompted from the office) as well as the office to set up your account the week before you are scheduled to work. Look for this email and set up your account promptly to assure being paid. Pay will be automatically deposited into your account on the following Friday after each work week as long as your paperwork has been completed and your account is set up.</p>
                    <p className='font-semibold text-xl mt-2'>Junior Staff:</p>
                    <p>Please send in:</p>
                    <p className='ml-2'>1.&nbsp;<a
                        href='https://royal-ridges-retreat.s3.us-west-1.amazonaws.com/summer_staff/Summer_Junior_Staff_Contract_2022.pdf'
                        target="_blank" 
                        rel="noopener noreferrer"
                        className='text-green-200 hover:underline hover:text-indigo-400'
                    >Summer Junior Staff Contract</a>.</p>
                    <p className='ml-2'>2.&nbsp;
                    <a
                        href='https://royal-ridges-retreat.s3.us-west-1.amazonaws.com/summer_staff/Parent_Authorization_Form.pdf'
                        target="_blank" 
                        rel="noopener noreferrer"
                        className='text-green-200 hover:underline hover:text-indigo-400'
                    >Parent Authorization Form if under 18</a>.</p>
                    <p className='italic text-center my-2'>Only the Employee Information, Employee Signature and Parent Authorization/signature is required for this form. You do not need to complete the School Authorization section since you will not be missing out on school hours to participate due to it being a summer program.</p>
                    <p className='ml-2'>3.&nbsp;Copy of your birth certificate or passport. You can take a picture or scan it and email it to me.</p>
                    <p className='ml-2'>4.&nbsp;
                        <a 
                            href='https://waiver.smartwaiver.com/w/5f3c5bc8e7afd/web/'
                            target="_blank" 
                            rel="noopener noreferrer"
                            className='text-green-200 hover:underline hover:text-indigo-400'
                        >Online Medical/Liabilitiy Waiver</a>(a new one must be completed each year)</p>
                    <p className='ml-2'>5.&nbsp;Email <a mailto="chrisy@royalridges.org" className='text-green-200 hover:underline hover:text-indigo-400'>chrisy@royalridges.org</a> your top 3 choices of camp name if you do not already have a camp name.</p>
                <div className='text-center mt-4 flex flex-col'>
                        <Link 
                            to='/staff-excellence-radar-3'
                            className='text-2xl my-6 font-semibold w-1/4 mx-auto text-gray-600 hover:underline hover:text-indigo-600'
                        > {">"}{">"}{' '}In Person Training{' '}{">"}{">"}</Link>
                        <Link 
                            to='/staff-excellence-radar'
                            className='text-2xl my-6 font-semibold w-1/4 mx-auto text-gray-600 hover:underline hover:text-indigo-600'
                        > {"<"}{"<"}{' '}Beginning{' '}{"<"}{"<"}</Link>
                </div>
            </div>
          <Footer />
      </div>
    );
}

export default SummerStaffOne;