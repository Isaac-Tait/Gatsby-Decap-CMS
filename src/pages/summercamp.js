import React from "react";
import {Link} from "gatsby";

import Header from "../components/header";
import Footer from "../components/footer";

const SummerCampPage = () => {
    return (
      <div className="bg-gradient-to-r from-yellow-400 via-yellow-200 to-indigo-200">
        <Header />
        
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap text-green-200 font-bold text-xl md:text-4xl justify-center">
            Royal Ridges Summer Camp
          </div>
          <div className="md:flex md:justify-center md:h-screen md:my-auto flex flex-col">
              {/*Item one*/}
              <div className="flex flex-col items-center mt-4 mb-4">
                <img
                  alt="medical_image"
                  src="https://royal-ridges-retreat.s3.us-west-1.amazonaws.com/summer_camp_page/Royal+Ridges-Horse+Camp-Yacolt-Washington-Summer+Camp-Kids+Camp-Christian+Camp-Canoe.JPG"
                  className="w-64 rounded-3xl"
                />
                <div className="text-gray-600 hover:text-green-200 mx-4">
                  <Link to={'/medical'}>Medical & Liability Waiver</Link>
                </div>
              </div>
              {/*Item two*/}
              <div>
                <div className="flex flex-col items-center mt-4 mb-4">
                  <img
                    alt="parents_manual"
                    src="https://royal-ridges-retreat.s3.us-west-1.amazonaws.com/summer_camp_page/Royal+Ridges-Horse+Camp-Yacolt-Washington-Summer+Camp-Kids+Camp-Christian+Camp-campers.JPG"
                    className="w-64 rounded-3xl"
                  />
                  <p className="text-gray-600 hover:text-green-200 mx-4">
                    <Link to={'/parentmanual'}>
                      Parent&apos;s Survival Manual
                    </Link>
                  </p>
                </div>
              </div>
              {/*Item three*/}
              <div>
                <div className="flex flex-col items-center mt-4 mb-4">
                  <img
                    alt="staff_application"
                    src="https://royal-ridges-retreat.s3.us-west-1.amazonaws.com/summer_camp_page/Royal+Ridges-Horse+Camp-Yacolt-Washington-Summer+Camp-Kids+Camp-Christian+Camp-Horses.JPG"
                    className="w-64 rounded-3xl"
                  />
                  <p className="text-gray-600 hover:text-green-200 mx-4">
                    <Link to={'/summerstaffapp'}>
                      Summer Staff Application
                    </Link>
                  </p>
                </div>
              </div>
            </div>
        </div>
          
        <Footer />
      </div>
    )
  }
  
  export default SummerCampPage
  