import React from 'react';

import Header from '../components/header';
import Footer from '../components/footer';

const RidingLessons = () => {
  return (
    <div className="bg-gradient-to-r from-yellow-200 to-indigo-200">
      <Header />
      <div>
        <div className="max-w-6xl mx-2 md:mx-auto text-xs md:text-base h-screen overflow-y-scroll">
          <img
            src="https://royal-ridges-retreat.s3.us-west-1.amazonaws.com/summer_camp_page/Riding+Lessons+1.0+(3).png"
            alt="outdoor survival"
            className="w-full rounded-2xl shadow-xl mt-2"
          />
          <p>
            Royal Ridges Horsemanship Riding Lesson program emphasizes riding
            skills and the safe handling and care of horses.
          </p>
          <p className="mt-2">
            Each Horsemanship lesson includes riding time, fellowship time, and
            horse science. (Fellowship time includes prayer, discussion, and
            Bible topics related to horsemanship)
          </p>
          <p>Ages: 6 to 18</p>
          <p>Price: $45/per week</p>
          <p>Dates:</p>

          <ul className="prose list-disc">
            <li>
              Tuesdays - September 12, 2023 - June 4, 2024 - 4:00 - 6:00 pm
            </li>
            <li>
              Wednesdays - September 13,2023 - June 5, 2024 - 10:00 am - 12:00
              pm
            </li>
            <li>
              Thursdays - September 14, 2023 - June 6, 2024 - 4:00 - 6:00 pm
            </li>
          </ul>

          <div className="my-4 text-center text-4xl">
            <a
              href="https://www.ultracamp.com/info/upcomingSessions.aspx?idCamp=1145&campCode=151&lnkCategory=Horsemanship+Lessons+Vaulting"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline hover:text-indigo-400 text-green-200 font-cursive"
            >
              Sign Up Here
            </a>
          </div>

          <p className="font-semibold">Notes:</p>
          <ul className="prose list-disc pb-4">
            <li>Horsemanship Lessons are once a week.</li>
            <li>
              Classes are 2 hours long and include 45 minutes on a horse.{' '}
            </li>
            <li>
              Due to our Summer Day Camp programs, Horsemanship Lessons are only
              offered during the school year.{' '}
            </li>
            <li>
              Winter Break and Spring Break aligned with the Battle Ground
              Public School schedule will also be off.{' '}
            </li>
            <li>
              Make-ups or refunds are not available for students that miss class
              since the instructor and horse still had to be available for the
              class whether you were there or not. If a class is canceled by
              Royal Ridges, a credit for the next term will be given.
            </li>
            <li>
              Riders must wear closed-toed sturdy shoes, preferably boots, and
              long pants. Please also wear layers and gloves in the winter as it
              can be colder at the barn than it is in town. Helmets are
              provided, or you can wear your own ASTM-certified riding helmet.
            </li>
            <li>
              Participants can withdraw from the program anytime during the
              session, but Royal Ridges requests a two-week notice.
            </li>
          </ul>

          <p>
            <span className="font-semibold">Payments: </span>can be made monthly
            or for the entire term. (Fall, Winter, Spring) Unless you notify us
            otherwise, you will be automatically enrolled in the next
            session/term.
          </p>
          <p className="pb-12">
            Scholarships may be available upon request for those with financial
            needs.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default RidingLessons;
