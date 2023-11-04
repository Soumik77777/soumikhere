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
      {props.header && <Card.Header style={{
        textAlign: "left",
        borderBottom: "1px solid #ffffc1"
        }}>{props.header}</Card.Header>}
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title style={{ textAlign: "left", marginBottom: "20px", color: "#ffffc2"}}>{props.title}</Card.Title>
        {props.subtitle && (
          <Card.Subtitle className="mb-2 text-muted" style={{textAlign: "left", marginBottom: "40px" }}>{props.subtitle}</Card.Subtitle>
        )}
        <Card.Text style={{ textAlign: "justify"}}>
          {expanded ? props.description : props.description.slice(0, 300)}
          {props.description.length > 300 && !expanded && (
            <span>
              {" "}
              <Button
                variant="link"
                size="sm"
                onClick={toggleDescription}
              >
                ... Read more
              </Button>
            </span>
          )}
          {props.description.length > 300 && expanded && (
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
