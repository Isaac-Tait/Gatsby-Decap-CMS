import React from "react";
import {Link} from "gatsby";

import Reg from '../images/CampRegistration.png'
import Faq from '../images/FAQ.png'
import ParentManual from '../images/ParentManual.png'
import Scholarship from '../images/Scholarships.png'
import SummerCamps from '../images/SummerCamps.png'
import SummerStaffApp from '../images/SummerStaffApp.png'

import Header from "../components/header";
import Footer from "../components/footer";

const SummerCampPage = () => {
    return (
      <div className="bg-gradient-to-r from-yellow-400 via-yellow-200 to-indigo-200">
        <Header />
          <div className="max-w-6xl mx-auto h-screen">
            <div className="flex flex-wrap text-green-200 font-cursive font-bold text-xl md:text-4xl justify-center">
              Royal Ridges Summer Camp
            </div>
              {/*First Row*/}
              <div className="grid grid-rows-2 h-96 md:h-screen max-w-6xl mx-auto">
                <div className="flex flex-wrap justify-between mx-2 my-2 text-sm md:text-lg content-center">
                {/*Item one*/}
                  <div className="flex flex-col w-28 md:w-64">
                    <Link 
                        to={'/liability'}
                        className='text-green-200 hover:text-indigo-400'
                      >
                      <img
                        alt="medical_image"
                        src="https://royal-ridges-retreat.s3.us-west-1.amazonaws.com/summer_camp_page/Royal+Ridges-Horse+Camp-Yacolt-Washington-Summer+Camp-Kids+Camp-Christian+Camp-Canoe.JPG"
                        className="w-28 md:w-64 rounded-3xl"
                      />
                      <p className="text-center">Liability Waiver</p>
                    </Link>
                  </div>
                  {/*Item two*/}
                  <div className="flex flex-col w-28 md:w-64">
                    <Link 
                    to={'/parent-manual'}
                    >
                      <img
                        alt="parents_manual"
                        src={ParentManual}
                        className="w-28 md:w-60 rounded-3xl"
                      />
                    </Link>
                  </div>
                </div>
                {/*Second Row*/}
                <div className="flex flex-wrap justify-between mx-2 my-2 text-sm md:text-lg content-center">
                  {/*Item three*/}
                  <div className="flex flex-col w-28 md:w-64">
                    <Link 
                      to={'/summer-staff-app'}
                    >
                      <img
                        alt="staff_application"
                        src={SummerStaffApp}
                        className="w-28 md:w-64 rounded-3xl"
                      />
                      </Link>
                    </div>
                    {/*Item four*/}
                    <div className="flex flex-col w-28 md:w-64">
                      <Link 
                          to={'/registration'}
                          className='text-green-200 hover:text-indigo-400'
                        >
                        <img
                          alt="staff_application"
                          src={SummerCamps}
                          className="w-28 md:w-64 rounded-3xl"
                        />
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
  