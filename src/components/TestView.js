import React, { useState, useRef } from 'react';
import InitialMap from './InitialMap';
import InitialMapFive from './InitialMapFive';
import OUTPUT_1 from './OUTPUT_1.json';
import OUTPUT_2 from './OUTPUT_2.json';
import OUTPUT_3 from './OUTPUT_3.json';
import OUTPUT_4 from './OUTPUT_4.json';
import OUTPUT_5 from './OUTPUT_5.json';
import OUTPUT_6 from './OUTPUT_6.json';
import OUTPUT_7 from './OUTPUT_7.json';
import OUTPUT_8 from './OUTPUT_8.json';
import OUTPUT_9 from './OUTPUT_9.json';
import OUTPUT_10 from './OUTPUT_10.json';

const TestView = () => {
  const [currentIndex, setCurrentIndex] = useState(1); // Initialize currentIndex state
  const intervalRef = useRef(null); // Use ref to store the interval id
  const maxIndex = 30; // Maximum index of outputData

  const handlePlay = () => {
    // Function to play animation
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex % maxIndex) + 1); // Cycle through indices
    }, 1000); // Interval duration in milliseconds
  };

  const handleStop = () => {
    // Function to stop animation
    clearInterval(intervalRef.current);
    intervalRef.current = null; // Clear the interval reference
  };

  return (
    <div>
      {/* Play button */}
      <button onClick={handlePlay}>Play</button>
      
      {/* Stop button */}
      <button onClick={handleStop}>Stop</button>

      {/* Render InitialMapFive component with dynamic outputData */}
      <InitialMap outputData={require(`./OUTPUT_${currentIndex}.json`)} />
      <InitialMapFive outputData={require(`./OUTPUT_${currentIndex}.json`)} />
    </div>
  );
};

export default TestView;
