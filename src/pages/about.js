import React from 'react';
import {Link} from 'gatsby';

import Mission from '../images/MissionIcon.png'
import Faith from '../images/FaithIcon.png'
import Staff from '../images/StaffIcon.png'
import Newsletter from '../images/NewsletterIcon.png';

import Header from "../components/header";
import Footer from "../components/footer";

const About = () => {
  return (
    <div className="bg-gradient-to-t from-yellow-200 to-indigo-200">
      <Header />
        <div className="max-w-6xl mx-auto">
          <div className="text-green-200 font-bold font-cursive text-base md:text-4xl flex flex-wrap justify-center mx-auto">
            About Royal Ridges
          </div>
          <div className="grid grid-cols-2 gap-2 mx-2 h-screen overflow-y-scroll">
              <div className="flex items-center justify-center">
                  <Link 
                    to={'/mission'}
                    className='text-green-200 hover:text-indigo-400'
                  >
                  <img
                    alt="mission"
                    src={Mission}
                    className="w-28 md:w-64 mt-8 mx-auto"
                  />
                  </Link>
              </div>
              <div className="flex flex-col items-center justify-center">
                  <a 
                    href='https://hardcore-khorana-19151f.netlify.app'
                    target="_blank" 
                    rel="noopener noreferrer"
                    className='text-green-200 hover:text-indigo-400'
                  >
                  <img
                    alt="newsletter"
                    src={Newsletter}
                    className="w-28 md:w-64 mt-8 mx-auto"
                  />
                  </a>
              </div>
              <div className="flex flex-col items-center justify-center">
                  <Link 
                    to={'/staff'}
                    className='text-green-200 hover:text-indigo-400'
                  >
                  <img
                    alt="staff"
                    src={Staff}
                    className="w-28 md:w-64 mt-8 mx-auto"
                  />
                  </Link>
              </div>
              <div className="flex flex-col items-center justify-center">
                  <Link 
                    to={'/statement-of-faith'}
                    className='text-green-200 hover:text-indigo-400'
                  >
                  <img
                    alt="faith"
                    src={Faith}
                    className="w-28 md:w-64 mt-8 mx-auto"
                  />
                  </Link>
              </div>
          </div>
        </div>
      <Footer />
    </div>
  );
}

export default About;
