import React from 'react'
import { Link } from 'gatsby'

import Header from "../components/header";
import Footer from "../components/footer";

const DayCamp = () => {
    return (
        <div className='bg-gradient-to-r from-yellow-400 via-yellow-200 to-indigo-200'>
            <Header />
            <p className='text-2xl font-extrabold text-green-200 flex justify-center mb-4'>Summer Camp Registration</p>
                <div className='h-screen grid grid-cols-2 gap-4'>
                    {/*Column 1*/}
                    <div className='flex flex-col mx-auto'>
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
                        <p>Day Camp Information</p>
                    </div>    
                </div>
            <Footer />
        </div>
    )
}

export default DayCamp