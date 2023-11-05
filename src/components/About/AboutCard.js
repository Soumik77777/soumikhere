import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            I am Soumik Bhattacharyya, born and raised in Bardhaman, West Bengal, India. As I grew up, I witnessed my small town transforming into a city. I come from a family of three, my parents and me.
            <br/>
            <br/>
            I completed my master's degree in physics (2018-2023) from National Institute of Science Education and Research, Bhubaneswar and currently working there as a research assistant. Additionally, I am a co-owner and developer at TeraBh.ai.
            <br/>
            <br/>
            
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
