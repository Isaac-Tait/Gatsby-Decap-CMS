import React from "react";

import Header from "../components/header";

const GiddyUp = () => {
    return (
        <div>
        <Header />
        <div>
            <div className="max-w-6xl mx-2 md:mx-auto text-xs md:text-base">
                <p className="flex flex-wrap text-green-200 font-bold text-xl justify-center md:text-4xl">
                    Giddy Up - definition: To go ahead or go faster.
                </p>

                <p>
                Program Runs from September through May - every Wednesday from 9:00 am
                - 3:00 pm. Our Giddy Up program offers a Day at Camp program where
                campers get to come one day each week and participate in camp
                activities to keep the summer camp fun alive year-round. Activities
                include a fun camp activity, games, socialization, and friendship
                building. Some notes: Please dress your camper in weather-appropriate
                clothing (layers, gloves, long pants, sturdy shoes, rain jackets,
                etc.) Also, pack a lunch and a snack and send a refillable water
                bottle. Drop off and pick up is at the lower camp two-rail fence
                archway at 9 am and 3 pm. Campers will be shuttled up the hill by
                program staff for morning activities. Covered, warm spaces are
                available on rainy and cold days. Due to our Summer Camp programs,
                GiddyUp Day at Camp is only offered during the school year. Winter
                Break and Spring Break are aligned with the Battle Ground Public
                School schedule and will also be off. The GiddyUp Day at Camp Program
                is offered in term sessions. Campers must commit to the full term in
                order to participate in the program.
                </p>
                <p className="flex flex-wrap text-green-200 font-bold text-xl justify-center md:text-xl">
                The terms sessions are as follows:
                </p>
                <p>September 15 - October 27</p>
                <p>November 1 - December 17 (November 22-26 off)</p>
                <p>January 3 - February 25 </p>
                <p>February 28 - April 29 (April 4-8 off)</p>
                <p>May 2 - June 10 Summer off.</p>

                <p className="mt-4">
                Horse Option: We offer Riding Lessons on Wednesdays, 10:00 am -12:00
                pm. There will be a $10/day discount offered when purchasing the
                GiddyUp program and Wednesday Riding Lessons. Make-ups or refunds are
                not available for campers that miss a day. If a day is canceled by
                Royal Ridges, a credit for the next term will be given. Fees are due
                in full before the start of the term. Unless notified of the decision
                to discontinue the program, participants will be auto-enrolled in the
                next term and sent an emailed invoice. Payment plans or scholarship
                programs may be available upon request for those with financial need.
                </p>
            </div>
        </div>
        </div>
    );
}

export default GiddyUp;