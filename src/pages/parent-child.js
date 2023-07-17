import React from 'react';
import { Link } from 'gatsby';

import Header from '../components/header';
import Footer from '../components/footer';

const ParentChild = () => {
  return (
    <div className="bg-gradient-to-r from-yellow-200 to-indigo-200">
      <Header />
      <div className="max-w-6xl mx-2 md:mx-auto text-xs md:text-base h-screen">
        <img
          src="https://royal-ridges-retreat.s3.us-west-1.amazonaws.com/programs-page/headerPhotos/parentChild.png"
          alt="parent child"
          className="w-full rounded-2xl shadow-xl mt-2"
        />
        <p>
          Come spend the day at Royal Ridges Retreat with your child! With
          multiple activities and special moments to spend together, you and
          your child will create unforgettable memories while building a better
          relationship with each other.
        </p>
        <div className="mt-2">
          <p>
            Check-in will be at 9:00 am on Saturday at Upper Camp with lunch
            provided. Please wear long pants for riding and closed toe shoes.
          </p>
          <div className="flex flex-row justify-between">
            <div>
              <Link to={'/mother-daughter'}>
                <p className="text-green-200 font-bold text-lg justify-center hover:underline hover:brightness-200 md:text-2xl">
                  Mother Daughter
                </p>
              </Link>
            </div>
            <div>
              <Link to={'/mother-son'}>
                <p className="text-green-200 font-bold text-lg justify-center hover:underline hover:brightness-200 md:text-2xl">
                  Mother Son
                </p>
              </Link>
            </div>
            <div>
              <Link to={'/father-daughter'}>
                <p className="text-green-200 font-bold text-lg justify-center hover:underline hover:brightness-200 md:text-2xl">
                  Father Daughter
                </p>
              </Link>
            </div>
            <div>
              <Link to={'/father-son'}>
                <p className="text-green-200 font-bold text-lg justify-center hover:underline hover:brightness-200 md:text-2xl">
                  Father Son
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ParentChild;
