import React, { useState } from 'react';
import './App.css';

// Title component using a cute Google Font (Pacifico) and custom colors.
function Title({ title }) {
  return (
    <h1
      className="text-3xl font-bold mb-4"
      style={{
        fontFamily: "'Pacifico', cursive", // Ensure this font is imported via index.html or @import in App.css.
        color: '#fcacac' // Light, cute text color.
      }}
    >
      {title}
    </h1>
  );
}

// TopicsCheckboxes component with a form, checkboxes, and a submit button.
function TopicsCheckboxes() {
  // Array of topics.
  const topics = ['General', 'Tufts', 'Crack a Smile'];

  // Initialize state: each topic is a key set to false (unchecked).
  const [selectedTopics, setSelectedTopics] = useState(
    topics.reduce((acc, topic) => ({ ...acc, [topic]: false }), {})
  );

  // Toggle a checkbox for a given topic.
  const handleCheckboxChange = (topic) => {
    setSelectedTopics({
      ...selectedTopics,
      [topic]: !selectedTopics[topic],
    });
  };

  // Handle form submission.
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior.
    const savedTopics = Object.entries(selectedTopics)
      .filter(([_, isSelected]) => isSelected)
      .map(([topic]) => topic);
    console.log('Saved topics:', savedTopics);
    alert(`Saved topics: ${savedTopics.join(', ') || 'None'}`);
    // Here, add logic to persist the settings, such as an API call.
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
              checked={selectedTopics[topic]}
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
        <button
          type="submit"
          className="mt-4 w-full py-2 rounded-md"
          style={{
            backgroundColor: '#2e5aff', // Button background.
            color: '#fcacac'            // Button text color.
          }}
        >
          Save Settings
        </button>
      </form>
      <div className="mt-4" style={{ color: '#ae5883' }}>
        <strong>Selected Topics:</strong>{' '}
        {Object.entries(selectedTopics)
          .filter(([_, isSelected]) => isSelected)
          .map(([topic]) => topic)
          .join(', ') || 'None'}
      </div>
    </div>
  );
}

// Main App component rendering the Title and TopicsCheckboxes within a styled header.
function App() {
  return (
    <div className="App">
      <header
        className="App-header"
        style={{
          backgroundColor: '#0f1d42', // Dark header background.
          padding: '20px'
        }}
      >
        <Title title="Byte Sized Settings" />
        <TopicsCheckboxes />
      </header>
    </div>
  );
}

export default App;
