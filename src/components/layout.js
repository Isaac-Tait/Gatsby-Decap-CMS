import * as React from "react"

import Footer from "./footer.js"

const Layout = ({ location, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath

  return (
    <div className="max-w-8xl mx-auto" data-is-root-path={isRootPath}>
      <main>{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
