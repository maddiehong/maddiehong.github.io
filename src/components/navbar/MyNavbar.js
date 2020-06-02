import React from "react"
import { Link } from "gatsby"

import "./myNavbar.css"
import logo from './logo.png'

const MyNavbar = () => (
  <div className="top_border" style={{ marginBottom: "0px", width: "100%", color: "#7A7C83"}}>
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 1200,
        padding: `0px`,
        paddingTop: 0,
      }}
    >
      <ul className="nav_styles">
        <li className="float_left">
          <div >
            <Link to="/" className="menu_link">
                <img src={logo} alt="Logo" imageresize="contain" width={150} height={100}/>
            </Link>
          </div>
        </li>
        <li className="float_right">
          {/* eslint-disable-next-line */}
        </li>
        <li className="float_right" style={{marginRight:"0rem"}}>
          <Link to="/contact" className="menu_link">
            Contact
          </Link>
        </li>
        <li className="float_right">
          <Link to="/code" className="menu_link">
            Code
          </Link>
        </li>
        <li className="float_right">
          <Link to="/film" className="menu_link">
            Film
          </Link>
        </li>
        <li className="float_right">
          <Link to="/me" className="menu_link">
            Me
          </Link>
        </li>
        <li className="float_right">
          <Link to="/" className="menu_link">
            Home
          </Link>
        </li>
      </ul>
    </div>
  </div>
)

export default MyNavbar
