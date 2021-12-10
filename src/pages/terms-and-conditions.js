import React from 'react';

import Header from '../components/header';
import Footer from '../components/footer';

const TermsAndConditions = () => {
    return (
        <div>
            <Header />
            <div className="h-screen">
            <div className="max-w-4xl mx-auto mt-8">
                <h1 className="text-green-200 font-bold text-base md:text-4xl flex flex-wrap justify-center mx-auto">Royal Ridges Retreat Terms and Conditions:</h1>
                <h1 className='font-semibold italic text-green-200 mt-2'>Deposits</h1>
                <p>No camper is confirmed without a 35% deposit. Deposits are non-refundable. If you need to cancel your week altogether and not change it to a different week, RRR will refund you, minus the 35% nonrefundable deposit.</p>

                <h1 className='font-semibold italic text-green-200 mt-2'>Emergency Shutdown Policy</h1>
                <p>If for any reason, Royal Ridges needs to comply with a state or local government shut down of our operations due to communicable diseases, fire, & other natural disasters, then we will refund all camper funds minus a 10% service fee for charges incurred for electronic refunds or checks.</p> 

                <h1 className='font-semibold italic text-green-200 mt-2'>Payment</h1>
                <p>At registration, a payment of at least 35% of the total cost will be required to hold the camper's spot.  The remaining balance must be paid on or before the first day of camp. You can pay your remaining balance online at<a href="paypal.me/royalridges" target="_blank" rel="noopener noreferrer" className="underline text-green-200 ml-4">Paypal</a>, over the phone, or in the office with a check, cash, or a credit card.</p>
                
                <h1 className='font-semibold italic text-green-200 mt-2'>Changes</h1>
                <p>We understand that parent and family schedules can change quickly during the summer and that, because of this, enrollment changes are an inevitable part of camp programming. At the same time, they pose challenges for staffing, supervision, supplies, and office systems. Changing weeks in advance of the start of camp will incur a $5 office fee per child per camp change. If you must change weeks, please consider other campers who may be on the waitlist for that camp.</p>
                
                <h1 className='font-semibold italic text-green-200 mt-2'>Pro Rating Camp Fees</h1>
                <p>Royal Ridges does not prorate camps or activities. If a camper cannot attend for part of a day, a full day, or multiple days, there will be no refund. The same also applies to bus transportation and also if your child comes down ill. If your camper misses any bus rides, we do not pro-rate.</p>
                
                <h1 className='font-semibold italic text-green-200 mt-2'>Camp Store Cards</h1>
                <p>*Balances are not rolled from week to week</p>
                <p>*Balances are not refunded</p>
                <p>*Any left overbalances are deposited into the Camper Scholarship Fund</p>

                <h1 className='font-semibold italic text-green-200 mt-2'>Refund/Discount</h1> 
                <p>Any deviation from the policies listed here must be approved in writing by the Executive Director of Royal Ridges Retreat.</p> 
            </div>
            </div>
            <Footer />
        </div>
    )
}

export default TermsAndConditions;