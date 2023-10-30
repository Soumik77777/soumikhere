import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main_2.svg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              {/* Comment out the previous line
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1> */}
              
              <h1 className="heading">
                Hi there!
              </h1>

              <h1 className="heading-name">
                <strong className="main-name">Soumik </strong>
                this side.
              </h1>

              <p className="home-intro">
              I am passionate about exploring the diverse realms of astronomy. Recently, I have also taken an interest in the interesting domains of machine learning and artificial intelligence.
            </p>

              <a
                href="https://soumikhere.vercel.app/about"
                className="button"
              >
                Know more about myself 
              </a>

              <a 
                href="https://soumikhere.vercel.app/about">
                <button class="btn btn-primary btn-lg">Click</button>
              </a>

              <a class="custom-button" href="https://your-link-here.com">
                <span class="button-content">
                  <span class="button-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2048 2048">
                      <path d="M6.125 1088h1797.89l-402.976 403 89.994 90L2048 1024l-556.966-557-89.994 90 402.976 403H6.125v128z"></path>
                    </svg>
                  </span>
                  <span class="button-text">Your Button Text</span>
                </span>
              </a>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "1000px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
