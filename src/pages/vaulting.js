import React from "react";

import Header from "../components/header";
import Footer from "../components/footer";

const Vaulting = () => {
    return (
        <div className="bg-gradient-to-r from-yellow-400 via-yellow-200 to-indigo-200">
            <Header />
              <div>
                <div className="max-w-6xl mx-2 md:mx-auto text-xs md:text-base h-screen">
                    <p>Content</p>
                </div>
              </div>
              
            <Footer />
        </div>
    )
}

export default Vaulting;