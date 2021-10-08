import React from "react"
import { Link } from "gatsby"

import {Navbar, Nav, NavDropdown} from 'react-bootstrap'


import "./myNavbar.css"
import logo from './logo.png'

const ProjectCard = props => {
  return (
    <div className="project_container">
      <Row>
        <Col>
          <img
            src={props.imageSrcPath}
            alt={"Smiley face"}
            style={{ maxWidth: "100%" }}
          />
        </Col>
        <Col>
          <h4>
            {props.title}
            <br />
            <small>{props.date}</small>
          </h4>

          <p>{props.description}</p>

          <Row>
            <MyButton text={props.button1} URL={props.sourceURL} />
            <MyButton text={props.button2} URL={props.hostedURL} />
          </Row>
        </Col>
      </Row>
    </div>
  )
}

export default ProjectCard
