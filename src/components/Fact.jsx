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
        const categories = ['data/alice_in_wonderland.json',
                            'data/tufts_interesting_facts.json',
                            "data/vocabs.json",
                            'data/animals.json',
                            'data/historical_events.json']
        const categor_num = Math.floor(Math.random() * categories.length);

        const response = await fetch(categories[categor_num]);
        //= await fetch("https://uselessfacts.jsph.pl/random.json?language=en");
        const data = await response.json();

        const fact_num = Math.floor(Math.random() * data.length);
        console.log(fact_num);
        const fact = data[fact_num];
        setFact(fact.content);
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