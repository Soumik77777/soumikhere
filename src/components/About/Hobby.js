import React from "react";
import Card from "react-bootstrap/Card";
// import { ImPointRight } from "react-icons/im";
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

                <Card className="quote-card-view">
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

                <Row style={{
                    justifyContent: "center",
                    paddingLeft: "10px",
                    paddingRight: "10px"
                    }}>
                    <Col md={7}
                    style={{
                        justifyContent: "center",
                        paddingBottom: "50px",
                    }}
                    >
                        <p style={{
                            textAlign: "justify",
                            fontSize:"1.2em",
                            paddingTop: "20px",

                        }}>
                            I am a genuine sports fan who gets excited around a cricket or football world cup or Olimpic events. <span className="red">FC Bayern München</span> is my weekly source of happiness or sadness. It's getting difficult with every passing year, but in my own utopic world, I'd have an hour or two everyday to play football myself.
                            <br/>
                            <br/>
                            I have a keen interest in making short films and directing dramas. I have been a part of the following short films: <a href="https://youtu.be/yo1SHvDD4rg?feature=shared" target="_blank" rel="noreferrer">Ovab (অভাব)</a>, <a href="https://youtu.be/PlzOgfLhCJ0?feature=shared" target="_blank" rel="noreferrer">TRIUMPH</a>; drama: <a href="https://youtu.be/WdUTUlRQKYc?feature=shared" target="_blank" rel="noreferrer">Porer Upokar Korio Na</a>; parody: <a href="https://youtu.be/VYIe2GAzVxg?feature=shared" target="_blank" rel="noreferrer" rel="noreferrer">Hirak Rajye Corona (হীরক রাজ্যে করোনা)</a>; and mime: <a href="https://youtu.be/XbZFlD5nYq4?feature=shared" target="_blank" rel="noreferrer">Human Evolution</a>.

                        </p>
                    </Col>

                    <Col md={5} className="about-card"
                    style={{
                        justifyContent: "center",
                        paddingTop: "20px",
                        paddingBottom: "50px",
                    }}
                    >
                        <AboutCard
                            title="Wanna make a movie together?"
                            description="If you are genuinely interested in creating a short film or simply want to discuss the possibility, please don't hesitate to get in touch. Even if you only have an idea, feel free to reach out. I, too, often find it challenging to turn my ideas into a production, but perhaps together, we can accomplish something. Additionally, I've been planning to create an anime for quite some time, but I lack the artistic skills required for it. If you're interested in collaborating, please let me know."
                        />
                    </Col>
                </Row>
            </Container>
        </Container>
    )
}

export default PersonalAbout;