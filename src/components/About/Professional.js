import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import AboutCard from "./AboutCards";

function ProfessionalAbout(){
    return (
        <Container fluid className="about-professional">
            <Particle/>
            <Container>
                <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
                    Professional <strong className="purple">Interests</strong>
                </h1>
                <Row style={{
                    justifyContent: "center",
                    padding: "10px"
                    }}>
                    <Col md={8}
                    style={{
                        justifyContent: "center",
                        paddingTop: "20px",
                        paddingBottom: "50px",
                    }}
                    >
                        <p style={{
                            textAlign: "justify", fontSize:"1.1em"
                            }}>
                        My primary research interest lies in astrophysics and planetary sciences. I have explored various facets of these fields and find the following topics particularly intriguing: stellar astrophysics and composition of planetary surfaces.
                        <br/>
                        <br/>
                        I have an affinity for working with big datasets and developing physical models. I have worked on 3D simulations of Common Envelope Evolution in binary systems, and developed a model to calculate the torque exerted on stars by the gas envelope. The manuscript for this work is currently in preparation. Additionally, I've engaged in projects related to the thermal and photometric correction and analysis of hyperspectral data from Venus (VEx/VIRTIS) and Ceres (Dawn/VIR), as well as the analysis of radar data from Venus (Magellan and Arecibo Observatory).
                        <br/>
                        <br/>
                        My experience working with substantial datasets has drawn me into the realm of machine learning and artificial intelligence. I enjoy learning about applications of machine learning techniques in complex problems. My previous work encompasses various domains, including natural language processing, atmospheric sciences, and stock market prediction. Within the field of machine learning, I am particularly interested in delving deeper into model learning and interpretability. I firmly believe that for machine learning to find its place in basic science research, models must be developed in a way that makes them physically understandable to researchers.
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
                            header="Side-ventures"
                            title="TeraBh.ai"
                            description="ChatGPT and other utility websites and applications have shown how big of an impact can Natural Language Processing have in our day-to-day lives. Have you ever imagined how much of an impact would a personalised AI assistant have in your daily life? Yet, the currently available assistants provided by Google, Amazon, Apple etc. does not leverage the true of power of NLP. Here at TeraBh.ai, we aim to bridge the gap between these two domains. We hope to bring our Minimally Viable Product (MVP) within the end of this calendar year.
                            <br/><br/>
                            Want to get in touch? Mail us at init.beyondcontrol@gmail.com."
                        />
                    </Col>
                </Row>
            </Container>
        </Container>
    )
}

export default ProfessionalAbout;