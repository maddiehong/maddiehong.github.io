import React from "react"
import { Row, Col } from "react-bootstrap"

import "./projectCard.css"
import MyButton from "../myButton/MyButton"

//Props:
//imageSrcPath: the path to the image used
//title: The title of the card/App
//date: The date of the card
//description: Short description of the card
//sourceURL: URL to the source code of the project
//hostedURL: URL to the hosted version of the app

const ProjectCard = props => {
  return (
    <div className="project_container">
      <Row className = "align-items-center">
        <Col className = "align-items-center">
          <img
            src={props.imageSrcPath}
            alt={"Smiley face"}
            style={{ maxWidth: "100%" }}
          />
        </Col>
        <Col className = "align-top">
          <h4 className="title">
            {props.title}
            <br />
            <small>{props.date}</small>
          </h4>

          <p>{props.description}</p>
          <p> <span className="highlight"> ASK ME ABOUT: </span>{props.askme}</p>

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
