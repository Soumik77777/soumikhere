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
        delay: 1000,
        deleteSpeed: 0
      }}
    />
  );
}

export default Type;