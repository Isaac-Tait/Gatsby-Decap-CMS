import React from "react";

import Header from "../components/header";
import Footer from "../components/footer";

const Success = () => {
    return (
        <div className="">
            <Header />
            <div className="bg-yellow-200 h-screen">
                <div className="grid place-content-center">
                    <p className="mt-4 text-2xl text-gray-600">Your message was successfully delivered. Someone will be in touch with you shortly.</p>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Success;