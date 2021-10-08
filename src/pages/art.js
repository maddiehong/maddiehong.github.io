import React from "react"
import Layout from "../components/layout/Layout"
import { Container, Row, Col } from "react-bootstrap"
import MyJumbo from "../components/myJumbo/MyJumbo"
import ProjectCard from "../components/portProjectCard/ProjectCard"

import "./index.css"

import project1Picture from "../images/portfolio/NewMediaCard.png"
import project2Picture from "../images/portfolio/DirectingCard.png"
import project3Picture from "../images/portfolio/EditingCard.png"
import project4Picture from "../images/portfolio/DesignCard.png"

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
  title: "New Media",
  date: " ",
  decription:
    "What is 'New Media'? WHY is 'New Media'? Where does it fit? My work seeks to ask (not so much answer) these questions by blending tangible experience with digital storytelling. ",
  askme: "AR, VR, projections, interactives, intersectional new media storytelling, accesible interactives, making this website more exciting",
//  button1: "",
  //button2: "",
// sourceURL: "",
  //hostedURL: "9",
}


const project2 = {
  title: "Film Directing",
  date: " ",
  decription:
    "In my films aim to portray not just narrative, but haptic and experiential moments through telling stories. Often, I explore stories of people on the fringe: personally and within society.",
  askme: "my short films and performance pieces, haptics, labor rights ",
  //button1: "",
  //button2: "",
//  sourceURL: "",
  //hostedURL: "",
}

//Project 2

const project3 = {
  title: "Film Editing",
  date: " ",
  decription:
    "I love working as a film editor because it hones my craft as a visual artist, writer, technologist, and active learner. I am skilled in picture editing, motion graphics, basic coloring and sound design. I am always looking to work on new projects for a creative and technical challenge!",
  askme: "picture editing, motion graphics, workflow and bin organization, AI(??!), getting Adobe Premiere to do that thing you need",
// button1: "View Reel",
  //button2: "View My Latest Project",
  //sourceURL: "",
//  hostedURL: "",
}

//Project 3

const project4 = {
  title: "Art Design Portfolio",
  date: " ",
  decription:
    "I love creating things and actualizing ideas into the real world. I have a background in design, carpentry, puppetry, and costuming for film and theatre. Though crafting is now more of a hobby, I am always looking for things to make and share!",
  askme: "puppets, set design, 3D modeling, that time I went to essentially the theatre Olympics in Prague",
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
      <div data-sal="fade" data-sal-delay="500" data-sal-duration="1000" data-sal-easing="ease">
      <MyJumbo
        title={"Maddie Hong - Filmmaker/Multimedia Artist"}
        body={<p> My work seeks to collaborate <span className="purple"> perspective, space, and the imagination.</span> I work as a writer, director, editor, and designer to hone my voice and craft as a mulitmedia storyteller.</p>}
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
        <br/>
        <Row>
          <Col data-sal="fade" data-sal-delay="500" data-sal-duration="1000" data-sal-easing="ease">
            <ProjectCard
              imageSrcPath={project4Picture}
              title={project4.title}
              date={project4.date}
              description={project4.decription}
              askme={project4.askme}
              button1={project4.button1}
              button2={project4.button2}
              sourceURL={project4.sourceURL}
              hostedURL={project4.hostedURL}
            />
          </Col>
        </Row>
      </Container>
    </Layout>
  </div>
)
