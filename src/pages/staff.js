import React from "react";

import Header from "../components/header";
import Footer from "../components/footer";

const Staff = () => {
    return (
        <div>
        <Header />
        <div className="max-w-6xl mx-2 md:mx-auto text-xs md:text-base h-screen">
          <p className="flex flex-wrap text-green-200 font-bold text-xl justify-center md:text-4xl">
            Meet our full time staff
          </p>
          <a
            href="email:joshua@royalridges.org"
            className="underline text-green-200"
          >
            Joshua
          </a>
          <p>Executive Director</p>
          <a
            href="email:chrisy@royalridges.org"
            className="underline text-green-200"
          >
            Chrisy
          </a>
          <p>Programs Director</p>
          <a
            href="email:registrations@royalridges.org"
            className="underline text-green-200"
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