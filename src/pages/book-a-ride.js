import React from "react";
import { StaticImage  } from "gatsby-plugin-image"

import Header from "../components/header";
import Footer from "../components/footer";

const BookARide = () => {
    return (
      <div className="bg-gradient-to-r from-yellow-200 to-indigo-200">
        <Header />
          <div>
            <div className="max-w-6xl mx-2 md:mx-auto text-xs md:text-base h-screen">
                <div className='flex justify-center content-center pt-4'>
                  <StaticImage 
                    src='../images/bookARide.jpeg' 
                    alt="book a ride" 
                    placeholder="blurred"
                    objectFit="scale-down"
                    width={600}
                  />
                </div>
              <p className="mt-2">
              Royal Ridges offers trail rides for guests nine years and older ( Sorry, no age exceptions allowed).
              </p>
              <p className="mt-2">
              Arena rides are also available for ages six and up. Your group must choose to do an arena ride OR a trail ride as we cannot accommodate both simultaneously for this program.
              </p>
              <p className="text-center">Interested? Please contact <a href="mailto:programs@royalridges.org">programs@royalridges.org</a></p>
              <li>
                <ul className="mt-2">
                Please arrive 15 minutes before your scheduled time.
                </ul>
                <ul className="mt-2">
                The riding time is approximately 45 minutes; plan for your total Book-A-Ride experience to be 1 hour to 1-½ hours long. Your group may help with unsaddling and grooming at the wrangler's discretion.
                </ul>
                <ul className="mt-2">
                All riders must have their liability form filled out. Please be sure to complete this before you arrive as this can cause your time to be wasted. Use this link: <a href="https://waiver.smartwaiver.com/w/57d1b3426821c/web/" target="_blank" rel="noopener noreferrer">Liability Form</a>
                </ul>
                <ul className="mt-2">
                The weight limit is up to 250 lbs,  and no expectant mothers may ride for safety reasons. Please honor our weight limit requirement as our horses are older and primarily used for youth and children programs.
                </ul>
                <ul>
                If you need to cancel, it must be done by noon the day before your ride. We will return all but 50% of the total fee.
                </ul>
              </li>
              <p className="mt-2">
                If you have any questions or want more info please{' '}
                <a
                  href="email:programs@royalridges.org"
                  className="text-green-200 hover:underline hover:text-indigo-400"
                >
                  email
                </a>{' '}
                us
              </p>
              <p>You can register{' '}
              <a 
                href='https://www.ultracamp.com/info/upcomingSessions.aspx?idCamp=1145&campCode=151&lnkCategory=Book-A-Ride' 
                className='text-green-200 hover:text-indigo-400 hover:underline'
                target="_blank" rel="noopener noreferrer"
              >here</a>.</p>
            </div>
          </div>
        <Footer />
      </div>
    );
}

export default BookARide;