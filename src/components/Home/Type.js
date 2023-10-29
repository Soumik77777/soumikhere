import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <div>
      <Typewriter
        options={{
          strings: ["Astrophysics"],
          autoStart: true,
          loop: false,
          deleteSpeed: 0,
        }}
      />
      <Typewriter
        options={{
          strings: ["Planetary Sciences"],
          autoStart: true,
          loop: false,
          deleteSpeed: 0,
        }}
      />
      <Typewriter
        options={{
          strings: ["Machine Learning & AI"],
          autoStart: true,
          loop: false,
          deleteSpeed: 0,
        }}
      />
    </div>
  );
}

export default Type;
