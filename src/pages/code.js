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
    "As part of the Segal Design Center's Interdisciplinary Design Sequence, my team partnered with Raitong Organics Farm in Sisaket, Thailand to find new ways to incorporate accessible technology into responsible local farming practices. We came up with the design for CattleTECH, a cheap, durable, and humane virtual fencing collar for the herding of livestock in rural East Asian communities.",
  button1: "Source Code",
  button2: "Publications",
  sourceURL: "https://github.com",
  hostedURL: "http://www.google.com",
}

//Project 2

const project2 = {
  title: "Storytelling with GIFS: A new tool for sharing visual headlines",
  date: "",
  decription:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia quaerat enim amet voluptatum, aut quisquam a, veritatis dolores odit adipisci corrupti tenetur optio. Aliquam incidunt dolor laborum tempore officia obcaecati.",
  button1: "Source Code",
  button2: "Example Video",
  sourceURL: "https://github.com",
  hostedURL: "http://www.google.com",
}

//Project 3

const project3 = {
  title: "Music Blocks: A tangible music-making interface with blocks",
  date: "",
  decription:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia quaerat enim amet voluptatum, aut quisquam a, veritatis dolores odit adipisci corrupti tenetur optio. Aliquam incidunt dolor laborum tempore officia obcaecati.",
  button1: "Source Code",
  button2: "Example Video",
  sourceURL: "https://github.com",
  hostedURL: "http://www.google.com",
}

export default () => (
  <div className="App">
    <Layout>
      {/*########### MyJumbo PROPS ##########
    title: The title of the jumbotron
    body: The body of the Jumbotron
    */}
      <MyJumbo
        title={"Maddie Hong - Creative Coder"}
        body={"Just like a camera or paintbrush, code is a tool for channeling my creativity. I'm excited to explore ways in which code can be implemented to ask questions about sharing or improving the human experience."}
      />
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
          <Col>
            <ProjectCard
              imageSrcPath={project1Picture}
              title={project1.title}
              date={project1.date}
              description={project1.decription}
              button1={project1.button1}
              button2={project1.button2}
              sourceURL={project1.sourceURL}
              hostedURL={project3.hostedURL}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <ProjectCard
              imageSrcPath={project2Picture}
              title={project2.title}
              date={project2.date}
              description={project2.decription}
              button1={project2.button1}
              button2={project2.button2}
              sourceURL={project2.sourceURL}
              hostedURL={project2.hostedURL}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <ProjectCard
              imageSrcPath={project3Picture}
              title={project3.title}
              date={project3.date}
              description={project3.decription}
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
