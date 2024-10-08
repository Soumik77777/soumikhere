import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function AboutCards(props) {
  // const [expanded, setExpanded] = useState(true);

  // const toggleDescription = () => {
  //   setExpanded(!expanded);
  // };

  return (
    <Card className="about-card-view">
      {props.header && typeof props.header === 'string' && (
        <Card.Header style={{
          fontSize: "0.9em",
          textAlign: "left",
          borderBottom: "3px solid #371D41"
        }}>
          {props.header}
        </Card.Header>
      )}
      <Card.Body>
        {props.title && typeof props.title === 'string' && (
          <Card.Title style={{ textAlign: "left", marginBottom: "10px", color: "#ffffc1"}}>
            {props.title}
          </Card.Title>
        )}
        {props.subtitle && typeof props.subtitle === 'string' && (
          <Card.Subtitle className="mb-2 text-muted" style={{textAlign: "left", marginBottom: "60px" }}>
            {props.subtitle}
          </Card.Subtitle>
        )}
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>

        {props.islink && (
          <Button 
            variant="primary"
            href={props.link}
            target="_blank"
            style={{ marginLeft: "10px", marginRight: "10px" }}
          >
            {props.linktext}
          </Button>
        )}

        {props.islink2 && (
          <Button 
            variant="primary"
            href={props.link2}
            target="_blank"
            style={{ marginLeft: "10px", marginRight: "10px" }}
          >
            {props.linktext2}
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}
export default AboutCards;
