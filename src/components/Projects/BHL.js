import React from "react";

function App() {
  return (
    <div>
      <h1>Welcome to My React App</h1>
      <p>This is a React component.</p>

      {/* Include an HTML file using an iframe */}
      <iframe title="Embedded HTML" src="./bhl_website/bhl_accretion_main.html" width="100%" height="400"></iframe>
    </div>
  );
}

export default App;
