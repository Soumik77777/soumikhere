import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main_2.svg";
import About from "../../components/About/About";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import HomeButtons from "./HomeButtons";
import Button from "react-bootstrap/Button";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col className="home-header">
              {/* Comment out the previous line
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1> */}
              
              <h1 style={{marginLeft: "0px", marginBottom: "20px"}} className="heading">
                Hi there!
              </h1>

              <h1 style={{marginLeft: "2px", marginBottom: "40px"}} className="heading-name">
                <strong className="main-name">Soumik </strong>
                this side.
              </h1>

              <p style={{marginLeft: "50px", marginBottom: "40px", fontSize: "16px"}} className="home-intro">
                I am passionate about exploring the diverse realms of astronomy. Recently, I have also taken an interest in different domains of machine learning and artificial intelligence.
              </p>          


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
      <HomeButtons />
      <Home2 />
    </section>
    
  );
}


export default Home;
