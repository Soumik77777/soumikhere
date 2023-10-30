import React from "react";
import Button from "react-bootstrap/Button";

function HomeButtons() {
  return (
    <div>
      <div style={{ marginTop: "10px", marginBottom: "10px" }}>
        <Button
          className="about-button-link"
          variant="outline-info"
          size= "lg"
          href={"/about"}
          target="_self"
          style={{ maxWidth: "325px" }}
        >
          Learn about me
        </Button>
      </div>

      <div style={{marginTop: "10px", marginBottom: "10px" }}>
        <Button
          className="projects-button-link"
          variant="outline-info"
          size= "lg"
          href={"/projects"}
          target="_self"
          style={{ maxWidth: "325px" }}
        >
          Read about my research
        </Button>
      </div>

      <div style={{marginTop: "10px", marginBottom: "10px" }}>
        <Button
          className="projects-button-link"
          variant="outline-info"
          size= "lg"
          href={"/projects"}
          target="_self"
          style={{ maxWidth: "325px" }}
        >
          Blog posts (coming...)
        </Button>
      </div>
      
    </div>
  );
}

export default HomeButtons;
