import React from "react";
import Header from "../components/header";

const Facilities = () => {
    return (
        <div>
        <Header />
            <div>
                <div className="max-w-6xl mx-2 md:mx-auto text-xs md:text-base">
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
        </div>
    );
}

export default Facilities;