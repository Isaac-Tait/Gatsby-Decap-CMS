import React from 'react';
import {Link} from 'gatsby';

import Header from "../components/header";
import Footer from "../components/footer";

const About = () => {
  return (
    <div className="bg-gradient-to-b from-yellow-400 via-yellow-200 to-indigo-200">
      <Header />
        <div className="max-w-6xl mx-auto">
          <div className="text-green-200 font-bold text-base md:text-4xl flex flex-wrap justify-center mx-auto">
            About Royal Ridges Retreat
          </div>
          <div className="grid grid-cols-2 gap-2 mx-2 h-screen overflow-y-scroll">
              <div className="flex flex-col items-center justify-center">
                  <Link 
                    to={'/mission'}
                    className='text-green-200 hover:text-indigo-400'
                  >
                  <img
                    alt="Clouds"
                    src="https://royal-ridges-retreat.s3.us-west-1.amazonaws.com/programs-page/Royal+Ridges-Horse+Camp-Yacolt-Washington-Summer+Camp-Kids+Camp-Christian+Camp-clouds.JPG"
                    className="h-20 md:h-40 mx-auto rounded-3xl"
                  />
                  <p className='flex justify-center'>Missions</p>
                  </Link>
              </div>
              <div className="flex flex-col items-center justify-center">
                  <Link 
                    to={'/newsletter'}
                    className='text-green-200 hover:text-indigo-400'
                  >
                  <img
                    alt="couple at picnic table"
                    src="https://royal-ridges-retreat.s3.us-west-1.amazonaws.com/programs-page/Royal+Ridges-Horse+Camp-Yacolt-Washington-Summer+Camp-Kids+Camp-Christian+Camp-founders.JPG"
                    className="h-20 md:h-40 mx-auto rounded-3xl"
                  />
                  <p className='flex justify-center'>Newsletter</p>
                  </Link>
              </div>
              <div className="flex flex-col items-center justify-center">
                  <Link 
                    to={'/staff'}
                    className='text-green-200 hover:text-indigo-400'
                  >
                  <img
                    alt="pool"
                    src="https://royal-ridges-retreat.s3.us-west-1.amazonaws.com/programs-page/Royal+Ridges-Horse+Camp-Yacolt-Washington-Summer+Camp-Kids+Camp-Christian+Camp-pool.JPG"
                    className="h-20 md:h-40 mx-auto rounded-3xl"
                  />
                  <p className='flex justify-center'>Staff Page</p>
                  </Link>
              </div>
              <div className="flex flex-col items-center justify-center">
                  <Link 
                    to={'/statement-of-faith'}
                    className='text-green-200 hover:text-indigo-400'
                  >
                  <img
                    alt="stables"
                    src="https://royal-ridges-retreat.s3.us-west-1.amazonaws.com/programs-page/Royal+Ridges-Horse+Camp-Yacolt-Washington-Summer+Camp-Kids+Camp-Christian+Camp-stables.JPG"
                    className="h-20 md:h-40 mx-auto rounded-3xl"
                  />
                  <p className='flex justify-center'>Statement of Faith</p>
                  </Link>
              </div>
          </div>
        </div>
      <Footer />
    </div>
  );
}

export default About;
