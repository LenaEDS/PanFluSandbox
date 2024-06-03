import React, { useState, useEffect, useRef } from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import './TimelineSlider.css';

const TimelineSlider = ({ totalDays, selectedDay, onDayChange }) => {
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef(null);

  const handleChange = value => {
    onDayChange(value);
  };

  const handleRunScenario = () => {
    setIsRunning(true);
  };

  const handlePause = () => {
    setIsRunning(false);
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };

  useEffect(() => {
    if (isRunning) {
      intervalRef.current = setInterval(() => {
        onDayChange(prevDay => {
          if (prevDay < totalDays - 1) {
            return prevDay + 1;
          } else {
            clearInterval(intervalRef.current);
            setIsRunning(false);
            return prevDay;
          }
        });
      }, 1000); // Increment day every second
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isRunning, onDayChange, totalDays]);

  const railStyle = {
    backgroundColor: '#ccc',
  };

  const trackStyle = {
    backgroundColor: '#007bff',
  };

  const handleStyle = {
    borderColor: '#007bff',
  };

  return (
    <div className="timeline-slider-wrapper">
      <div className="button-container">
        <button className="scenario-button" onClick={handleRunScenario}>Run Scenario</button>
        <button className="scenario-button" onClick={handlePause}>Pause</button>
      </div>
      <div className="timeline-container">
        <Slider
          min={0}
          max={totalDays - 1}
          value={selectedDay}
          onChange={handleChange}
          railStyle={railStyle}
          trackStyle={trackStyle}
          handleStyle={handleStyle}
        />
        <div className="timeline-slider">
          {Array.from({ length: totalDays }).map((_, index) => (
            <div
              key={index}
              className={`timeline-item ${index === selectedDay ? 'active' : ''}`}
              onClick={() => onDayChange(index)}
            >
              <span className="timeline-date">{index}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TimelineSlider;
