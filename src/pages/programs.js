import React from "react";
import {Link} from 'gatsby';

import Header from "../components/header";
import Footer from "../components/footer";

const ProgramsPage = () => {
    return (
      <div className="bg-gradient-to-r from-yellow-400 via-yellow-200 to-indigo-200">
      <Header />
        <div className="max-w-6xl mx-auto">
          <div className="text-green-200 font-bold text-base md:text-4xl flex flex-wrap justify-center mx-auto">
            Royal Ridges Programs
          </div>
  
          <div className="grid grid-rows-3 h-96 md:h-screen mx-2">
            {/*👇🏼First row*/}
            <div className="flex flex-wrap justify-between text-sm">
              {/*👇🏼First block*/}
              <div className="flex flex-col items-center justify-center">
                <img
                  alt="blue_skies"
                  src="https://royal-ridges-retreat.s3.us-west-1.amazonaws.com/the_real_programs_page/Royal+Ridges-Horse+Camp-Yacolt-Washington-Summer+Camp-Kids+Camp-Christian+Camp-blue_skies.jpeg"
                  className="h-40 w-32 hidden md:block rounded-3xl"
                />
                <Link
                  to={'/giddyup'}
                  className="text-gray-600 hover:text-red-400"
                >
                  Giddy Up
                </Link>
              </div>
  
              {/*👇🏼Middle block*/}
              <div className="flex flex-col items-center justify-center">
                <img
                  alt="dreamy forest"
                  src="https://royal-ridges-retreat.s3.us-west-1.amazonaws.com/the_real_programs_page/Royal+Ridges-Horse+Camp-Yacolt-Washington-Summer+Camp-Kids+Camp-Christian+Camp-dreamy_forest.jpeg"
                  className="h-40 w-32 hidden md:block rounded-3xl"
                />
                <Link
                  to={'/horsemanship'}
                  className="text-gray-600 hover:text-red-400"
                >
                  Horsemanship Lessons
                </Link>
              </div>
  
              {/*👇🏼Last block*/}
              <div className="flex flex-col items-center justify-center">
                <img
                  alt="happy_campers"
                  src="https://royal-ridges-retreat.s3.us-west-1.amazonaws.com/the_real_programs_page/Royal+Ridges-Horse+Camp-Yacolt-Washington-Summer+Camp-Kids+Camp-Christian+Camp-happy+campers.JPG"
                  className="h-40 w-32 hidden md:block rounded-3xl"
                />
                <Link
                  to={'/saturdaycamps'}
                  className="text-gray-600 hover:text-red-400"
                >
                  Saturday Camps
                </Link>
              </div>
            </div>
  
            {/*👇🏼Second row*/}
            <div className="flex flex-wrap justify-between text-sm">
              {/*👇🏼First block*/}
              <div className="flex flex-col items-center justify-center">
                <img
                  alt="reptile"
                  src="https://royal-ridges-retreat.s3.us-west-1.amazonaws.com/the_real_programs_page/Royal+Ridges-Horse+Camp-Yacolt-Washington-Summer+Camp-Kids+Camp-Christian+Camp-reptile.jpeg"
                  className="h-40 w-32 hidden md:block rounded-3xl"
                />
                <Link to={'/paintball'}>Paintball</Link>
              </div>
  
              {/*👇🏼Middle block*/}
              <div className="flex flex-col items-center justify-center">
                <img
                  alt="holiday spirit"
                  src="https://royal-ridges-retreat.s3.us-west-1.amazonaws.com/the_real_programs_page/Royal+Ridges-Horse+Camp-Yacolt-Washington-Summer+Camp-Kids+Camp-Christian+Camp-holiday_spirit.jpeg"
                  className="h-40 w-32 hidden md:block rounded-3xl"
                />
                <Link
                  to={'/outdoorsurvival'}
                  className="text-gray-600 hover:text-red-400"
                >
                  Outdoor Survival
                </Link>
              </div>
  
              {/*👇🏼Last block*/}
              <div className="flex flex-col items-center justify-center">
                <img
                  alt="camp_meadow"
                  src="https://royal-ridges-retreat.s3.us-west-1.amazonaws.com/the_real_programs_page/Royal+Ridges-Horse+Camp-Yacolt-Washington-Summer+Camp-Kids+Camp-Christian+Camp-meadow.JPG"
                  className="h-40 w-32 hidden md:block rounded-3xl"
                />
                <Link to={'/parentchild'}>
                  Parent Child
                </Link>
              </div>
            </div>
  
            {/*👇🏼Third row*/}
            <div className="flex flex-wrap justify-between text-sm">
              {/*👇🏼First block*/}
              <div className="flex flex-col items-center justify-center">
                <img
                  alt="sunset"
                  src="https://royal-ridges-retreat.s3.us-west-1.amazonaws.com/the_real_programs_page/Royal+Ridges-Horse+Camp-Yacolt-Washington-Summer+Camp-Kids+Camp-Christian+Camp-sunset.jpeg"
                  className="h-40 w-32 hidden md:block rounded-3xl"
                />
                <Link
                  to={'/girlscouts'}
                  className="text-gray-600 hover:text-red-400"
                >
                  Girl Scouts
                </Link>
              </div>
  
              {/*👇🏼Middle block*/}
              <div className="flex flex-col items-center justify-center">
                <img
                  alt="mist"
                  src="https://royal-ridges-retreat.s3.us-west-1.amazonaws.com/the_real_programs_page/Royal+Ridges-Horse+Camp-Yacolt-Washington-Summer+Camp-Kids+Camp-Christian+Camp-mist.jpeg"
                  className="h-40 w-32 hidden md:block rounded-3xl"
                />
                <Link
                  to={'/bookaride'}
                  className="text-gray-600 hover:text-red-400"
                >
                  Book a Ride
                </Link>
              </div>
  
              {/*👇🏼Last block*/}
              <div className="flex flex-col items-center justify-center">
                <img
                  alt="happy_kids"
                  src="https://royal-ridges-retreat.s3.us-west-1.amazonaws.com/the_real_programs_page/Royal+Ridges-Horse+Camp-Yacolt-Washington-Summer+Camp-Kids+Camp-Christian+Camp-happy_kid.jpeg"
                  className="h-40 w-32 hidden md:block rounded-3xl"
                />
                <Link
                  to={'/guestgroups'}
                  className="text-gray-600 hover:text-red-400"
                >
                  Guest Groups
                </Link>
              </div>
            </div>
            {/*👇🏼Third row*/}
            <div className="flex flex-wrap justify-between text-sm">
              {/*👇🏼First block*/}
              <div className="flex flex-col items-center justify-center">
                <img
                  alt="sunset"
                  src="https://royal-ridges-retreat.s3.us-west-1.amazonaws.com/the_real_programs_page/Royal+Ridges-Horse+Camp-Yacolt-Washington-Summer+Camp-Kids+Camp-Christian+Camp-sunset.jpeg"
                  className="h-40 w-32 hidden md:block rounded-3xl"
                />
                <Link
                  to={'/vaulting'}
                  className="text-gray-600 hover:text-red-400"
                >
                  Vaulting
                </Link>
              </div>
              {/*👇🏼Middle block*/}
              <div></div>
              {/*👇🏼Last block*/}
              <div className="flex flex-col items-center justify-center">
                <img
                  alt="happy_kids"
                  src="https://royal-ridges-retreat.s3.us-west-1.amazonaws.com/the_real_programs_page/Royal+Ridges-Horse+Camp-Yacolt-Washington-Summer+Camp-Kids+Camp-Christian+Camp-happy_kid.jpeg"
                  className="h-40 w-32 hidden md:block rounded-3xl"
                />
                <Link
                  to={'/womenhorsecamp'}
                  className="text-gray-600 hover:text-red-400"
                >
                  Women&apos;s Horse Camp
                </Link>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    )
  }
  
  export default ProgramsPage
  