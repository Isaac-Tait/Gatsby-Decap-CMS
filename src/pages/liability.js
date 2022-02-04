import React from "react";

import Header from "../components/header";
import Footer from "../components/footer";

const Medical = () => {
    return (
        <div className="bg-gradient-to-l from-pink-200 to-indigo-200">
            <Header />
                <div className="h-screen max-w-6xl mx-auto text-gray-800">
                    <p className="text-xl">
                        This form is required for all summer camps. We suggest you complete the
                        form at the time of your purchase. Forms are valid from October 1 to
                        September 30. You only need to complete the forms once a year unless
                        your information needs to be updated or changed. Please complete forms
                        when you register for camp.
                    </p>
                    <p className="text-xl pt-8">
                        For questions regarding registrations, please email:{' '}
                        <a
                        href="email:registrations@royalridges.org"
                        className="text-green-200 hover:underline hover:text-indigo-400 rounded-md"
                        >
                        registrations@royalridges.org
                        </a>
                    </p>
                    <p className="text-xl pt-2">
                        For questions regarding our summer camp programs, please email:{` `}
                        <a
                        href="email:programs@royalridges.org"
                        className="text-green-200 hover:underline hover:text-indigo-400 rounded-md"
                        >
                        programs@royalridges.org
                        </a>
                    </p>
                    <div className="text-center">
                        <p className="text-red-400 font-semibold text-xl pt-10">
                            Campers will not participate in any activities if the waiver is not
                            completed prior to camp starting.
                        </p>
                        <p className="text-3xl text-gray-700">
                            To fill out the waiver click this{' '}
                            <a
                            href="https://waiver.smartwaiver.com/w/5f3c5bc8e7afd/web/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-green-200 hover:underline hover:text-indigo-400 rounded-md"
                            >
                            link
                            </a>
                        </p>
                    </div>
                </div>
            <Footer />
        </div>
    );
}

export default Medical;