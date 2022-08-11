import React from "react";

import Header from "../components/header";
import Footer from "../components/footer";

const GirlScouts = () => {
    return (
      <div className="bg-gradient-to-r from-yellow-200 to-indigo-200">
        <Header />
          <div>
            <div className="max-w-6xl mx-2 md:mx-auto text-xs md:text-base h-screen overflow-y-scroll">
              <img src="https://royal-ridges-retreat.s3.us-west-1.amazonaws.com/programs-page/headerPhotos/girlScouts.png" alt="girlScouts" className="w-full rounded-2xl shadow-xl mt-2" />
              <p className="mt-2">
              Help your Girl Scout troop work toward earning their horse riding badge by registering for our Girl Scouts Riding Badge Class. Your troop will learn some of the basics of horses through horse facts, horse safety, some basics of care, leading a horse, how to groom and saddle, and they will get a ride in the arena.
              </p>
              <p className="mt-2">
              The class is 3 hours and will fulfill most of the Girl Scout Riding Badge requirements for ages <span className="font-semibold">five</span> and up (patch not included). The scouts will get 30 minutes of riding time with this class. Leaders and parents are welcome to ride with them. *Please note that riding has a weight limit of 250 lbs.*
              </p>
              <p className="mt-2">
              The riding portion will be an arena ride only. If you would like to book a trail ride in addition to this class on the same date, there will be an additional fee per rider and an added hour to the class. Riders must be at least <span className="font-semibold">nine</span> years of age to ride on a trail ride.
              </p>
              <p className="mt-2">
              Minimum Group size for Badge Class or Trail Ride = 7.
              </p>
              <p className="mt-2">
                Interested? Please contact <a 
                  href="emailto:programs@royalridges.org"
                  className="hover:underline hover:text-indigo-400 text-green-200"
                >programs@royalridges.org</a>.
              </p>
              <div className="p-5">
                <p className="font-semibold text-lg">Girl Scout Note:</p>
                <ul className="prose list-disc">
                  <li>All riders must have their liability form filled out before class. Use this link to fill out the form:&nbsp;<a
                    href="https://waiver.smartwaiver.com/w/57d1b3426821c/web/fd/web/"
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:underline hover:text-indigo-400 text-green-200"
                    >Liability Form</a></li>
                  <li>Please arrive 15 minutes before your scheduled time.</li>
                  <li>Long pants and sturdy closed-toe shoes are required. (No crocs)</li>
                  <li>Please remember to bring a lunch and a refillable water bottle.</li>
                  <li>Royal Ridges provides riding helmets. If you bring your own, it must be an ASTM-certified helmet.</li>
                  <li>It is frequently cooler here at camp. Please be sure to wear weather-appropriate clothing.</li>
                  <li>Our camp store will be open after your class time if desired, so your troop can purchase horse camp t-shirts, the button of the horse they rode, horse camp studies, lanyards, or other souvenirs. If you would like to visit the camp store, prepare your troop to bring cash ahead of time. Items are $1-$15.</li>
                </ul>
              </div>
            </div>
          </div>
        <Footer />
      </div>
    );
}

export default GirlScouts;