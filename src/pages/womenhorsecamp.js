import React from "react";

import Header from "../components/header";
import Footer from "../components/footer";

const WomenHorseCamp = () => {
    return (
        <div className="bg-gradient-to-r from-yellow-400 via-yellow-200 to-indigo-200">
          <Header />
            <div>
            <div className="max-w-6xl mx-2 md:mx-auto text-xs md:text-base h-screen">
              <p className="flex flex-wrap text-green-200 font-bold text-xl justify-center md:text-4xl">
                Women&#39;s Horse Camp
              </p>
              <p>
                Please join us for a memorable day designed for women and horses. Some
                of the activities planned are Craft Time, Big Swing, Fellowship Time
                and, of course, HORSES! A delicious lunch is included.
              </p>
              <p className="underline mt-4">
                Please remember to wear long pants, closed-toe shoes, and dress
                weather appropriately.
              </p>
              <p className="mt-2 italic">
                Stay tuned to our blog for upcoming opportunities to partake in a
                Women's Horse Camp
              </p>
            </div>
            </div>
          <Footer />
        </div>
    );
}

export default WomenHorseCamp;