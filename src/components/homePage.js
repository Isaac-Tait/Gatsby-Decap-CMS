import React from "react"
import {Link} from "gatsby"
import Blog from "./blogPostList"

import logo from "../images/logo.png"

const HomePage = () => {
    return (
        <div>
        {/* First window */}
          <div className="rounded-lg shadow-lg mb-2 sm:mx-8 flex flex-col h-screen justify-between">
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
        <div className="bg-fixed rounded-lg shadow-lg mb-2 h-screen bg-green-200 bg-repeat-round flex flex-col sm:mx-8">
            <p className="font-extrabold text-xl md:text-6xl text-yellow-400 grid place-items-center h-screen font-mono">
            Discover ~ Connect ~ Grow
            </p>
        </div>
        {/* Third window */}
        <div className="bg-fixed rounded-lg shadow-lg h-screen bg-green-200 sm:mx-8 mb-2">
          <Blog />
        </div>
        
        {/* Fourth window */}
        <div className="h-screen bg-yellow-200 rounded-lg shadow-lg sm:mx-8">
          <div className="grid col-span-3 grid-cols-3 md:col-span-1 pt-12">
            <div className="mx-4 font-semibold uppercase flex flex-col items-center justify-center">
              <img
                alt="butterfly"
                src="https://royal-ridges-retreat.s3.us-west-1.amazonaws.com/splash-page/Royal+Ridges-Horse+Camp-Yacolt-Washington-Summer+Camp-Kids+Camp-Christian+Camp-butterfly.JPG"
                className="hidden md:block h-64 w-48 rounded-3xl"
              />
              <Link
                to={'/summercamp'}
                className="text-green-200 hover:text-yellow-400 underline"
              >
                Summer Camp
              </Link>
            </div>

            <div className="mx-4 font-semibold uppercase flex flex-col items-center justify-center">
              <img
                alt="Climbing wall"
                src="https://royal-ridges-retreat.s3.us-west-1.amazonaws.com/splash-page/Royal+Ridges-Horse+Camp-Yacolt-Washington-Summer+Camp-Kids+Camp-Christian+Camp-climbing+wall.JPG"
                className="hidden md:block h-64 w-48 rounded-3xl"
              />
              <Link
                to={'/programs'}
                className="text-green-200 hover:text-yellow-400 underline"
              >
                Programs
              </Link>
            </div>

            <p className="mx-4 font-semibold uppercase flex flex-col items-center justify-center">
              <img
                alt="Happy campers"
                src="https://royal-ridges-retreat.s3.us-west-1.amazonaws.com/splash-page/Royal+Ridges-Horse+Camp-Yacolt-Washington-Summer+Camp-Kids+Camp-Christian+Camp-happy+campers.JPG"
                className="hidden md:block h-64 w-48 rounded-3xl"
              />
              <Link
                to={'/support'}
                className="text-green-200 hover:text-yellow-400 underline"
              >
                Support
              </Link>
            </p>
          </div>

          <div className="grid col-span-5 grid-cols-5 md:col-span-1 mt-20">
            <div className="box-content h-12 w-12 md:h-32 md:w-32 p-4"></div>

            <div className="mx-4 font-semibold uppercase flex flex-col items-center">
              <img
                alt="High ropes course"
                src="https://royal-ridges-retreat.s3.us-west-1.amazonaws.com/splash-page/Royal+Ridges-Horse+Camp-Yacolt-Washington-Summer+Camp-Kids+Camp-Christian+Camp-high+ropes.JPG"
                className="hidden md:block h-64 w-48 rounded-3xl"
              />
              <Link
                to={'/about'}
                className="text-green-200 hover:text-yellow-400 underline"
              >
                About
              </Link>
            </div>
            <div className="box-content h-12 w-12 md:h-32 md:w-32 p-4"></div>

            <p className="mx-4 font-semibold uppercase flex flex-col items-center">
              <img
                alt="Meadow"
                src="https://royal-ridges-retreat.s3.us-west-1.amazonaws.com/splash-page/Royal+Ridges-Horse+Camp-Yacolt-Washington-Summer+Camp-Kids+Camp-Christian+Camp-meadow.JPG"
                className="hidden md:block h-64 w-48 rounded-3xl"
              />
              <Link
                to={'/contact'}
                className="text-green-200 hover:text-yellow-400 underline"
              >
                Contact
              </Link>
            </p>
          </div>
      </div>
  </div>
  )
}
export default HomePage;