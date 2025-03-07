import { useState } from "react";

import "../App.css";


// TopicsCheckboxes component with a form, checkboxes, and a submit button.
export default function TopicsCheckboxes(props) {
    // Array of topics.
    const topics = ['Tufts', 'Alice in Wonderland', 'Animals', 'History', 'Vocabulary'];

    // Initialize state: each topic is a key set to false (unchecked).
  
    // Toggle a checkbox for a given topic.
    const handleCheckboxChange = (topic) => {
      props.setTopic({
        ...props.topics,
        [topic]: !props.topics[topic],
      });
    };
  
    // Handle form submission.
    const handleSubmit = (e) => {
      e.preventDefault(); // Prevent default form submission behavior.
      const savedTopics = Object.entries(props.topics)
        .filter(([_, isSelected]) => isSelected)
        .map(([topic]) => topic);
      // Close window
      
      console.log('Saved topics:', savedTopics);
      alert(`Saved topics: ${savedTopics.join(', ') || 'None'}`);
      // TODO: add logic to persist the settings, such as an API call.
    };
  
    return (
      <div className="p-6">
        <h2
          className="text-2xl font-bold mb-4"
          style={{ color: '#692a4f' }} // Section header color.
        >
          Select Topics
        </h2>
        <form onSubmit={handleSubmit}>
          {topics.map((topic) => (
            <div key={topic} className="flex items-center mb-2">
              <input
                type="checkbox"
                id={topic}
                checked={props.topics[topic]}
                onChange={() => handleCheckboxChange(topic)}
                // Using the provided blue as the checkbox accent.
                style={{ accentColor: '#2e5aff' }}
                className="h-4 w-4 border-gray-300 rounded focus:ring-blue-500"
              />
              <label
                htmlFor={topic}
                className="ml-2"
                style={{ color: '#ae5883' }} // Label text color.
              >
                {topic}
              </label>
            </div>
          ))}
          <div className="mt-4" style={{ color: '#ae5883', display:'flex', justifyContent:'center', alignItems:'center', marginTop:'10px'}}>
          <strong>Selected Topics:&nbsp;</strong>{' '}
          {Object.entries(props.topics)
            .filter(([_, isSelected]) => isSelected)
            .map(([topic]) => topic)
            .join(', ') || 'None'}
          </div>
          <div className="settingsbutton ">

            <button type="submit"> Save Settings </button>

            </div>
        </form>
        
      </div>
    );
  }