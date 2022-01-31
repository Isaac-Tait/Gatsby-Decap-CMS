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
      <div className="bg-gradient-to-l from-yellow-400 via-yellow-200 to-indigo-200">
        <Header />
          <div className="max-w-6xl mx-auto my-4">
            <div className="text-green-200 font-bold font-cursive text-base md:text-4xl flex flex-wrap justify-center pb-8">
              Royal Ridges Programs
            </div>
    
            <div className="grid grid-cols-4 gap-4 h-screen my-4 overflow-y-scroll">
                {/*👇🏼First Row*/}
                <div className="lg:w-60 lg:h-60">
                  <Link
                    to={'/giddy-up'}
                  >
                    <img
                      alt="Giddy Up"
                      src={GiddyUp}
                    />
                  </Link>
                </div>

                <div className="lg:w-60 lg:h-60">
                  <Link
                    to={'/horsemanship'}
                  >
                    <img
                      alt="horse lessons"
                      src={RidingLesson}
                    />
                  </Link>
                </div>

                <div className="lg:w-60 lg:h-60">
                  <Link
                    to={'/adventure-class'}
                  >
                  <img
                    alt="adventures galore"
                    src={AdventureClass}
                  />
                  </Link>
                </div>

                <div className="lg:w-60 lg:h-60">
                  <Link 
                    to={'/parent-child'}
                  >
                  <img
                    alt="Bears"
                    src={ParentChild}
                  />
                  </Link>
                </div>

                {/*👇🏼Second Row*/}
                <div className="lg:w-60 lg:h-60">
                  <Link
                    to={'/saturday-camps'}
                  >
                    <img
                    alt="Saturday Camps"
                    src={SatCamp}
                  />
                  </Link>
                </div>

                <div className="lg:w-60 lg:h-60">
                  <Link
                    to={'/girl-scouts'}
                  >
                  <img
                    alt="Girl Scouts"
                    src={GirlScouts}
                  />
                  </Link>
                </div>              

                <div className="lg:w-60 lg:h-60">
                  <Link
                    to={'/book-a-ride'}
                  >
                  <img
                    alt="Book a Ride"
                    src={BookRide}
                  />
                  </Link>
                </div>

                <div className="lg:w-60 lg:h-60">
                  <Link 
                    to={'/paintball'}
                  >
                  <img
                    alt="paintball camp"
                    src={PaintBall}
                  />
                  </Link>
                </div>
                
                {/*👇🏼Third Row*/}
                <div className="lg:w-60 lg:h-60">
                  <Link
                    to={'/guest-groups'}
                  >
                    <img
                    alt="Guest Groups Camp"
                    src={GuestGroup}
                  />
                  </Link>
                </div>

                <div className="lg:w-60 lg:h-60">
                  <Link
                    to={'/vaulting'}
                  >
                  <img
                    alt="Vault"
                    src={Vault}
                  />
                  </Link>
                </div>

                <div className="lg:w-60 lg:h-60">
                  <Link
                    to={'/women-horse-camp'}
                  >
                  <img
                    alt="Women Camp"
                    src={Women}
                  />
                  </Link>
                </div>

                <div className="lg:w-60 lg:h-60">
                  <Link
                    to={'/school-break'}
                  >
                  <img
                    alt="School Break"
                    src={School}
                  />
                  </Link>
                </div>
            </div>
          </div>
        <Footer />
      </div>
    )
  }
  
  export default ProgramsPage
  