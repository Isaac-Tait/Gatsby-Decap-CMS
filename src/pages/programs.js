import React from "react";
import {Link} from 'gatsby';

import Header from "../components/header";
import Footer from "../components/footer";

const ProgramsPage = () => {
    return (
      <div className="bg-gradient-to-l from-yellow-400 via-yellow-200 to-indigo-200">
        <Header />
          <div className="max-w-6xl mx-auto">
            <div className="text-green-200 font-bold text-base md:text-4xl flex flex-wrap justify-center mx-auto">
              Royal Ridges Programs
            </div>
    
            <div className="grid grid-cols-3 gap-2 h-screen mx-2 overflow-y-scroll">
                {/*👇🏼First Row*/}
                <div className="flex flex-col text-center">
                  <Link
                    to={'/giddy-up'}
                    className='text-green-200 hover:text-indigo-400'
                  >
                    <img
                      alt="blue_skies"
                      src="https://royal-ridges-retreat.s3.us-west-1.amazonaws.com/the_real_programs_page/Royal+Ridges-Horse+Camp-Yacolt-Washington-Summer+Camp-Kids+Camp-Christian+Camp-blue_skies.jpeg"
                      className="h-20 md:h-40 mx-auto rounded-3xl"
                    />
                    <p className="text-center">Giddy Up</p>
                  </Link>
                </div>
                <div className="flex flex-col text-center">
                  <Link
                    to={'/horsemanship'}
                    className='text-green-200 hover:text-indigo-400'
                  >
                    <img
                      alt="dreamy forest"
                      src="https://royal-ridges-retreat.s3.us-west-1.amazonaws.com/the_real_programs_page/Royal+Ridges-Horse+Camp-Yacolt-Washington-Summer+Camp-Kids+Camp-Christian+Camp-dreamy_forest.jpeg"
                      className="h-20 md:h-40 mx-auto rounded-3xl"
                    />
                    <p className="text-center">Horsemanship Lessons</p>
                  </Link>
                </div>
                <div className="flex flex-col text-center">
                  <Link
                    to={'/saturday-camps'}
                    className='text-green-200 hover:text-indigo-400'
                  >
                    <img
                    alt="happy_campers"
                    src="https://royal-ridges-retreat.s3.us-west-1.amazonaws.com/the_real_programs_page/Royal+Ridges-Horse+Camp-Yacolt-Washington-Summer+Camp-Kids+Camp-Christian+Camp-happy+campers.JPG"
                    className="h-20 md:h-40 mx-auto rounded-3xl"
                  />
                    <p className="text-center">Saturday Camps</p>
                  </Link>
                </div>
                {/*👇🏼Second Row*/}
                <div className="flex flex-col text-center">
                  <Link 
                    to={'/paintball'}
                    className='text-green-200 hover:text-indigo-400'
                  >
                  <img
                    alt="reptile"
                    src="https://royal-ridges-retreat.s3.us-west-1.amazonaws.com/the_real_programs_page/Royal+Ridges-Horse+Camp-Yacolt-Washington-Summer+Camp-Kids+Camp-Christian+Camp-reptile.jpeg"
                    className="h-20 md:h-40 mx-auto rounded-3xl"
                  />
                  <p className="text-center">Paintball</p>
                  </Link>
                </div>
                <div className="flex flex-col text-center">
                  <Link
                    to={'/adventure-class'}
                    className='text-green-200 hover:text-indigo-400'
                  >
                  <img
                    alt="holiday spirit"
                    src="https://royal-ridges-retreat.s3.us-west-1.amazonaws.com/the_real_programs_page/Royal+Ridges-Horse+Camp-Yacolt-Washington-Summer+Camp-Kids+Camp-Christian+Camp-holiday_spirit.jpeg"
                    className="h-20 md:h-40 mx-auto rounded-3xl"
                  />
                    <p className="text-center">Adventure Class</p>
                  </Link>
                </div>
                <div className="flex flex-col text-center">
                  <Link 
                    to={'/parent-child'}
                    className='text-green-200 hover:text-indigo-400'
                  >
                  <img
                    alt="camp_meadow"
                    src="https://royal-ridges-retreat.s3.us-west-1.amazonaws.com/the_real_programs_page/Royal+Ridges-Horse+Camp-Yacolt-Washington-Summer+Camp-Kids+Camp-Christian+Camp-meadow.JPG"
                    className="h-20 md:h-40 mx-auto rounded-3xl"
                  />
                    <p className="text-center">Parent Child</p>
                  </Link>
                </div>    
                {/*👇🏼Third Row*/}
                <div className="flex flex-col text-center">
                  <Link
                    to={'/girl-scouts'}
                    className='text-green-200 hover:text-indigo-400'
                  >
                  <img
                    alt="sunset"
                    src="https://royal-ridges-retreat.s3.us-west-1.amazonaws.com/the_real_programs_page/Royal+Ridges-Horse+Camp-Yacolt-Washington-Summer+Camp-Kids+Camp-Christian+Camp-sunset.jpeg"
                    className="h-20 md:h-40 mx-auto rounded-3xl"
                  />
                    <p className="text-center">Girl Scouts</p>
                  </Link>
                </div>
                <div className="flex flex-col text-center">
                  <Link
                    to={'/book-a-ride'}
                    className='text-green-200 hover:text-indigo-400'
                  >
                  <img
                    alt="mist"
                    src="https://royal-ridges-retreat.s3.us-west-1.amazonaws.com/the_real_programs_page/Royal+Ridges-Horse+Camp-Yacolt-Washington-Summer+Camp-Kids+Camp-Christian+Camp-mist.jpeg"
                    className="h-20 md:h-40 mx-auto rounded-3xl"
                  />
                    <p className="text-center">Book a Ride</p>
                  </Link>
                </div>
                <div className="flex flex-col text-center">
                  <Link
                    to={'/guest-groups'}
                    className='text-green-200 hover:text-indigo-400'
                  >
                    <img
                    alt="happy_kids"
                    src="https://royal-ridges-retreat.s3.us-west-1.amazonaws.com/the_real_programs_page/Royal+Ridges-Horse+Camp-Yacolt-Washington-Summer+Camp-Kids+Camp-Christian+Camp-happy_kid.jpeg"
                    className="h-20 md:h-40 mx-auto rounded-3xl"
                  />
                    <p className="text-center">Guest Groups</p>
                  </Link>
                </div>
                {/*👇🏼Fourth Row*/}
                <div className="flex flex-col text-center">
                  <Link
                    to={'/vaulting'}
                    className='text-green-200 hover:text-indigo-400'
                  >
                  <img
                    alt="sunset"
                    src="https://royal-ridges-retreat.s3.us-west-1.amazonaws.com/the_real_programs_page/Royal+Ridges-Horse+Camp-Yacolt-Washington-Summer+Camp-Kids+Camp-Christian+Camp-sunset.jpeg"
                    className="h-20 md:h-40 mx-auto rounded-3xl"
                  />
                    <p className="text-center">Vaulting</p>
                  </Link>
                </div>
                <div></div>
                <div className="flex flex-col text-center">
                  <Link
                    to={'/women-horse-camp'}
                    className='text-green-200 hover:text-indigo-400'
                  >
                  <img
                    alt="happy_kids"
                    src="https://royal-ridges-retreat.s3.us-west-1.amazonaws.com/the_real_programs_page/Royal+Ridges-Horse+Camp-Yacolt-Washington-Summer+Camp-Kids+Camp-Christian+Camp-happy_kid.jpeg"
                    className="h-20 md:h-40 mx-auto rounded-3xl"
                  />
                    <p className="text-center">Women&apos;s Horse Camp</p>
                  </Link>
                </div>
            </div>
          </div>
        <Footer />
      </div>
    )
  }
  
  export default ProgramsPage
  