import React from 'react';

import Header from '../components/header';
import Footer from '../components/footer';

import Navigation from '../components/summerNav';
import Image from '../images/traditionalDayCamp.jpeg';

const DayCamp = () => {
  return (
    <div className="bg-gradient-to-l from-yellow-200 to-indigo-200">
      <Header />
      <div className="h-screen overflow-y-scroll px-1 sm:grid sm:grid-cols-2">
        {/*Column 1*/}
        <div>
          <Navigation />
        </div>
        {/*Column 2*/}
        <div className="flex flex-col mr-4 overflow-y-scroll">
          <img
            src={Image}
            alt="traditional_day_camp"
            className="w-1/2 mx-auto rounded-xl my-6"
          />
          <a
            href="https://www.ultracamp.com/clientlogin.aspx?idCamp=1145&campCode=151"
            target="_blank"
            rel="noopener noreferrer"
            className="text-yellow-400 font-extrabold text-3xl hover:underline hover:text-indigo-400 text-center"
          >
            Register for Base Camp
          </a>
          <div className="font-semibold text-green-200 ml-4 my-4 text-center">
            <p>Monday-Friday 9am-3:30pm</p>
            <p>Entering Grades 1st-5th</p>
            <p>Spruce and Cedar Groups - $190</p>
            <p>$60 Bus Transportation</p>
          </div>
          <hr />
          <div className="my-4">
            <p>
              Our Base Camps are jam-packed with activities and fun! Campers
              will play games, experience team-building activities, explore the
              Bible during the daily Bible lesson and sing songs. Base camps are
              divided into two age level groups:
            </p>
            <p className="font-bold underline mt-4">
              Spruce Group - Grades 1st - 3rd
            </p>
            <p>
              The Spruce Group&#8217;s week is brimming with fun. Campers will
              experience the pony corral and petting zoo, have fun on the giant
              jump pillow, play games, and participate in group team building
              activities, and more!
            </p>
            <p className="font-bold underline mt-4">
              Cedar Group - Grades 3rd - 5th
            </p>
            <p>
              Fun times abound for the Cedar Group campers! From visiting the
              pony corral to an adventurous hike, your child is sure to have a
              great time. Additional activities include fun games, team
              challenges and a visit to the giant jump pillow and so much more!{' '}
            </p>
          </div>
          <hr />
          <div className="my-2 ml-2 text-center">
            <p>
              <span className="text-green-200 font-semibold">Week #1</span> -
              June 17-21
            </p>
            <p>
              <span className="text-green-200 font-semibold">Week #2</span> -
              June 24-28
            </p>
            <p>
              <span className="text-green-200 font-semibold">Week #3</span> -
              July 1-5
            </p>
            <p>
              <span className="text-green-200 font-semibold">Week #4</span> -
              July 8-12
            </p>
            <p>
              <span className="text-green-200 font-semibold">Week #5</span> -
              July 15-19
            </p>
            <p>
              <span className="text-green-200 font-semibold">Week #6</span> -
              July 22-26
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
            className="text-yellow-400 font-extrabold text-3xl my-10 hover:underline hover:text-indigo-400 text-center"
          >
            Register for Base Camp
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default DayCamp;
