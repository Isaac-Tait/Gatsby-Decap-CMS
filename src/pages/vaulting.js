import React from "react";

import Header from "../components/header";
import Footer from "../components/footer";

const Vaulting = () => {
    return (
        <div className="bg-gradient-to-r from-yellow-200 to-indigo-200">
            <Header />
                <div className="max-w-6xl mx-2 md:mx-auto text-xs md:text-base h-screen overflow-y-scroll">
                    <img src='https://royal-ridges-retreat.s3.us-west-1.amazonaws.com/programs-page/headerPhotos/vaultingLessons.png' alt='vaulting class' className='w-full rounded-2xl shadow-xl mt-2' />
                    <p className="py-10">Royal Ridges is thrilled to provide a brand new vaulting program! Vaulting is essentially a gymnastic routine performed on horseback while the horse is moving. The horse is controlled by a staff member and the vaulter will learn the moves with the supervision and support of the instructor. Vaulting is a wonderful activity for the brave horse-loving kiddo as well as the more cautious first-time horse lover.</p>
                    <div className='pb-10 text-center text-4xl'>
                        <a 
                            href='https://www.ultracamp.com/info/upcomingSessions.aspx?idCamp=1145&campCode=151&lnkCategory=Horsemanship+Lessons+Vaulting' 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="hover:underline hover:text-indigo-400 text-green-200 font-cursive"
                        >Sign Up Here</a>
                    </div>
                    <hr />
                    <p className="py-10 text-center">Royal Ridges is thrilled to provide a fun mini camp event coming up April 29th from 4:30 PM - 7:30 PM Click on the link below for more information. </p>
                    <div className='pb-20 text-center text-4xl'>
                        <a 
                            href='https://www.ultracamp.com/info/upcomingSessions.aspx?idCamp=1145&campCode=151&lnkCategory=Horsemanship+Lessons+Vaulting' 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="hover:underline hover:text-indigo-400 text-green-200 font-cursive"
                        >Mini Vaulting Camp</a>
                    </div>
                </div>
            <Footer />
        </div>
    )
}

export default Vaulting;