import React, { useState, useEffect } from "react";
import "./App.css";
import SearchBar from "./components/Searchbar";
import Title from "./components/Title";
import SettingsBox from "./components/SettingsBox";
import Fact from "./components/Fact";
import SettingsButton from "./components/SettingsButton";


function App() {
  const [query, setQuery] = useState("");
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  return (
    <div className="container">

      <Title title="Byte Sized Facts" size='60px'/>
      <Fact />
      
      <SearchBar />
      
      <div>
        <SettingsButton onClick={() => setIsSettingsOpen(true)}/>
        {/* Show SettingsBox when isSettingsOpen is true */}
        {isSettingsOpen && <SettingsBox onClose={() => setIsSettingsOpen(false)} />}
      </div>
      
      <Title title="Powered by Byte-Sized Facts" size='30px'/>

    </div>
    
  );
}

export default App;
