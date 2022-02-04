import React from "react";

import Header from "../components/header";
import Footer from "../components/footer";

const ChurchSponsors = () => {
    return (
        <div className="bg-gradient-to-b from-yellow-200 to-indigo-200">
          <Header />
          <div>
            <div className="max-w-6xl mx-2 md:mx-auto text-xs md:text-base h-screen">
            <img src='https://royal-ridges-retreat.s3.us-west-1.amazonaws.com/support_page/header+photos/ChurchSponsors.png' alt='church sponsors' className='rounded-2xl shadow-xl mt-2 w-full'/>
              <p className="text-center">
                We are proud to call the following churches "Friends of Royal Ridges"
                With out whom we would not be able to keep this ministry thriving!
              </p>
              <div className="grid grid-cols-3">
                <div className="mt-4 flex flex-col items-center">
                  <img
                    alt="bgbc"
                    src="https://royal-ridges-retreat.s3.us-west-1.amazonaws.com/church-sponsors/BGBC.png"
                    className="w-28 rounded-2xl"
                  />
                  <a
                    href="https://www.bgbaptist.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-200 hover:underline hover:text-indigo-400"
                  >
                    Battle Ground Baptist Church
                  </a>
                  <p className="hidden md:block">bgbc@wa-net.com 360-687-7124</p>
                </div>

                <div className="mt-4 flex flex-col items-center">
                  <img
                    alt="charter oak lodge"
                    src="https://royal-ridges-retreat.s3.us-west-1.amazonaws.com/church-sponsors/charter_oak_logo_1.png"
                    className="w-28 rounded-2xl"
                  />
                  <a
                    href="http://www.charteroakchurch.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-200 hover:underline hover:text-indigo-400"
                  >
                    Charter Oak Community Church
                  </a>
                  <p className="hidden md:block">
                    office@charteroakchurch.com 360-687-3347
                  </p>
                </div>

                <div className="mt-4 flex flex-col items-center">
                  <img
                    alt="La Center Church"
                    src="https://royal-ridges-retreat.s3.us-west-1.amazonaws.com/church-sponsors/La_Center_Church_Logo_Big_1.png"
                    className="h-28 rounded-2xl"
                  />
                  <a
                    href="https://lacenterchurch.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-200 hover:underline hover:text-indigo-400"
                  >
                    La Center Church
                  </a>
                  <p className="hidden md:block">360-263-2217</p>
                </div>
              </div>

              <div className="grid grid-cols-3">
                <div className="mt-4 flex flex-col items-center">
                  <img
                    alt="Lexington Bible Church"
                    src="https://royal-ridges-retreat.s3.us-west-1.amazonaws.com/church-sponsors/lexington_bible_logo.jpeg"
                    className="w-28 rounded-2xl"
                  />
                  <a
                    href="http://lexingtonbible.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-200 hover:underline hover:text-indigo-400"
                  >
                    Lexington Bible Fellowship
                  </a>
                  <p className="hidden md:block">
                    Lexingtonbible@hotmail.com 360-577-0702
                  </p>
                </div>

                <div className="mt-4 flex flex-col items-center">
                  <img
                    alt="Northwest Church"
                    src="https://royal-ridges-retreat.s3.us-west-1.amazonaws.com/church-sponsors/northwest_church_logo.png"
                    className="w-28 rounded-2xl"
                  />
                  <a
                    href="http://northcrestchurch.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-200 hover:underline hover:text-indigo-400"
                  >
                    Northcrest Community Church
                  </a>
                  <p className="hidden md:block">
                    northcrest@northcrestchurch.com 360-696-2551
                  </p>
                </div>
                <div className="mt-4 flex flex-col items-center">
                  <img
                    alt="Proebstel Church"
                    src="https://royal-ridges-retreat.s3.us-west-1.amazonaws.com/church-sponsors/Proebstel_Church.jpeg"
                    className="w-28 rounded-2xl"
                  />
                  <a
                    href="http://www.proebstelchurch.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-200 hover:underline hover:text-indigo-400"
                  >
                    The Church At Proebstel
                  </a>
                  <p className="hidden md:block">
                    proebstelchurch@gmail.com 360-892-3216
                  </p>
                </div>
              </div>
            </div>
          </div>
        <Footer />
      </div>
    );
}

export default ChurchSponsors;