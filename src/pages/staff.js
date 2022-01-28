import React from "react";

import Header from "../components/header";
import Footer from "../components/footer";

const Staff = () => {
    return (
        <div className="bg-gradient-to-r from-yellow-400 via-yellow-200 to-indigo-200">
          <Header />
            <div className="max-w-6xl mx-2 md:mx-auto text-xs md:text-base h-screen">
              <p className="flex flex-wrap text-green-200 font-cursive text-xl justify-center md:text-4xl">
                Meet our full time staff
              </p>
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