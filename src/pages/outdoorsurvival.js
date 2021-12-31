import React from "react";

import Header from "../components/header";
import Footer from "../components/footer";

const OutdoorSurvival = () => {
    return (
      <div className="bg-gradient-to-r from-yellow-400 via-yellow-200 to-indigo-200">
        <Header />
          <div>
            <div className="max-w-6xl mx-2 md:mx-auto text-xs md:text-base h-screen">
              <p className="flex flex-wrap text-green-200 font-bold text-xl justify-center md:text-4xl">
                Introduction to Outdoor Survival Skills
              </p>
              <p>
                We are excited to announce an opportunity for your child to learn
                basic outdoor survival skills here at Royal Ridges! This six-week
                course is designed especially for grades 4 - 8 and will include
                instruction on how to build a fire, shelter building, navigation,
                plant safety, and more.
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

export default OutdoorSurvival;