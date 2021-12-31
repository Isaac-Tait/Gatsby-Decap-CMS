import React from 'react';
import {Link} from 'gatsby';

import Header from "../components/header";
import Footer from "../components/footer";

const Support = () => {
  return (
    <div className="bg-gradient-to-l from-yellow-400 via-red-200 to-indigo-200">
      <Header />
        <div className="max-w-6xl mx-auto">
          <div className="text-green-200 font-bold text-base md:text-4xl flex flex-wrap justify-center mx-auto">
            Support Royal Ridges
          </div>
          <div className="grid grid-rows-2 h-96 md:h-screen max-w-6xl mx-auto">
            {/*👇🏼Controls first row*/}
            <div className="flex flex-wrap justify-between mx-2 my-2 text-sm md:text-lg content-center">
              <div className="flex flex-col items-center">
                <Link 
                  to={'/churchsponsors'}
                  className='text-green-200 hover:text-indigo-400'
                >
                <img
                  alt="kids in a meadow"
                  src="https://royal-ridges-retreat.s3.us-west-1.amazonaws.com/support_page/Royal+Ridges-Horse+Camp-Yacolt-Washington-Summer+Camp-Kids+Camp-Christian+Camp-kids_in_meadow.jpeg"
                  className="h-48 w-64 hidden md:block rounded-3xl"
                />
                <p className='flex justify-center'>Church Sponsors</p>
                </Link>
              </div>
              <div className="flex flex-col items-center">
                  <Link 
                    to={'/donations'}
                    className='text-green-200 hover:text-indigo-400'
                  >
                  <img
                    alt="low ropes course"
                    src="https://royal-ridges-retreat.s3.us-west-1.amazonaws.com/support_page/Royal+Ridges-Horse+Camp-Yacolt-Washington-Summer+Camp-Kids+Camp-Christian+Camp-low_ropes_course.jpeg"
                    className="h-48 w-64 hidden md:block rounded-3xl"
                  />
                  <p className='flex justify-center'>Donations</p>
                  </Link>
              </div>
            </div>
            {/*👇🏼Controls second row*/}
            <div className="flex flex-wrap justify-between mx-2 my-2 text-sm md:text-lg">
              <div className="flex flex-col items-center">
                  <Link 
                    to={'/volunteers'} 
                    className='text-green-200 hover:text-indigo-400'
                  >
                  <img
                    alt="group huddle"
                    src="https://royal-ridges-retreat.s3.us-west-1.amazonaws.com/support_page/Royal+Ridges-Horse+Camp-Yacolt-Washington-Summer+Camp-Kids+Camp-Christian+Camp-pow_wow.jpeg"
                    className="h-48 w-64 hidden md:block rounded-3xl"
                  />
                  <p className='flex justify-center'>Volunteers</p>
                  </Link>

              </div>
              <div className="flex flex-col items-center">
                  <Link 
                    to={'/business'}
                    className='text-green-200 hover:text-indigo-400'
                  >
                  <img
                    alt="vintage_photo"
                    src="https://royal-ridges-retreat.s3.us-west-1.amazonaws.com/programs-page/Royal+Ridges-Horse+Camp-Yacolt-Washington-Summer+Camp-Kids+Camp-Christian+Camp-vintage+photo.JPG"
                    className="h-48 w-64 hidden md:block rounded-3xl"
                  />
                  <p className='flex justify-center'>Business Sponsors</p>
                  </Link>
              </div>
            </div>
          </div>
        </div>
      <Footer />
    </div>
  );
}

export default Support;