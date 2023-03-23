import React from 'react';

import Header from '../components/header';
import Footer from '../components/footer';

const ChurchSponsors = () => {
  return (
    <div className="bg-gradient-to-b from-yellow-200 to-indigo-200">
      <Header />
      <div>
        <div className="max-w-6xl mx-2 md:mx-auto text-xs md:text-base h-screen">
          <img
            src="https://royal-ridges-retreat.s3.us-west-1.amazonaws.com/support_page/header+photos/ChurchSponsors.png"
            alt="church sponsors"
            className="rounded-2xl shadow-xl mt-2 w-2/3 m-auto"
          />
          <p className="text-center mt-4">
            We are proud to call the following churches "Friends of Royal
            Ridges." Without their generous support, this ministry would not be
            able to thrive!
          </p>
          <ul className="flex flex-col items-center">
            <li className="mt-4">
              <a
                href="https://www.bgbaptist.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-200 hover:underline hover:text-indigo-400"
              >
                Battle Ground Baptist Church
              </a>
            </li>

            <li className="mt-4">
              <a
                href="http://www.charteroakchurch.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-200 hover:underline hover:text-indigo-400"
              >
                Charter Oak Community Church
              </a>
            </li>

            <li className="mt-4">
              <a
                href="https://lacenterchurch.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-200 hover:underline hover:text-indigo-400"
              >
                La Center Church
              </a>
            </li>

            <li className="mt-4">
              <a
                href="http://lexingtonbible.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-200 hover:underline hover:text-indigo-400"
              >
                Lexington Bible Fellowship
              </a>
            </li>

            <li className="mt-4">
              <a
                href="http://northcrestchurch.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-200 hover:underline hover:text-indigo-400"
              >
                Northcrest Community Church
              </a>
            </li>

            <li className="mt-4">
              <a
                href="http://www.proebstelchurch.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-200 hover:underline hover:text-indigo-400"
              >
                Probestel Church EFC
              </a>
            </li>

            <li className="mt-4">
              <a
                href="http://anewchurch4you.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-200 hover:underline hover:text-indigo-400"
              >
                Anew! Church
              </a>
            </li>

            <li className="mt-4">
              <a
                href="https://vancouverchurch.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-200 hover:underline hover:text-indigo-400"
              >
                Vancouver Church
              </a>
            </li>
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ChurchSponsors;
