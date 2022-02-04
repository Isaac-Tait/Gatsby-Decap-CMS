import React from "react";
import {Link} from "gatsby";

import Reg from '../images/CampRegistration.png'
import Faq from '../images/FAQ.png'
import ParentManual from '../images/ParentManual.png'
import Scholarship from '../images/Scholarships.png'
import SummerStaffApp from '../images/SummerStaffApp.png'

import Header from "../components/header";
import Footer from "../components/footer";

const SummerCampPage = () => {
    return (
      <div className="bg-gradient-to-l from-yellow-200 to-indigo-200">
        <Header />
          <div className="max-w-6xl mx-auto h-screen">
            <div className="flex flex-wrap text-green-200 font-cursive font-bold text-xl md:text-4xl justify-center pb-8">
              Royal Ridges Summer Camp
            </div>
            <div className="grid grid-rows-3 max-w-6xl">
                
              <div className="flex flex-row justify-between">
                <div className="mx-4">
                  <Link to={'/registration'}>
                    <img
                      alt="staff_application"
                      src={Reg}
                      className="w-28 md:w-44"
                    />
                  </Link>
                </div>
                <div className="mx-4">
                  <Link to={'/parent-manual'}>
                    <img
                      alt="parents_manual"
                      src={ParentManual}
                      className="w-28 md:w-44"
                    />
                  </Link>
                </div> 
              </div>

              <div>
                <div className=" flex justify-center mx-4">
                  <Link to={'/faq'}>
                    <img
                      alt="Facts"
                      src={Faq}
                      className="w-28 md:w-44"
                    />
                  </Link>
                </div>
              </div>

              <div className="flex flex-row justify-between">
                <div className="mx-4">
                  <Link to={'/summer-staff-app'}>
                    <img
                      alt="staff_application"
                      src={SummerStaffApp}
                      className="w-28 md:w-44"
                    />
                  </Link>
                </div>
                <div className="mx-4">
                  <Link to={'/scholarships'}>
                    <img
                      alt="medical_image"
                      src={Scholarship}
                      className="w-28 md:w-44"
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
  