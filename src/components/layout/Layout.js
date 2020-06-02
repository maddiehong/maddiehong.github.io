/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import SEO from "../Seo"
import MyNavbar from "../navbar/MyNavbar"
import Footer from "./Footer"
import "../../pages/index.css"

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <SEO
          title="Maddie Hong Portfolio"
          keywords={[
            `portfolio`,
            `website`,
            `film`,
            `filmmaker`,
            `interactive art`,
            `creative code`,
            `VR`,
            `mixed media`,
          ]}
        />
        <MyNavbar />
        <div  className="bottom_border" style={{minHeight:"100vh"}}>
          <div
            style={{
              margin: `0 auto`,
              maxWidth: 960,
              padding: `0px`,
              paddingTop: 50,
            }}
          >
            <main>{children}</main>
          </div>
        </div>
        <Footer />
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
