// eslint-disable-next-line jsx-a11y/rule-name
import * as React from "react"
import { Link } from "gatsby"

import Header from "../components/header";
import Footer from "../components/footer";


const NotFoundPage = () => {
  return (
    <div>
    <Header />
      <main className="text-center py-16 text-4xl font-light">
        <p>
          The page you are looking for seems to have gotten loose. We have been
          out all night looking for it, to no avail.
          In the meantime head on over to the home page. Maybe you will find what you are looking for
          there.
        </p>
        <p className="mt-2">
          And just because we are nice here is a handy link to the&nbsp;
          <Link
            to={'/'}
            className="text-green-200 hover:text-yellow-400 hover:bg-indigo-50 underline"
          >
            Home Page
          </Link>
          .
        </p>
      </main>
      <Footer />
    </div>
  );
}

export default NotFoundPage;