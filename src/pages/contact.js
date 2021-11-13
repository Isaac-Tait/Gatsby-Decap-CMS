import React from "react";

import Header from "../components/header";
import Footer from "../components/footer";

const Contact = () => {
    return (
        <div className="bg-gradient-to-r from-yellow-400 via-yellow-200 to-indigo-200">
        <Header />
        <div className="max-w-6xl mx-auto h-screen flex justify-center">
            <form name="contact" method="POST" data-netlify="true" className="my-4">
                <div className="my-4 flex flex-col">
                    <label aria-label="name">Name</label>
                    <input type="text" name="name" id="name"/>  
                </div>
                <div className="mb-4 flex flex-col">
                    <label aria-label="email">Email</label>
                    <input type="email" name="email" />
                </div>
                <div className="mb-4 flex flex-col">
                    <label aria-label="phone">Phone</label>
                    <input name="phone" />
                </div>
                <div className="mb-4 flex flex-col">
                    <label aria-label="message">Message</label>
                    <textarea name="message" />
                </div>

                <div className="bg-indigo-200 text-gray-700 hover:bg-yellow-200 hover:text-green-200 rounded-2xl w-1/3 mx-auto">
                    <button type="submit" className="flex mx-auto">Send</button>
                </div>
            </form>
        </div>   
            <Footer />  
        </div>
    );
}

export default Contact;