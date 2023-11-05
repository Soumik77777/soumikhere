import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import AboutCard from "./AboutCards";

function PersonalAbout(){
    return (
        <Container fluid className="about-professional">
            <Particle/>
            <Container>
                <h1 style={{ fontSize: "2.3em", paddingBottom: "20px" }}>
                    Personal <strong className="purple">Interests</strong>
                </h1>

                <Card className="quote-card-view"
                style={{
                    borderLeft: "3px",
                    textAlign: "left",
                    paddingLeft: "200px",
                    paddingRight: "200px"
                }}>
                    <Card.Body>
                        <blockquote className="blockquote mb-0">
                        <p>
                            Medicine, business, law, engineering- these are noble pursuits and necessary to sustain life. But poetry, beauty, romance, love- these are what we stay alive for.
                        </p>
                        <footer className="blockquote-footer" style={{textAlign: "left"}}>
                            <cite title="Dead Poets Soceity">Dead Poets Soceity, 1989</cite>
                        </footer>
                        </blockquote>
                    </Card.Body>
                </Card>

                <p style={{
                    textAlign: "justify",
                    fontSize:"1.2em",
                    paddingTop: "20px",
                    paddingLeft: "10px",
                    paddingRight: "10px",
                    }}>
                    I am a genuine sports fan who gets excited around a cricket or football world cup or Olimpic events. <span className="red">FC Bayern München</span> is my weekly source of happiness or sadness. It's getting difficult with every passing year, but in my own utopic world, I'd have an hour or two everyday to play football myself.
                    <br/>
                    <br/>
                </p>
                <Row style={{
                    justifyContent: "center",
                    paddingLeft: "10px",
                    paddingRight: "10px"
                    }}>
                    <Col md={8}
                    style={{
                        justifyContent: "center",
                        paddingBottom: "50px",
                    }}
                    >
                        <p style={{
                            textAlign: "justify", fontSize:"1.2em"
                            }}>
                        I have an affinity for working with <span className="purple">big datasets and developing physical models</span>. I have worked on 3D simulations of <span className="purple">Common Envelope Evolution in binary systems</span>, and developed a model to calculate the torque exerted on stars by the gas envelope. The manuscript for this work is currently in preparation. Additionally, I've engaged in projects related to <span className="purple"> thermal and photometric correction and analysis of hyperspectral data from Venus (VEx/VIRTIS) and Ceres (Dawn/VIR)</span>, as well as the <span className="purple">analysis of radar data from Venus (Magellan and Arecibo Observatory)</span>.
                        <br/>
                        <br/>
                        My experience working with substantial datasets has drawn me into the realm of <span className="purple">machine learning and artificial intelligence</span>. I enjoy learning about applications of machine learning techniques in complex problems. My previous work encompasses various domains, including <span className="purple">natural language processing, atmospheric sciences, and stock market prediction</span>. Within the field of machine learning, I am particularly interested in delving deeper into <span className="purple">model learning and interpretability</span>. I firmly believe that for machine learning to find its place in basic science research, models must be developed in a way that makes them physically understandable to researchers.
                        </p>
                    </Col>

                    <Col md={4} className="about-card"
                    style={{
                        justifyContent: "center",
                        paddingTop: "20px",
                        paddingBottom: "50px",
                    }}
                    >
                        <AboutCard
                            header="Wanna make a movie together?"
                            description="If you are genuinely interested in creating a short film or simply want to discuss the possibility, please don't hesitate to get in touch. Even if you only have an idea, feel free to reach out. I, too, often find it challenging to turn my ideas into a production, but perhaps together, we can accomplish something. Additionally, I've been planning to create an anime for quite some time, but I lack the artistic skills required for it. If you're interested in collaborating, please let me know."
                        />
                    </Col>
                </Row>
            </Container>
        </Container>
    )
}

export default PersonalAbout;