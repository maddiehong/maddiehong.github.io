import React from "react"
import { Link } from "gatsby"

import {Navbar, Nav, NavDropdown} from 'react-bootstrap'

import "./myNavbar.css"
import logo from './logo.png'


const MyNavbar = props => (
  <div className="top_border" style={{ marginBottom: "0px", width: "100%", color: "#7A7C83"}}>
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 1200,
        padding: `0px`,
        paddingTop: '20px',
        paddingLeft: '5px',
        paddingRight: '5px'
      }} 
    >
      <Navbar collapseOnSelect expand="md" bg="#F2EFEA" variant="light">
        <Navbar.Brand href="/"><img src={logo} alt="Logo" imageresize="contain" width={150} height={100}/></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link className={props.home}href="/">Home</Nav.Link>
            <Nav.Link className={props.me}  href="/me">Me</Nav.Link>
            <Nav.Link className={props.film} href="/art">Art</Nav.Link>
            <Nav.Link className={props.code} href="/code">Code</Nav.Link>
            <Nav.Link className={props.contact} href="/contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      {/* <ul className="nav_styles">
        <li className="float_left">
          <div >
            <Link to="/" className="menu_link">
                <img src={logo} alt="Logo" imageresize="contain" width={150} height={100}/>
            </Link>
          </div>
        </li>
        <li className="float_right">
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
      </ul> */}
    </div>
  </div>
)

export default MyNavbar
