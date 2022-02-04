import React from "react";

import Header from "../components/header";
import Footer from "../components/footer";

const Application = () => {
    return (
        <div className="">
            <Header />
              <div>
                <div className="max-w-6xl mx-2 md:mx-auto text-xs md:text-base h-screen overflow-y-scroll">
                    <div className='flex justify-center'>
                        <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdYF3yclj7izWczyREUIMRtf2oRPQGCcp6_lm6kQUJpUCTHJA/viewform?embedded=true" width="640" height="10479" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
                    </div>
                </div>
              </div>
              
            <Footer />
        </div>
    )
}

export default Application;