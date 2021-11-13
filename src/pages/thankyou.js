import React from "react";

import Header from "../components/header";
import Footer from "../components/footer";

const ThankYou = () => {
    return (
        <div>
        <Header />
        <div>
      <div className="max-w-6xl mx-2 md:mx-auto text-xs md:text-base">
        <p className="flex flex-wrap text-green-200 font-bold text-xl justify-center md:text-4xl">
          Thank You
        </p>
        <p>
          We sincerely thank you for supporting us at Royal Ridges Retreat. Your
          contributions will help us continue to provide excellent programs and
          facilities for our many campers, guests and visitors.
        </p>
        <p className="flex flex-wrap text-green-200 font-bold text-xl justify-center md:text-xl">
          Blessings received the past few years:
        </p>
        <p className="text-green-200 font-semibold uppercase">Summer 2019:</p>
        <p className="ml-2">
          {' '}
          9 tons of square bales of hay + 70 tons of rounds bales of hay
        </p>
        <p className="text-green-200 font-semibold uppercase">Summer 2017:</p>
        <p className="ml-2">
          {' '}
          Rebuilt Human Foosball-- Grant from T.O.D.A.Y Foundation
        </p>
        <p className="text-green-200 font-semibold uppercase">Summer 2017:</p>
        <p className="ml-2">
          {' '}
          Sponsored a Foster Child to Come to Camp-- Various Donors
        </p>
        <p className="text-green-200 font-semibold uppercase">June 2016:</p>
        <p className="ml-2">
          {' '}
          Class A Hood Range for our Kitchen -- Various Donations
        </p>
        <p className="text-green-200 font-semibold uppercase">March 2016:</p>
        <p className="ml-2">
          {' '}
          Ford F350 Work Truck -- Various Auction Donations
        </p>
        <p className="text-green-200 font-semibold uppercase">December 2015:</p>
        <p className="ml-2">
          {' '}
          Many Horse Supplies for Christmas -- Various Donors
        </p>
        <p className="text-green-200 font-semibold uppercase">March 2014:</p>
        <p className="ml-2"> Used Carpet for Alleys --Dave Ebert</p>
        <p className="text-green-200 font-semibold uppercase">July 2014:</p>
        <p className="ml-2">
          {' '}
          Four Saddles of Various Sizes -- Bert Waugh/Transitional Youth
        </p>
      </div>
    </div>
        <Footer />
        </div>
    );
}

export default ThankYou;