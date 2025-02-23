import React, { useState } from "react";
import "./App.css";
import SearchBar from "./components/Searchbar";


function App() {
  const [query, setQuery] = useState("");

  return (
    <div className="container">
      {/* <input
        type="text"
        placeholder="Search..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="search-bar"
      /> */}
      <SearchBar />
    </div>
    
  );
}

export default App;
