import React from "react";
import {Link} from 'gatsby';

import GiddyUp from '../images/GiddyUp.png';
import RidingLesson from '../images/RidingLessons.png';
import SatCamp from '../images/SaturdayCamp.png';
import PaintBall from '../images/Paintball.png';
import AdventureClass from '../images/AdventureClass.png';
import ParentChild from '../images/ParentChild.png';
import GirlScouts from '../images/GirlScouts.png';
import BookRide from '../images/Book-a-ride.png';
import GuestGroup from '../images/GuestGroup.png';
import Vault from '../images/Vaulting.png';
import Women from '../images/WomenHorse.png'
import School from '../images/SchoolBreakCamps.png'

import Header from "../components/header";
import Footer from "../components/footer";

const ProgramsPage = () => {
    return (
      <div className="bg-gradient-to-r from-yellow-200 to-indigo-200">
        <Header />
          <div className="max-w-6xl mx-auto my-4">
            <div className="text-green-200 font-bold font-cursive text-base md:text-4xl flex flex-wrap justify-center pb-8">
              Royal Ridges Programs
            </div>
    
            <div className="grid grid-cols-4 gap-4 h-screen my-4 overflow-y-scroll">
                {/*👇🏼First Row*/}
                <div className="relative box-content w-20 h-20 lg:w-60 lg:h-64">
                  <Link
                    to={'/giddy-up'}
                  >
                    <img
                      alt="Giddy Up"
                      src={GiddyUp}
                    />
                    <div className="text-center absolute inset-0 opacity-0 hover:opacity-100 duration-300 flex justify-center items-center text-md text-gray-800 bg-yellow-200 rounded-full">
                      <p>Placeholder text for icon descriptions</p>
                    </div>
                  </Link>
                </div>

                <div className="relative box-content w-20 h-20 lg:w-60 lg:h-64">
                  <Link
                    to={'/horsemanship'}
                  >
                    <img
                      alt="horse lessons"
                      src={RidingLesson}
                    />
                    <div className="text-center absolute inset-0 opacity-0 hover:opacity-100 duration-300 flex justify-center items-center text-md text-gray-800 bg-yellow-200 rounded-full">
                      <p>Placeholder text for icon descriptions</p>
                    </div>
                  </Link>
                </div>

                <div className="relative box-content w-20 h-20 lg:w-60 lg:h-64">
                  <Link
                    to={'/adventure-class'}
                  >
                  <img
                    alt="adventures galore"
                    src={AdventureClass}
                  />
                  <div className="text-center absolute inset-0 opacity-0 hover:opacity-100 duration-300 flex justify-center items-center text-md text-gray-800 bg-yellow-200 rounded-full">
                      <p>Placeholder text for icon descriptions</p>
                    </div>
                  </Link>
                </div>

                <div className="relative box-content w-20 h-20 lg:w-60 lg:h-64">
                  <Link 
                    to={'/parent-child'}
                  >
                  <img
                    alt="Bears"
                    src={ParentChild}
                  />
                  <div className="text-center absolute inset-0 opacity-0 hover:opacity-100 duration-300 flex justify-center items-center text-md text-gray-800 bg-yellow-200 rounded-full">
                      <p>Placeholder text for icon descriptions</p>
                    </div>
                  </Link>
                </div>

                {/*👇🏼Second Row*/}
                <div className='relative box-content w-20 h-20 lg:w-60 lg:h-64'>
                  <Link
                    to={'/saturday-camps'}
                  >
                    <img
                    alt="Saturday Camps"
                    src={SatCamp}
                  />
                  <div className="text-center absolute inset-0 opacity-0 hover:opacity-100 duration-300 flex justify-center items-center text-md text-gray-800 bg-yellow-200 rounded-full">
                      <p>Placeholder text for icon descriptions</p>
                    </div>
                  </Link>
                </div>

                <div className='relative box-content w-20 h-20 lg:w-60 lg:h-64'>
                  <Link
                    to={'/girl-scouts'}
                  >
                  <img
                    alt="Girl Scouts"
                    src={GirlScouts}
                  />
                  <div className="text-center absolute inset-0 opacity-0 hover:opacity-100 duration-300 flex justify-center items-center text-md text-gray-800 bg-yellow-200 rounded-full">
                      <p>Placeholder text for icon descriptions</p>
                    </div>
                  </Link>
                </div>              

                <div className='relative box-content w-20 h-20 lg:w-60 lg:h-64'>
                  <Link
                    to={'/book-a-ride'}
                  >
                  <img
                    alt="Book a Ride"
                    src={BookRide}
                  />
                  <div className="text-center absolute inset-0 opacity-0 hover:opacity-100 duration-300 flex justify-center items-center text-md text-gray-800 bg-yellow-200 rounded-full">
                      <p>Placeholder text for icon descriptions</p>
                    </div>
                  </Link>
                </div>

                <div className='relative box-content w-20 h-20 lg:w-60 lg:h-64'>
                  <Link 
                    to={'/paintball'}
                  >
                  <img
                    alt="paintball camp"
                    src={PaintBall}
                  />
                  <div className="text-center absolute inset-0 opacity-0 hover:opacity-100 duration-300 flex justify-center items-center text-md text-gray-800 bg-yellow-200 rounded-full">
                      <p>Placeholder text for icon descriptions</p>
                    </div>
                  </Link>
                </div>
                
                {/*👇🏼Third Row*/}
                <div className='relative box-content w-20 h-20 lg:w-60 lg:h-64'>
                  <Link
                    to={'/guest-groups'}
                  >
                    <img
                    alt="Guest Groups Camp"
                    src={GuestGroup}
                  />
                  <div className="text-center absolute inset-0 opacity-0 hover:opacity-100 duration-300 flex justify-center items-center text-md text-gray-800 bg-yellow-200 rounded-full">
                      <p>Placeholder text for icon descriptions</p>
                    </div>
                  </Link>
                </div>

                <div className='relative box-content w-20 h-20 lg:w-60 lg:h-64'>
                  <Link
                    to={'/vaulting'}
                  >
                  <img
                    alt="Vault"
                    src={Vault}
                  />
                  <div className="text-center absolute inset-0 opacity-0 hover:opacity-100 duration-300 flex justify-center items-center text-md text-gray-800 bg-yellow-200 rounded-full">
                      <p>Placeholder text for icon descriptions</p>
                    </div>
                  </Link>
                </div>

                <div className='relative box-content w-20 h-20 lg:w-60 lg:h-64'>
                  <Link
                    to={'/women-horse-camp'}
                  >
                  <img
                    alt="Women Camp"
                    src={Women}
                  />
                  <div className="text-center absolute inset-0 opacity-0 hover:opacity-100 duration-300 flex justify-center items-center text-md text-gray-800 bg-yellow-200 rounded-full">
                      <p>Placeholder text for icon descriptions</p>
                    </div>
                  </Link>
                </div>

                <div className='relative box-content w-20 h-20 lg:w-60 lg:h-64'>
                  <Link
                    to={'/school-break'}
                  >
                  <img
                    alt="School Break"
                    src={School}
                  />
                  <div className="text-center absolute inset-0 opacity-0 hover:opacity-100 duration-300 flex justify-center items-center text-md text-gray-800 bg-yellow-200 rounded-full">
                      <p>Placeholder text for icon descriptions</p>
                    </div>
                  </Link>
                </div>
            </div>
          </div>
        <Footer />
      </div>
    )
  }
  
  export default ProgramsPage
  