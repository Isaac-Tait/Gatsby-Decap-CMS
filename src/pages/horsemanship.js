import React from "react";

import Header from "../components/header";
import Footer from "../components/footer";

const RidingLessons = () => {
    return (
        <div className="bg-gradient-to-r from-yellow-200 to-indigo-200">
          <Header />
            <div>
              <div className="max-w-6xl mx-2 md:mx-auto text-xs md:text-base h-screen overflow-y-scroll">
              <img src="https://royal-ridges-retreat.s3.us-west-1.amazonaws.com/summer_camp_page/Riding+Lessons+1.0+(3).png" alt="outdoor survival" className="w-full rounded-2xl shadow-xl mt-2" />
                <p>
                Royal Ridges provides a horsemanship riding lesson program that addresses safe handling as well as riding and care of the horse. Lessons include riding time, fellowship time, and horse science. Fellowship time includes prayer, discussion, and topics relating the Bible to horsemanship. Students attend once per week. Classes are 2 hours long and include 45 minutes on a horse. Due to our Summer Day Camp programs, horsemanship classes are only offered during the school year. Winter Break and Spring Break aligned with Battle Ground Public School schedule will also be off. Horsemanship programs are offered in terms. Riders must commit to the full term to participate in the program.
                </p>
                <p className="flex flex-wrap text-green-200 font-bold text-xl justify-center md:text-xl">
                  The lessons terms sessions are as follows:
                </p>
                <p>Spring</p>
                <p>Fall</p>
                <p>Winter</p>
              
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
                <p className='mt-1'>
                  Designed for horse lovers to learn to be safe and confident around
                  horses while leading, grooming and learning basic riding skills.
                  Classes are 2 hours long which includes 45-minute ride time, Bible
                  fellowship, and horse science time. Classes are $40 per week and
                  billed by the term. Current Class Times: Tuesdays 4:00-6:00 pm
                  Wednesdays 10:00 am- 12:00 pm Thursdays 4:00-6:00 pm
                </p>
                <div className='pb-20 text-center text-4xl'>
                    <a 
                      href="https://www.ultracamp.com/info/upcomingSessions.aspx?sessionFinder=1&lnkcategory=Horsemanship%20Lessons/Vaulting" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="hover:underline hover:text-indigo-400 text-green-200 font-cursive"
                    >Sign Up Here</a>
                </div>
              </div>
            </div>
          <Footer />
        </div>
    );
}

export default RidingLessons;