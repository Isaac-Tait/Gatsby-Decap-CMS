import React from "react";

import Header from "../components/header";

const GirlScouts = () => {
    return (
        <div>
        <Header />
        <div>

      <div className="max-w-6xl mx-2 md:mx-auto text-xs md:text-base">
        <p className="flex flex-wrap text-green-200 font-bold text-xl justify-center md:text-4xl">
          Girl Scouts Riding Badge
        </p>
        <p className="mt-2">
          Help your Girl Scout troop work toward earning their horse riding
          badge by registering for our Girl Scouts Riding Badge Class. Your
          troop will learn some of the basics of horses through learning some
          horse facts, horse safety, some basics of care, leading a horse, how
          to groom and saddle and they will get a ride in the arena.
        </p>
        <p className="mt-2">
          The class is 3 hours and will fulfill most of the Girl Scout Riding
          Badge requirements for ages 5 and up (patch is not included). The
          scouts will get at least 30 minutes of riding time with this class.
          Leaders or parents are welcome to ride with the scouts for an
          additional cost. *Please note, there is a weight limit of 240 lbs for
          any rider.
        </p>
        <p className="mt-2">
          Our camp store will be open after your class time if desired, so your
          troop can purchase horse camp t-shirts, the button of the horse they
          rode, horse camp studies, lanyards, or other souvenirs. If you would
          like to visit the camp store, prepare your troop to bring cash ahead
          of time. Items are $1-$15.
        </p>
        <p className="mt-2">
          The riding portion will be an arena ride only. If you would like to
          book a trail ride in addition to this class on the same date, there
          will be an additional fee per rider and an added hour to the class.
          Riders must be at least 9 years of age to ride on a trail ride.
        </p>
        <p className="mt-2 italic">
          Please stay tuned to our blog and social media channels for more
          information
        </p>
      </div>
    </div>
        </div>
    );
}

export default GirlScouts;