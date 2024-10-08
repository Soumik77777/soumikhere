import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Aboutintro from "./AboutIntro";
import Professional from "./Professional.js"
import Hobby from "./Hobby.js"
import laptopImg from "../../Assets/about.png";
// import Github from "./Github.js";

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "space-between", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "20px",
              paddingBottom: "50px",
            }}
          >
            <Aboutintro />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "40px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col>
        </Row>
        
        
        <Professional/>

        {/* <Github /> */}
        
        <Hobby/>
        
        {/* 
        <h1 className="project-heading">
          Professional <strong className="purple">Skillset </strong>
        </h1>

        <Techstack />

        <h1 className="project-heading">
          <strong className="purple">Tools</strong> I use
        </h1>
        <Toolstack />
        */}
        

      </Container>
    </Container>
  );
}

export default About;
