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
        autoStart: true,
        loop: false,
        deleteSpeed: 50
      }}
    />
  );
}

export default Type;