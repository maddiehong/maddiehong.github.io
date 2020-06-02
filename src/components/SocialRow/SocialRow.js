import React from "react"
import { Row, Col } from "react-bootstrap"

import "./socialRow.css"

const socialRow = props =>  (
  <Row className="jumbo_social text-center">
    <Col>
      <a
        style={{ color:props.color }}
        href="https://www.github.com/maddiehong"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fab fa-github hover_effect" />
      </a>
    </Col>
    <Col>
      <a
        style={{ color:props.color }}
        href="https://www.linkedin.com//in/maddie-hong-289039114/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fab fa-linkedin hover_effect" />
      </a>
    </Col>
    <Col>
      <a
        style={{ color:props.color }}
        href="https://twitter.com/hmdehong/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fab fa-twitter hover_effect" />
      </a>
    </Col>

    <Col>
      <a
        style={{ color:props.color }}
        href="https://www.instagram.com/hmdehong/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fab fa-instagram hover_effect" />
      </a>
    </Col>
  </Row>
)
