import React from "react";
import { Link } from "gatsby";

import Header from "../components/header";
import Footer from "../components/footer";

const OutdoorSurvival = () => {
    return (
      <div className="bg-gradient-to-r from-yellow-400 via-yellow-200 to-indigo-200">
        <Header />
          <div>
            <div className="max-w-6xl mx-2 md:mx-auto text-xs md:text-base h-screen">
              <img src="https://royal-ridges-retreat.s3.us-west-1.amazonaws.com/summer_camp_page/Saturday+Adventure+Class-+Header+2021+(2).png" alt="outdoor survival" className="w-full rounded-2xl shadow-xl mt-2" /> 
              <p>
                We are excited to announce an opportunity for your child to learn
                basic outdoor survival skills here at Royal Ridges! This six-week
                course is designed especially for grades 4 - 8 and will include
                instruction on how to build a fire, shelter building, navigation,
                plant safety, and more.
              </p>
              <p className="mt-2 italic">
                Please stay tuned to our <Link to={'/updates'} className='underline text-green-200 hover:text-indigo-500'>updates</Link> page and our <a href="https://www.facebook.com/RoyalRidges" target="_blank" rel="noopener noreferrer" className='underline text-green-200 hover:text-indigo-500'>Facebook</a> page for more
                information
              </p>
            </div>
          </div>
        <Footer />
      </div>
    );
}

export default OutdoorSurvival;