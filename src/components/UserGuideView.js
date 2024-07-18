import React, { useState, useEffect, useRef } from 'react';
import './UserGuideView.css'; // Adjust CSS as needed
import InitialMap from './InitialMap'; // Assuming these components are correctly imported
import CountyInfectedTable from './CountyInfectedTable';
import EventMonitorTable from './EventMonitorTable';
import TimelineSlider from './TimelineSlider';

import OUTPUT_0 from './OUTPUT_0.json'; // Assuming these JSON files are correctly imported
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

const UserGuideView = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [outputFiles] = useState([
    OUTPUT_0, OUTPUT_1, OUTPUT_2, OUTPUT_3, OUTPUT_4, OUTPUT_5,
    OUTPUT_6, OUTPUT_7, OUTPUT_8, OUTPUT_9, OUTPUT_10
  ]);
  const intervalRef = useRef(null);

  const handleDayChange = (index) => {
    console.log(`Day changed to: ${index}`);
    setCurrentIndex(index);
  };

  const handleRunScenario = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    setCurrentIndex(0); // Start from day 0 when running the scenario
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        if (prevIndex < outputFiles.length - 1) {
          return prevIndex + 1;
        } else {
          clearInterval(intervalRef.current);
          return prevIndex;
        }
      });
    }, 1000);
  };

  const handlePauseScenario = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };

  useEffect(() => {
    if (outputFiles[currentIndex]) {
      console.log('Output Data:', outputFiles[currentIndex]);
    }
  }, [currentIndex, outputFiles]);

  useEffect(() => {
    const delay = 500; // Delay in milliseconds
    const timer = setTimeout(() => {
      console.log('Data processed for day:', currentIndex);
    }, delay);

    return () => clearTimeout(timer);
  }, [currentIndex]);

  return (
    <div className="user-guide-view">
      <div className="left-panel">
        <CountyInfectedTable className="infected-table" outputData={outputFiles[currentIndex]} />
      </div>
      <div className="middle-panel">
        <InitialMap outputData={outputFiles[currentIndex]} />
      </div>
      <div className="right-panel">
        <EventMonitorTable outputFiles={outputFiles} currentIndex={currentIndex} />
      </div>
      <div className="bottom-panel">
        <TimelineSlider
          totalDays={outputFiles.length}
          selectedDay={currentIndex}
          onDayChange={handleDayChange}
          onScenarioRun={handleRunScenario}
          onScenarioPause={handlePauseScenario}
        />
      </div>
    </div>
  );
};

export default UserGuideView;
