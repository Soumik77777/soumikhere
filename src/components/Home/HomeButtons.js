import React from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "./HomeButtons.css";
import { BsFillArrowRightCircleFill } from "react-icons/bs";

function HomeButtons() {
  const buttonStyle = {
    backgroundColor: "#ffff00",
    color: "#000000",
    width: "100%",
    margin: "0px 0px",
  };

  return (
    <Row className="custom-button-row">
      <Col sm={3} xs={12}>
        <Button
          className="about-button-link custom-button"
          variant="outline-info"
          size="lg"
          href={"/about"}
          target="_self"
          style={buttonStyle}
        >
          Learn about me <BsFillArrowRightCircleFill />
        </Button>
      </Col>

      <Col sm={3} xs={12}>
        <Button
          className="projects-button-link custom-button"
          variant="outline-info"
          size="lg"
          href={"/projects"}
          target="_self"
          style={buttonStyle}
        >
          Read about my research <BsFillArrowRightCircleFill />
        </Button>
      </Col>

      <Col sm={3} xs={12}>
        <Button
          className="blogs-button-link custom-button"
          variant="outline-info"
          size="lg"
          href={"#"}
          target="_blank"
          disabled
          style={buttonStyle}
        >
          Blog posts (coming...)
        </Button>
      </Col>
    </Row>
  );
}

export default HomeButtons;
