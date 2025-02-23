import React, { useState } from "react";
import "./App.css";


function App() {
  const [query, setQuery] = useState("");

  return (
    <div className="container">
      <input
        type="text"
        placeholder="Search..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="search-bar"
      />
    </div>
    
  );
}

export default App;
