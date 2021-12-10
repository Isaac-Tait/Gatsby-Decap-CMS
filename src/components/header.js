import React from "react";
import {Link} from "gatsby";

import Logo from '../images/logo.png';

const Header = () => {
    return (
        <div className="heropattern-topography-yellow-400 flex flex-wrap">
            <div className="px-8 py-6">
                <Link to="/">
                    <img src={Logo} alt="logo" className="w-56 inline-block"/>
                </Link>
            </div>
            <div className="flex items-center">
                <nav className="text-xs lg:text-xl lg:font-semibold lg:uppercase">
                    <ul className="flex content-center">
                        <li className="ml-2 lg:ml-12">
                            <Link to={'/programs'} className="underline text-green-200">Programs</Link>
                        </li>
                        <li className="ml-2 lg:ml-12">
                            <Link to={'/summercamp'} className="underline text-green-200">Summer Camp</Link>
                        </li>
                        <li className="ml-2 lg:ml-12">
                            <Link to={'/blog'} className="underline text-green-200">Updates</Link>
                        </li>
                        <li className="ml-2 lg:ml-12">
                            <Link to={'/support'} className="underline text-green-200">Support</Link>
                        </li>
                        <li className="ml-2 lg:ml-12">
                            <Link to={'/about'} className="underline text-green-200">About</Link>
                        </li>
                        <li className="ml-2 lg:ml-12">
                            <Link to={'/contact'} className="underline text-green-200">Contact</Link>
                        </li>
                    </ul>
                </nav> 
            </div>
        </div>
    );
};

export default Header;