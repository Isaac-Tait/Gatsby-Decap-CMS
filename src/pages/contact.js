import React from "react";

import Header from "../components/header";
import Footer from "../components/footer";

const Comments = () => {
    return (
    <div className="bg-gradient-to-t from-yellow-400 via-yellow-200 to-indigo-200">
        <Header />
            <div className="max-w-6xl flex mx-auto h-screen">
            <hr />
                <form 
                    data-netlify-honeypot="bot-field"
                    name="contact" 
                    method="POST" 
                    data-netlify="true" 
                    action="/success"
                    className="w-full"
                >
                <input type="hidden" name="form-name" value="contact" />
                    <div className="my-4 flex flex-col">
                        <label htmlFor="name">Name</label>
                        <input
                                className="border-2 border-green-200 caret-yellow-400 w-1/4" 
                                type="text" 
                                name="name" 
                            />
                    </div>
                    <div className="mb-4 flex flex-col">
                        <label htmlFor="email">Email</label>
                        <input 
                            className="border-2 border-green-200 caret-yellow-400 w-1/4"
                            type="email" 
                            name="email" 
                        />
                    </div>
                    <div className="mb-4 flex flex-col">
                        <label htmlFor="phone">Phone</label>
                        <input
                            className="border-2 border-green-200 caret-yellow-400 w-1/4"
                            type="text" 
                            name="phone" 
                        />
                    </div>
                    <div className="mb-4 flex flex-col">
                        <label htmlFor="message">Message</label>
                        <textarea
                            className="overflow-y-auto h-60 border-2 border-green-200 caret-yellow-400"            
                            type="text" 
                            name="message" 
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