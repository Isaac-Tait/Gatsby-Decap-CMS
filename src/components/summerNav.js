import React from 'react';
import { Disclosure } from '@headlessui/react';
import { XIcon } from '@heroicons/react/outline';

const navigation = [
  { name: 'Registration', href: '/registration', current: false },
  { name: 'Day Camp', href: '/day-camp', current: false },
  { name: 'Day Horse Camp', href: '/day-horse-camp', current: false },
  { name: 'Day Adventure Camp', href: '/day-adventure-camp', current: false },
  { name: 'Day Paintball Camp', href: '/day-paintball-camp', current: false },
  { name: 'Multi-Week Camp', href: '/multi-week-camp', current: false },
  {
    name: 'Specialty Horse Camp',
    href: '/specialty-horse-camp',
    current: false,
  },
  { name: 'Bus Transportation', href: '/bus-transportation', current: false },
  { name: 'FAQs', href: '/faq', current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const SummerNav = () => {
  return (
    <div>
      <Disclosure as="nav">
        {({ open }) => (
          <div className="flex justify-center">
            <div className="mt-10">
              <div className="sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-white hover:bg-yellow-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <p className="text-gray-800">Menu</p>
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                <div className="hidden sm:block sm:ml-6 ">
                  <div className="flex flex-col">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current
                            ? 'bg-gray-900 text-white'
                            : 'text-gray-800 bg-yellow-400 opacity-80 hover:opacity-100 hover:bg-green-200 hover:text-white',
                          'px-3 py-2 my-4 rounded-md text-base font-semibold',
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
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
                      item.current
                        ? 'bg-gray-900 text-white'
                        : 'text-gray-800 bg-yellow-400 hover:text-white',
                      'block px-3 py-2 rounded-md text-base font-medium',
                    )}
                    aria-current={item.current ? 'page' : undefined}
                  >
                    {item.name}
                  </Disclosure.Button>
                ))}
              </div>
            </Disclosure.Panel>
          </div>
        )}
      </Disclosure>
    </div>
  );
};

export default SummerNav;
