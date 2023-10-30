import React from "react";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./HomeButtons.css"; // You can create a CSS file for styling

function HomeButtons() {
  return (
    <Row>
      <Col sm={4}>
        <Button
          className="about-button-link custom-button"
          variant="outline-info"
          size="lg"
          href={"/about"}
          target="_self"
          style={{ backgroundColor: "#ffff00", color: "000000" }}
        >
          Learn about me
        </Button>
      </Col>

      <Col sm={4}>
        <Button
          className="projects-button-link custom-button"
          variant="outline-info"
          size="lg"
          href={"/projects"}
          target="_self"
          style={{ backgroundColor: "#ffff00", color: "000000" }}
        >
          Read about my research
        </Button>
      </Col>

      <Col sm={4}>
        <Button
          className="projects-button-link custom-button"
          variant="outline-info"
          size="lg"
          href={"#"}
          target="_self"
          style={{ backgroundColor: "#ffff00", color: "000000" }}
          disabled
        >
          Blog posts (coming...)
        </Button>
      </Col>
    </Row>
  );
}

export default HomeButtons;
