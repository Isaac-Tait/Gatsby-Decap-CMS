import React from "react";

import Header from "../components/header";
import Footer from "../components/footer";

const Newsletter = () => {
    return (
        <div>
        <Header />
            <div className="max-w-6xl mx-2 md:mx-auto text-xs md:text-base h-screen">
                <p className="flex flex-wrap text-green-200 font-bold text-xl justify-center md:text-4xl">
                Newsletter
                </p>
                <p>
                Subscribe&nbsp;
                <a
                    href="https://royalridges.us19.list-manage.com/subscribe/post?u=d6682e52d267116550d3ff4d7&id=c9cb660a15"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-200 hover:text-red-500 underline"
                >
                    here
                </a>
                . NO SPAM - we promise
                </p>
            </div>
        <Footer />
        </div>
    );
}

export default Newsletter;