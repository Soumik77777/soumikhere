import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
import { Container, Row, Col } from "react-bootstrap";
import AboutCard from "./AboutCards";

function ProfessionalAbout(){
    return (
        <Container fluid className="about-section">
            <Particle/>
            <Container>
                <Row style={{justifyContent: "center", padding: "10px" }}>
                    <Col md={7}
                    style={{
                        justifyContent: "center",
                        paddingTop: "20px",
                        paddingBottom: "50px",
                    }}
                    >
                        Content 
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
