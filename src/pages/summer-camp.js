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
            <div className="grid grid-cols-3 h-screen">
              {/* Row One */}         
              <div className="flex flex-col justify-between mx-auto">
                <div className="mx-4">
                  <Link to={'/registration'}>
                    <img
                      alt="registration"
                      src={Reg}
                      className="w-28 md:w-64 mt-8 mx-auto"
                    />
                  </Link>
                </div>
                <div className="mx-4">
                  <Link to={'/parent-manual'}>
                    <img
                      alt="parents_manual"
                      src={ParentManual}
                      className="w-28 md:w-64 mt-8 mx-auto"
                    />
                  </Link>
                </div> 
              </div>
              {/* Row Two */} 
              <div className='flex flex-col justify-between mx-auto'>
                <div>{/*Empty Div*/}</div>
                  <div className="">
                    <Link to={'/faq'}>
                      <img
                        alt="facts"
                        src={Faq}
                        className="w-28 md:w-64 mt-8 mx-auto"
                      />
                    </Link>
                  </div>
                <div>{/*Empty Div*/}</div>
              </div>
              {/* Row Three */} 
              <div className="flex flex-col justify-between mx-auto">
                <div className="mx-4">
                  <Link to={'/summer-staff-app'}>
                    <img
                      alt="staff_application"
                      src={SummerStaffApp}
                      className="w-28 md:w-64 mt-8 mx-auto"
                    />
                  </Link>
                </div>
                <div className="mx-4">
                  <Link to={'/scholarships'}>
                    <img
                      alt="scholarships"
                      src={Scholarship}
                      className="w-28 md:w-64 mt-8 mx-auto"
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
  