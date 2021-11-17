import React from "react";

import Header from "../components/header";
import Footer from "../components/footer";

const Success = () => {
    return (
        <div className="h-screen bg-yellow-200">
            <Header />
                <div className="underline">
                    <p>Your message was successfully delivered. Someone will be in touch with you shortly.</p>
                </div>
            <Footer />
        </div>
    )
}

export default Success;