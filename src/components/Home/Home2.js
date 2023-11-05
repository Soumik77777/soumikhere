import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import Button from "react-bootstrap/Button";
import { SiResearchgate } from "react-icons/si";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={12} className="home-about-header">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
          </Col>
          <Col md={8} className="home-about-description">
            <p className="home-about-body">
              I completed my master's degree in <b className="purple">physics</b> with a dissertation in <b className="purple">astrophysics</b> from <b className="purple">NISER, HBNI</b> and currently work there as a research assistant.
              <br/>
              <br/>
              In my dissertation, I have worked on <b className="purple">common envelope evolution in AGB stars</b>. I also have experience working in pre-processing and analysis of <b className="purple">planetary hyperspectral and radar data</b>.
              <br/>
              <br/>
              My passion for <b className="purple">machine learning</b> extends to its applications in solving complex problems, such as <b className="purple">natural language processing, weather forecasting, stock market prediction, and strategies</b>.
              <br/>
              <br/>
              I am also a co-owner and developer at <b className="purple">TeraBh.ai</b>, which specializes in <b className="purple">personalized AI assistant</b>.
              <br/>
              <br/>
              I am a die-hard <b style="color: red">FC Bayern München</b> fan and usually spend my offtime watching <b className="purple">football</b>. I also like to chalk out scripts for <b className="purple">movies</b>, and was able to complete production for a few of them.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" style={{ marginTop: '50px' }} />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">

            <h1 id="Contact-me-link" style={{marginTop: "40px", marginBottom: "20px" }}>DROP AN EMAIL</h1>

            <p style={{ marginBottom: "20px" }}>
              <i style={{ marginBottom: "10px" }}>
                <span className="purple">@soumik.bhattacharyya@niser.ac.in </span>
              </i>  (Institution)
              <br />
              <i style={{ marginBottom: "40px" }}>
                <span className="purple">@soumikbhattacharyya68@gmail.com </span>
              </i>  (Personal)
            </p>

            <h1 style={{ marginTop: "40px" }}>FIND ME ON</h1>

            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/soumik77777"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.researchgate.net/profile/Soumik-Bhattacharyya"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <SiResearchgate />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/soumik-bhattacharyya-48446a170/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/soumik.py/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
