import React from "react";
import {Link} from "gatsby";

import Reg from '../images/CampRegistration.png'
import Faq from '../images/FAQ.png'
import ParentManual from '../images/ParentManual.png'
import Scholarship from '../images/Scholarships.png'
import SummerStaffApp from '../images/SummerStaffApp.png'
import Summer from '../images/SummerIcon.png'

import Header from "../components/header";
import Footer from "../components/footer";

const SummerCampPage = () => {
    return (
      <div className="bg-gradient-to-l from-yellow-200 to-green-200">
        <Header />
          <div className="max-w-6xl mx-auto">
            <div className='flex justify-center'>
              <img
                alt="summer"
                src={Summer}
                className='w-1/12 mt-1'
              />
            </div>
            <div className="grid grid-cols-3 gap-2 h-screen mx-2 overflow-y-scroll">
              {/* Column One */}         
              <div className="flex items-center justify-center">
                <Link to={'/registration'}>
                  <img
                    alt="registration"
                    src={Reg}
                    className="w-40 md:w-64 mt-8 mx-auto"
                  />
                </Link>
              </div>
              {/* Empty Div */}
              <div></div>
              {/* Column Three */}
              <div className="flex items-center justify-center">
                <Link to={'/parent-manual'}>
                  <img
                    alt="parents_manual"
                    src={ParentManual}
                    className="w-40 md:w-64 mt-8 mx-auto"
                  />
                </Link>
              </div>
              {/* Column One */} 
              <div className='flex items-center justify-center'>
                <Link to={'/summer-staff-app'}>
                  <img
                    alt="staff_application"
                    src={SummerStaffApp}
                    className="w-40 md:w-64 mt-8 mx-auto"
                  />
                </Link>
              </div>
              {/* Empty Div */}
              <div></div>
              {/* Column Three */} 
              <div className="flex items-center justify-center">
                <Link to={'/scholarships'}>
                  <img
                    alt="scholarships"
                    src={Scholarship}
                    className="w-40 md:w-64 mt-8 mx-auto"
                  />
                </Link>
              </div>
              {/* Empty Div */}
              <div></div>
              {/* Column Two */}
              <div className="flex items-center justify-center">
                <Link to={'/faq'}>
                  <img
                    alt="facts"
                    src={Faq}
                    className="w-40 md:w-64 mx-auto"
                  />
                </Link>
              </div>
            </div>          
          </div>
        <Footer />
      </div>
    )
  }
  
  export default SummerCampPage
  