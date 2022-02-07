import React from "react";

import Header from "../components/header";
import Footer from "../components/footer";

const GiddyUp = () => {
    return (
    <div className="bg-gradient-to-r from-yellow-200 to-indigo-200">
        <Header />
            <div>
                <div className="max-w-6xl h-screen overflow-y-scroll mx-2 md:mx-auto text-xs md:text-base">
                    <img src="https://royal-ridges-retreat.s3.us-west-1.amazonaws.com/programs-page/headerPhotos/giddyUp.png" alt="" className="w-full rounded-xl shadow-2xl mt-2" />   
                    <p className="flex flex-wrap text-green-200 font-cursive text-lg justify-center md:text-4xl">
                        Giddy Up - definition: To go ahead or go faster.
                    </p>

                    <p className="mt-4">Program Runs from September through May - every Wednesday from 9:00 am
                    - 3:00 pm.</p>

                    <p className="my-2">Our Giddy Up program offers a Day at Camp program where
                    campers come one day each week and participate in camp
                    activities to keep the summer camp fun alive year-round. Activities
                    include a fun camp activity, games, socialization, and friendship
                    building.</p>

                    <p className="my-2"><span className="uppercase font-semibold">notes:</span>&nbsp;Please dress your camper in weather-appropriate
                    clothing (layers, gloves, long pants, sturdy shoes, rain jackets,
                    etc.) Also, pack a lunch and a snack and send a refillable water
                    bottle. Drop off and pick up is at the lower camp two-rail fence
                    archway at 9 am and 3 pm. Campers will be shuttled up the hill by
                    program staff for morning activities. Covered, warm spaces are
                    available on rainy and cold days.</p>

                    <a href="https://www.ultracamp.com/clientlogin.aspx?idCamp=1145&campCode=151" target="_blank" rel="noopener noreferrer" className="hover:underline hover:text-indigo-400 text-green-200 font-cursive">Sign Up Here</a>

                    <p className="my-2">Due to our Summer Camp programs, GiddyUp Day at Camp is only offered during the school year.</p>

                    <p className="my-2">Winter Break and Spring Break are aligned with the Battle Ground Public
                    School schedule and will also be off. The GiddyUp Day at Camp Program
                    is offered in term sessions. Campers must commit to the full term in
                    order to participate in the program.</p>
                    
                    <div className="bg-green-200 rounded-3xl">
                        <p className="flex flex-wrap text-yellow-400 font-bold text-xl justify-center md:text-xl">Giddy Up Seasonal Terms</p>
                        <p className="text-center font-semibold text-2xl text-gray-200">Fall</p>
                        <p className="text-center font-semibold text-2xl text-gray-200">Winter</p>
                        <p className="text-center font-semibold text-2xl text-gray-200">Spring</p>
                    </div>

                    <p className="mt-4">
                    Horse Option: We offer Riding Lessons on Wednesdays, 10:00 am -12:00
                    pm.</p>

                    <p className="my-2">There will be a $10/day discount offered when purchasing the GiddyUp program and Wednesday Riding Lessons.</p>

                    <p className="my-2">Make-ups or refunds are not available for campers that miss a day. If a day is canceled by
                    Royal Ridges, a credit for the next term will be given.</p>

                    <p className="my-2">Fees are due in full before the start of the term.</p>

                    <p className="my-2">Unless notified of the decision to discontinue the program, participants will be auto-enrolled in the
                    next term and sent an emailed invoice.</p>

                    <p className="my-2">Payment plans or scholarship programs may be available upon request for those with financial need.</p>

                    <div className='pb-20 text-center text-4xl'>
                        <a href="https://www.ultracamp.com/clientlogin.aspx?idCamp=1145&campCode=151" target="_blank" rel="noopener noreferrer" className="hover:underline hover:text-indigo-400 text-green-200 font-cursive">Sign Up Here</a>
                    </div>
                </div>
            </div>
        <Footer />
    </div>
    );
}

export default GiddyUp;