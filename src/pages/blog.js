import React from "react";

import Header from "../components/header";
import Footer from "../components/footer";

const Blog = () => {
    return (
        <div className="bg-gradient-to-r from-yellow-400 via-red-200 to-indigo-200">
        <Header />
        <div className="h-screen">
            <p>Content</p>
        </div>
        <Footer />
        </div>
    );
}

export default Blog;