import React, { useState } from 'react';
import InitialMapFive from './InitialMapFive';
import InitialMap from './InitialMap';
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
import OUTPUT_11 from './OUTPUT_11.json';
import OUTPUT_12 from './OUTPUT_12.json';
import OUTPUT_13 from './OUTPUT_13.json';
import OUTPUT_14 from './OUTPUT_14.json';
import OUTPUT_15 from './OUTPUT_15.json';
import OUTPUT_16 from './OUTPUT_16.json';
import OUTPUT_17 from './OUTPUT_17.json';
import OUTPUT_18 from './OUTPUT_18.json';
import OUTPUT_19 from './OUTPUT_19.json';
import OUTPUT_20 from './OUTPUT_20.json';
import OUTPUT_21 from './OUTPUT_21.json';
import OUTPUT_22 from './OUTPUT_22.json';
import OUTPUT_23 from './OUTPUT_23.json';
import OUTPUT_24 from './OUTPUT_24.json';
import OUTPUT_25 from './OUTPUT_25.json';
import OUTPUT_26 from './OUTPUT_26.json';
import OUTPUT_27 from './OUTPUT_27.json';
import OUTPUT_28 from './OUTPUT_28.json';

const UserGuideView = () => {
  const [currentIndex, setCurrentIndex] = useState(1); // Initialize currentIndex state
  const maxIndex = 30; // Maximum index of outputData

  const handlePlay = () => {
    // Function to play animation
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex % maxIndex) + 1); // Cycle through indices
    }, 1000); // Interval duration in milliseconds

    // Stop animation after all indices are shown
    setTimeout(() => {
      clearInterval(interval);
    }, maxIndex * 1000); // Stop after maxIndex seconds
  };

  return (
    <div>
      {/* Play button */}
      <button onClick={handlePlay}>Play</button>

      {/* Render InitialMapFive component with dynamic outputData */}
      <InitialMap outputData={require(`./OUTPUT_${currentIndex}.json`)} />
    </div>
  );
};

export default UserGuideView;
