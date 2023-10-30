import React from "react";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function HomeButtons() {
  return (
    <Row>
      <Col sm={4} style={{ margin: "10px" }}>
        <Button
          className="about-button-link"
          variant="outline-info"
          size="lg"
          href={"/about"}
          target="_self"
          style={{ maxWidth: "325px" }}
        >
          Learn about me
        </Button>
      </Col>

      <Col sm={4} style={{ margin: "10px" }}>
        <Button
          className="projects-button-link"
          variant="outline-info"
          size="lg"
          href={"/projects"}
          target="_self"
          style={{ maxWidth: "325px" }}
        >
          Read about my research
        </Button>
      </Col>

      <Col sm={4} style={{ margin: "10px" }}>
        <Button
          className="projects-button-link"
          variant="outline-info"
          size="lg"
          href={"/projects"}
          target="_self"
          style={{ maxWidth: "325px" }}
        >
          Blog posts (coming...)
        </Button>
      </Col>
    </Row>
  );
}

export default HomeButtons;
