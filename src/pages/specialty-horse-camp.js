import React from "react";

import { Link } from 'gatsby'

import Header from "../components/header";
import Footer from "../components/footer";

const Staff = () => {
    return (
        <div className="bg-gradient-to-t from-yellow-200 to-indigo-200">
          <Header />
            <div className='h-screen grid grid-cols-2'>
                {/*Column 1*/}
                <div className='flex flex-col mx-auto'>
                    <Link to={'/registration'} className='my-4 font-cursive hover:underline font-extrabold text-xl text-green-200 hover:text-indigo-500'>
                        <p>Registration</p>
                    </Link>
                    <hr /> 
                    <Link to={'/day-camp'} className='my-4 font-cursive hover:underline text-green-200 hover:text-indigo-500'>
                        <p>Traditional Day Camp</p>
                    </Link>
                    <Link to={'/day-adventure-camp'} className='my-4 font-cursive hover:underline text-green-200 hover:text-indigo-500'>
                        <p>Day Adventure Camp</p>
                    </Link>
                    <Link to={'/day-horse-camp'} className='my-4 font-cursive hover:underline text-green-200 hover:text-indigo-500'>
                        <p>Day Horse Camp</p>
                    </Link>
                    <Link to={'/day-paintball-camp'} className='my-4 font-cursive hover:underline text-green-200 hover:text-indigo-500'>
                        <p>Day Paintball Camp</p>
                    </Link>
                    <Link to={'/multi-week-camp'} className='my-4 font-cursive hover:underline text-green-200 hover:text-indigo-500'>
                        <p>Multi Week Camp</p>
                    </Link>
                    <Link to={'/bus-transportation'} className='my-4 font-cursive hover:underline text-green-200 hover:text-indigo-500'>
                        <p>Bus Transportation</p>
                    </Link>
                    <Link to={'/faq'} className='my-4 font-cursive hover:underline text-green-200 hover:text-indigo-500'>
                        <p>FAQs</p>
                    </Link>
                </div>
                {/*Column 2*/}
                <div className='mr-4 overflow-y-scroll'>
                    <img src='https://royal-ridges-retreat.s3.us-west-1.amazonaws.com/SummerTwentyThree/dayHorseSpecialtyThemeCamp.jpeg'
                        alt='multi-week-camp' 
                        className='w-1/2 mx-auto rounded-xl my-6' 
                    />
                    <h1 className='text-center text-3xl font-medium text-green-200'>Day Horse Specialty Theme Camps</h1>
                    <p>New this year! Theme weeks are suitable for returning campers or experienced riders looking for some variety at horse camp.</p>
                    <div className="text-center">
                        <p>Monday-Friday 9:00 am - 3:30 pm</p>
                        <p>$475 for the week</p>
                        <p>$60 Bus Transportation</p>
                        <p>Ages 10-16</p>
                    </div>
                    <h3 className="font-semibold text-xl">Requirements</h3>
                    <ul className="list-disc mb-2 ml-6">
                        <li className="mt-2">Must be 10 years old</li>
                        <li className="mt-2">Must have attended <span className="font-semibold">three</span> regular Day Horse Camps in the last <span className="font-semibold">two</span> years or enrolled in riding classes.</li>
                        <li className="mt-2">Must be confident on a horse.</li>
                    </ul>
                    <h3 className="font-semibold text-xl mt-4">English Horse Camp (Week 1) - $475</h3>
                    <p>Saddle up in English tack and learn about this riding style. Riders will learn about English and Western tack differences and the different English riding disciplines. During their daily riding lesson, your child will practice proper position, direct reining, and will learn 2 point. Riders will practice their skills with patterns and over ground poles. There will be no trail ride for this specialty camp. We recommend wearing breeches or leggings as jeans tend to rub. Riding boots with a heel is required as the stirrup irons do not have covers to keep the foot from going too far into the stirrup.</p>
                
                    <h3 className="font-semibold text-xl mt-4">Vaulting Camp<span className="text-sm italic">&nbsp;ages 8 - 15</span> (Week 3) - $400</h3>
                    <p>This special week-long Vaulting Day Camp program will introduce your child to the basics of Vaulting. Vaulting is essentially a gymnastic routine performed on horseback while the horse is moving. The horse is controlled by a staff member on a lunge line, and your vaulter will learn basic moves under the supervision and support of our vaulting instructor. Vaulting is a wonderful activity for the brave horse-loving kiddo as well as the more cautious first-time horse lover. Campers will also get to go on a trail ride. Vaulters should wear leggings or sweatpants and soft tennis shoes to be more free moving and comfortable for the horse.</p>

                    <h3 className="font-semibold text-xl mt-4">Ranch Rodeo Camp (Week 5) - $475 </h3>
                    <p>Gear up for a fun week of learning about ranch rodeo and practicing some new skills. Campers will learn about ranch rodeo events and practice a few of them from the ground and in the saddle. Practice some gaming patterns in the arena, learn some roping skills, and practice on the roping dummy, and they will learn some basic cow working skills from horseback. Campers will not get to go on a traditional trail ride as they will be too busy learning their ranching skills. Campers need to wear jeans and boots with a heel (no tennis shoes) to practice these skills safely.</p>

                    <h3 className="font-semibold text-xl mt-4">Trail Camp (Week 7) - $475</h3>
                    <p className="mb-4">Campers will have a blast getting set to ride the trails. They will learn about trail prep, the roles of each trail rider, trail safety, and types of knots for packing and tying. Riders will have a short arena ride to work on some safety skills for the trail and then they will set out on a new trail each day, learning new skills along the way. Campers should dress in jeans and riding boots with a heel.</p>
                    <div className="text-center mb-6">
                        <p><span className="text-green-200 font-semibold">Week #1</span>&nbsp;- June 19 - 23 (English Camp)</p>
                        <p><span className="text-green-200 font-semibold">Week #3</span>&nbsp;- July 3 - 7 (Vaulting Camp)</p>
                        <p><span className="text-green-200 font-semibold">Week #5</span>&nbsp;- July 17 - 21 (Ranch Rodeo Camp)</p>
                        <p><span className="text-green-200 font-semibold">Week #7</span>&nbsp;- July 31 - August 4 (Trail Camp Available)</p>
                    </div>
                </div>
            </div>
          <Footer />
      </div>
    );
}

export default Staff;