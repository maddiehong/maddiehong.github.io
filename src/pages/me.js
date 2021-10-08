import React from "react"
import Layout from "../components/layout/Layout"
import MyJumbo from "../components/myJumbo/MyJumbo"
import MyButton from "../components/myButton/MyButton"

import "../fontawesome/css/all.min.css"
import "./index.css"

import { Container, Row, Col } from "react-bootstrap"

import CV from "../MaddieHongResume.pdf" //Import you CV file here!
import profilephoto from "../images/hithere.jpg"

export default () => (
  <div className="App">
    <Layout>
      <div data-sal="fade" data-sal-delay="500" data-sal-duration="1000"
  data-sal-easing="ease">
      <MyJumbo
        body={<p>My name is Helen Madeline Christine Ortega Hong, but call me <span className="purple">Maddie</span></p>}
        title={"Hi."}
      /> </div>
     <hr />
      <div style={{paddingBottom: "6rem" }}>
        <Container fluid>
          <Row className="align-items-center" md={4}>
            <Col className ="text-center" data-sal="flip-up" data-sal-delay="500" data-sal-duration="2000"
  data-sal-easing="ease-out-back">
                <Row className ="text-center">
                  <div style={{margin:"2rem"}}>
                    <img src={profilephoto} className = "img-fluid" alt="profilephoto" imageresize="contain" width={400} height={400}/>
                  </div>
                </Row>
            </Col>
            <Col className="text-justify" xs={6} data-sal="fade" data-sal-delay="500" data-sal-duration="1000"
  data-sal-easing="ease">
                <h4>I’m a filmmaker, designer, and new media artist in <span className="purple">Evanston, IL </span></h4>
                <br />
                <p>
                  Raised 20 minutes from the nation’s capital, in Fairfax, VA by a Filipina mother and Korean-American father, I’ve always been fascinated by the truly human, unifying power of storytelling. And as a child of the internet, I also know technology drives society, politics, and culture. I’m constantly curious and eager to explore how technology evolves the form and tools of telling universal, immersive, and emotional stories.
                  <br />
                  <br />
                  I graduated Northwestern University with a degree in Film, minor in Computer Science, and a certificates in Engineering Design and Immersive Media.
                  <br />
                  <br />
                  I’m also a big fan of musical theatre, improvisational podcasts, intersectional new media, the abandoned art of found-footage movies, and loose leaf tea.
                </p>
            </Col>
          </Row>
          {/* This is the beginning of the career section*/}
        </Container>
      </div>
    </Layout>
  </div>
)
