import React from "react"
import Layout from "../components/layout/Layout"
import socialRow from "../components/SocialRow/SocialRow"

import "../fontawesome/css/all.min.css"
import "./index.css"

import { Container, Row, Col } from "react-bootstrap"

export default () => (
  <div className="App">
    <Layout>
      <div style={{marginTop: "10rem", marginBottom:"10rem"}}>
        <Container fluid>
            <Row className="text-left" >
              <h1>
                <span> Find me on the internet at <span id="cursor"/> </span>
              </h1>
            </Row>
            <Row className="text-left">
                <Col>
                     <h4>
                    Email:
                     </h4>
                     <h4>
                    Phone:
                     </h4>
                     <h4>
                    Instagram/Twitter/Most Things:
                     </h4>
                </Col>
                  <Col>
                     <h4>
                    <a href="mailto:maddiehmhong@gmail.com"> maddiehmhong@gmail.com
                    </a>
                     </h4>
                     <h4>
                    (818) 839-1751‬
                     </h4>
                     <h4>
                    @hmdehong
                     </h4>
                </Col>
            </Row>
            <Row className="text-center" style={{marginTop:"2rem"}}>
          
                <Col>
                  <a
                    href="https://www.instagram.com/hmdehong"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-instagram social_icon"/>
                  </a>
                </Col>

                <Col>
                  <a
                    href="https://www.facebook.com/maddie.hong.5"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-facebook social_icon"/>
                  </a>
                </Col>

                <Col>
                  <a
                    href="https://twitter.com/hmdehong"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-twitter social_icon"/>
                  </a>
                </Col>

                <Col>
                  <a
                    href="https://www.linkedin.com//in/maddie-hong-289039114/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-linkedin social_icon" />
                  </a>
                </Col>

                <Col>
                  <a
                    href="https://www.github.com/maddiehong"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-github social_icon" />
                  </a>
                </Col>
              </Row>
            <Row style={{marginTop:"3rem"}}>
              <h1>
                <span> Find me IRL somewhere in <span id="cursor"/> </span>
              </h1>
            </Row>
            <Row className="text-left">
              <div>
                   <h4>
                  Evanston, IL
                   </h4>
              </div>
            </Row>
          </Container>
      </div>
    </Layout>
  </div>
)
