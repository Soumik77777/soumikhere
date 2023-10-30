import React from "react";
import Button from "react-bootstrap/Button";

function HomeButtons() {
  return (
    <container> 
      <Button 
        className="about-button-link"
        variant="primary"
        href={"/about"}
        target="_self"
        style={{ maxWidth: "250px" }}
      >
        Know more about myself
      </Button>

      <Button 
      className="projects-button-link"
      variant="primary"
      href={"/projects"}
      target="_self"
      style={{ maxWidth: "250px" }}
      >
      Know more about myself
      </Button>
    </container>  
  );
}

export default HomeButtons;
