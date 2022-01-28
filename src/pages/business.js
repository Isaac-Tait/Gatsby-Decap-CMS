import React from "react";

import Header from "../components/header";
import Footer from "../components/footer";

const Business = () => {
    return (
      <div className="bg-gradient-to-r from-yellow-400 via-yellow-200 to-indigo-200">
        <Header />
          <div>
            <div className="max-w-6xl mx-2 md:mx-auto text-xs md:text-base h-screen">
              <p className="flex flex-wrap text-green-200 font-cursive text-xl justify-center md:text-4xl">
                Business Sponsors
              </p>
              <p className="italic">
                We are proud to call the following businesses &quot;Friends of Royal
                Ridges&quot;. If you are in need of any services they provide, we
                encourage you to consider purchasing from the following:
              </p>
              <div className="grid grid-cols-3">
                {/*Blackbird Accounting*/}
                <div className="mt-4 flex flex-col items-center">
                  <img
                    alt="Black Bird Accounting"
                    src="https://royal-ridges-retreat.s3.us-west-1.amazonaws.com/business-sponsors/Blackbird_Accounting.jpeg"
                    className="w-20 h-16 rounded-2xl"
                  />
                  <a
                    href="https://blackbirdcpas.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-200 hover:underline hover:text-indigo-400 mx-4"
                  >
                    Blackbird Accounting
                  </a>
                  <p className="mx-6 hidden md:block">
                    Vancouver, Washington 360-904-4021
                  </p>
                </div>
                {/*Farrier*/}
                <div className="flex flex-col items-center">
                  <img
                    alt="Farrier"
                    src="https://royal-ridges-retreat.s3.us-west-1.amazonaws.com/business-sponsors/farrier2.jpeg"
                    className="h-20 w-16 rounded-2xl"
                  />
                  <a
                    href="http://www.manta.com/c/mtgpc17/jc-farrier-service"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-200 hover:underline hover:text-indigo-400 mx-4"
                  >
                    JC Farrier Service
                  </a>
                  <p className="mx-6 hidden md:block">360-687-4698</p>
                </div>
                {/*NAPA*/}
                <div className="flex flex-col items-center">
                  <img
                    alt="NAPA"
                    src="https://royal-ridges-retreat.s3.us-west-1.amazonaws.com/business-sponsors/nAPA.png"
                    className="h-16 w-20 rounded-2xl"
                  />
                  <a
                    href="http://www.napaonline.com/wa/battle-ground/clark-c"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-200 hover:underline hover:text-indigo-400 mx-4"
                  >
                    Clark County Auto & Truck Supply Inc
                  </a>
                  <p className="mx-6 hidden md:block">
                    18 NW 18th Avenue Battle Ground, WA 98604 360-687-3111
                  </p>
                </div>
              </div>
              {/*Row Two*/}
              <div className="grid grid-cols-3">
                <div className="mt-1 md:mt-12 flex flex-col items-center">
                  <img
                    alt="NW Ambush"
                    src="https://royal-ridges-retreat.s3.us-west-1.amazonaws.com/business-sponsors/NWAmbush1.jpeg"
                    className="w-20 h-16 rounded-2xl"
                  />
                  <a
                    href="http://nwambush.com/"
                    target="_blank"
                    rel="noopener norferrer noreferrer"
                    className="text-green-200 hover:underline hover:text-indigo-400 mx-4"
                  >
                    NW Ambush, Extreme Sports
                  </a>
                  <p className="mx-6 hidden md:block">
                    711 E Main Street, Suite #103 Battle Ground, WA 98604 360-666-0029
                  </p>
                </div>

                {/*Empty Div*/}
                <div></div>

                <div className="mt-1 md:mt-12 flex flex-col items-center">
                  <img
                    alt="Amazia"
                    src="https://royal-ridges-retreat.s3.us-west-1.amazonaws.com/business-sponsors/tn_Amazia_Logo.jpeg"
                    className="w-20 h-16 rounded-2xl"
                  />
                  <a
                    href="http://amaziavet.com/"
                    target="_blank"
                    rel="noopener norferrer noreferrer"
                    className="text-green-200 hover:underline hover:text-indigo-400 mx-4"
                  >
                    AMAZIA, Veterinary Services
                  </a>
                  <p className="mx-6 hidden md:block">
                    &quot;Dr. Scot&quot; Lubbers 12303 NE 152nd Street Brush Prairie,
                    WA 98606 360-892-7524
                  </p>
                </div>
              </div>
            </div>
          </div>
        <Footer />
      </div>
    );
}

export default Business;