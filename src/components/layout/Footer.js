import React from "react"

import { Container, Jumbotron, Row, Col } from "react-bootstrap"
import { Link } from "gatsby"

import "./footer.css"
import "../../fontawesome/css/all.min.css"

import gatsbylogo from "../../images/gatsbylogo.png"

const Footer = () => (
  <Jumbotron fluid style={footer_styles}>
    <Container style={{ maxWidth: "960px", paddingLeft:"2rem", paddingRight:"2rem"}}>
      <Row>
        <Col>
            <a href = "MAILTO:hello@maddiehong.me">
            <span className="hover_effect" style={{ fontSize: "1.3rem" }}>Free for a coffee, tea, or chat anytime.</span>
            </a>
          {/*<br />*/}
        </Col>
      </Row>

      <Row className="footer_social text-center" >
  
        <Col>
          <a
            href="https://www.instagram.com/hmdehong"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-instagram hover_effect" />
          </a>
        </Col>

        <Col>
          <a
            href="https://www.facebook.com/maddie.hong.5"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-facebook hover_effect" />
          </a>
        </Col>

        <Col>
          <a
            href="https://twitter.com/hmdehong"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-twitter hover_effect" />
          </a>
        </Col>

        <Col>
          <a
            href="https://www.linkedin.com//in/maddie-hong-289039114/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-linkedin hover_effect" />
          </a>
        </Col>

        <Col>
          <a
            href="https://www.github.com/maddiehong"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-github hover_effect" />
          </a>
        </Col>
                <Col>
                  <a
                    href="https://vimeo.com/maddiehong"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-vimeo hover_effect" />
                  </a>
                </Col>
      </Row>
      <Row className="text-center" style={{ marginTop: "1.5rem" }}>
        <Col>
          <span style={{fontSize: "1rem"}}> Maddie Hong © {new Date().getFullYear()}, Built with </span>
          <span
            className="fas fa-mug-hot"
            style={{
              marginLeft: "10px",
              marginRight: "3px",
              fontSize: "1rem",
            }}
          />
          &nbsp; & 
          <span
            style={{
              marginLeft: "10px",
              marginRight: "3px",
              fontSize: "1rem",
            }}>
            <img src={gatsbylogo} alt="gatsby" imageresize="contain" width={15} height={15} />
           </span>
          
        </Col>
      </Row>
    </Container>
  </Jumbotron>
)

const footer_styles = {
  marginTop: "0",
  marginBottom: "0",
  backgroundColor: "#3B6BA9",
  color: "#000",
  paddingBottom: "0",
  paddingTop: "2rem",
  width: "100%",
  bottom:0,
}

export default Footer
