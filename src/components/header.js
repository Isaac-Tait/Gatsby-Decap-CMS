import React, { Fragment } from "react";
import { Disclosure } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'

import {Link} from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

const navigation = [
    { name: 'Programs', href: '/programs', current: false },
    { name: 'Summer Camp', href: '/summer-camp', current: false },
    { name: 'Updates', href: '/updates', current: false },
    { name: 'Support', href: '/support', current: false },
    { name: 'About', href: '/about', current: false },
    { name: 'Contact', href: '/contact', current: false },
  ]
  
  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

const Header = () => {
    return (
        <div className="heropattern-topography-yellow-400 flex flex-col">
            <div className="flex mx-auto my-2">
                <Link to="/">
                    <div className='flex justify-center content-center box-content h-full'>
                        <StaticImage 
                            src='../images/logo.png' 
                            alt="Royal Ridges Logo" 
                            placeholder="blurred"
                            objectFit="scale-down"
                            className="w-1/2"
                            width={400}
                        />
                    </div>
                </Link>
            </div>
            <Disclosure as="nav">
                {({ open }) => (
                    <>
                        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                            <div className="relative flex items-center justify-between h-16">
                                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                                    {/* Mobile menu button*/}
                                    <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-white hover:bg-yellow-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                    <span className="sr-only">Open main menu</span>
                                    {open ? (
                                        <XIcon className="block h-6 w-6" aria-hidden="true" />
                                    ) : (
                                        <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                                    )}
                                    </Disclosure.Button>
                                </div>
                                <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                                    <div className="hidden sm:block sm:ml-6 ">
                                        <div className="flex space-x-2">
                                            {navigation.map((item) => (
                                            <a
                                                key={item.name}
                                                href={item.href}
                                                className={classNames(
                                                item.current ? 'bg-gray-900 text-white' : 'text-green-200 hover:bg-yellow-400 hover:text-white',
                                                'px-3 py-2 rounded-md text-medium font-semibold'
                                                )}
                                                aria-current={item.current ? 'page' : undefined}
                                            >
                                                {item.name}
                                            </a>
                                            ))}
                                        </div>   
                                    </div>
                                    
                                </div>
                                <div className='flex-2 flex justify-end px-3 py-2 font-medium text-sm'>
                                    <div className='flex'>
                                        <Link to={'/search'}>
                                            <svg
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                                className={classNames('mt-1 ml-2 lg:ml-12 text-gray-300', 'hover:bg-yellow-400 hover:px-3 hover:py-2 hover:rounded-md')}
                                            >
                                                <path
                                                    fill-rule="evenodd"
                                                    clip-rule="evenodd"
                                                    d="M18.319 14.4326C20.7628 11.2941 20.542 6.75347 17.6569 3.86829C14.5327 0.744098 9.46734 0.744098 6.34315 3.86829C3.21895 6.99249 3.21895 12.0578 6.34315 15.182C9.22833 18.0672 13.769 18.2879 16.9075 15.8442C16.921 15.8595 16.9351 15.8745 16.9497 15.8891L21.1924 20.1317C21.5829 20.5223 22.2161 20.5223 22.6066 20.1317C22.9971 19.7412 22.9971 19.1081 22.6066 18.7175L18.364 14.4749C18.3493 14.4603 18.3343 14.4462 18.319 14.4326ZM16.2426 5.28251C18.5858 7.62565 18.5858 11.4246 16.2426 13.7678C13.8995 16.1109 10.1005 16.1109 7.75736 13.7678C5.41421 11.4246 5.41421 7.62565 7.75736 5.28251C10.1005 2.93936 13.8995 2.93936 16.2426 5.28251Z"
                                                    fill="currentColor"
                                                />
                                            </svg>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <Disclosure.Panel className="sm:hidden">
                            <div className="px-2 pt-2 pb-3 space-y-1">
                                {navigation.map((item) => (
                                    <Disclosure.Button
                                    key={item.name}
                                    as="a"
                                    href={item.href}
                                    className={classNames(
                                        item.current ? 'bg-gray-900 text-white' : 'text-green-200 hover:bg-yellow-400 hover:text-white',
                                        'block px-3 py-2 rounded-md text-base font-medium'
                                    )}
                                    aria-current={item.current ? 'page' : undefined}
                                    >
                                    {item.name}
                                    </Disclosure.Button>
                                ))}
                            </div>
                        </Disclosure.Panel>
                    </>
                )}
            </Disclosure>
        </div>
    );
};

export default Header;