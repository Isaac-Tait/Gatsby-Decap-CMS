import React from "react";

import Header from "../components/header";
import Footer from "../components/footer";

const Newsletter = () => {
    return (
        <div className="bg-gradient-to-r from-yellow-400 via-yellow-200 to-indigo-200">
            <Header />
                <div className="max-w-6xl mx-2 md:mx-auto text-xs md:text-base h-screen">
                    <p className="flex flex-wrap text-green-200 font-cursive text-xl justify-center md:text-4xl">
                    Newsletter
                    </p>
                    <p>NO SPAM - we promise</p>
                    

                </div>
            <Footer />
        </div>
    );
}

export default Newsletter;