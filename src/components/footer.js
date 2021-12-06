import React from "react";

const Footer = () => {
    return (
        <div>
            <footer className="heropattern-topography-indigo-400 text-gray-800 rounded-lg shadow-lg text-center px-2 py-2 text-xs flex items-center justify-between">
                © 1978-{new Date().getFullYear()} Royal Ridges Retreat
                <div>
                    <p>
                        Another&nbsp;
                        <a
                        href="https://mountaintopcoding.dev"
                        className="text-blue-600 hover:text-pink-700"
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
