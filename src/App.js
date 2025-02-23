import React, { useState } from "react";
import "./App.css";
import SearchBar from "./components/Searchbar";
import Title from "./components/Title";
import SettingsBox from "./components/SettingsBox";
import Fact from "./components/Fact";


function App() {
  const [query, setQuery] = useState("");

  return (
    <div className="container">
       {/* <header> */}
        <SettingsBox />
      {/* </header> */}

      <Title title="Byte Sized Facts"/>
      <SearchBar />
      <Fact />
    </div>
    
  );
}

export default App;
