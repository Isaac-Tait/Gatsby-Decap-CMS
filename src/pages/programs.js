import React from 'react';
import { Link } from 'gatsby';

import GiddyUp from '../images/icons/GiddyUp.png';
import RidingLesson from '../images/icons/RidingLessons.png';
import SatCamp from '../images/icons/SaturdayCamp.png';
import PaintBall from '../images/icons/Paintball.png';
import AdventureClass from '../images/icons/AdventureClass.png';
import ParentChild from '../images/icons/ParentChild.png';
import GirlScouts from '../images/icons/GirlScouts.png';
import BookRide from '../images/icons/Book-a-ride.png';
import GuestGroup from '../images/icons/GuestGroup.png';
import Vault from '../images/icons/Vaulting.png';
import Women from '../images/icons/WomenHorse.png';
import School from '../images/icons/SchoolBreakCamps.png';
import Program from '../images/icons/ProgramIcon.png';

import Header from '../components/header';
import Footer from '../components/footer';

const ProgramsPage = () => {
  return (
    <div className="bg-gradient-to-r from-yellow-100 to-yellow-400">
      <Header />
      <div className="">
        <div className="flex justify-center">
          <img alt="programs" src={Program} className="w-1/12 mt-1" />
        </div>
        <div className="grid grid-cols-3 lg:grid-cols-4 m-auto h-screen my-4 overflow-auto mx-4">
          {/*👇🏼First Row*/}
          <div className="justify-self-center relative box-content w-20 md:w-40 lg:w-60 h-20 md:h-40 lg:h-60">
            <Link to={'/giddy-up'}>
              <img alt="Giddy Up" src={GiddyUp} />
              <div className="-mb-2 text-center absolute inset-0 opacity-0 hover:opacity-100 duration-300 flex justify-center items-center text-md text-gray-800 bg-yellow-400 rounded-full">
                <p className="text-white px-1 hidden lg:block">
                  During the non-summer seasons come on up for a day of fun and
                  fellowship every week
                </p>
              </div>
            </Link>
          </div>

          <div className="justify-self-center relative box-content w-20 md:w-40 lg:w-60 h-20 md:h-40 lg:h-60">
            <Link to={'/horsemanship'}>
              <img alt="horse lessons" src={RidingLesson} />
              <div className="-mb-2 text-center absolute inset-0 opacity-0 hover:opacity-100 duration-300 flex justify-center items-center text-md text-gray-800 bg-yellow-200 rounded-full">
                <p className="px-1 hidden lg:block">
                  This series offers more than just learning how to ride a horse
                  - you learn to care for them too.
                </p>
              </div>
            </Link>
          </div>

          {/*
                <div className="relative box-content w-20 md:w-40 lg:w-60 h-20 md:h-40 lg:h-64">
                  <Link
                    to={'/adventure-class'}
                  >
                  <img
                    alt="adventures galore"
                    src={AdventureClass}
                  />
                  <div className="text-center absolute inset-0 opacity-0 hover:opacity-100 duration-300 flex justify-center items-center text-md text-gray-800 bg-green-200 rounded-full">
                      <p className='text-white px-1 hidden lg:block'>If you are into learning survival and self-sufficiency then this is the place to be.</p>
                    </div>
                  </Link>
                </div>
                */}

          <div className="justify-self-center relative box-content w-20 md:w-40 lg:w-60 h-20 md:h-40 lg:h-60">
            <Link to={'/girl-scouts'}>
              <img alt="Girl Scouts" src={GirlScouts} />
              <div className="-mb-2 text-center absolute inset-0 opacity-0 hover:opacity-100 duration-300 flex justify-center items-center text-md text-gray-800 bg-green-200 rounded-full">
                <p className="px-1 text-white hidden lg:block">
                  We have helped hundreds of Girl Scouts get their horsemanship
                  badges. Let us help your troop succeed too!
                </p>
              </div>
            </Link>
          </div>

          <div className="justify-self-center relative box-content w-20 md:w-40 lg:w-60 h-20 md:h-40 lg:h-60">
            <Link to={'/parent-child'}>
              <img alt="Bears" src={ParentChild} />
              <div className="-mb-2 text-center absolute inset-0 opacity-0 hover:opacity-100 duration-300 flex justify-center items-center text-md text-gray-800 bg-yellow-400 rounded-full">
                <p className="text-white px-1 hidden lg:block">
                  A day of fun, adventures, and memories that will last a life
                  time.
                </p>
              </div>
            </Link>
          </div>

          {/*👇🏼Second Row*/}
          <div className="justify-self-center relative box-content w-20 md:w-40 lg:w-60 h-20 md:h-40 lg:h-60">
            <Link to={'/saturday-camps'}>
              <img alt="Saturday Camps" src={SatCamp} />
              <div className="-mb-2 text-center absolute inset-0 opacity-0 hover:opacity-100 duration-300 flex justify-center items-center text-md text-gray-800 bg-yellow-200 rounded-full">
                <p className="px-1 hidden lg:block">
                  Are you looking for something for your kids to do over the
                  weekend? Look no further than this popular camp series.
                </p>
              </div>
            </Link>
          </div>

          <div className="justify-self-center relative box-content w-20 md:w-40 lg:w-60 h-20 md:h-40 lg:h-60">
            <Link to={'/school-break'}>
              <img alt="School Break" src={School} />
              <div className="-mb-2 text-center absolute inset-0 opacity-0 hover:opacity-100 duration-300 flex justify-center items-center text-md text-gray-800 bg-green-200 rounded-full">
                <p className="px-2 text-white hidden lg:block">
                  Need something for junior to do during school break? Send them
                  to Royal Ridges Retreat. We promise to send them back tired
                  and happy.
                </p>
              </div>
            </Link>
          </div>

          <div className="justify-self-center relative box-content w-20 md:w-40 lg:w-60 h-20 md:h-40 lg:h-60">
            <Link to={'/vaulting'}>
              <img alt="Vault" src={Vault} />
              <div className="-mb-2 text-center absolute inset-0 opacity-0 hover:opacity-100 duration-300 flex justify-center items-center text-md text-gray-800 bg-yellow-400 rounded-full">
                <p className="px-1 text-white hidden lg:block">
                  Vaulting does not have to be scary. Let our fully certified
                  instructors show you the ropes in a fun and safe environment.
                </p>
              </div>
            </Link>
          </div>

          <div className="justify-self-center relative box-content w-20 md:w-40 lg:w-60 h-20 md:h-40 lg:h-60">
            <Link to={'/paintball'}>
              <img alt="paintball camp" src={PaintBall} />
              <div className="-mb-2 text-center absolute inset-0 opacity-0 hover:opacity-100 duration-300 flex justify-center items-center text-md text-gray-800 bg-yellow-200 rounded-full">
                <p className="px-1 hidden lg:block">
                  We have the best paintball course in southern Washington. Come
                  and experience it for yourself.
                </p>
              </div>
            </Link>
          </div>

          {/*👇🏼Third Row*/}
          {/*Empty div to center*/}
          
          <div className="justify-self-center relative box-content w-20 md:w-40 lg:w-60 h-20 md:h-40 lg:h-60">
            <Link to={'/guest-groups'}>
              <img alt="Guest Groups Camp" src={GuestGroup} />
              <div className="-mb-2 text-center absolute inset-0 opacity-0 hover:opacity-100 duration-300 flex justify-center items-center text-md text-gray-800 bg-green-200 rounded-full">
                <p className="px-1 text-white hidden lg:block">
                  Looking for a retreat location? Let Royal Ridges Retreat meet
                  and exceed your needs.
                </p>
              </div>
            </Link>
          </div>

          <div className="justify-self-center relative box-content w-20 md:w-40 lg:w-60 h-20 md:h-40 lg:h-60">
            <Link to={'/book-a-ride'}>
              <img alt="Book a Ride" src={BookRide} />
              <div className="-mb-2 text-center absolute inset-0 opacity-0 hover:opacity-100 duration-300 flex justify-center items-center text-md text-gray-800 bg-yellow-400 rounded-full">
                <p className="text-white px-1 hidden lg:block">
                  A perfect gift for that special someone - great for birthdays,
                  graduation gifts, or just because...
                </p>
              </div>
            </Link>
          </div>
          {/*
                <div className='relative box-content w-20 md:w-40 lg:w-60 h-20 md:h-40 lg:h-64'>
                  <Link
                    to={'/women-horse-camp'}
                  >
                  <img
                    alt="Women Camp"
                    src={Women}
                  />
                  <div className="text-center absolute inset-0 opacity-0 hover:opacity-100 duration-300 flex justify-center items-center text-md text-gray-800 bg-yellow-200 rounded-full">
                      <p className='px-1 hidden lg:block'>A day for the ladies to relax in Creation with good friends, great food, and amazing views.</p>
                    </div>
                  </Link>
                </div>
                */}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProgramsPage;
