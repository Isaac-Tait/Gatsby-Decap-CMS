import React from "react";

import Header from "../components/header";
import Footer from "../components/footer";

const MotherDaughter = () => {
    return (
        <div>
        <Header />
        <div>
      <div className="max-w-6xl mx-2 md:mx-auto text-xs md:text-base">
        <p className="flex flex-wrap text-green-200 font-bold text-xl justify-center md:text-4xl">
          Mother Daughter
        </p>
        <p>
          This special day is for mothers and daughters who are looking to make
          some unforgettable memories while building a better relationship with
          each other. You will create a craft, ride a horse on a trail or in the
          arena, enjoy the big swing, spend time in Biblical Fellowship, and
          invest in quality time together.
        </p>
        <p>
          Check-in will be at 9:00 am on Saturday at Upper Camp with lunch
          provided. Please wear long pants for riding + closed toe shoes.
        </p>
        <p className="mt-2 italic">
          Please stay tuned to our blog and social media channels for more
          information
        </p>
      </div>
    </div>
        <Footer />
        </div>
    );
}

export default MotherDaughter;