import React from "react";
import {Link} from "gatsby";

import Logo from '../images/logo.png';

const Header = () => {
    return (
        <header className="md:flex flex-wrap items-center border-b-4 heropattern-topography-yellow-400 px-8 py-6">
            <div className="md:flex md:flex-1">
            <Link to="/">
                <div className="flex-grow mt-1 text-center md:text-left">
                    <img src={Logo} alt="logo" className="w-56 inline-block"/>
                </div>
            </Link>
            </div>

                <nav className="flex-grow sm:flex-grow-0 md:font-semibold md:uppercase min-h-screenmt-4 mt-4 md:mt-0 overflow-y-auto">
                    <ul className="flex justify-center content-center">
                        <li className="mx-4">
                            <Link to={'/summercamp'} className="underline text-green-200">Summer Camp</Link>
                        </li>
                        <li className="mx-4">
                            <Link to={'/programs'} className="underline text-green-200">Programs</Link>
                        </li>
                        <li className="mx-4">
                            <Link to={'/support'} className="underline text-green-200">Support</Link>
                        </li>
                        <li className="mx-4">
                            <Link to={'/about'} className="underline text-green-200">About</Link>
                        </li>
                        <li className="mx-4">
                            <Link to={'/contact'} className="underline text-green-200">Contact</Link>
                        </li>
                    </ul>
                </nav> 
        </header>
    );
};

export default Header;