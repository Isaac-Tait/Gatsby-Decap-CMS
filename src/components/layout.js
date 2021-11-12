import * as React from "react"
import { Link } from "gatsby"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header

  if (isRootPath) {
    header = (
      <h1 className="main-heading">
        <Link to="/">{title}</Link>
      </h1>
    )
  } else {
    header = (
      <Link className="header-link-home" to="/">
        {title}
      </Link>
    )
  }

  return (
    <div className="max-w-8xl mx-auto" data-is-root-path={isRootPath}>
      <header className="global-header">{header}</header>
      <main>{children}</main>
      <footer className="bg-green-200 text-grey-600 rounded-lg shadow-lg text-center px-4 py-4 md:text-xs flex items-center justify-between sm:mx-8">
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
  )
}

export default Layout
