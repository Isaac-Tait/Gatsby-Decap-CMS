import React from "react";

import Header from "../components/header";
import Footer from "../components/footer";

const Vaulting = () => {
    return (
        <div className="bg-gradient-to-r from-yellow-200 to-indigo-200">
            <Header />
                <div className="max-w-6xl mx-2 md:mx-auto text-xs md:text-base h-screen overflow-y-scroll">
                    <img src='https://royal-ridges-retreat.s3.us-west-1.amazonaws.com/programs-page/headerPhotos/vaultingLessons.png' alt='vaulting class' className='w-full rounded-2xl shadow-xl mt-2' />
                    <p>Royal Ridges is thrilled to provide a brand new vaulting program! Vaulting is essentially a gymnastic routine performed on horseback while the horse is moving. The horse is controlled by a staff member and the vaulter will learn the moves with the supervision and support of the instructor. Vaulting is a wonderful activity for the brave horse-loving kiddo as well as the more cautious first-time horse lover.</p>
                </div>
            <Footer />
        </div>
    )
}

export default Vaulting;