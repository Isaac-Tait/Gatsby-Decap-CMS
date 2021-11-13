import React from 'react';
import {Link} from 'gatsby';

import Header from "../components/header";
import Footer from "../components/footer";

const Support = () => {
  return (
    <div className="bg-gradient-to-r from-yellow-400 via-yellow-200 to-indigo-200">
    <Header />
    <div className="max-w-6xl mx-auto">
      <div className="text-green-200 font-bold text-base md:text-4xl flex flex-wrap justify-center mx-auto">
        Support Royal Ridges
      </div>
      <div className="grid grid-rows-2 h-96 lg:h-screen max-w-6xl mx-auto">
        {/*👇🏼Controls first row*/}
        <div className="flex flex-wrap justify-between mx-2 my-2 text-sm md:text-lg content-center">
          <div className="flex flex-col items-center">
            <img
              alt="vintage_photo"
              src="https://royal-ridges-retreat.s3.us-west-1.amazonaws.com/programs-page/Royal+Ridges-Horse+Camp-Yacolt-Washington-Summer+Camp-Kids+Camp-Christian+Camp-vintage+photo.JPG"
              className="h-48 w-64 hidden md:block rounded-3xl"
            />
            <p className="text-gray-600 hover:text-green-700">
              <Link to={'/business'}>Business Sponsors</Link>
            </p>
          </div>

          <div className="flex flex-col items-center">
            <img
              alt="kids in a meadow"
              src="https://royal-ridges-retreat.s3.us-west-1.amazonaws.com/support_page/Royal+Ridges-Horse+Camp-Yacolt-Washington-Summer+Camp-Kids+Camp-Christian+Camp-kids_in_meadow.jpeg"
              className="h-48 w-64 hidden md:block rounded-3xl"
            />
            <p className="text-gray-600 hover:text-green-700">
              <Link to={'/churchsponsors'}>Church Sponsors</Link>
            </p>
          </div>

          <div className="flex flex-col items-center">
            <img
              alt="low ropes course"
              src="https://royal-ridges-retreat.s3.us-west-1.amazonaws.com/support_page/Royal+Ridges-Horse+Camp-Yacolt-Washington-Summer+Camp-Kids+Camp-Christian+Camp-low_ropes_course.jpeg"
              className="h-48 w-64 hidden md:block rounded-3xl"
            />
            <p className="text-gray-600 hover:text-green-700">
              <Link to={'/donations'}>Donations</Link>
            </p>
          </div>
        </div>
        {/*👇🏼Controls second row*/}
        <div className="flex flex-wrap justify-between mx-2 my-2 text-sm md:text-lg">
          <div className="flex flex-col items-center">
            <img
              alt="meeting"
              src="https://royal-ridges-retreat.s3.us-west-1.amazonaws.com/support_page/Royal+Ridges-Horse+Camp-Yacolt-Washington-Summer+Camp-Kids+Camp-Christian+Camp-meeting.jpeg"
              className="h-48 w-64 hidden md:block rounded-3xl"
            />
            <p className="text-gray-600 hover:text-green-700">
              <Link to={'/sponsorahorse'}>Sponsor-A-Horse</Link>
            </p>
          </div>

          <div className="flex flex-col items-center">
            <img
              alt="painted horse"
              src="https://royal-ridges-retreat.s3.us-west-1.amazonaws.com/support_page/Royal+Ridges-Horse+Camp-Yacolt-Washington-Summer+Camp-Kids+Camp-Christian+Camp-painted+horse.jpeg"
              className="h-48 w-64 hidden md:block rounded-3xl"
            />
            <p className="text-gray-600 hover:text-green-700">
              <Link to={'/thankyou'}>Thank You</Link>
            </p>
          </div>

          <div className="flex flex-col items-center">
            <img
              alt="group huddle"
              src="https://royal-ridges-retreat.s3.us-west-1.amazonaws.com/support_page/Royal+Ridges-Horse+Camp-Yacolt-Washington-Summer+Camp-Kids+Camp-Christian+Camp-pow_wow.jpeg"
              className="h-48 w-64 hidden md:block rounded-3xl"
            />
            <p className="text-gray-600 hover:text-green-700">
              <Link to={'/volunteers'}>Volunteers</Link>
            </p>
          </div>

          <div className="flex flex-col items-center">
            <img
              alt="Staff"
              src="https://royal-ridges-retreat.s3.us-west-1.amazonaws.com/support_page/Royal+Ridges-Horse+Camp-Yacolt-Washington-Summer+Camp-Kids+Camp-Christian+Camp-staff.jpeg"
              className="h-48 w-64 hidden md:block rounded-3xl"
            />
            <p className="text-gray-600 hover:text-green-700">
              <Link to={'/wishlist'}>Wish List</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
  );
}

export default Support;