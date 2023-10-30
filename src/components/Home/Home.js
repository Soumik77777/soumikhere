import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main_2.svg";
import About from "../../components/About/About";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import Button from "react-bootstrap/Button";

function Home() {
  function jahok(){
    document.querySelector(".about-button-link").addEventListener("click", ()=>{
      window.location("https://soumikhere.vercel.app/about");
    })
  }
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
              <Button 
                className="about-button-link"
                variant="primary"
                target="_self"
                style={{ maxWidth: "250px" }}
              >
                Know more about myself
              </Button>              

            

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
