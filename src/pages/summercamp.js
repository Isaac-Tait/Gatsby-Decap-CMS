import React from "react";
import {Link} from "gatsby";

import Header from "../components/header";
import Footer from "../components/footer";

const SummerCampPage = () => {
    return (
      <div className="bg-gradient-to-r from-yellow-400 via-yellow-200 to-indigo-200">
        <Header />
      <div className="max-w-6xl mx-auto h-screen ">
          <div className="flex flex-wrap text-green-200 font-bold text-xl md:text-4xl justify-center">
            Royal Ridges Summer Camp
          </div>
          
          {/*First Row*/}
          <div className="grid grid-rows-2 h-96 md:h-screen max-w-6xl mx-auto">
            <div className="flex flex-wrap justify-between mx-2 my-2 text-sm md:text-lg content-center">
            {/*Item one*/}
              <div className="flex flex-col items-center">
                <Link 
                    to={'/liability'}
                    className="text-gray-400 hover:text-green-200"
                  >
                  <img
                    alt="medical_image"
                    src="https://royal-ridges-retreat.s3.us-west-1.amazonaws.com/summer_camp_page/Royal+Ridges-Horse+Camp-Yacolt-Washington-Summer+Camp-Kids+Camp-Christian+Camp-Canoe.JPG"
                    className="w-64 rounded-3xl"
                  />
                  <p className="flex justify-center">Liability Waiver</p>
                </Link>
              </div>

              {/*Item two*/}
              <div className="flex flex-col items-center">
                <Link 
                to={'/parentmanual'}
                className="text-gray-400 hover:text-green-200"
                >
                  <img
                    alt="parents_manual"
                    src="https://royal-ridges-retreat.s3.us-west-1.amazonaws.com/summer_camp_page/Royal+Ridges-Horse+Camp-Yacolt-Washington-Summer+Camp-Kids+Camp-Christian+Camp-campers.JPG"
                    className="w-64 rounded-3xl"
                  />
                  <p className="flex justify-center">Parent&apos;s Survival Manual</p>
                </Link>
              </div>
            </div>
            {/*Second Row*/}
            <div className="flex flex-wrap justify-between mx-2 my-2 text-sm md:text-lg content-center">
              {/*Item three*/}
              <div className="flex flex-col items-center">
                <Link 
                  to={'/summerstaffapp'}
                  className="text-gray-400 hover:text-green-200"
                >
                  <img
                    alt="staff_application"
                    src="https://royal-ridges-retreat.s3.us-west-1.amazonaws.com/summer_camp_page/Royal+Ridges-Horse+Camp-Yacolt-Washington-Summer+Camp-Kids+Camp-Christian+Camp-Horses.JPG"
                    className="w-64 rounded-3xl"
                  />
                    <p className="flex justify-center">Summer Staff Application</p>
                  </Link>
                </div>

                {/*Item four*/}
                <div className="flex flex-col items-center">
                  <Link 
                      to={'/summercampreg'}
                      className="text-gray-400 hover:text-green-200"
                    >
                    <img
                      alt="staff_application"
                      src="https://royal-ridges-retreat.s3.us-west-1.amazonaws.com/summer_camp_page/Royal+Ridges-Horse+Camp-Yacolt-Washington-Summer+Camp-Kids+Camp-Christian+Camp-snow.jpg"
                      className="w-64 rounded-3xl"
                    />
                      <p className="flex justify-center">Summer Camp Information</p>
                  </Link>
                </div>
            </div>
          </div>          
        </div>
        <Footer />
      </div>
    )
  }
  
  export default SummerCampPage
  