import React from "react";

import Header from "../components/header";
import Footer from "../components/footer";

const Facilities = () => {
    return (
    <div className="bg-gradient-to-r from-yellow-400 via-yellow-200 to-indigo-200">
        <Header />
            <div>
                <div className="max-w-6xl mx-2 md:mx-auto text-xs md:text-base h-screen">
                    <p className="flex flex-wrap text-green-200 font-bold text-xl justify-center md:text-4xl">
                    Our Facilities
                    </p>
                    <p className="italic">
                    All our buildings are designed to blend with nature, and provide a
                    clean, warm, and dry environment for our guests. There are six cabins
                    that have indoor bathroom facilities and electric heating.
                    </p>
                </div>
            </div>
        <Footer />
    </div>
    );
}

export default Facilities;