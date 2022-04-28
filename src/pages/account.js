import * as React from "react"

import Header from "../components/header";
import Footer from "../components/footer";


const Account = () => {
  return (
    <div className="bg-yellow-200">
        <Header />
            <div className="max-w-7xl mx-2 md:mx-auto text-xs md:text-base h-screen overflow-y-scroll">
                <h1 className="text-4xl font-medium text-center">Ultra Camp Account</h1>
                <p className="mt-2">Sign in 
                <a 
                  href='https://www.ultracamp.com/clientlogin.aspx?idCamp=1145&campCode=151'

                >here</a>.</p>
            </div>
        <Footer />
    </div>
  );
}

export default Account;