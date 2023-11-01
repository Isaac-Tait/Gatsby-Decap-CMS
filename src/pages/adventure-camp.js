import React from 'react';

import Navigation from '../components/summerNav';
import Header from '../components/header';
import Footer from '../components/footer';

import Image from '../images/dayAdventureCamp.jpeg';

const DayAdventureCamp = () => {
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
            alt="day_adventure_camp"
            className="w-1/2 flex mx-auto rounded-xl my-6"
          />
          <a
            href="https://www.ultracamp.com/clientlogin.aspx?idCamp=1145&campCode=151"
            target="_blank"
            rel="noopener noreferrer"
            className="text-yellow-400 font-extrabold text-3xl text-center hover:underline hover:text-indigo-400 flex justify-center"
          >
            Register for Adventure Camp
          </a>
          <div className="font-semibold text-green-200 ml-4 my-4 text-center">
            <p>Monday-Friday 9am-3:30pm</p>
            <p>Entering Grades 4th - 9th</p>
            <p>Adventure Camp (no high ropes)- $225 for the week</p>
            <p>Extreme Adventure Camp (with high ropes)- $275 for the week</p>
            <p>$60 Bus Transportation</p>
            <p>$125 ADD ON Overnight Blast Weeks 2, 4, and 6</p>
          </div>
          <hr />
          <p className="mt-4">
            Our Adventure Camp is back and better than ever! Throughout the
            week, your camper will learn new outdoor survival skills, test their
            ability on the climbing wall, play fun team games like gaga ball and
            human foosball, hone their expertise with slingshots and archery,
            and spend meaningful time exploring the Bible. The Extreme Adventure
            groups will also get to experience the high ropes course and
            zip-line. Each day your camper will go home tired, dirty, and ready
            for the next day&#39;s adventures! Campers must wear closed-toe
            shoes to participate in adventure activities.
          </p>
          <p className="mt-4">
            Adventure Campers (no high ropes) are divided into the following
            groups:
          </p>
          <p className="font-semibold text-green-200">Explorers: Grades 3-5</p>
          <p className="font-semibold text-green-200 mb-4">
            Navigators: Grades 5-7
          </p>

          <p className="mt-4">
            Extreme Adventure Campers are divided into the following age groups:
          </p>
          <p className="font-semibold text-green-200">
            Challengers Grades 4th-6th
          </p>
          <p className="font-semibold text-green-200">
            Mountaineers: Grades 6th-9th
          </p>

          <p className="font-semibold">
            Adventure Camp Overnight Blast Option:
          </p>
          <p>
            Our Overnight Blast Adventure Program will bring campers together
            for additional adventure activities unique to Overnight Blast. Night
            games will be the highlight of their week! Campers will stay
            overnight in the cabins on Thursday night of their week at camp.
            Dinner on Thursday, Breakfast on Friday, and a packed lunch for
            Friday will be provided! There is limited availability, and{' '}
            <span className="uppercase font-semibold">onb</span> will only be
            available on certain weeks. Please sign up for this option early to
            reserve your space. Do not forget your sleeping bag and items needed
            for the next day.
          </p>
          <p className="mt-2">Activities to Include:</p>
          <ul className="list-disc mb-2 ml-6">
            <li className="mt-2">Dinner and Campfire</li>
            <li className="mt-2">
              Additional Adventure Camp Activities unique to Overnight Blast
            </li>
            <li className="mt-2">Outdoor Games</li>
          </ul>

          <hr />
          <div className="my-2 ml-2 text-center">
            <p>
              <span className="text-green-200 font-semibold">Week #1</span> -
              June 17-21
            </p>
            <p>
              <span className="text-green-200 font-semibold">Week #2</span> -
              June 24-28&nbsp;
              <span className="text-md font-semibold">(ONB Available)</span>
            </p>
            <p>
              <span className="text-green-200 font-semibold">Week #3</span> -
              July 1-5
            </p>
            <p>
              <span className="text-green-200 font-semibold">Week #4</span> -
              July 8-12&nbsp;
              <span className="text-md font-semibold">(ONB Available)</span>
            </p>
            <p>
              <span className="text-green-200 font-semibold">Week #5</span> -
              July 15-19
            </p>
            <p>
              <span className="text-green-200 font-semibold">Week #6</span> -
              July 22-26&nbsp;
              <span className="text-md font-semibold">(ONB Available)</span>
            </p>
            <p>
              <span className="text-green-200 font-semibold">Week #7</span> -
              July 29 - August 2
            </p>
            <p>
              <span className="text-green-200 font-semibold">Week #8</span> -
              August 5-9
            </p>
            <p>
              <span className="text-green-200 font-semibold">Week #9</span> -
              August 12-16
            </p>
          </div>
          <a
            href="https://www.ultracamp.com/clientlogin.aspx?idCamp=1145&campCode=151"
            target="_blank"
            rel="noopener noreferrer"
            className="text-yellow-400 font-extrabold text-3xl text-center hover:underline hover:text-indigo-400 flex justify-center py-10"
          >
            Register for Adventure Camp
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default DayAdventureCamp;
