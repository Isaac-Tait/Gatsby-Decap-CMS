import React from 'react';
import { Link } from 'gatsby';

import Header from '../components/header';
import Footer from '../components/footer';

const SummerStaffApp = () => {
  return (
    <div className="bg-gradient-to-l from-yellow-200 to-indigo-200">
      <Header />
      <div className="max-w-6xl mx-auto h-screen overflow-y-scroll">
        <img
          src="https://royal-ridges-retreat.s3.us-west-1.amazonaws.com/summer_camp_page/headers/SummerStaffApplication.png"
          alt="faqs"
          className="w-1/2 flex mx-auto rounded-xl my-6"
        />
        {/*Introduction*/}
        <div className="text-center mb-1">
          <p>
            Thank you for considering Royal Ridges Retreat as your Summer
            Mission Field!
          </p>
          <p>
            Applications for Summer Staff will be accepted beginning December
            1st each year.
          </p>
          <p>
            Please read the following documents carefully and make sure you have
            read <span className="uppercase underline">all</span> of them before
            you submit your application.
          </p>
          <p>
            Please note that summer staff are required to serve Royal Ridges for
            a minimum of three weeks.
          </p>
          <p>
            You must also complete all of the paperwork and online training
            prior to attending the onsite training. Onsite training is required.
            Onsite training will be on the Saturdays in June and the first week
            of camp. The dates and training information will be sent to you once
            you are hired.
          </p>
          <p>
            If you have a specific question before applying, please email Chrisy
            our Program Director{' '}
            <a
              href="mailto:chrisy@royalridges.org"
              className="text-green-200 underline hover:text-indigo-400"
            >
              chrisy@royalridges.org
            </a>
          </p>
        </div>
        <div className="text-center heropattern-bamboo-indigo-100 rounded-2xl">
          {/*Summer Staff Job Descriptions*/}
          <div className="mb-12">
            <p className="text-3xl text-yellow-400">Step I</p>
            <p>Summer Camp Job Descriptions and Information</p>
            <a
              href="https://docs.google.com/document/d/e/2PACX-1vRLtvWVgwWMldZqRuwparRf5qpJp6R4MrXKB9GwgjcQ7UyXpPoL2z_w7fouR741KB1TvtGiEym4zRAu/pub"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-200 italic text-sm underline hover:text-indigo-400"
            >
              Summer Camp Job Descriptions
            </a>
          </div>

          {/*All about references*/}
          <div className="pb-6">
            <p className="text-3xl text-yellow-400">Step II</p>
            <p>The Summer Staff Application and References</p>
            <p>
              (Note: You will need to create an account in order to complete the
              application)
            </p>
            <a
              href="https://www.ultracamp.com/clientlogin.aspx?idCamp=1145&campCode=151"
              className="text-green-200 underline hover:text-indigo-400 italic text-sm"
              target="_blank"
              rel="noopener noreferrer"
            >
              (Create an Account)
            </a>
            <p>
              Once you have made account you can “register” for the summer staff
              application through the Ultra Camp program.
            </p>

            <p className="mx-10 mt-4">
              Please give us some time to process your application. If you have
              not heard from us after a week, please contact the{' '}
              <a
                href="mailto:programs@royalridges.org"
                className="text-green-200 underline hover:text-indigo-400 italic text-sm"
              >
                Program Director
              </a>{' '}
              to make sure we received it. Thank you for considering Royal
              Ridges for your summer!
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SummerStaffApp;
