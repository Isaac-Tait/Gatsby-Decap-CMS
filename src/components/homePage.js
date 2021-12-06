import React from "react"
import {Link} from "gatsby"

import Blog from "./blogPostList"
import logo from "../images/logo.png"
import adventure1 from "../images/adventureOne.png"
import adventure2 from "../images/adventureTwo.png"
import adventure3 from "../images/adventureThree.png"
import adventure4 from "../images/adventureFour.png"
import adventure5 from "../images/adventureFive.png"

const HomePage = () => {
    return (
        <div>
        {/* First window */}
          <div className="heropattern-topography-yellow-400 mb-2 flex flex-col h-screen justify-between">
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
        {/* Second window */}
        <div className="bg-fixed mb-2 h-screen bg-gradient-to-r from-yellow-400 via-yellow-200 to-indigo-200">
            <p className="font-cursive font-extrabold text-xl md:text-6xl text-yellow-400 grid place-items-center h-screen">
            Discover ~ Connect ~ Grow
            </p>
        </div>
        {/* Third window */}
        <div className="bg-fixed rounded-lg shadow-lg h-screen heropattern-endlessclouds-gray-200 mb-2 overflow-scroll">
          <div className="grid place-items-center h-screen">
            <Blog />  {/* Blog post list */}
          </div>
          
        </div>
        
        {/* Fourth window */}
        <div className="h-screen grid grid-rows-3 grid-flow-col gap-4 bg-gradient-to-l from-indigo-300 via-red-200 to-gray-400">
          {/* Row One */}
          <div className="grid col-span-3 grid-cols-3 md:col-span-1">
            <div className="flex flex-col items-center justify-center">
              <Link
                to={'/summercamp'}
                className=" text-green-200 hover:text-indigo-500 text-base md:text-2xl font-black uppercase font-chalk"
              >
                <img
                alt="summer camp icon"
                src={adventure4}
                className="w-52"
              />
              <p className="flex justify-center">Summer Camp</p>
              </Link>
            </div>
            {/* Empty Div*/}
            <div></div>
            <div className="flex flex-col items-center justify-center">
              <Link
                to={'/programs'}
                className=" text-green-200 hover:text-indigo-500 text-base md:text-2xl font-black uppercase font-chalk"
              >
              <img
                alt="wild west icon"
                src={adventure2}
                className="w-52"
              />
                <p className="flex justify-center">Programs</p>
              </Link>
            </div>
          </div>
          {/* Row Two */}
          <div className="grid col-span-3 grid-cols-3 md:col-span-1">
            <div></div>
            <p className="flex flex-col items-center justify-center">
              <Link
                to={'/support'}
                className=" text-green-200 hover:text-indigo-500 text-base md:text-2xl font-black uppercase font-chalk"
              >
              <img
                alt="adventures icon"
                src={adventure3}
                className="w-52"
              />
                <p className="flex justify-center">Support</p>
              </Link>
            </p>
            {/* Empty Div*/}
            <div></div>
          </div>
          {/* Row Three */}
          <div className="grid col-span-3 grid-cols-3 md:col-span-1">
            <div className="flex flex-col items-center">
              <Link
                to={'/about'}
                className=" text-green-200 hover:text-indigo-500 text-base md:text-2xl font-black uppercase font-chalk"
              >
              <img
                alt="expedition icon"
                src={adventure1}
                className="w-52"
              />
                <p className="flex justify-center">About</p>
              </Link>
            </div>
            {/* Empty Div*/}
            <div></div>
            <div className="flex flex-col items-center">
              <Link
                to={'/contact'}
                className=" text-green-200 hover:text-indigo-500 text-base md:text-2xl font-black uppercase font-chalk"
              >
                <img
                  alt="sand dunes icon"
                  src={adventure5}
                  className="w-52"
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