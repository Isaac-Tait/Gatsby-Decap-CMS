import React from 'react';
import {Link} from 'gatsby';

import Header from "../components/header";
import Footer from "../components/footer";

const About = () => {
  return (
    <div className="bg-gradient-to-r from-yellow-400 via-yellow-200 to-indigo-200">
      <Header />

      <div className="max-w-6xl mx-auto">
        <div className="text-green-200 font-bold text-base md:text-4xl flex flex-wrap justify-center mx-auto">
          About Royal Ridges Retreat
        </div>

        <div className="grid grid-rows-2 h-96 md:h-screen max-w-6xl mx-auto">
          <div className="flex flex-wrap justify-between mx-2 my-2 text-sm md:text-lg content-center">
            {/*👇🏼First block*/}
            <div className="flex flex-col items-center">
              <img
                alt="under_construction"
                src="https://royal-ridges-retreat.s3.us-west-1.amazonaws.com/programs-page/Royal+Ridges-Horse+Camp-Yacolt-Washington-Summer+Camp-Kids+Camp-Christian+Camp-.JPG"
                className="h-48 w-64 hidden md:block rounded-3xl"
              />
              <p className="text-gray-600 hover:text-red-400">
                <Link to={'/facilities'}>Facilities</Link>
              </p>
            </div>
            {/*👇🏼Middle block*/}
            <div className="flex flex-col items-center">
              <img
                alt="Clouds"
                src="https://royal-ridges-retreat.s3.us-west-1.amazonaws.com/programs-page/Royal+Ridges-Horse+Camp-Yacolt-Washington-Summer+Camp-Kids+Camp-Christian+Camp-clouds.JPG"
                className="h-48 w-64 hidden md:block rounded-3xl"
              />
              <p className="text-gray-600 hover:text-red-400">
                <Link to={'/mission'}>Mission</Link>
              </p>
            </div>
            {/*👇🏼Last block*/}
            <div className="flex flex-col items-center">
              <img
                alt="couple at picnic table"
                src="https://royal-ridges-retreat.s3.us-west-1.amazonaws.com/programs-page/Royal+Ridges-Horse+Camp-Yacolt-Washington-Summer+Camp-Kids+Camp-Christian+Camp-founders.JPG"
                className="h-48 w-64 hidden md:block rounded-3xl"
              />
              <p className="text-gray-600 hover:text-red-400">
                <Link to={'/newsletter'}>Newsletter</Link>
              </p>
            </div>
          </div>

          <div className="flex flex-wrap justify-between mx-2 my-2 text-sm md:text-lg content-center">
            <div className="flex flex-col items-center">
              <img
                alt="pool"
                src="https://royal-ridges-retreat.s3.us-west-1.amazonaws.com/programs-page/Royal+Ridges-Horse+Camp-Yacolt-Washington-Summer+Camp-Kids+Camp-Christian+Camp-pool.JPG"
                className="h-48 w-64 hidden md:block rounded-3xl"
              />
              <p className="text-gray-600 hover:text-red-400">
                <Link to={'/staff'}>Staff Page</Link>
              </p>
            </div>
            <div></div>
            <div className="flex flex-col items-center">
              <img
                alt="stables"
                src="https://royal-ridges-retreat.s3.us-west-1.amazonaws.com/programs-page/Royal+Ridges-Horse+Camp-Yacolt-Washington-Summer+Camp-Kids+Camp-Christian+Camp-stables.JPG"
                className="h-48 w-64 hidden md:block rounded-3xl"
              />
              <p className="text-gray-600 hover:text-red-400">
                <Link to={'/statementoffaith'}>Our Faith</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default About;
