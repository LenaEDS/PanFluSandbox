import React from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import './TimelineSlider.css';

const TimelineSlider = ({ totalDays, selectedDay, onDayChange }) => {
  const handleChange = value => {
    onDayChange(value);
  };

  const railStyle = {
    backgroundColor: '#ccc', // Change the rail (track) color here
  };

  const trackStyle = {
    backgroundColor: '#007bff', // Change the track (filled part) color here
  };

  const handleStyle = {
    borderColor: '#007bff', // Change the handle (slider button) color here
  };

  return (
    <div>
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
  );
};

export default TimelineSlider;
