import React from "react";

import Header from "../components/header";
import Contact from "../components/contact-form"
import Footer from "../components/footer";

const Contact = () => {
    return (
        <div className="bg-gradient-to-r from-yellow-400 via-yellow-200 to-indigo-200">
        <Header />
        <div className="max-w-6xl mx-auto h-screen flex justify-center">
            <Contact />
        </div>   
            <Footer />  
        </div>
    );
}

export default Contact;