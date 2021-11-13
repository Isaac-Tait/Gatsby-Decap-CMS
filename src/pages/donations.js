import React from "react";

import Header from "../components/header";
import Footer from "../components/footer";

const Donations = () => {
    return (
        <div>
        <Header />
        <div className="max-w-6xl mx-2 md:mx-auto text-xs md:text-base">
      <p className="flex flex-wrap text-green-200 font-bold text-xl justify-center md:text-4xl">
        Donations
      </p>

      <p className="italic">
        We are excited about what God has planned for 2021 at Royal Ridges. Will
        you join us by supporting one or more of the areas below?
      </p>

      <p className="italic">
        Help plan new activities for Summer of 2021 Help cover general expenses
        with our current activities General fund
      </p>

      <p className="italic">
        On-going maintenance of grounds, vehicles, etc. Staff support Programs
        Horse and Tack Donations
      </p>

      <p className="italic">
        Do you have a beginner safe horse looking for a great program to be a
        part of? Contact chrisy@royalridges.org for more information on a great
        home for your horse. We also take tack and horse item donations.
        Scholarship Fund
      </p>

      <p className="italic">
        Not everyone is able to afford the full cost of attending summer camp.
        Your contribution will go toward helping another boy/girl have fun at
        RRR. Cost of camp varies between $160-$595. Scholarships can cover
        partial or full cost of camp.
      </p>

      <p className="italic">To donate, click on the amount you want to give.</p>

      <p className="italic">
        All donations are tax-deductible and greatly appreciated.
      </p>
      <div className="hidden md:block">
        <div className="grid grid-cols-4">
          <div className="h-24 w-24">
            <img
              alt="10 dollar donation"
              src="https://royal-ridges-retreat.s3.us-west-1.amazonaws.com/10don.png"
            />
          </div>
          <div className="h-24 w-24">
            <img
              alt="25 dollar donation"
              src="https://royal-ridges-retreat.s3.us-west-1.amazonaws.com/25don.png"
            />
          </div>
          <div className="h-24 w-24">
            <img
              alt="50 dollar donation"
              src="https://royal-ridges-retreat.s3.us-west-1.amazonaws.com/50don.png"
            />
          </div>
          <div className="h-24 w-24">
            <img
              alt="100 dollar donation"
              src="https://royal-ridges-retreat.s3.us-west-1.amazonaws.com/100don.png"
            />
          </div>
        </div>
        <div className="grid grid-cols-4 mt-2">
          <div className="h-24 w-24">
            <img
              alt="250 dollar donation"
              src="https://royal-ridges-retreat.s3.us-west-1.amazonaws.com/250don.png"
            />
          </div>
          <div className="h-24 w-24">
            <img
              alt="500 dollar donation"
              src="https://royal-ridges-retreat.s3.us-west-1.amazonaws.com/500don.png"
            />
          </div>
          <div className="h-24 w-24">
            <img
              alt="1,000 dollar donation"
              src="https://royal-ridges-retreat.s3.us-west-1.amazonaws.com/1000don.png"
            />
          </div>
        </div>

        <p className="italic mt-4">
          Or you can donate any amount at paypal.me/royalridges Make sure to add
          a note that it is a donation! If you want to send a donation as check
          then make it payable to Royal Ridges and send it to PO Box 3010 Battle
          Ground, WA 98604 All donations are tax-deductible and greatly
          appreciated.
        </p>
        <div className="flex flex-wrap justify-between mt-2">
          <div>
            <img
              alt="Amazon Smile"
              src="https://royal-ridges-retreat.s3.us-west-1.amazonaws.com/amazonSmile.png"
              className="w-28 rounded-2xl"
            />
          </div>
          <div>
            <img
              alt="Fred Meyers"
              src="https://royal-ridges-retreat.s3.us-west-1.amazonaws.com/fredMeyers.png"
              className="w-28 rounded-2xl"
            />
          </div>
        </div>

        <p className="mt-4">
          Designate Royal Ridges Retreat as your favorite charity with your Fred
          Meyer Community Rewards. Note: this does not detract from your rewards
          earned.
        </p>
      </div>
    </div>
        <Footer />
        </div>
    );
}

export default Donations;