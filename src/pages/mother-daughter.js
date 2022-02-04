import React from "react";
import { Link } from "gatsby"

import Header from "../components/header";
import Footer from "../components/footer";

const MotherDaughter = () => {
    return (
        <div className='bg-gradient-to-r from-yellow-200 to-indigo-200'>
            <Header />
                <div className='h-screen'>
                <p className="flex flex-wrap text-green-200 font-bold font-cursive text-xl justify-center md:text-4xl">Mother Daughter</p>
                    <div className="max-w-6xl h-1/2 mx-auto overflow-y-scroll grid grid-cols-2 gap-4">
                    
                        {/*Column One (Left)*/}
                        <div className='flex flex-col justify-between mt-2'>
                            <div>
                                <Link to={'/mother-son'}>
                                <p className="text-green-200 hover:text-indigo-400 font-bold text-lg justify-center md:text-2xl">Mother Son</p>
                                </Link>
                            </div>
                            <div>
                                <Link to={'/father-daughter'}>
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
                        <div className='mt-2'>
                            <p>Mother Daughter Content</p>
                        </div>
                    </div>
                </div>
            <Footer />
        </div>
    )
}

export default MotherDaughter;