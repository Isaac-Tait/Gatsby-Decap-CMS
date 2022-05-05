import React from "react";
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
    { name: 'Account', href: 'https://www.ultracamp.com/clientlogin.aspx?idCamp=1145&campCode=151', current: false },
  ]
  
  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

const Header = () => {
    return (
        <div className="heropattern-topography-yellow-500 flex flex-col">
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
                                                item.current ? 'bg-gray-900 text-white' : 'text-gray-800 bg-yellow-400 opacity-80 hover:opacity-100 hover:bg-green-200 hover:text-white',
                                                'px-3 py-2 rounded-md text-base font-semibold'
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
                                            <p className='text-gray-800 bg-yellow-400 opacity-80 hover:bg-green-200 hover:text-white hover:opacity-100 px-3 py-2 rounded-md text-base font-semibold'>Search</p>
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
                                        item.current ? 'bg-gray-900 text-white' : 'text-gray-800 bg-yellow-400 hover:text-white',
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