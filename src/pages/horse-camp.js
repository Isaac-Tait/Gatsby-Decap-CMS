import React from 'react';

import Navigation from '../components/summerNav';
import Header from '../components/header';
import Footer from '../components/footer';

import Image from '../images/dayHorseCamp.jpeg';

const DayHorseCamp = () => {
  return (
    <div className="bg-gradient-to-l from-yellow-200 to-indigo-200">
      <Header />
      <div className="h-screen overflow-y-scroll px-1 sm:grid sm:grid-cols-2">
        {/*Column 1*/}
        <div>
          <Navigation />
        </div>
        {/*Column 2*/}
        <div className="mr-4 overflow-y-scroll">
          <img
            src={Image}
            alt="day_horse_camp"
            className="w-1/2 mx-auto rounded-xl my-6"
          />
          <a
            href="https://www.ultracamp.com/clientlogin.aspx?idCamp=1145&campCode=151"
            target="_blank"
            rel="noopener noreferrer"
            className="text-yellow-400 font-extrabold text-3xl text-center hover:underline hover:text-indigo-400 flex justify-center"
          >
            Register for Horse Camp
          </a>
          <div className=" text-green-200 ml-4 my-4 text-center">
            <p>Monday-Friday 9am-3:30pm</p>
            <p>8-14 Years Old</p>
            <p>$400 for the week</p>
            <p>$60 Bus Transportation</p>
            <p>$125 ADD ON Overnight Blast Weeks 1, 5, and 7</p>
            <p className="pt-2">
              Special groups designed for the younger and older horse lovers
            </p>
            <p>
              Cowpoke Horse Camp /Arena Ride Only (Ages 7-8) Weeks 2, 6, & 9
            </p>
            <p>Teen Horse Camp (Ages 13-16) Weeks 1, 4, & 8</p>
          </div>
          <p className="mt-2 text-center mb-4">
            <span className="font-semibold">New this year!</span>&nbsp;
            <a
              href="/specialty-horse-camp"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline text-indigo-400 hover:text-green-200"
            >
              Horse Specialty Theme Camps
            </a>
            &nbsp;Trail Camp Weeks 3 and 7, Miniature Horse Driving Week 4,
            Vaulting Week 5
          </p>
          <hr />
          <div>
            <p>
              Do you have a kiddo who is crazy about horses? Our Horse Camp may
              be the perfect solution! Your camper will have the opportunity to
              take a riding lesson each day from our skilled instructors, learn
              exciting information in horse science, grow valuable skills like
              grooming and saddling, explore the Bible during the daily Bible
              lesson and make friends along the way! In addition to the
              horsemanship activities, they will engage in team building, group
              Bible studies, and go on a scenic trail ride. Riders must wear
              closed-toe shoes and long pants to ride. Helmets are provided.
            </p>
            {/*Updated for 2024*/}
            <p className="text-xl font-bold mt-2">
              Day Horse Camp Overnight Blast Option
            </p>
            <p>
              Our Overnight Blast Horse Program will allow campers to experience
              additional horse time and stay overnight in the cabins on Thursday
              night of their week at camp. Campers will remain after camp
              Thursday during their Horse Camp week to continue their day at
              camp. Dinner on Thursday, Breakfast on Friday, and a packed lunch
              for Friday are provided! There is limited availability, and{' '}
              <span className="uppercase font-semibold">onb</span> will only be
              available on certain weeks. Please sign up for this option early
              to reserve your space. Do not forget your sleeping bag and items
              needed for the next day!
            </p>
            <p className="mt-4">Activities to Include:</p>
            <p className="italic ml-2">* Dinner and Campfire</p>
            <p className="italic ml-2">* Additional Trail or Arena Ride</p>
            <p className="italic ml-2">
              * More Horse Science, Horse Activities and Groom/Saddle Time
            </p>
            <p className="italic ml-2">* Outdoor Games</p>
          </div>
          <hr />
          <div className="my-2 ml-2 text-center">
            <p>
              <span className="text-green-200 font-semibold">Week #1</span> -
              June 17-21 (ONB and Teen Horse Available)
            </p>
            <p>
              <span className="text-green-200 font-semibold">Week #2</span> -
              June 24-28 (Cowpoke Group Available)
            </p>
            <p>
              <span className="text-green-200 font-semibold">Week #3</span> -
              July 1-5
            </p>
            <p>
              <span className="text-green-200 font-semibold">Week #4</span> -
              July 8-12 (Miniature Horse Available)
            </p>
            <p>
              <span className="text-green-200 font-semibold">Week #5</span> -
              July 15-19 (ONB Available)
            </p>
            <p>
              <span className="text-green-200 font-semibold">Week #6</span> -
              July 22-26 (Cowpoke Group Available)
            </p>
            <p>
              <span className="text-green-200 font-semibold">Week #7</span> -
              July 29 - August 2 (ONB Available)
            </p>
            <p>
              <span className="text-green-200 font-semibold">Week #8</span> -
              August 5-9 (Teen Horse Available)
            </p>
            <p>
              <span className="text-green-200 font-semibold">Week #9</span> -
              August 12-16 (Cowpoke Group Available)
            </p>
          </div>
          <a
            href="https://www.ultracamp.com/clientlogin.aspx?idCamp=1145&campCode=151"
            target="_blank"
            rel="noopener noreferrer"
            className="text-yellow-400 py-10 font-extrabold text-3xl text-center hover:underline hover:text-indigo-400 flex justify-center"
          >
            Register for Horse Camp
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default DayHorseCamp;
