import React from "react";

import Header from "../components/header";
import Footer from "../components/footer";

const Comments = () => {
    return (
    <div className="bg-gradient-to-l from-yellow-400 to-yellow-200">
        <Header />
            <div className="max-w-6xl flex flex-col mx-auto h-screen overflow-y-scroll mb-4">
                <img src="https://royal-ridges-retreat.s3.us-west-1.amazonaws.com/programs-page/headerPhotos/Contact+1.0+(1).png" alt="girlScouts" className="w-full rounded-2xl shadow-xl mt-2" />
                
                <div class="py-4">
                    <div class="w-full border-t border-gray-800"></div>
                </div>
                
                <p className='mt-4'>General questions email:</p><a href='mailto:info@royalridges.org' className='text-green-200 hover:underline'>info@royalridges.org</a>
                <p>Program questions email:</p><a href='mailto:programs@royalridges.org' className='text-green-200 hover:underline'>programs@royalridges.org</a>
                <p>Registration questions email:</p><a href='mailto:registrations@royalridges.org' className='text-green-200 hover:underline'>registrations@royalridges.org</a>
                <p>Office Phone: 360-686-3737</p>
                <p>Physical Address: 20115 NE 354th St Yacolt, WA 98675</p>
                <p>Mailing Address: P.O. Box 3010 Battle Ground, WA 98604</p>
                <p className='mt-4'>Or you can use the form below...</p>
                <form 
                    netlify-honeypot="bot-field"
                    name="contact" 
                    method="POST" 
                    data-netlify="true" 
                    action="/success"
                    className="w-full"
                >
                    <input type="hidden" name="form-name" value="contact" />
                    <div className="my-4 flex flex-col">
                        <p class="hidden">
                            <label>
                                Don&39s;t fill this out if you&39s;re human: <input name="bot-field" />
                            </label>
                        </p>
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