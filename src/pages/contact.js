import React from "react"
import Layout from "../components/layout/Layout"
import socialRow from "../components/SocialRow/SocialRow"

import "../fontawesome/css/all.min.css"
import "./index.css"

import { Container, Row, Col } from "react-bootstrap"

export default () => (
  <div className="App">
    <Layout>
      <div style={{
        marginTop: "2.5rem",
        marginBottom:"0rem",
        paddingLeft: "1rem",
        paddingRight: "1rem"}}>
        <Container fluid>
            <Row className="text-center" data-sal="fade" data-sal-delay="500" data-sal-duration="1000" data-sal-easing="ease">
              <h1>
                <span> Find me at any of these places <span id="cursor"/> </span>
              </h1>
            </Row>
            <Row className="text-center" data-sal="fade" data-sal-delay="500" data-sal-duration="1000" data-sal-easing="ease">
                     <h4>
                    &nbsp;&nbsp; Email: &nbsp;&nbsp;&nbsp;&nbsp; <a  className="hover_effect_PB" href="mailto:hello@maddiehong.me"> hello@maddiehong.me </a>
                     </h4>
           </Row>
           <Row className="text-center" data-sal="fade" data-sal-delay="500" data-sal-duration="1000" data-sal-easing="ease">
                     <h4>
                    &nbsp;&nbsp; Phone: &nbsp;&nbsp;&nbsp;&nbsp; <mark> (818) 839-1751‬</mark>
                     </h4>
           </Row>
           <Row className="text-center" data-sal="fade" data-sal-delay="500" data-sal-duration="1000" data-sal-easing="ease">
                     <h4>
                    &nbsp;&nbsp; Instagram + Twitter: &nbsp;&nbsp;&nbsp;&nbsp;  <mark> @hmdehong</mark>
                     </h4>
            </Row>
           <Row className="text-center" data-sal="fade" data-sal-delay="500" data-sal-duration="1000" data-sal-easing="ease">
                     <h4>
                    &nbsp;&nbsp; IRL: &nbsp;&nbsp;&nbsp;&nbsp;  drinking an iced coffee in <mark> Los Angeles, CA </mark>
                     </h4>
            </Row>
            <Row className="text-center" style={{marginTop:"2rem"}} data-sal="flip-up" data-sal-delay="1000" data-sal-duration="2000"
  data-sal-easing="ease-out-back">

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
                <Col>
                  <a
                    href="https://vimeo.com/maddiehong"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-vimeo social_icon" />
                  </a>
                </Col>
              </Row>
            {/*}
            <Row style={{marginTop:"10rem"}}>
              <h1>
                <span> Find me IRL somewhere in <span id="cursor"/> </span>
              </h1>
            </Row>
            <Row className="text-left">
              <div>
                   <h4>
                  &nbsp;&nbsp; Evanston, IL
                   </h4>
              </div>
            </Row> */}
          </Container>
      </div>
    </Layout>
  </div>
)
