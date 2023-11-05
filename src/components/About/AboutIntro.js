import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="about-intro-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
            Know Who <strong className="purple">I'm</strong>
          </h1>
          <p style={{ textAlign: "justify" }}>
            I am Soumik Bhattacharyya, born and raised in Bardhaman, West Bengal, India. I speak English, Bengali and Hindi fluently.
            <br/>
            <br/>
            I completed my master's degree in physics (2018-2023) from National Institute of Science Education and Research, Bhubaneswar and currently working there as a research assistant. Additionally, I am a co-owner and developer at TeraBh.ai.
            <br/>
            <br/>
            Scroll down to know more about me and my interests!
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
