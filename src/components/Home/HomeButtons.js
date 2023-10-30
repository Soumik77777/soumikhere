import React from "react";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./HomeButtons.css";
import { BsFillArrowRightCircleFill} from "react-icons/bs"

function HomeButtons() {
  const buttonStyle = {
    backgroundColor: "#ffff00",
    color: "#000000",
    width: "325px",
    margin: "100px",
  };

  return (
    <Row>
      <Col sm={4}>
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

      <Col sm={4}>
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

      <Col sm={4}>
        <Button
          className="projects-button-link custom-button"
          variant="outline-info"
          size="lg"
          href={"#"}
          target="_self"
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
