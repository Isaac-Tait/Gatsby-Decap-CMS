import React from "react";

import Header from "../components/header";
import Footer from "../components/footer";

const Vaulting = () => {
    return (
        <div className="bg-gradient-to-r from-yellow-200 to-indigo-200">
            <Header />
                <div className="max-w-6xl mx-2 md:mx-auto text-xs md:text-base h-screen overflow-y-scroll">
                    <img src='https://royal-ridges-retreat.s3.us-west-1.amazonaws.com/programs-page/headerPhotos/vaultingLessons.png' alt='vaulting class' className='w-full rounded-2xl shadow-xl mt-2' />
                    <p className="py-10">Royal Ridges Recreational Vaulting program is an excellent activity for the brave horse-loving kiddo as well as the more cautious first-time horse lover. Vaulting is a gymnastic routine performed on horseback while the horse is moving. A staff member controls the horse, and the vaulter will learn the moves under the supervision and support of the instructor.</p>
                    <p>Ages: 6 - 14</p>
                    <p>Price: $40/per week</p>
                    <p>Dates: Wednesdays - September 14, 2022 - June 7, 2023  - 4:00 - 6:00 pm</p>
                    <div className='my-4 text-center text-4xl'>
                        <a 
                            href='https://www.ultracamp.com/info/upcomingSessions.aspx?idCamp=1145&campCode=151&lnkCategory=Horsemanship+Lessons+Vaulting' 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="hover:underline hover:text-indigo-400 text-green-200 font-cursive"
                        >Sign Up Here</a>
                    </div>
                    
                    <p className="font-semibold">Notes:</p>
                    <ul className="prose list-disc pb-4">
                        <li>Recreational Vaulting Lessons are once a week.</li>
                        <li>Classes are 2 hours long and include a workout, practice on the barrel, and several rounds on the horse.</li>
                        <li>Due to our Summer Day Camp programs, Recreational Vaulting Lessons are only offered during the school year.</li>
                        <li>Winter Break and Spring Break aligned with the Battle Ground Public School schedule will also be off.</li>
                        <li>Make-ups or refunds are not available for students who miss a lesson since the instructor and horse still had to be available for the lesson whether you were there or not. If Royal Ridges cancels a lesson, a credit for the next term will be given.</li>
                        <li>Vaulters should wear soft tennis shoes or purchase vaulting shoes for their time on the horse (see the instructor for tips for purchasing). Boots are not allowed on the horse. Vaulters should have long pants that are easy to move in (yoga pants, sweatpants, or leggings are fine). Vaulters do not wear helmets as the movements required would make a helmet unsafe.</li>
                        <li>Participants can withdraw from the program anytime during the session, but Royal Ridges requests a two-week notice.</li>
                    </ul>
                    <p><span className="font-semibold">Payments: </span>Payment can be made monthly or paid in full. (35 weeks)</p>
                    <p className="pb-6">Scholarships may be available upon request for those with financial needs.</p>
                </div>
            <Footer />
        </div>
    )
}

export default Vaulting;