import React from "react"

import { Link } from "gatsby"

import { Container, Row, Col } from "react-bootstrap"

import profile from "../../images/portfolio/Profile1.png"

import "../../fontawesome/css/all.min.css"

import "./summary.css"

const Summary = () => (
  <Container className="content" fluid>
  {/*}
    <Row style={{ marginTop: "1.8rem" }}>
      <Col>
        <h4 className="hover_effect_PB">Tagline1</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Exercitationem quod maiores maxime suscipit assumenda vitae, incidunt
          doloremque ab voluptate, atque explicabo ea adipisci. Et quibusdam
          odit expedita quis officia minima!
        </p>
      </Col>
      <Col>
        <h4 className="hover_effect_PB">Tagline2</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, modi
          reiciendis. Placeat quia facilis neque, corporis ullam maiores eaque
          quos autem voluptatibus, minus totam animi quo sint ea, atque sit?
        </p>
      </Col>
    </Row>
    <br />
    */}
    <Row>
      <h4 className="goal_text text-center">
       
      </h4>
      <br />
      <Col>
        <div>
          <img src={profile} className = "img-fluid" alt="profilephoto" imageresize="contain" width={400} height={450}/>
        </div>
      </Col>
      <Col>
        <h3> I am a... </h3>
        <br/>
        <ul>
          <li> filmmaker </li>
          <li> editor </li>
          <li> performing artist </li>
          <li> designer </li>
          <li> creative coder </li>
          <li> constant learner </li>
        </ul>
        <h4 className="goal_text text-justify"> My goal is to throw what I can out there, constantly be creating, and increasingly making bold work that reflects an ever-changing world.
        </h4>
      </Col>
    </Row>

    
    <hr/>
    <h3>Tools I'm working with right now</h3>
    <br />
    <Row className="text-center tech_icons">
      <Col>
          <Link to="/film">
             <i className="fab fa-adobe hover_effect_PB" style={{marginBottom:"2rem"}}/> 
          </Link>
        <br />
        {/*<span>Adobe Creative Cloud</span>*/}
      </Col>
      <Col>
        <Link to="/film">
        <i className="fas fa-vr-cardboard hover_effect_PB" />
        </Link>
        <br />
      </Col>
      <Col>
        <Link to="/film">
        <i className="fab fa-vimeo hover_effect_PB" />
        </Link>
        <br />
      </Col>
      <Col>
        <Link to="/code">
        <i className="fab fa-python hover_effect_PB" />
        </Link>
        <br />
      </Col>
    </Row>
    <Row className="text-center tech_icons">
      <Col>
        <Link to="/code">
        <i className="fab fa-js hover_effect_PB" />
        </Link>
        <br />
      </Col>
      <Col>
        <Link to="/code">
        <i className="fab fa-react hover_effect_PB" />
        </Link>
        <br />
      </Col>
      <Col>
        <Link to="/code">
        <i className="fab fa-html5 hover_effect_PB" />
        </Link>
        <br />
      </Col>
      <Col>
        <Link to="/code">
        <i className="fab fa-css3 hover_effect_PB" />
        </Link>
        <br />
      </Col>
    </Row>
    <br />
    <h3>This list is constantly changing! Have a suggestion for me?</h3>
    <h4>         Let's chat{" "}
        <a href="mailto:maddiehmhong@gmail.com">
          <span>maddiehmhong@gmail.com</span>
        </a> </h4>

  </Container>
)

export default Summary
