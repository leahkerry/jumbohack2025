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


        const response = await fetch('data/alice_in_wonderland1.json')
        //= await fetch("https://uselessfacts.jsph.pl/random.json?language=en");
        const data = await response.json();

        const MAX_NUM_FACTS = data.length - 1
        const fact_num = Math.floor(Math.random() * MAX_NUM_FACTS)
        console.log(fact_num)
        const fact = data[fact_num]
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