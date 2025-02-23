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
  const topics = ['Tufts', 'Alice in Wonderland', 'Animals', 'History', 'Vocabulary'];
  const [selectedTopics, setSelectedTopics] = useState(
    topics.reduce((acc, topic) => ({ ...acc, [topic]: false }), {})
  );

  return (
    <div className="container">

      <div>
        <SettingsButton onClick={() => setIsSettingsOpen(true)} />
        {/* Show SettingsBox when isSettingsOpen is true */}
        {isSettingsOpen && <SettingsBox onClose={() => setIsSettingsOpen(false)} topics ={selectedTopics} setTopic={setSelectedTopics}/>}
      </div>
      
      <Title title="Byte Sized Facts"/>
      <SearchBar />
      <Fact topics ={selectedTopics}/>
    </div>
    
  );
}

export default App;
