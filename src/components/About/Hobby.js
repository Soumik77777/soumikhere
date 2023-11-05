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
                            "Medicine, business, law, engineering- these are noble pursuits and necessary to sustain life. But poetry, beauty, romance, love- these are what we stay alive for."
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
                        I have a keen interest in making shortfilms and directing dramas. I have been a part of making these shortfilms, Ovab (অভাব) (href="link"), TRIUMPH (href=link); drama, Porer Upokar Korio Na (href=link); parody, Hirak Rajye Corona(হীরক রাজ্যে করোনা) (href=link); mime, Human Evolution (href=link).
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