import React from "react";
import ReactDOM from "react-dom";

function App() {
  return (
    <div style={{ padding: "10px" }}>
      <h3>✨ Google Modified!</h3>
      <button onClick={() => alert("Button Clicked!")}>Click Me</button>
    </div>
  );
}

const root = document.getElementById("my-react-extension");
ReactDOM.createRoot(root).render(<App />);