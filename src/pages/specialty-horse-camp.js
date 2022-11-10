import React from "react";

import { Link } from 'gatsby'

import Header from "../components/header";
import Footer from "../components/footer";

const Staff = () => {
    return (
        <div className="bg-gradient-to-t from-yellow-200 to-indigo-200">
          <Header />
            <div className="max-w-6xl mx-2 md:mx-auto text-xs md:text-base h-screen">
                <div className='h-screen grid grid-cols-2'>
                    {/*Column 1*/}
                    <div className='flex flex-col mx-auto'>
                        <Link to={'/registration'} className='my-4 underline font-extrabold text-xl text-green-200 hover:text-indigo-500'>
                            <p>Registration</p>
                        </Link>
                        <hr /> 
                        <Link to={'/day-camp'} className='my-4 font-cursive hover:underline text-green-200 hover:text-indigo-500'>
                            <p>Traditional Day Camp</p>
                        </Link>
                        <Link to={'/day-adventure-camp'} className='my-4 font-cursive hover:underline text-green-200 hover:text-indigo-500'>
                            <p>Day Adventure Camp</p>
                        </Link>
                        <Link to={'/day-paintball-camp'} className='my-4 font-cursive hover:underline text-green-200 hover:text-indigo-500'>
                            <p>Day Paintball Camp</p>
                        </Link>
                        <Link to={'/summer-giddy-up-program'} className='my-4 font-cursive hover:underline text-green-200 hover:text-indigo-500'>
                            <p>Summer Giddy Up Program</p>
                        </Link>
                        <Link to={'/bus-transportation'} className='my-4 font-cursive hover:underline text-green-200 hover:text-indigo-500'>
                            <p>Bus Transportation</p>
                        </Link>
                        <Link to={'/faq'} className='my-4 font-cursive hover:underline text-green-200 hover:text-indigo-500'>
                            <p>FAQs</p>
                        </Link>
                    </div>
                    {/*Column 2*/}
                    <div>
                        <h1 className='text-center text-3xl font-medium text-green-200'>Vaulting Camp</h1>
                        <p>This special week-long Vaulting Day Camp program will introduce your child to the basics of Vaulting.</p>
                        <p>Vaulting is essentially a gymnastic routine performed on horseback while the horse is moving. The horse is controlled by a staff member and your vaulter will learn basic moves under the supervision and support of our vaulting instructor.</p>
                        <p>Vaulting is a wonderful activity for the brave horse-loving kiddo as well as the more cautious first-time horse lover.</p>
                        <div className='text-center my-4'>
                            <p><span className='text-green-200 font-semibold'>Week #3</span> - July 4-8</p>
                            <p><span className='text-green-200 font-semibold'>Week #5</span> - July 18-22</p>
                        </div>
                    </div>
                </div>
            </div>
          <Footer />
      </div>
    );
}

export default Staff;