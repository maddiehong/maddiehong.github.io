import React from "react"
import Layout from "../components/layout/Layout"
import { Container, Row, Col } from "react-bootstrap"
import MyJumbo from "../components/myJumbo/MyJumbo"
import ProjectCard from "../components/portProjectCard/ProjectCard"

import "./index.css"

import project1Picture from "../images/portfolio/DirectingCard.png"
import project2Picture from "../images/portfolio/EditingCard.png"
import project3Picture from "../images/portfolio/DesignCard.png"

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
  title: "Directing Reel (Coming Soon!)",
  date: " ",
  decription:
    "My work as a director spans short films, performance pieces, and interactive art pieces. I aim to portray not just narrative, but haptic and experiential moments through telling stories. Often, I explore stories of those on the fringes of society and modern media. Talk to me about labor rights, technology, and politics!",
  button1: "View Reel",
  button2: "View My Latest Project",
  sourceURL: "https://vimeo.com/maddiehong/",
  hostedURL: "https://vimeo.com/390387719",
}

//Project 2

const project2 = {
  title: "Editing Reel (Coming Soon!)",
  date: " ",
  decription:
    "Film editing is the perfect synthesis of storytelling and technology. I love working as a film editor because it hones my craft as a visual artist, writer, technologist, and active learner. I am skilled in picture editing, motion graphics, basic coloring and sound design. I am always looking to work on new projects for a creative and technical challenge!",
  button1: "View Reel",
  button2: "View My Latest Project",
  sourceURL: "https://vimeo.com/maddiehong/",
  hostedURL: "https://vimeo.com/390387719",
}

//Project 3

const project3 = {
  title: "Art Design Portfolio",
  date: " ",
  decription:
    "I love creating things and actualizing ideas into the real world. I have a background in design, carpentry, puppetry, and costuming for film and theatre. Though crafting is now more of a hobby, I am always looking for things to make and share!",
  button1: "View Portfolio",
  button2: "View My Latest Project",
  sourceURL: "https://www.flickr.com/photos/maddiehongdesigns/",
  hostedURL: "https://www.instagram.com/hmdehong",
}

export default () => (
  <div className="App">
    <Layout>
      {/*########### MyJumbo PROPS ##########
    title: The title of the jumbotron
    body: The body of the Jumbotron
    */}
      <MyJumbo
        title={"Maddie Hong - Filmmaker"}
        body={"Film contains a unique ability to viscerally present perspective, space, and the imagination. I work as a writer, director, editor, and designer to hone my craft as a filmmaker and storyteller."}
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
