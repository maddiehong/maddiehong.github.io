import React from "react"
import Layout from "../components/layout/Layout"
import { Container, Row, Col } from "react-bootstrap"
import MyJumbo from "../components/myJumbo/MyJumbo"
import ProjectCard from "../components/portProjectCard/ProjectCard"

import "./index.css"

import project1Picture from "../images/portfolio/CattleTechCard.png"
import project2Picture from "../images/portfolio/SWGIFSCard.png"
import project3Picture from "../images/portfolio/MusicBloxCard.png"

/*######### PROJECT OBJECTS TEMPLATE################
import projectPicture from ""
const projectProject = {
  title: "",
  date: "",
  decription: "",
  sourceURL: "",
  hostedURL: "",
}
#####################################################
*/

//TODO: Make this into an array with objects and map through them instead down below.

//Project 1

const project1 = {
  title: "CattleTECH: Accessible Open-Source Virtual Fencing Design",
  date: "",
  decription:
    "As part of the Segal Design Center's Interdisciplinary Design Sequence, my team partnered with Raitong Organics Farm in Sisaket, Thailand to research potential accessible technology to incorporate into local responsible farming practices. We designed CattleTECH as a cheap, durable, and humane virtual fencing collar to assist the herding of local livestock.",
  askme: "Arduino, design for accessibility, community design research",
  button1: "Source Code",
  button2: "Publications",
  sourceURL: "https://github.com/maddiehong/CattleTECH",
  hostedURL: "https://ideas.northwestern.edu/projects/cattletech.html",
}

//Project 2

const project2 = {
  title: "Storytelling with GIFS: A new tool for sharing visual headlines",
  date: "",
  decription:
    "As part of the Northwestern Knight Lab's Studio projects, my team sought to make news headlines more visual, shareable, and dynamic. We propose StoryBytes, an 8 sec GIF format for a visual headline to engage users on any platform.",
  askme: "product design, user prototyping, React.js, image rendering, journalism tech, getting people to actually read the news",
  button1: "More Info",
  //button2: "Example Video",
  sourceURL: "https://studio.knightlab.com/projects/gif-story/",
  //hostedURL: "http://www.google.com",
}

//Project 3

const project3 = {
  title: "Music Blox: A tangible music-making interface with blocks",
  date: "",
  decription:
    "Learning to play compose music can be an intimidating feat for non-musicians. How might we envision music not just as notation but as a tangible sound manipulation? Music Blox is a tangible music interface that allows non-musicians to explore music-making through expressions of movement.",
  askme: "interactive museum exhibits, tangible technology, embodied tech, embodied metaphor",
  //button1: "Source Code",
  //button2: "Example Video",
//  sourceURL: "https://github.com",
  //hostedURL: "http://www.google.com",
}

export default () => (
  <div className="App">
    <Layout>
      {/*########### MyJumbo PROPS ##########
    title: The title of the jumbotron
    body: The body of the Jumbotron
    */}
      <div data-sal="fade" data-sal-delay="500" data-sal-duration="1000" data-sal-easing="ease">
      <MyJumbo
        title={"Maddie Hong - Creative Coder"}
        body={<p>Code is not just a tool for creativity. <span className="purple"> Code is creative.</span> I'm excited to explore technology that questions our current means of sharing or improving the human experience.</p>}
      />
      </div>
      <hr />

      {/* TODO: Move the project objects into an array and map through them below. DRY is better. */}

      <Container style={{ marginTop: "2.5rem" }}>
        {/*/Props:
      //imageSrcPath: the path to the image used
      //title: The title of the card/App
      //date: The date of the card
      //description: Short description of the card
      //sourceURL: URL to the source code of the project
      //hostedURL: URL to the hosted version of the app*/}
       <Row>
          <Col data-sal="fade" data-sal-delay="500" data-sal-duration="1000" data-sal-easing="ease">
            <ProjectCard
              imageSrcPath={project1Picture}
              title={project1.title}
              date={project1.date}
              description={project1.decription}
              askme={project1.askme}
              button1={project1.button1}
              button2={project1.button2}
              sourceURL={project1.sourceURL}
              hostedURL={project3.hostedURL}
            />
          </Col>
        </Row>
        <br/>
        <Row>
          <Col data-sal="fade" data-sal-delay="500" data-sal-duration="1000" data-sal-easing="ease">
            <ProjectCard
              imageSrcPath={project2Picture}
              title={project2.title}
              date={project2.date}
              description={project2.decription}
              askme={project2.askme}
              button1={project2.button1}
              button2={project2.button2}
              sourceURL={project2.sourceURL}
              hostedURL={project2.hostedURL}
            />
          </Col>
        </Row>
        <br/>
        <Row>
          <Col data-sal="fade" data-sal-delay="500" data-sal-duration="1000" data-sal-easing="ease">
            <ProjectCard
              imageSrcPath={project3Picture}
              title={project3.title}
              date={project3.date}
              description={project3.decription}
              askme={project3.askme}
              button1={project3.button1}
              button2={project3.button2}
              sourceURL={project3.sourceURL}
              hostedURL={project3.hostedURL}
            />
          </Col>
        </Row>
      </Container>
    </Layout>
  </div>
)
