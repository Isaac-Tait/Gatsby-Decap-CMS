import React from "react";

import Header from "../components/header";
import Footer from "../components/footer";

const Donations = () => {
    return (
        <div className="bg-gradient-to-r from-yellow-400 via-yellow-200 to-indigo-200">
          <Header />
            <div className="max-w-6xl h-screen overflow-y-scroll mx-auto text-xs md:text-base">
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
                
              <p className="italic mt-4">
                Or you can donate any amount at paypal.me/royalridges Make sure to add
                a note that it is a donation! If you want to send a donation as check
                then make it payable to Royal Ridges and send it to PO Box 3010 Battle
                Ground, WA 98604 All donations are tax-deductible and greatly
                appreciated.
              </p>
              
              <div className='ml-10 mt-4 w-1/2 text-center'>
                <div className='flex justify-center'>
                  <img
                    alt="Amazon Smile"
                    src="https://royal-ridges-retreat.s3.us-west-1.amazonaws.com/amazonSmile.png"
                    className="w-28 rounded-2xl"
                  />
                </div>
                <p className='font-semibold text-xl'>How to sign up for AmazonSmile</p>
                <p className="ml-1">How to use AmazonSmile on a web browser:</p>
                <p className="ml-1">Visit smile.amazon.com</p>
                <p className="ml-1">Sign in with the same account you use for Amazon.com</p>
                <p className="ml-1">Select your charity</p>
                <p className="ml-1">Start shopping! Remember to check out at smile.amazon.com to generate donations for your chosen charity.</p>
                <p className="ml-1">Tip: Add a bookmark to make it easier to shop at smile.amazon.com.</p>

                <p className='font-semibold text-xl'>How to use AmazonSmile using the Amazon app on your mobile phone:</p>
                <p className='ml-1'>Open the Amazon Shopping app</p>
                <p className='ml-1'>Navigate to the main menu (=)</p>
                <p className='ml-1'>Tap on Settings and then select “AmazonSmile”</p>
                <p className='ml-1'>Select your charity and then follow the on-screen instructions to turn ON AmazonSmile in the mobile app</p>
                <p className='ml-1'>Once AmazonSmile has been activated in your app, future eligible app purchases will generate a donation for the charity you have selected.</p>
                <p className='ml-1'>Note: The tablet app is not yet supported. Please visit smile.amazon.com/onthego to learn more.</p>

                <div className='flex justify-center mt-2'>
                  <img
                    alt="Fred Meyers"
                    src="https://royal-ridges-retreat.s3.us-west-1.amazonaws.com/fredMeyers.png"
                    className="w-28 rounded-2xl"
                  />
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