import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function ProjectCards(props) {
  const [expanded, setExpanded] = useState(false);

  const toggleDescription = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className="project-card-view">
      {props.header && <Card.Header>{props.header}</Card.Header>}
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {expanded ? props.description : props.description.slice(0, 50)}
          {props.description.length > 50 && !expanded && (
            <span>
              {" "}
              <Button
                variant="link"
                size="sm"
                onClick={toggleDescription}
              >
                Read more
              </Button>
            </span>
          )}
          {props.description.length > 50 && expanded && (
            <span>
              {" "}
              <Button
                variant="link"
                size="sm"
                onClick={toggleDescription}
              >
                Read less
              </Button>
            </span>
          )}
        </Card.Text>
        <Button variant="primary" href={props.ghLink} target="_blank">
          <BsGithub /> &nbsp;
          {props.isBlog ? "Blog" : "GitHub"}
        </Button>
        {"\n"}
        {"\n"}

        {/* If the component contains Demo link and if it's not a Blog then, it will render the below component  */}

        {!props.isBlog && props.demoLink && (
          <Button
            variant="primary"
            href={props.demoLink}
            target="_blank"
            style={{ marginLeft: "10px" }}
          >
            <CgWebsite /> &nbsp;
            {"Demo"}
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
