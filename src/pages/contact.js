import React, { useState } from "react";

import Header from "../components/header";
import Footer from "../components/footer";

const Comments = () => {
    const [formState, setFormState] = useState({
        name: "",
        email: "", 
        website: "", 
        comment: ""
    });

    const handleChange = e => {
        setFormState({
            ...formState, 
            [e.target.name]: e.target.value
        })
    };

    return (
        <div>
            <Header />

            <div className="max-w-6xl flex mx-auto">
            <hr />
            <form 
                data-netlify-honeypot="bot-field"
                name="contact" 
                method="POST" 
                data-netlify="true" 
                action="/success"
                className="w-full"
            >
                <div className="my-4 flex flex-col">
                    <label htmlFor="name">Name</label>
                    <input
                        input type="hidden"
                        value="contact"
                        className="border-2 border-yellow-400 w-1/4" 
                        type="text" 
                        name="name" 
                        onChange={handleChange}  
                        value={formState.name} 
                    />
                </div>

                <div className="mb-4 flex flex-col">
                    <label htmlFor="email">Email</label>
                    <input
                        input type="hidden"
                        value="contact" 
                        className="border-2 border-yellow-400 w-1/4"
                        type="email" 
                        name="email" 
                        onChange={handleChange} 
                        value={formState.email} 
                    />
                </div>
                <div className="mb-4 flex flex-col">
                    <label htmlFor="phone">Phone</label>
                    <input
                        input type="hidden"
                        value="contact" 
                        className="border-2 border-yellow-400 w-1/4"
                        type="text" 
                        name="phone" 
                        onChange={handleChange} 
                        value={formState.phone} 
                    />
                </div>
                <div className="mb-4 flex flex-col">
                    <label htmlFor="message">Message</label>
                    <textarea
                            input type="hidden"
                            value="contact"
                            className="overflow-y-auto h-60 border-2 border-yellow-400"            
                            type="text" 
                            name="message" 
                            onChange={handleChange}  
                            value={formState.message} 
                        />
                </div>
                
                <button type="submit" className="bg-indigo-200 text-gray-700 hover:bg-yellow-200 hover:text-green-200 rounded-2xl w-1/4 flex mx-auto cursor-pointer">
                    <p className="underline flex mx-auto">Send</p>
                </button>
            </form>
        </div>
            <Footer />
        </div>
    )

}

export default Comments;