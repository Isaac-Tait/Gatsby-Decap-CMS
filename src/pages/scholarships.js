import React from "react"

import Header from "../components/header"
import Footer from "../components/footer"

const Scholarship = () => {
    return (
        <div>
            <Header />
            <div className="max-w-4xl mx-auto h-screen">
                <h1 className="text-green-200 font-bold text-base md:text-4xl flex justify-center mx-auto">Scholarships</h1>
                <p className="mt-2 italic">Royal Ridges offers scholarships to anyone who is in need of greater support for their camper to attend anyone of our camps. We know the power and importance that camp can have and we want to extend the opportunity to anyone who asks.</p>
                <p className="mt-2 italic">Royal Ridges does grant partial and full scholarships. However, we have limited funds. So please make a request of what you truly need and we will do our best to provide that amount in scholarships. Not all scholarships requests will be approved. Fill out the form below to submit for a scholarship.</p>         
                <p className="mt-2 italic">If you have any questions or the form is not working please email: Info@royalridges.org</p>
            </div>
            <Footer />
        </div>
    )
}

export default Scholarship;