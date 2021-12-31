import React from "react";

import Header from "../components/header";
import Footer from "../components/footer";

const SummerStaffApp = () => {
    return (
        <div className="bg-gradient-to-r from-yellow-400 via-yellow-200 to-indigo-200">
            <Header />
                <div className="h-screen">
                    <p>content</p>
                </div>
            <Footer />
        </div>
    );
}

export default SummerStaffApp;