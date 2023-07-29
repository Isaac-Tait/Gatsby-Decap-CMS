import React from 'react';

import Header from '../components/header';
import Footer from '../components/footer';

const GiddyUp = () => {
  return (
    <div className="bg-gradient-to-r from-yellow-200 to-indigo-200">
      <Header />
      <div>
        <div className="max-w-6xl h-screen overflow-y-scroll mx-2 md:mx-auto text-xs md:text-base">
          <img
            src="https://royal-ridges-retreat.s3.us-west-1.amazonaws.com/programs-page/headerPhotos/giddyUp.png"
            alt=""
            className="w-full rounded-xl shadow-2xl mt-2"
          />
          <p className="flex flex-wrap text-green-200 font-cursive text-lg justify-center md:text-4xl">
            Giddy Up - definition: To go ahead or go faster.
          </p>

          <p className="my-2">
            Our Giddy Up program offers a{' '}
            <span className="italic">Day at Camp</span> program where campers
            come one day each week and participate in camp activities to keep
            the summer camp fun alive year-round. Activities include a fun camp
            activity, games, socialization, and friendship building.
          </p>

          <p className="mt-4">
            The Giddy Up program runs from September through May - every
            Wednesday from 9:00 am - 3:00 pm.
          </p>
          <p>Ages: 5 - 12</p>
          <p>Price: $35/per week</p>
          <p>Dates: September 13, 2023 - June 5, 2024</p>
          <p>
            <span className="font-bold">Horse Option: </span>We offer
            Horsemanship Lessons on Wednesdays, 10:00 am - 12:00 pm.
          </p>
          <p>
            A $10/day discount is offered when purchasing the GiddyUp program
            and Wednesday Horsemanship Lessons.
          </p>

          <div className="mt-6 mb-4">
            <a
              href="https://www.ultracamp.com/clientlogin.aspx?idCamp=1145&campCode=151"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline hover:text-indigo-400 text-green-200 font-cursive"
            >
              Sign Up Here
            </a>
          </div>

          <p className="uppercase font-semibold">Notes:</p>
          <ul className="prose list-disc">
            <li>
              * Please dress your camper in weather-appropriate clothing
              (layers, gloves, long pants, sturdy shoes, rain jackets, etc.)
            </li>
            <li>
              * Pack a lunch and a snack and send a refillable water bottle.
            </li>
            <li>
              * Drop off and pick up is at the lower camp two-rail fence archway
              at 9 am and 3 pm. Campers will be shuttled up the hill by program
              staff for morning activities. Covered, warm spaces are available
              on rainy and cold days.
            </li>
            <li>
              * Make-ups or refunds are not available for campers that miss a
              day. If Royal Ridges cancel a day, a credit for the next term will
              be given.
            </li>
            <li>
              * Due to our Summer Camp programs, GiddyUp Day at Camp is only
              offered during the school year.
            </li>
            <li>
              * Winter Break and Spring Break are aligned with the Battle Ground
              Public School schedule and will also be off.
            </li>
            <li>
              * Participants can withdraw from the program at any time during
              the session but Royal Ridges requests a two week notice.
            </li>
          </ul>

          <p className="my-2">
            <span className="font-bold">Payments: </span>can be made monthly or
            for the entire term. (Fall, Winter, Spring) Unless you notify us
            otherwise, you will be automatically enrolled in the next
            session/term.
          </p>
          <p>
            Scholarships may be available upon request for those with financial
            needs.
          </p>

          <div className="pb-20 text-center text-4xl mt-6">
            <a
              href="https://www.ultracamp.com/clientlogin.aspx?idCamp=1145&campCode=151"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline hover:text-indigo-400 text-green-200 font-cursive"
            >
              Sign Up Here
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default GiddyUp;
