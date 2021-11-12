import React from "react";

import Header from "../components/header";

const WishList = () => {
    return (
        <div>
        <Header />
        <div>
      <div className="max-w-6xl mx-2 md:mx-auto text-xs md:text-base">
        <p className="flex flex-wrap text-green-200 font-bold text-xl justify-center md:text-4xl">
          Our wishlist (every day is Christmas in our hearts...)
        </p>
        <p>
          We are blessed to enjoy the support of our community. Please keep us
          in mind when you&apos;re looking to donate new or used items. We are
          grateful for your donations as they make a big difference to our
          ministry. Below is a list of ideas for items we are needing. Any items
          for the horse areas, please click here. If you have something in mind
          that is not on our list, please do not hesitate to contact the office.
        </p>

        <p>
          Grounds/Maintenance: Water hoses Hand rakes/shovels Light Duty Truck
          4x4 Side by Side Gravel Volunteers
        </p>

        <p>
          Summer Camp: Any kind of craft supply Sharpie markers Color crayons
          Markers Yarn Paint Paint brushes Face paint Office: Vacuum
        </p>
      </div>
    </div>
        </div>
    );
}

export default WishList;