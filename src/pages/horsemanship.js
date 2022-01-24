import React from "react";

import Header from "../components/header";
import Footer from "../components/footer";

const RidingLessons = () => {
    return (
        <div className="bg-gradient-to-r from-yellow-400 via-yellow-200 to-indigo-200">
          <Header />
            <div>
              <div className="max-w-6xl mx-2 md:mx-auto text-xs md:text-base h-screen overflow-y-scroll">
              <img src="https://royal-ridges-retreat.s3.us-west-1.amazonaws.com/summer_camp_page/Riding+Lessons+1.0+(3).png" alt="outdoor survival" className="w-full rounded-2xl shadow-xl mt-2" />
                <p>
                  Royal Ridges provides a horsemanship riding lesson program which
                  addresses safe handling as well as riding and care of the horse.
                  Lessons include riding time, fellowship time and horse science.
                  Fellowship time includes prayer, discussion and topics relating the
                  Bible to horsemanship. Students attend once per week. Classes are 2
                  hours long and include 45 minutes of time on a horse. Due to our
                  Summer Day Camp programs, horsemanship classes are only offered during
                  the school year. Winter Break and Spring Break aligned with Battle
                  Ground Public School schedule will also be off. Horsemanship programs
                  are offered in terms. Riders must commit to the full term in order to
                  participate in the program.
                </p>
                <p className="flex flex-wrap text-green-200 font-bold text-xl justify-center md:text-xl">
                  The lessons terms sessions are as follows:
                </p>
                <p>September 13- October 29</p>
                <p>November 1- December 17 (November 22-26 off)</p>
                <p>January 3- February 25</p>
                <p>February 28- April 29 (April 4-8 off)</p>
                <p>May 2- June 10 Summer off</p>
                <p className="mt-2">
                  Make-ups or refunds are not available for students that miss class
                  since the instructor and horse still had to be available for the class
                  whether you were there or not. If a class is canceled by Royal Ridges,
                  a credit for the next term will be given. Fees are due in full before
                  the start of the term. Unless notified of the decision to discontinue
                  the program, participants will be auto-enrolled in the next term and
                  sent an emailed invoice. Payment plans or scholarship programs may be
                  available upon request for those with financial need.
                </p>
                <a
                  href="https://www.royalridges.upcsites.org/horsemanshiplessons.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline text-green-200 uppercase text-lg mt-2"
                >
                  Sign up for the Horsemanship Program
                </a>
                <p>
                  Designed for horse lovers to learn to be safe and confident around
                  horses while leading, grooming and learning basic riding skills.
                  Classes are 2 hours long which includes 45-minute ride time, Bible
                  fellowship, and horse science time. Classes are $40 per week and
                  billed by the term. Current Class Times: Tuesdays 4:00-6:00 pm
                  Wednesdays 10:00 am- 12:00 pm Thursdays 4:00-6:00 pm
                </p>
              </div>
            </div>
          <Footer />
        </div>
    );
}

export default RidingLessons;