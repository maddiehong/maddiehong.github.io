import React from "react"
import Layout from "../components/layout/Layout"
import MyJumbo from "../components/myJumbo/MyJumbo"
import MyButton from "../components/myButton/MyButton"

import "../fontawesome/css/all.min.css"
import "./index.css"

import { Container, Row, Col } from "react-bootstrap"

import CV from "../MaddieHongResume.pdf" //Import you CV file here!
import profilephoto from "../images/ProfilePhotogradient.png"

export default () => (
  <div className="App">
    <Layout>
      <MyJumbo
        body={<p>My name is Helen Madeline Christine Ortega Hong, but call me <mark>Maddie</mark>.</p>}
        title={"Hi."}
      />
      <div style={{ marginTop: "-8rem", paddingBottom: "1.5rem" }}>
        <Container fluid>
          <Row >
            <Col className ="text-center">
                <Row className ="text-center">
                  <div style={{margin:"2rem"}}>
                    <img src={profilephoto} className = "img-fluid" alt="profilephoto" imageresize="contain" width={400} height={400}/>
                  </div>
                </Row>
                <Row className ="text-center">
                    <MyButton text={"view my resume"} URL={CV} />
                </Row>
            </Col>
            <Col className="text-justify">
                <h5>I’m a filmmaker, designer, and new media artist in <mark>Evanston, IL</mark>.</h5>
                <br />
                <p>
                  Born less than than 10 miles from the nation’s capital in Fairfax, VA to a Filipino mother and Korean-American father, I’ve always been fascinated by the truly human, unifying power of storytelling. I’m constantly curious, and eager to explore how technology evolves the form and tools of telling universal, immersive, and emotional stories.
                  <br />
                  <br />
                  I graduate Northwestern University in this (crazy!) Spring with a degree in Film and minor in Computer Science.
                  <br />
                  <br />
                  I’m also a big fan of musical theatre, improvisational podcasts, social justice, and loose leaf tea.
                </p>
            </Col>
          </Row>
          {/* This is the beginning of the career section*/}
        </Container>
      </div>
    </Layout>
  </div>
)
