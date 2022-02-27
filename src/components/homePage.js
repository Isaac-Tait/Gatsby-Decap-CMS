import React from "react"
import {Link} from "gatsby"
import { StaticImage  } from "gatsby-plugin-image"

import Blog from "./blogPostList"
import aboutIcon from "../images/AboutIcon.png"
import contactIcon from "../images/ContactIcon.png"
import summerIcon from "../images/SummerIcon.png"
import programIcon from "../images/ProgramIcon.png"
import supportIcon from "../images/SupportIcon.png"

const HomePage = () => {
    return (
        <div className="">
        {/* Sticky Header */}
          <div className="sticky top-0">
            <div className="flex flex-wrap justify-between mt-1">
              {/* Social Media */}
              <div className="ml-2 flex flex-wrap">
                  {/*Instagram*/}
                  <a href="https://www.instagram.com/royalridges/" target="_blank" rel="noopener noreferrer">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M12 7C9.23858 7 7 9.23858 7 12C7 14.7614 9.23858 17 12 17C14.7614 17 17 14.7614 17 12C17 9.23858 14.7614 7 12 7ZM9 12C9 13.6569 10.3431 15 12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12Z"
                        fill="currentColor"
                      />
                      <path
                        d="M18 5C17.4477 5 17 5.44772 17 6C17 6.55228 17.4477 7 18 7C18.5523 7 19 6.55228 19 6C19 5.44772 18.5523 5 18 5Z"
                        fill="currentColor"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M5 1C2.79086 1 1 2.79086 1 5V19C1 21.2091 2.79086 23 5 23H19C21.2091 23 23 21.2091 23 19V5C23 2.79086 21.2091 1 19 1H5ZM19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3Z"
                        fill="currentColor"
                      />
                    </svg>
                  </a>
                  {/*Facebook*/}
                  <a href="https://www.facebook.com/RoyalRidges" target="_blank" rel="noopener noreferrer" className="ml-4">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9.19795 21.5H13.198V13.4901H16.8021L17.198 9.50977H13.198V7.5C13.198 6.94772 13.6457 6.5 14.198 6.5H17.198V2.5H14.198C11.4365 2.5 9.19795 4.73858 9.19795 7.5V9.50977H7.19795L6.80206 13.4901H9.19795V21.5Z"
                        fill="currentColor"
                      />
                    </svg>
                  </a>
                </div>  
                {/* Search Icon */}
                <div className="mr-2">
                  <Link to={'/search'}>
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      
                      >
                      <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M18.319 14.4326C20.7628 11.2941 20.542 6.75347 17.6569 3.86829C14.5327 0.744098 9.46734 0.744098 6.34315 3.86829C3.21895 6.99249 3.21895 12.0578 6.34315 15.182C9.22833 18.0672 13.769 18.2879 16.9075 15.8442C16.921 15.8595 16.9351 15.8745 16.9497 15.8891L21.1924 20.1317C21.5829 20.5223 22.2161 20.5223 22.6066 20.1317C22.9971 19.7412 22.9971 19.1081 22.6066 18.7175L18.364 14.4749C18.3493 14.4603 18.3343 14.4462 18.319 14.4326ZM16.2426 5.28251C18.5858 7.62565 18.5858 11.4246 16.2426 13.7678C13.8995 16.1109 10.1005 16.1109 7.75736 13.7678C5.41421 11.4246 5.41421 7.62565 7.75736 5.28251C10.1005 2.93936 13.8995 2.93936 16.2426 5.28251Z"
                          fill="currentColor"
                      />
                      </svg>
                    </Link>
                  </div>               
              </div>
          </div>
        {/* First window */}
          <div className="heropattern-topography-yellow-400 mb-2 flex flex-col h-screen justify-between">
            <div className='flex justify-center content-center box-content h-full'>
              <StaticImage 
                src='../images/logo.png' 
                alt="Royal Ridges Logo" 
                placeholder="blurred"
                objectFit="scale-down"
                className="w-1/2"
                width={600}
              />
            </div>
            <div className="w-1/2 flex justify-center mx-auto mb-10">
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
        <div className="bg-fixed mb-2 h-screen bg-gradient-to-r from-indigo-400 via-red-300 to-yellow-200">
            <div className='flex justify-center content-center box-content h-full'>
              <StaticImage
                src='../images/D_C_G_Logo.png' 
                alt="Summer" 
                placeholder="blurred"
                objectFit="scale-down"
                className="w-1/2"
                width={1000}
              />
            </div>
        </div>
        {/* Third window */}
        <div className="bg-fixed rounded-lg shadow-lg h-screen heropattern-rain-gray-200 mb-2 overflow-scroll">
          <div className="grid place-items-center h-screen">
            <Blog />  {/* Blog post list */}
          </div>
          
        </div>
        
        {/* Fourth window */}
        <div className="h-screen grid grid-rows-3 grid-flow-col gap-4 bg-gradient-radial from-indigo-400 via--200 to-red-300">
          {/* Row One */}
          <div className="grid col-span-3 grid-cols-3 md:col-span-1">
            <div className="flex flex-col items-center justify-center mt-6">
              <Link
                to={'/summer-camp'}
              >
               <div className='flex justify-center content-center box-content h-full'>
                  <StaticImage 
                    src='../images/SummerIcon.png' 
                    alt="Summer" 
                    placeholder="blurred"
                    objectFit="scale-down"
                    className="w-1/2"
                    width={400}
                  />
                </div>
              </Link>
            </div>
            {/* Empty Div*/}
            <div></div>
            <div className="flex flex-col items-center justify-center">
              <Link
                to={'/programs'}
              >
              <div className='flex justify-center content-center box-content h-full'>
                  <StaticImage 
                    src='../images/ProgramIcon.png' 
                    alt="Programs" 
                    placeholder="blurred"
                    objectFit="scale-down"
                    className="w-1/2"
                    width={400}
                  />
                </div>
              </Link>
            </div>
          </div>
          {/* Row Two */}
          <div className="grid col-span-3 grid-cols-3 md:col-span-1">
            {/* Empty Div*/}
            <div></div>
            <div className="flex flex-col items-center justify-center">
              <Link
                to={'/about'}
              >
                <div className='flex justify-center content-center box-content h-full'>
                  <StaticImage 
                    src='../images/AboutIcon.png' 
                    alt="About" 
                    placeholder="blurred"
                    objectFit="scale-down"
                    className="w-1/2"
                    width={400}
                  />
                </div>
              </Link>
            </div>
            {/* Empty Div*/}
            <div></div>
          </div>
          {/* Row Three */}
          <div className="grid col-span-3 grid-cols-3 md:col-span-1">
            <div className="flex flex-col items-center">
            <Link
                to={'/support'}
              >
              <div className='flex justify-center content-center box-content h-full'>
                  <StaticImage 
                    src='../images/SupportIcon.png' 
                    alt="Support" 
                    placeholder="blurred"
                    objectFit="scale-down"
                    className="w-1/2"
                    width={400}
                  />
                </div>
              </Link>
            </div>
            {/* Empty Div*/}
            <div></div>
            <div className="flex flex-col items-center">
              <Link
                to={'/contact'}
              >
                <div className='flex justify-center content-center box-content h-full'>
                  <StaticImage 
                    src='../images/ContactIcon.png' 
                    alt="Contact" 
                    placeholder="blurred"
                    objectFit="scale-down"
                    className="w-1/2"
                    width={400}
                  />
                </div>
              </Link>
            </div>
          </div>
          
      </div>
  </div>
  )
}
export default HomePage;