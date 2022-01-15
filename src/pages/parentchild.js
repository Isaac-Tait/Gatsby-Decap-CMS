import React from "react";
import { Link } from "gatsby"

import Header from "../components/header";
import Footer from "../components/footer";

const ParentChild = () => {
    return (
      <div className="bg-gradient-to-r from-yellow-400 via-yellow-200 to-indigo-200">
        <Header />
          <div className="max-w-6xl mx-2 md:mx-auto text-xs md:text-base h-screen">
            <img src="https://royal-ridges-retreat.s3.us-west-1.amazonaws.com/programs-page/headerPhotos/parentChild.png" alt="parent child" className="w-full rounded-2xl shadow-xl mt-2" />
            <p>
              This special day is for mothers and daughters who are looking to make
              some unforgettable memories while building a better relationship with
              each other. You will create a craft, ride a horse on a trail or in the
              arena, enjoy the big swing, spend time in Biblical Fellowship, and
              invest in quality time together.
            </p>              
              <div className="mt-2">
                <p>
                  Check-in will be at 9:00 am on Saturday at Upper Camp with lunch
                  provided. Please wear long pants for riding + closed toe shoes.
                </p>
                <div className='flex flex-row justify-between'>
                  <div>
                    <Link to={'/motherdaughter'}>
                      <p className="text-green-200 hover:text-indigo-400 font-bold text-lg justify-center md:text-2xl">Mother Daughter</p>
                    </Link>
                  </div>
                  <div>
                    <Link to={'/motherson'}>
                      <p className="text-green-200 hover:text-indigo-400 font-bold text-lg justify-center md:text-2xl">Mother Son</p>
                    </Link>
                  </div>
                  <div>
                    <Link to={'/motherdaughter'}>
                      <p className="text-green-200 hover:text-indigo-400 font-bold text-lg justify-center md:text-2xl">Father Daughter</p>
                    </Link>
                  </div>
                  <div>
                    <Link to={'/fatherson'}>
                      <p className="text-green-200 hover:text-indigo-400 font-bold text-lg justify-center md:text-2xl">Father Son</p>
                    </Link>
                  </div>
                </div>
            </div>
          </div>
        <Footer />
      </div>
    );
}

export default ParentChild;