import React from "react";

import Header from "../components/header";

const BookARide = () => {
    return (
        <div>
        <Header />
        <div>

      <div className="max-w-6xl mx-2 md:mx-auto text-xs md:text-base">
        <p className="flex flex-wrap text-green-200 font-bold text-xl justify-center md:text-4xl">
          Book-A-Ride
        </p>
        <p className="mt-2">
          We offer trail rides, for guests 9 years and older (no age exceptions
          allowed).
        </p>
        <p className="mt-2">
          Arena rides are also available for ages 6 and up. Your group must
          choose to do an arena ride OR a trail ride, we cannot accommodate both
          simultaneously for this program.
        </p>
        <p className="mt-2">
          Please arrive at your scheduled ride time and expect to be riding
          about 45 minutes and be there a total of an hour to an hour and a
          half. Your group may help with unsaddling and grooming at the
          discretion of the wrangler.
        </p>
        <p className="mt-2">
          The minimum package is $225 for up to 5 people. The fee for additional
          riders in the group is $45/each. Each trail ride can have up to 8-10
          riders and arena ride can have up to 6 riders. Please let us know if
          riders will be under 9 years old when booking.
        </p>
        <p className="mt-2">
          If you need to cancel, it must be done by noon the day prior to your
          ride with only a 50% refund of the total fee.
        </p>
        <p className="mt-2">
          Weight limit is up to 250 lbs and no expectant mothers are to ride for
          safety reasons. Please honor our weight limit requirement as our
          horses are often older and mostly used for youth and child programs.
        </p>
        <p className="mt-2">
          If you have any questions or want more info please{' '}
          <a
            href="email:programs@royalridges.org"
            className="text-green-200 underline"
          >
            email
          </a>{' '}
          us
        </p>
      </div>
    </div>
        </div>
    );
}

export default BookARide;