import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Astrophysics",
          "Planetary Sciences",
          "Machine Learning & AI",
        ],
        autoStart: false,
        loop: false,
        deleteSpeed: 50
      }}
    />
  );
}

export default Type;