import React from "react";
import Button from "react-bootstrap/Button";

function HomeButtons() {
  return (
    <Button 
      className="about-button-link"
      variant="primary"
      href="https://soumikhere.vercel.app/about"
      target="_self"
      style={{ maxWidth: "250px" }}
    >
      Know more about myself
    </Button>
  );
}

export default AboutButton;
