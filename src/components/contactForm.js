import React, { useState } from "react";

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
        <div className="w-full">
            <hr />
            <form 
                name="contact" 
                method="POST" 
                data-netlify="true" 
                action="/success"
            >
                <div className="my-4 flex flex-col">
                    <label htmlFor="name">Name</label>
                    <input
                        className="ml-2 mt-2 pl-2 w-1/4" 
                        type="text" 
                        name="name" 
                        onChange={handleChange}  
                        value={formState.name} 
                    />
                </div>

                <div className="mb-4 flex flex-col">
                    <label htmlFor="email">Email</label>
                    <input 
                        className="ml-2 mt-2 pl-2 w-1/4"
                        type="email" 
                        name="email" 
                        onChange={handleChange} 
                        value={formState.email} 
                    />
                </div>
                <div className="mb-4 flex flex-col">
                    <label htmlFor="phone">Phone</label>
                    <input 
                        className="ml-2 mt-2 pl-2 w-1/4"
                        type="text" 
                        name="phone" 
                        onChange={handleChange} 
                        value={formState.phone} 
                    />
                </div>
                <div className="mb-4 flex flex-col">
                    <label htmlFor="message">Message</label>
                    <input
                            className="overflow-y-auto ml-2 mt-2 p-2"            
                            type="text" 
                            name="message" 
                            onChange={handleChange}  
                            value={formState.message} 
                        />
                </div>
                
                <button type="submit" className="bg-indigo-200 text-gray-700 hover:bg-yellow-200 hover:text-green-200 rounded-2xl w-1/4">Send</button>
            </form>
        </div>
    )

}

export default Comments;