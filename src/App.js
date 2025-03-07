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

      <Title title="Byte Sized Facts" size='60px'/>
      <Fact topics ={selectedTopics}/>
      


      <SearchBar />
      
      <div>
        <SettingsButton onClick={() => setIsSettingsOpen(true)} />
        {/* Show SettingsBox when isSettingsOpen is true */}
        {isSettingsOpen && <SettingsBox onClose={() => setIsSettingsOpen(false)} topics ={selectedTopics} setTopic={setSelectedTopics}/>}
      </div>


    </div>
    
  );
}

export default App;
