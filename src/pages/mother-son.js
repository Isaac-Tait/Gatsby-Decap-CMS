import React from "react";
import { Link } from "gatsby"

import Header from "../components/header";
import Footer from "../components/footer";

const MotherSon = () => {
    return(
        <div className='bg-gradient-to-r from-yellow-400 via-yellow-200 to-indigo-200'>
            <Header />
                <div className='h-screen'>
                    <div className="max-w-6xl h-1/2 mx-auto overflow-y-scroll grid grid-cols-2 gap-4">
                        {/*Column One (Left)*/}
                        <div className='flex flex-col justify-between bg-indigo-300 mt-2'>
                            <div>
                                <Link to={'/mother-daughter'}>
                                <p className="text-green-200 hover:text-indigo-400 font-bold text-lg justify-center md:text-2xl">Mother Daughter</p>
                                </Link>
                            </div>
                            <div>
                                <Link to={'/mother-son'}>
                                <p className="text-green-200 hover:text-indigo-400 font-bold text-lg justify-center md:text-2xl">Mother Son</p>
                                </Link>
                            </div>
                            <div>
                                <Link to={'/mother-daughter'}>
                                <p className="text-green-200 hover:text-indigo-400 font-bold text-lg justify-center md:text-2xl">Father Daughter</p>
                                </Link>
                            </div>
                            <div>
                                <Link to={'/father-son'}>
                                <p className="text-green-200 hover:text-indigo-400 font-bold text-lg justify-center md:text-2xl">Father Son</p>
                                </Link>
                            </div>
                        </div>
                        {/*Column Two (Right)*/}
                        <div className='bg-pink-300 mt-2'>
                            <p>Stuff here</p>
                        </div>
                    </div>
                </div>
            <Footer />
        </div>
    )
}

export default MotherSon;