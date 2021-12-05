import React from "react"
import {Link} from "gatsby"

import Blog from "./blogPostList"
import logo from "../images/logo.png"
import adventure1 from "../images/adventureOne.png"

const HomePage = () => {
    return (
        <div>
        {/* First window */}
          <div className="heropattern-topography-yellow-400 rounded-lg shadow-lg mb-2 sm:mx-8 flex flex-col h-screen justify-between">
            <img
            src={logo}
            alt="Royal Ridge's Logo"
            className="w-1/2 flex justify-center mx-auto pt-8"
            />
            <div className="w-1/2 flex justify-center mx-auto mt-40">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 animate-bounce"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 14l-7 7m0 0l-7-7m7 7V3"
                    />
                </svg>
            </div>
        </div>
        {/* Second window https://tailwindcss.com/docs/background-attachment#fixed */}
        <div className="bg-fixed rounded-lg shadow-lg mb-2 h-screen bg-gradient-to-r from-yellow-400 via-yellow-200 to-indigo-200 sm:mx-8">
            <p className="font-cursive font-extrabold text-xl md:text-6xl text-yellow-400 grid place-items-center h-screen">
            Discover ~ Connect ~ Grow
            </p>
        </div>
        {/* Third window */}
        <div className="bg-fixed rounded-lg shadow-lg h-screen heropattern-endlessclouds-gray-200 sm:mx-8 mb-2 overflow-scroll">
          <div className="grid place-items-center h-screen">
            <Blog />  {/* Blog post list */}
          </div>
          
        </div>
        
        {/* Fourth window */}
        <div className="h-screen bg-gradient-to-l from-indigo-300 via-red-200 to-gray-400 rounded-lg shadow-lg sm:mx-8">
          <div className="grid col-span-3 grid-cols-3 md:col-span-1 pt-12">
            
            <div className="mx-4 font-semibold uppercase flex flex-col items-center justify-center">
              <Link
                to={'/summercamp'}
                className="font-chalk text-green-200 hover:text-yellow-200 underline"
              >
                <img
                alt="butterfly"
                src={adventure1}
                className="hidden md:block w-48 rounded-3xl"
              />
              <p className="flex justify-center">Summer Camp</p>
              </Link>
            </div>

            <div className="mx-4 font-semibold uppercase flex flex-col items-center justify-center">
              <Link
                to={'/programs'}
                className="font-chalk text-green-200 hover:text-yellow-200 underline"
              >
              <img
                alt="Climbing wall"
                src="https://royal-ridges-retreat.s3.us-west-1.amazonaws.com/splash-page/Royal+Ridges-Horse+Camp-Yacolt-Washington-Summer+Camp-Kids+Camp-Christian+Camp-climbing+wall.JPG"
                className="hidden md:block h-64 w-48 rounded-3xl"
              />
                <p className="flex justify-center">Programs</p>
              </Link>
            </div>

            <p className="mx-4 font-semibold uppercase flex flex-col items-center justify-center">
              <Link
                to={'/support'}
                className="font-chalk text-green-200 hover:text-yellow-200 underline"
              >
              <img
                alt="Happy campers"
                src="https://royal-ridges-retreat.s3.us-west-1.amazonaws.com/splash-page/Royal+Ridges-Horse+Camp-Yacolt-Washington-Summer+Camp-Kids+Camp-Christian+Camp-happy+campers.JPG"
                className="hidden md:block h-64 w-48 rounded-3xl"
              />
                <p className="flex justify-center">Support</p>
              </Link>
            </p>
          </div>

          <div className="grid col-span-5 grid-cols-5 md:col-span-1 mt-20">
            <div className="box-content h-12 w-12 md:h-32 md:w-32 p-4"></div>

            <div className="mx-4 font-semibold uppercase flex flex-col items-center">
              <Link
                to={'/about'}
                className="font-chalk text-green-200 hover:text-yellow-200 underline"
              >
              <img
                alt="High ropes course"
                src="https://royal-ridges-retreat.s3.us-west-1.amazonaws.com/splash-page/Royal+Ridges-Horse+Camp-Yacolt-Washington-Summer+Camp-Kids+Camp-Christian+Camp-high+ropes.JPG"
                className="hidden md:block h-64 w-48 rounded-3xl"
              />
                <p className="flex justify-center">About</p>
              </Link>
            </div>
            
            <div className="box-content h-12 w-12 md:h-32 md:w-32 p-4"></div>
            <div className="mx-4 font-semibold uppercase flex flex-col items-center">
              <Link
                to={'/contact'}
                className="font-chalk text-green-200 hover:text-yellow-400 underline"
              >
                <img
                  alt="Meadow"
                  src="https://royal-ridges-retreat.s3.us-west-1.amazonaws.com/splash-page/Royal+Ridges-Horse+Camp-Yacolt-Washington-Summer+Camp-Kids+Camp-Christian+Camp-meadow.JPG"
                  className="hidden md:block h-64 w-48 rounded-3xl"
                />
                <p className="flex justify-center">Contact</p>
              </Link>
            </div>
          </div>
      </div>
  </div>
  )
}
export default HomePage;