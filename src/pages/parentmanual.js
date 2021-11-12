import React from "react";

import Header from "../components/header";

const ParentsManual = () => {
    return (
        <div>
            <div className="h-screen">
                <Header />
            <p className="text-gray-600 font-medium text-xl">
                This form is required for all summer camps. We suggest you complete the
                form at the time of your purchase. Forms are valid from October 1 to
                September 30. You only need to complete the forms once a year unless
                your information needs to be updated or changed. Please complete forms
                when you register for camp.
            </p>
            <p className="text-gray-600 font-medium text-xl pt-12">
                For questions regarding registrations, please email&nbsp;
                <a
                href="email:registrations@royalridges.org"
                className="text-green-200 hover:text-yellow-400 bg-yellow-400 hover:bg-green-200 rounded-md px-2"
                >
                registrations@royalridges.org
                </a>
            </p>

            <p className="text-gray-600 font-medium text-xl pt-2">
                For questions regarding our summer camp programs, please email&nbsp;
                <a
                href="email:programs@royalridges.org"
                className="text-green-200 hover:text-yellow-400 bg-yellow-400 hover:bg-green-200 rounded-md px-2"
                >
                programs@royalridges.org
                </a>
            </p>

            <p className="text-gray-600 font-medium text-xl pt-12 underline">
                Campers will not participate in activities if this online form is not
                completed prior to camp starting!
            </p>
            <p className="font-extrabold text-gray-700 text-3xl pt-12">
                To sign the waiver click on this{' '}
                <a
                href="https://waiver.smartwaiver.com/w/5f3c5bc8e7afd/web/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-200 hover:text-yellow-400 bg-yellow-400 hover:bg-green-200 rounded-md px-2"
                >
                link
                </a>
            </p>
        </div>
    </div>
    );
}

export default ParentsManual;