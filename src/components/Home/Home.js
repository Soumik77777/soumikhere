import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main_2.svg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import HomeButtons from "./HomeButtons";

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
              
              <h3 style={{marginLeft: "0px", marginBottom: "10px"}} className="heading">
                Hi there!
              </h3>

              <h1 style={{marginLeft: "2px", marginBottom: "60px"}} className="heading-name">
                <strong className="main-name">Soumik </strong>
                this side.
              </h1>

              <div style={{marginLeft: "50px", textAlign: "left" }}>
                <Type />
              </div>

              <p style={{marginLeft: "50px", marginBottom: "40px", marginTop: "60px", fontSize: "1.5em"}} className="home-intro">
                This is the place where I talk about my interests, experiences and ideas. Feel free to connect!
              </p>
              
              
              {/*<p style={{marginLeft: "50px", marginBottom: "30px", fontSize: "1.5em"}} className="home-intro">
                My interests include...
              </p>*/}
              

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
