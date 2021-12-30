import React from 'react'
import { Link } from 'gatsby'

import Header from "../components/header";
import Footer from "../components/footer";

const SummerReg = () => {
    return (
        <div className='bg-gradient-to-r from-yellow-400 via-yellow-200 to-indigo-200'>
            <Header />
            <p className='text-2xl font-extrabold text-green-200 flex justify-center mb-4'>Summer Camp Registration</p>
                <div className='h-screen grid grid-cols-2 gap-4'>
                    {/*Column 1*/}
                    <div className='flex flex-col mx-auto'>
                        <Link to={'/daycamp'} className='my-4 underline text-green-200 hover:text-indigo-500'>
                            <p>Traditional Day Camp</p>
                        </Link>
                        <Link to={'/dayhorsecamp'} className='my-4 underline text-green-200 hover:text-indigo-500'>
                            <p>Day Horse Camp</p>
                        </Link>
                        <Link to={'/dayadventurecamp'} className='my-4 underline text-green-200 hover:text-indigo-500'>
                            <p>Day Adventure Camp</p>
                        </Link>
                        <Link to={'/daypaintballcamp'} className='my-4 underline text-green-200 hover:text-indigo-500'>
                            <p>Day Paintball Camp</p>
                        </Link>
                        <Link to={'/summergiddyupprogram'} className='my-4 underline text-green-200 hover:text-indigo-500'>
                            <p>Summer GiddyUp Program</p>
                        </Link>
                        <Link to={'/bustransportation'} className='my-4 underline text-green-200 hover:text-indigo-500'>
                            <p>Bus Transportation</p>
                        </Link>
                    </div>
                    {/*Column 2*/}
                    <div className='mr-4'>
                        <p>All of our Summer Day Camps include lots of fun games, team building activities, Bible Studies, singing camp songs, and visits to the Camp Store.</p>
                        <p>Campers will come home dirty and tuckered out from their day at camp. *The Bible themes and main activities repeat each week within each camp.</p> 
                        <p>All campers will need to be dressed in weather-appropriate clothing (it is often chilly in the morning so don’t forget a coat) and closed-toe shoes.</p>
                        <p>Please bring a lunch packed in a self-insulated lunch box, a water bottle, and please do not send your camper with any electronic devices.</p>
                        <p>For questions regarding registrations, please email <a href="mailto:registrations@royalridges.org" className='underline text-green-200 hover:text-indigo-500'>our Registrations department</a></p>
                        <p>For questions regarding our summer camp programs please email <a href="mailto:programs@royalridges.org" className='underline text-green-200 hover:text-indigo-500'>our Programs department</a></p>
                    </div>    
                </div>
            <Footer />
        </div>
    )
}

export default SummerReg