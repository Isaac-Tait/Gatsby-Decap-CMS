import React from "react";

import Header from "../components/header";

const Paintball = () => {
    return (
        <div>
        <Header />
        <div>
      <div className="max-w-6xl mx-2 md:mx-auto text-xs md:text-base">
        <p className="flex flex-wrap text-green-200 font-bold text-xl justify-center md:text-4xl">
          It is Paintball, the way it should be!!!
        </p>
        <p className="mt-2">
          Royal Ridges is committed to offering you the safest possible
          family-friendly environment for you to immerse yourself in the
          adventure of woods ball, scenario paintball, or tournament style
          speed-ball. There are 2 large speed-ball fields, a 20 acre woods-ball
          field, and a Tactical Village. Book your next extreme adventure with
          us! All charges cover the cost of a mask, a marker, paintballs, and an
          hour or two of game play.
        </p>
        <p className="mt-2">
          Price $175 (group minimum charge covers up to 5 players)
        </p>
        <p className="mt-2">Additional players over 5: $35 per person</p>
        <p className="mt-2">Current available booking times:</p>
        <p className="ml-4 mt-2">Fridays - 5:00pm</p>
        <p className="ml-4 mt-2">Saturdays - 10:00 am or 3:00 pm</p>
        <p className="ml-4 mt-2">Sundays - 3:00pm</p>
        <p className="mt-2">
          Please click on the minimum package link below to see our current
          availability
        </p>
        <p className="mt-2">
          Interested in other dates, times or any questions{' '}
          <a
            href="email:paintball@royalridges.org"
            className="text-green-200 underline"
          >
            email
          </a>{' '}
          us
        </p>
        <p className="mt-2">
          Interested in Open Play Games and Dates:{' '}
          <a
            href="https://www.royalridges.upcsites.org/rrpb-openplay.html"
            className="text-green-200 underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Royal Ridges Open Play Days
          </a>
          .
        </p>
      </div>
    </div>
        </div>
    );
}

export default Paintball;