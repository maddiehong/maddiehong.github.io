/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import { location } from "react"



import SEO from "../Seo"
import MyNavbar from "../navbar/MyNavbar"
import Footer from "./Footer"
import "../../pages/index.css"


const header = {
  home: "",
  me:"",
  film:"",
  code:"",
  contact:""
} 

const getPage = () =>{
  const currentPage = "active"
  const otherPage = ""
  const loc = location.href
  if (loc.endsWith("home/")){
    header.home = currentPage
    }
  else if (loc.endsWith("me/")){
    header.me = currentPage
  }
  else if (loc.endsWith("film/")){
    header.film = currentPage
  }
  else if (loc.endsWith("code/")){
    header.code = currentPage
  }
  else if (loc.endsWith("contact/")){
    header.contact = currentPage
  }
}


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
        <getPage/>
        <MyNavbar 
          home={header.home}
          me={header.me}
          film={header.film}
          code={header.code}
          contact={header.contact}
        />
        <div  className="bottom_border" style={{minHeight:"100vh"}}>
          <div
            style={{
              margin: `0 auto`,
              maxWidth: 960,
              padding: `0px`,
              paddingTop: '75px',
              paddingBottom: '75px',
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
