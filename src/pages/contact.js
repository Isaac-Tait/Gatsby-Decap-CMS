import React from "react";

import Header from "../components/header";
import ContactForm from "../components/contactForm"
import Footer from "../components/footer";

const Contact = () => {
    return (
        <div className="bg-gradient-to-r from-yellow-400 via-yellow-200 to-indigo-200">
        <Header />
        <div className="max-w-6xl mx-auto h-screen flex justify-center">
            <ContactForm />
        </div>   
            <Footer />  
        </div>
    );
}

export default Contact;