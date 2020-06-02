import React from "react"
import { Jumbotron } from "react-bootstrap"

//import custom styles
import "./hero.css"
import SocialRow from "../SocialRow/SocialRow"

const Hero = () => (
  <Jumbotron style={jumbo_styles} className="jumbo" fluid>
    <div className="jumbo_content">
      <h1><span>My name is Maddie <span id="cursor"/></span></h1>
      <br />
      <h3>
        I explore stories and tech and what they say about humans.
      </h3>
    </div>
  </Jumbotron>
)

const jumbo_styles = {
  backgroundColor: "#F2EFEA",
  paddingLeft: "1rem",
}

export default Hero
