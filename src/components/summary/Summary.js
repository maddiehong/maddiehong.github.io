import React from "react"

import { Link } from "gatsby"

import { Container, Row, Col } from "react-bootstrap"

import profile from "../../images/portfolio/Profile3.png"

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
    <Row className="myRow" >
      <h4 className="goal_text text-center">

      </h4>
      <br />
      <Col className="my-auto" data-sal="flip-up" data-sal-delay="500" data-sal-duration="2000"
  data-sal-easing="ease-out-back">
        <div>
          <img src={profile} className = "img-fluid" alt="profilephoto" imageresize="contain" width={400} height={450}/>
        </div>
      </Col>
      <Col className="my-auto" data-sal="fade" data-sal-delay="500" data-sal-duration="1000"
  data-sal-easing="ease">
        <Row>
          <h4> I am a : </h4>
        </Row>
        <Row>
          <Col>
            <ul className="bigger">
              <li> &#123; filmmaker </li>
              <li> performing artist </li>
              <li> designer </li>
            </ul>
          </Col>
          <Col>
            <ul className="bigger">
              <li> creative coder </li>
              <li> tinkerer </li>
              <li> constant learner&#125;</li>
            </ul>
          </Col>
        </Row>
        <h4 className="text-justify"> I believe in reflecting on our past to envision a better future. Combining storytelling with technology makes that future a reality.
        </h4>
      </Col>
    </Row>


    <hr/>
    <Row className="myRow">
      <h3 data-sal="fade" data-sal-delay="500" data-sal-duration="1000"
  data-sal-easing="ease">These are some of the tools I'm using right now</h3>
    </Row>
    <Row>
      <div className="smaller" data-sal="slide-up" data-sal-delay="1000" data-sal-duration="2000"
  data-sal-easing="ease-out-back">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>
    </Row>
    <br />
    <Row className="text-center tech_icons" data-sal="flip-up" data-sal-delay="500" data-sal-duration="2000"
  data-sal-easing="ease-out-back">
      <Col>
          <Link to="/art">
             <i className="fab fa-adobe hover_effect_PB" style={{marginBottom:"2rem"}}/>
          </Link>
        <br />
        {/*<span>Adobe Creative Cloud</span>*/}
      </Col>
      <Col>
        <Link to="/art">
        <i className="fas fa-vr-cardboard hover_effect_PB" />
        </Link>
        <br />
      </Col>
      <Col>
        <Link to="/art">
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
    <Row className="text-center tech_icons myRow" data-sal="flip-up" data-sal-delay="500" data-sal-duration="2000"
  data-sal-easing="ease-out-back">
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
    <Row data-sal="fade" data-sal-delay="500" data-sal-duration="1000"
  data-sal-easing="ease">
      <h3>Just like me (and this website) this list is a work in progress <br/> <br/>Have a suggestion for me?</h3>
      <h4>         Let's chat{" "}
          <a className="hover_effect_PB" href="mailto:hello@maddiehong.me">
            <span>hello@maddiehong.me</span>
          </a> </h4>
    </Row>
    <br/>
  </Container>

)

export default Summary
