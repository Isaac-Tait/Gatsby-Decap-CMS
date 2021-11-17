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
        <div>
            <hr />
            <form 
                name="contact" 
                method="POST" 
                data-netlify="true" 
                className="my-4" 
                action="/success"
            >
                <div className="my-4 flex flex-col">
                    <label htmlFor="name">Name</label>
                    <input
                        class="ml-2 mt-2 pl-2 border-dashed border-2 border-red-500" 
                        type="text" 
                        name="name" 
                        onChange={handleChange}  
                        value={formState.name} 
                    />
                </div>

                <div className="mb-4 flex flex-col">
                    <label htmlFor="email">Email</label>
                    <input 
                        class="ml-2 mt-2 pl-2 border-dashed border-2 border-red-500"
                        type="email" 
                        name="email" 
                        onChange={handleChange} 
                        value={formState.email} 
                    />
                </div>
                <div className="mb-4 flex flex-col">
                    <label htmlFor="phone">Phone</label>
                    <input 
                        class="ml-2 mt-2 pl-2 border-dashed border-2 border-red-500"
                        type="text" 
                        name="phone" 
                        onChange={handleChange} 
                        value={formState.website} 
                    />
                </div>
                <div className="mb-4 flex flex-col">
                    <label htmlFor="message">Message</label>
                    <input
                            class="overflow-y-auto ml-2 mt-2 box-border h-2/3 w-3/4 p-2 border-dashed border-2 border-red-500"            
                            type="text" 
                            name="message" 
                            onChange={handleChange}  
                            value={formState.comment} 
                        />
                </div>

                <div className="bg-indigo-200 text-gray-700 hover:bg-yellow-200 hover:text-green-200 rounded-2xl w-1/3 mx-auto">
                    <button type="submit" className="flex mx-auto">Send</button>
                </div>
            </form>
        </div>
    )

}

export default Comments;