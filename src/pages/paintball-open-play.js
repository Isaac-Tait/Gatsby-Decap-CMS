import React from "react";

import Header from "../components/header";
import Footer from "../components/footer";

const PaintBallOpenPlay = () => {
    return (
        <div className="bg-gradient-to-l from-pink-200 to-indigo-200">
            <Header />
                <div className="max-w-6xl mx-2 md:mx-auto text-xs md:text-base h-screen overflow-y-scroll">
                    <img src='https://royal-ridges-retreat.s3.us-west-1.amazonaws.com/programs-page/headerPhotos/PaintballOpenPlay.png' alt='Paintball Openplay' className='w-full rounded-2xl shadow-xl mt-2' />
                    <p>Royal Ridges loves to spread the love for paintball, and a unique way we get to drive the sport forward is to host open play days. This allows individuals or small groups of friends to come together with other like-minded people and spend the day playing some fun paintball games and scenarios here at our course. Pre-registration for the event so we know how many players will be playing. So come out and join us in a great outdoor sport to build camaraderie and stay fit and healthy. Fill out the open play pre-registration below.</p>
                    <p className="flex flex-wrap text-green-200 font-cursive text-xl justify-center md:text-4xl">Upcoming Open Play Dates:</p>
                    <div className="text-center font-semibold text-2xl">
                        <p>February 12</p>
                        <p>March 12</p>
                        <p>April 9</p>
                        <p>May 14</p>
                        <p>June 11</p>
                    </div>
                    <div className="flex justify-center">
                        <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfCw-BqFwa8093uAoO5bJW8buPESm8kebtnc1SDrJDO_A1tnQ/viewform?embedded=true" width="640" height="1642" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
                    </div>
                </div>
            <Footer />
        </div>
    )
}

export default PaintBallOpenPlay;