import React from "react";

import Header from "../components/header";
import Footer from "../components/footer";

const Staff = () => {
    return (
        <div className="bg-gradient-to-t from-yellow-200 to-indigo-200">
          <Header />
            <div className="max-w-6xl mx-2 md:mx-auto text-xs md:text-base h-screen">
            <img src='https://royal-ridges-retreat.s3.us-west-1.amazonaws.com/about_page/Our+Staff.png' alt='staff' className='rounded-2xl shadow-xl mt-2 w-full'/>
              <a
                href="email:joshua@royalridges.org"
                className="hover:underline text-green-200 hover:text-indigo-400"
              >
                Joshua
              </a>
              <p>Executive Director</p>
              <a
                href="email:chrisy@royalridges.org"
                className="hover:underline text-green-200 hover:text-indigo-400"
              >
                Chrisy
              </a>
              <p>Programs Director</p>
              <a
                href="email:registrations@royalridges.org"
                className="hover:underline text-green-200 hover:text-indigo-400"
              >
                Julie
              </a>
              <p>Office Manager & Registrations</p>
            </div>
          <Footer />
      </div>
    );
}

export default Staff;