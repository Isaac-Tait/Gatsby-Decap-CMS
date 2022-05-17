import React from "react";

import Header from "../components/header";
import Footer from "../components/footer";

const GuestGroups = () => {
    return (
        <div className="bg-gradient-to-r from-yellow-200 to-indigo-200">
            <Header />
              <div>
                <div className="max-w-6xl mx-2 md:mx-auto text-xs md:text-base h-screen overflow-y-scroll">
                    <img src="https://royal-ridges-retreat.s3.us-west-1.amazonaws.com/programs-page/headerPhotos/guestGroups.png" alt="guest groups" className="w-full rounded-2xl shadow-xl mt-2" />
                    <h1 className='font-cursive text-lg md:text-3xl text-green-200 text-center'>Host your next Group Retreat with us!</h1>
                      <p className='mt-4'>Come to Royal Ridges for rest, relaxation, and a re-charge with Christ. We are a Christian retreat center operating on 390 acres in the scenic foothills of the Cascade Mountains. Located 20 minutes from Battle Ground, WA. for easy accessibility, but far enough for peace and quiet. Our retreat packages are perfect for small groups, including churches, schools, youth groups, Girl & Boy Scouts, women's and men's ministry groups, families, and more. Our facilities are ideal for a single-day event, overnight, weekend, or week-long getaways.</p>
                      <div className='flex flex-row justify-center'>
                        <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSc0qFkyzCbK4odMvyP2jq6AYP9g3x6HOjUhOcUY3lk2XT4QLA/viewform?embedded=true" width="640" height="1278" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
                      </div>
                </div>
              </div>
            <Footer />
        </div>
    )
}

export default GuestGroups;