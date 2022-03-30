import React from "react";

import { Link } from "gatsby"

import Header from "../components/header";
import Footer from "../components/footer";

const SummerStaff = () => {
    return (
        <div className="bg-yellow-200">
          <Header />
            <div className="max-w-6xl mx-2 md:mx-auto text-xs md:text-base h-screen overflow-y-scroll">
                <h2 className='text-4xl text-center font-semibold text-green-200'>You Are Hired!</h2>
                <p className='mt-1'>Congratulations! You have been selected to serve at Royal Ridges this summer! I am excited to have you on our summer team and to see God at work in you and through you.</p>
                <p className='mt-1'>Below you will find a number of important documents for hiring as well as training information. Please make sure to read over the information carefully, follow the steps below, send back the appropriate forms in timely manner, and mark your calendars with important dates.</p>
                <p className='mt-1'>If you have any questions about this please don't hesitate to contact me. You can reach me via email <a mailto="chrisy@royalridges.org" className='text-green-200 hover:underline hover:text-indigo-400'>chrisy@royalridges.org</a> or call the camp office if it is an urgent question.</p>
                <div className='text-center'>
                    <p className='text-2xl font-semibold'>Dates of Summer Camp:</p>
                    <p>Week 1: June 20-24</p>    
                    <p>Week 2: June 27-July 1</p>    
                    <p>Week 3: July 4-8</p>    
                    <p>Week 4: July 11-15</p>   
                    <p>Week 5: July 18-22</p>
                    <p>Week 6: July 25-29</p>   
                    <p>Week 7: August 1-5</p>     
                    <p>Week 8: August 8-12</p>    
                    <p>Week 9: August 15-19</p>
                    <p><span className='font-semibold'>Note:</span> There are no resident camps this summer due to health guideline restrictions.</p>
                    <p>Please make note of the time commitments that correlate with your position and camp.</p>
                </div>
                <p className='text-xl mt-4'>Senior Staff Supervisor, Facilitator, and Wrangler Weekly Time Commitment:</p>
                <p className='font-semibold'>Traditional Day Camp, Day Adventure Camp, Day Paintball Camp, Day Horse Camp:</p>
                <p>Monday through Friday, 7:30 am through 5:00 pm daily</p>
                <p className='italic'>Day Horse runs extended stay until 8 pm on weeks 2, 4, 6, 8. All supervisors, facilitators and wranglers regardless of camp assigned, are expected to rotate through helping.</p>
                <p className='text-xl mt-4'>Senior Staff Group Leader Weekly Time Commitment:</p>
                <p className='font-semibold'>Traditional Day Camp, Day Adventure Camp, Day Paintball Camp, Day Horse Camp:</p>
                <p>Monday through Friday, 8:00 am through 4:30 pm daily</p>
                <p className='italic'>Day Horse runs extended stay until 8 pm on weeks 2, 4, 6, 8. Day Horse Camp Group Leaders are expected to rotate through helping.</p>
                <p className='text-xl mt-4'>Junior Staff Weekly Time Commitment:</p>
                <p className='font-semibold'>Traditional Day Camp, Day Adventure Camp, Day Paintball Camp, Day Horse Camp:</p>
                <p>Monday through Friday, 8:30 am through 3:30 pm daily</p>
                <p className='italic'>Day Horse runs extended stay until 8 pm on weeks 2, 4, 6, 8. Day Horse Camp and Corral juniors may stay to help with approval from the Program Director but are not required to. There will be no bus service for pick up at 8 pm.</p>

                <p className='mt-6'>All senior staff are required to attend meetings before and after camp at 8 am and 4 pm. Please do your best to be professional and not be late. Junior staff are welcome to attend meetings but are not required to. Junior staff may sign up for bus service if transportation help is needed. Any staff member riding the bus is required to assist the bus driver as needed with supervision of campers and camper check in. All staff will need to dress appropriately for camp, the weather and the activities they are running as well as pack a lunch, snack, and a water bottle. Staff may access the camp store during their camper's store time. Store cards can be purchased online- no cash is permitted.</p>
                <p className='mt-2'><span className='font-semibold'>First aid & CPR training</span> is only required for Senior Staff will be provided for senior staff during Senior Staff Training (see below for more details). All senior staff members are required to have a certification in CPR and first aid. If you cannot attend Royal Ridges CPR & First Aid training, you will be responsible for completing that certification on your own and submitting proof of completion to RR. If you already have a CPR & First Aid Certification, and it will be valid through the summer, you will need to send us a copy via email, please do this as soon as possible.</p>
                <p className='mt-2'>Additionally, please note that the position and pay on your contract may be subject to change. If it is necessary to switch your position or the camp in which you will be serving I will let you know as quickly as possible. Please continue to pray over our camp and all that God will do here this summer.</p>
                <p className='mt-2'>Thanks for being awesome!</p>
                <div className='text-center'>
                    <Link 
                        to='/staff-excellence-radar-2'
                        className='text-medium lg:text-2xl my-6 font-semibold w-full lg:w-1/4 mx-auto text-gray-600 hover:underline hover:text-indigo-600'
                    > {">"}{">"}{' '}Paperwork{' '}{">"}{">"}</Link>
                </div>
            </div>
          <Footer />
      </div>
    );
}

export default SummerStaff;