import React from 'react';
import {Link} from 'gatsby';

import Church from '../images/ChurchSponsors.png';
import Business from '../images/BusinessSponsors.png';
import Donations from '../images/Donations.png';
import Volunteers from '../images/Volunteers.png';
import SupportIcon from '../images/SupportIcon.png';

import Header from "../components/header";
import Footer from "../components/footer";

const Support = () => {
  return (
    <div className='bg-gradient-to-b from-yellow-200 to-green-200'>
    <Header />
      <div className='min-h-screen max-w-6xl mx-auto'>
        <div className='flex justify-center'>
          <img 
            alt="support"
            src={SupportIcon}
            className="w-12 h-12 md:w-32 md:h-32"
          />
        </div>
        
        {/* Icons */}
        <div className="grid grid-cols-2 gap-2 mx-2 h-screen overflow-y-scroll">
            <div className='flex items-center justify-center'>
              <Link to={'/volunteers'}>
                <img
                  alt="volunteers"
                  src={Volunteers}
                  className="w-28 md:w-64"
                />
              </Link>
            </div>
            <div className='flex items-center justify-center'>
                <Link to={'/donations'}>
                  <img
                    alt="donations"
                    src={Donations}
                    className="w-28 md:w-64"
                  />
                </Link>
            </div>
            <div className='flex items-center justify-center'>
              <Link to={'/church-sponsors'}>
                <img
                  alt="church"
                  src={Church}
                  className="w-28 md:w-64"
                />
              </Link>
            </div>
            <div className='flex items-center justify-center'>
              <Link to={'/business'}>
                  <img
                    alt="business"
                    src={Business}
                    className="w-28 md:w-64"
                  />
                </Link>
            </div>
          </div>
      </div>

    <Footer />
    </div>
  );
}

export default Support;