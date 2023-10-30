import React, { useState, useEffect } from "react";
import "./Type.css";

function Type() {
  const [text, setText] = useState("");
  const fullText = "Astrophysics,<br />Planetary Sciences,<br />Machine Learning & AI";

  useEffect(() => {
    let currentIndex = 0;

    const interval = setInterval(() => {
      if (currentIndex < fullText.length) {
        setText(fullText.slice(0, currentIndex + 1));
        currentIndex += 1;
      } else {
        clearInterval(interval);
      }
    }, 100); // Adjust the interval for typing speed

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="typing-effect"
      style={{ fontSize: "32px", color: "#cd5ff8", fontWeight: "bold" }}
      dangerouslySetInnerHTML={{ __html: text }}
    />
  );
}

export default Type;
