import React from "react";

import Header from "../components/header";
import Footer from "../components/footer";

const Volunteers = () => {
    return (
        <div className="bg-gradient-to-r from-yellow-400 via-yellow-200 to-indigo-200">
          <Header />
            <div>
              <div className="max-w-6xl mx-2 md:mx-auto text-xs md:text-base h-screen overflow-y-scroll">
                <p className="flex flex-wrap text-green-200 font-bold text-xl justify-center md:text-4xl">
                  We love volunteers!!!
                </p>
                <p>
                  With 378 acres, there are many projects and needs all over camp. This
                  may be on a construction project or in landscaping of pulling weeds.
                  If you have a specific skill or trade you would like to offer us in
                  any area, please let us know. If you are interested in getting monthly
                  updates about our volunteer opportunities then fill out the form
                  below.
                </p>
                <p className="mt-2">
                  If you have any questions or concerns, please{' '}
                  <a
                    href="email:volunteers@royalridges.org"
                    className="underline text-green-200 hover:text-red-500"
                  >
                    email
                  </a>{' '}
                  us.
                </p>
                <p className="flex flex-wrap text-green-200 font-bold text-xl justify-center md:text-xl">
                  Scheduled Volunteer Workdays:
                </p>
                <p>March 13</p>
                <p>April 17</p>
                <p>May 29</p>
                <p>June 12</p>
                  <div className="flex justify-center">
                    <iframe 
                      src="https://docs.google.com/forms/d/e/1FAIpQLSfMtLDuqIRmTjAOzrFErCQWUR9NkQUFpOJ8nUHqHNDLoa7PfA/viewform?embedded=true" 
                      width="640" 
                      height="1109" 
                      frameborder="0" 
                      marginheight="0" 
                      marginwidth="0"
                    >
                    Loading…</iframe>
                  </div>
              </div>
            </div>
          <Footer />
        </div>
    );
}

export default Volunteers;