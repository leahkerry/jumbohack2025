import { useState, useEffect } from "react";
export default function Fact() {
    const [fact, setFact] = useState("");
    const [loading, setLoading] = useState(false);
  
    useEffect(() => {
        fetchFact(); // Fetch fact when the component mounts
      }, []); // Empty dependency array means it runs only once
      
    const fetchFact = async () => {
      setLoading(true);
      try {
        const response = await fetch("https://uselessfacts.jsph.pl/random.json?language=en");
        const data = await response.json();
        setFact(data.text);
      } catch (error) {
        console.error("Error fetching fact:", error);
        setFact("Failed to load fact.");
      }
      setLoading(false);
    };
  
    return (
        <div className="api-fact">
        {loading ? <p className="loading-text">Loading...</p> : <p className="fact-text">{fact}</p>}
        </div>
    );
  }