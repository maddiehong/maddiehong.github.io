import React from "react"
import { Jumbotron } from "react-bootstrap"

//import custom styles
import "./hero.css"
import SocialRow from "../SocialRow/SocialRow"

const Hero = () => (
  <Jumbotron style={jumbo_styles} className="jumbo" fluid>
    <div className="jumbo_content">
      <h1 data-sal="fade" data-sal-delay="500" data-sal-duration="1000"
  data-sal-easing="ease"><span>My name is Maddie <span id="cursor"/></span></h1>
      <br />
      <h3  data-sal="fade" data-sal-delay="500" data-sal-duration="1000"
  data-sal-easing="ease">
        I explore what <span className="purple"> stories </span> and <span className="purple"> tech </span>  say about <span className="purple"> humans </span>
      </h3>
    </div>
  </Jumbotron>
)

const jumbo_styles = {
  backgroundColor: "#F2EFEA",
  paddingLeft: "1rem",
}

export default Hero
