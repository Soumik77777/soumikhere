import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works</strong>
        </h1>
        {/*
        <p style={{ color: "white" }}>
          Here are few projects I've worked on recently.
        </p>
        */}
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              header="Astrophysics, Stellar Evolution"
              imgPath={chatify}
              isBlog={false}
              title="Common Envelope Evolution on the Asymptotic Giant Branch: Towards Building a Simple Model"
              subtitle="M.Sc. Dissertation Project, continuing"
              description="Common Envelope (CE) is a significant yet poorly understood process in the evolution of binary star systems. Observing CE directly is practically impossible due to its short duration, and simulating it computationally poses challenges due to computational demands and the diverse nature of binary systems undergoing CE. This research focuses on analyzing a simulated binary system, with an Asymptotic Giant Branch (AGB) star as the primary core and a companion star of equal mass. The simulation extends for approximately 40 orbital revolutions, although a stationary orbit is not achieved. The study investigates the drag force exerted by gas particles on the secondary mass and compares it to previous simulation-based works. Additionally, the torque applied to both stars by the gas medium is calculated and analyzed. Furthermore, the research evaluates the torque exerted by a certain percentage of gas and determines the amount of gas required to achieve a comparable torque to the total torque. The study then aims to model the torque exerted on the stars by treating the bulk of gas inside the equidensity surface as a homogeneous and prolate ellipsoidal body. By parameterizing the ellipsoid and obtaining the semi-axes (A, B, C) and the lag angle between the binary system axis and the major axis of the ellipsoid ($\Delta \phi$), the torque applied to both stars within the bulk of gas is calculated from the potential energy inside the fitted ellipsoid. The calculated torque is found to be consistent with the torque calculated from the drag force. Moreover, an expression for the binary separation is developed and successfully modeled within the timescale of evolution."
              //ghLink="https://github.com/soumyajit4419/Chatify"
              demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Bits-0f-C0de"
              description="My personal blog page build with Next.js and Tailwind Css which takes the content from makdown files and renders it using Next.js. Supports dark mode and easy to write blogs using markdown."
              ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
              demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Editor.io"
              description="Online code and markdown editor build with react.js. Online Editor which supports html, css, and js code with instant view of website. Online markdown editor for building README file which supports GFM, Custom Html tags with toolbar and instant preview.Both the editor supports auto save of work using Local Storage"
              ghLink="https://github.com/soumyajit4419/Editor.io"
              demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Plant AI"
              description="Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model."
              ghLink="https://github.com/soumyajit4419/Plant_AI"
              demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Ai For Social Good"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
