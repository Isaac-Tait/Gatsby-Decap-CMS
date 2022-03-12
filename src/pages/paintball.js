import React from "react";
import {Link} from 'gatsby';

import Header from "../components/header";
import Footer from "../components/footer";

const Paintball = () => {
    return (
        <div className="bg-gradient-to-r from-yellow-200 to-indigo-200">
          <Header />
            <div className="max-w-6xl mx-2 md:mx-auto text-xs md:text-base h-screen overflow-y-scroll">
              <img src='https://royal-ridges-retreat.s3.us-west-1.amazonaws.com/programs-page/headerPhotos/paintball.png' alt='paintball' className='rounded-2xl shadow-xl mt-2 w-full'/>
              <p className="flex flex-wrap text-green-200 font-bold font-cursive text-xl justify-center md:text-4xl">
                It is Paintball, the way it should be!!!
              </p>
              <p className="mt-2">
                Royal Ridges is committed to offering you the safest possible
                family-friendly environment for you to immerse yourself in the
                adventure of woods ball, scenario paintball, or tournament style
                speed-ball. There are 2 large speed-ball fields, a 20 acre woods-ball
                field, and a Tactical Village. Book your next extreme adventure with
                us! All charges cover the cost of a mask, a marker, paint balls, and an
                hour or two of game play.
              </p>
              <p className="mt-2">
                Price $225 (group minimum charge covers up to 5 players)
              </p>
              <p className="mt-2">There is a $45 charge per additional person over five (5) players. For example, seven (7) players total would be $225 + $45 + $45 = $315</p>
              <p className="mt-2">Current available booking times:</p>
              <p className="ml-4 mt-2 italic">Saturdays: 10:00 am or 1:00 pm</p>
              <p className="mt-2">Interested in other dates/times? Email <a href="mailto:paintball@royalridges.org" className="text-green-200 hover:underline hover:text-indigo-400">paintball@royalridges.org</a>&nbsp;to arrange alternate dates/times.</p>
              
              <p className="flex flex-wrap justify-center text-xl md:text-4xl font-cursive text-gray-600">What are you waiting for?&nbsp;
                <a 
                  href="https://www.ultracamp.com/info/upcomingSessions.aspx?idCamp=1145&campCode=151&lnkCategory=Paintball+Party" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:underline hover:text-indigo-400 text-yellow-400 font-bold font-cursive text-xl md:text-4xl"
                >Register Now!</a></p>
              
              <div className="flex flex-row mt-2">
                <p>Open Play Games and Dates:</p>
                  <Link
                    to={`/paintball-open-play`}
                    className="text-green-200 hover:underline hover:text-indigo-400"
                  >
                    <p>&nbsp;Info</p>
                  </Link>
              </div>
              <p className="mt-2">Register for our Private Paintball Parties Here:{` `}<a href="http://www.ultracamp.com/info/upcomingSessions.aspx?idCamp=1145&campCode=151&lnkCategory=Paintball+Party" className="text-green-200 hover:underline hover:text-indigo-400" target="_blank" rel="noopener noreferrer">Register</a></p>
              <div className='py-20 text-center text-2xl'>
                <p className="my-2">Paintball Liability Form{` `}<a href="https://waiver.smartwaiver.com/w/54c2a108cb5e3/web/" className="text-green-200 hover:underline hover:text-indigo-400" target="_blank" rel="noopener noreferrer">Link</a></p>
              </div>
            </div>
          <Footer />
        </div>
    );
}

export default Paintball;