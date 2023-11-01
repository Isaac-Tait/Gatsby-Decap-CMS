import React from 'react';

import { Link } from 'gatsby';

import Header from '../components/header';
import Footer from '../components/footer';

const SpringDayCamp = () => {
  return (
    <div className="bg-gradient-to-b from-green-200 to-yellow-200">
      <Header />
      <div className="h-screen grid grid-cols-2 max-w-6xl mx-auto">
        {/*Column 1*/}
        <div className="flex flex-col mx-auto">
          <Link
            to={'/school-break'}
            className="mx-auto my-4 font-cursive hover:underline font-extrabold text-xl text-green-200 hover:text-indigo-500"
          >
            <p>School Break Camps</p>
          </Link>
          <hr />
          <Link
            to={'/winter-day-camp'}
            className="font-cursive my-4 hover:underline text-green-200 hover:text-indigo-500"
          >
            <p>Winter Day Camp</p>
          </Link>
        </div>
        {/*Column 2*/}
        <div className="mr-4 overflow-y-scroll">
          <img
            src="https://royal-ridges-retreat.s3.us-west-1.amazonaws.com/school-break-camps/Spring+Day+Camp+2.0.png"
            alt="spring camp"
            className="rounded-xl mt-1"
          />
          <p className="mb-2 text-center">
            Five action-packed days of Spring fun and activities!
          </p>
          <p>
            Are you looking for a special week filled with fun activities for
            your kiddo? Well, look no further! Our Spring Break Day Camp is five
            days jam-packed with Spring fun, new friends, and exciting
            activities. Campers will play games, learn about the resurrection of
            Jesus and get to spend time outdoors. Please pack your camper with a
            packed lunch, water bottle, snack and plenty of layers and weather
            appropriate clothing.
          </p>
          <p className="mb-2">
            Choose either Base Camp or Horse Camp - either way, your child is
            sure to have a great time!
          </p>
          <hr />
          <p className="my-2">
            Checkout the updates page for more info (including bus schedules)
            <a
              href="https://royalridges.org/updates/spring-daycamp"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-200 hover:text-indigo-400 hover:underline"
            >
              &nbsp;here
            </a>
            .
          </p>
          <hr />
          <p className="mt-1">
            <span className="font-bold">Date: </span>April 1-5, 2024
          </p>
          <p>
            <span className="font-bold">Time: </span>8:30am - 3:30pm
          </p>
          <p>
            <span className="font-bold">Ages: </span>Kindergarten to 6th Grade
          </p>
          <p className="font-bold">Prices:</p>
          <p className="ml-1">Base Camp: $175.00 per child</p>
          <p className="ml-1">Horse Camp: $350.00 per child</p>
          <p className="mt-2 text-center font-cursive text-xl">
            Register
            <a
              href="https://www.ultracamp.com/info/upcomingSessions.aspx?idCamp=1145&campCode=151&lnkCategory=Spring+Break+Camp"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-200 hover:text-indigo-400 hover:underline"
            >
              &nbsp;here
            </a>
            .
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SpringDayCamp;
