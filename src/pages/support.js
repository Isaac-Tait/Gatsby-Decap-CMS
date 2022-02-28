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
    <div className="bg-gradient-to-b from-yellow-200 to-green-200">
      <Header />
        <div className="max-w-6xl mx-auto h-screen">
        <div className='flex justify-center'>
            <img
              alt="support"
              src={SupportIcon}
              className='w-1/12 mt-1'
            />
          </div>
          <div className="grid grid-rows-2">
            <div className='flex items-center justify-center'>
              <Link to={'/volunteers'}>
                  <img
                    alt="volunteers"
                    src={Volunteers}
                    className="w-28 md:w-64"
                  />
                </Link>
                <Link to={'/donations'}>
                  <img
                    alt="donations"
                    src={Donations}
                    className="w-28 md:w-64"
                  />
                </Link>
            </div>
            <div></div>
            <div className='flex items-center justify-center'>
              <Link to={'/church-sponsors'}>
                  <img
                    alt="church"
                    src={Church}
                    className="w-28 md:w-64"
                  />
              </Link>
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