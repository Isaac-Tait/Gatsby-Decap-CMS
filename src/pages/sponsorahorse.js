import React from "react";

import Header from "../components/header";
import Footer from "../components/footer";

const SponsorAHorse = () => {
    return (
        <div>
        <Header />
        <div>
      <div className="max-w-6xl mx-2 md:mx-auto text-xs md:text-base">
        <p className="flex flex-wrap text-green-200 font-bold text-xl justify-center md:text-4xl">
          Sponsor-a-Horse
        </p>
        <p>
          As a Horse Care Program sponsor, you provide financial support for the
          feed and care of a horse. It takes about $100 a month to care for each
          of our horses. This includes: feed, farrier, vet and dental work,
          medications and/or supplements, and staff time. Between June to
          August, we usually have over 50 horses on property. During the winter
          months, September through May, we have approximately 35 horses on camp
          property, with the rest of the herd being fostered out.
        </p>
        <p>How it works:</p>
        <p>
          Select a horse, listed below, to sponsor. If one of your desired
          horses is not listed, it is because it is already being sponsored or
          is fostered out for the season.
        </p>
        <p className="font-semibold text-green-200 mt-4">Pick a level</p>
        <p className="ml-2 uppercase">Support: $100 (1 month)</p>
        <p className="ml-2 uppercase">Bronze: $300 (3 months)</p>
        <p className="ml-2 uppercase">Silver: $600 (6 months)</p>
        <p className="ml-2 uppercase">Gold: $900 (9 months)</p>
        <p className="ml-2 uppercase">Platinum: $1200 (one year)</p>
        <p>
          Choose your desired number of months in the quantity box. For example,
          if you wish to sponsor "Sunset" at the Gold level and pay-in-full,
          then select "9" for the quantity (a full year sponsorship is only nine
          months out of the year). If you would prefer month-to-month then leave
          the quantity as "1", and we will bill your account monthly for the
          duration of your desired level. Your sponsorship will provide support
          to your desired horse. Any extra funds will go to cover the costs of
          an additional horse, or emergency vet bills.
        </p>
        <p className="font-semibold text-green-200 mt-4">
          Benefits to you as a Horse Care Program sponsor
        </p>
        <p>
          Knowing that your funds are going to help financially care for horses
          at Royal Ridges Retreat that children and adults will be able to enjoy
          in lessons, ministries and summer camp. All sponsors will receive a
          tax-deductible receipt.
        </p>
        <p className="font-semibold text-green-200 mt-4">Additional Perks</p>
        <p>
          Bronze Sponsors: Will have their name listed on the website and in the
          newsletter.
        </p>
        <p>
          Silver Sponsors: Will have their name listed on the website and in the
          newsletter, Plus, receive a picture of the horse they wish to sponsor.
        </p>
        <p>
          Gold Sponsors: Will have their name listed on the website and in the
          newsletter, Receive a picture of the horse they wish to sponsor, Plus,
          receive periodic updates on the horse they are sponsoring.
        </p>
        <p>
          Platinum Sponsors: Will have their name listed on the website and in
          the newsletter, Receive a picture of the horse they wish to sponsor,
          Receive periodic updates on the horse they are sponsoring, Plus, have
          their name added to a commemorative plaque.
        </p>
        <p className="mt-2">
          For a list of horses to sponsor please visit our blog post here
        </p>
        {/* add link to blog post*/}
      </div>
    </div>
        <Footer />
        </div>
    );
}

export default SponsorAHorse;