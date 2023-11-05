import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import AboutCard from "./AboutCards";

function ProfessionalAbout(){
    return (
        <Container fluid className="about-section">
            <Particle/>
            <Container>
                <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
                    Professional <strong className="purple">Interests</strong>
                </h1>
                <Row style={{justifyContent: "center", padding: "10px" }}>
                    <Col md={7}
                    style={{
                        justifyContent: "center",
                        paddingTop: "20px",
                        paddingBottom: "50px",
                    }}
                    >
                        My primary research interest lies in astrophysics and planetary sciences. I have explored various facets of these fields and find the following topics particularly intriguing: stellar astrophysics and composition of planetary surfaces.

                        I have an affinity for working with big datasets and developing physical models. I have worked on 3D simulations of Common Envelope Evolution in binary systems, and developed a model to calculate the torque exerted on stars by the gas envelope. The manuscript for this work is currently in preparation. Additionally, I've engaged in projects related to the thermal and photometric correction and analysis of hyperspectral data from Venus (VEx/VIRTIS) and Ceres (Dawn/VIR), as well as the analysis of radar data from Venus (Magellan and Arecibo Observatory).

                        My experience working with substantial datasets has drawn me into the realm of machine learning and artificial intelligence. I enjoy learning about applications of machine learning techniques in complex problems. My previous work encompasses various domains, including natural language processing, atmospheric sciences, and stock market prediction. Within the field of machine learning, I am particularly interested in delving deeper into model learning and interpretability. I firmly believe that for machine learning to find its place in basic science research, models must be developed in a way that makes them physically understandable to researchers.
                    </Col>

                    <Col md={5} className="project-card">
                        <AboutCard
                            header="Side-ventures"
                            title="TeraBh.ai"
                            description="blas"
                        />
                    </Col>
                </Row>
            </Container>
        </Container>
    )
}

export default ProfessionalAbout;