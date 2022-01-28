import React from "react";
import {Link} from "gatsby";

import Logo from '../images/logo.png';

const Header = () => {
    return (
        <div className="heropattern-topography-yellow-400 flex flex-col">
            <div className="flex mx-auto my-2">
                <Link to="/">
                    <img src={Logo} alt="logo" className="w-56 inline-block"/>
                </Link>
            </div>
            <div className="flex justify-center mx-auto overflow-y-scroll">
                <nav className="text-xs lg:text-xl lg:font-semibold lg:uppercase">
                    <ul className="flex h-20 pt-8">
                        <li className="ml-1 lg:ml-12">
                            <Link to={'/programs'} className="hover:underline hover:font-cursive hover:text-indigo-400 text-green-200">Programs</Link>
                        </li>
                        <li className="ml-1 lg:ml-12">
                            <Link to={'/summer-camp'} className="hover:underline hover:font-cursive hover:text-indigo-400 text-green-200">Summer Camp</Link>
                        </li>
                        <li className="ml-1 lg:ml-12">
                            <Link to={'/updates'} className="hover:underline hover:font-cursive hover:text-indigo-400 text-green-200">Updates</Link>
                        </li>
                        <li className="ml-1 lg:ml-12">
                            <Link to={'/support'} className="hover:underline hover:font-cursive hover:text-indigo-400 text-green-200">Support</Link>
                        </li>
                        <li className="ml-1 lg:ml-12">
                            <Link to={'/about'} className="hover:underline hover:font-cursive hover:text-indigo-400 text-green-200">About</Link>
                        </li>
                        <li className="ml-1 lg:ml-12">
                            <Link to={'/contact'} className="hover:underline hover:font-cursive hover:text-indigo-400 text-green-200">Contact</Link>
                        </li>
                        <li>
                            <Link to={'/search'}>
                            <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="mt-1 ml-2 lg:ml-12 text-green-200 hover:text-indigo-400"
                                >
                                <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M18.319 14.4326C20.7628 11.2941 20.542 6.75347 17.6569 3.86829C14.5327 0.744098 9.46734 0.744098 6.34315 3.86829C3.21895 6.99249 3.21895 12.0578 6.34315 15.182C9.22833 18.0672 13.769 18.2879 16.9075 15.8442C16.921 15.8595 16.9351 15.8745 16.9497 15.8891L21.1924 20.1317C21.5829 20.5223 22.2161 20.5223 22.6066 20.1317C22.9971 19.7412 22.9971 19.1081 22.6066 18.7175L18.364 14.4749C18.3493 14.4603 18.3343 14.4462 18.319 14.4326ZM16.2426 5.28251C18.5858 7.62565 18.5858 11.4246 16.2426 13.7678C13.8995 16.1109 10.1005 16.1109 7.75736 13.7678C5.41421 11.4246 5.41421 7.62565 7.75736 5.28251C10.1005 2.93936 13.8995 2.93936 16.2426 5.28251Z"
                                    fill="currentColor"
                                />
                                </svg>
                            </Link>
                        </li>
                    </ul>
                </nav> 
            </div>
        </div>
    );
};

export default Header;