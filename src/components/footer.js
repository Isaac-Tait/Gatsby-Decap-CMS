import React from "react";

const Footer = () => {
    return (
        <div>
            <footer className="bg-green-200 text-gray-800 rounded-lg shadow-lg text-center px-4 py-4 md:text-xs flex items-center justify-between sm:mx-8">
                © 1978 - {new Date().getFullYear()}, Royal Ridges Retreat
                <div>
                    <p>
                        Another&nbsp;
                        <a
                        href="https://mountaintopcoding.dev"
                        className="text-blue-400 hover:text-white"
                        target="_blank"
                        rel="noopener noreferrer"
                        >
                        mountainTopCoding(
                        <span role="img" aria-label="mountain with snow-cap">
                            &#127956;
                        </span>
                        );
                        </a>{' '}
                        project
                    </p>
                </div>
            </footer>
        </div>
    );
}

export default Footer;
