import React, { useState, useEffect, useRef } from 'react';
import InitialMap from './InitialMap';
import TimelineSlider from './TimelineSlider';
import DeceasedLineChart from './DeceasedLineChart';
import CountyInfectedDeceasedTable from './CountyInfectedDeceasedTable';
import './UserGuideView.css';

import OUTPUT_0 from './OUTPUT_0.json';
import OUTPUT_1 from './OUTPUT_1.json';
import OUTPUT_2 from './OUTPUT_2.json';
import OUTPUT_3 from './OUTPUT_3.json';
import OUTPUT_4 from './OUTPUT_4.json';
import OUTPUT_5 from './OUTPUT_5.json';
import OUTPUT_6 from './OUTPUT_6.json';
import OUTPUT_7 from './OUTPUT_7.json';
import OUTPUT_8 from './OUTPUT_8.json';
import OUTPUT_9 from './OUTPUT_9.json'; 

const ChartView = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [eventData, setEventData] = useState([]);
  const [outputFiles] = useState([
    OUTPUT_0, OUTPUT_1, OUTPUT_2, OUTPUT_3, OUTPUT_4, OUTPUT_5,
    OUTPUT_6, OUTPUT_7, OUTPUT_8, OUTPUT_9
  ]);
  const intervalRef = useRef(null);

  const handleDayChange = (index) => {
    setCurrentIndex(index); // Update currentIndex immediately
  };

  const handleRunScenario = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
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
      const deceasedCount = outputFiles[currentIndex].data.reduce((acc, county) => {
        const { D } = county.compartments;
        const totalDeceased = [
          ...D.U.L,
          ...D.U.H,
          ...D.V.L,
          ...D.V.H,
        ].reduce((sum, value) => sum + value, 0);
        return acc + totalDeceased;
      }, 0);

      setEventData((prevData) => {
        const newData = [...prevData];
        if (!newData[currentIndex]) {
          newData[currentIndex] = { day: currentIndex, deceased: Math.round(deceasedCount) };
        } else {
          newData[currentIndex].deceased = Math.round(deceasedCount);
        }
        return newData.slice(0, currentIndex + 1);
      });
    }
  }, [currentIndex, outputFiles]);

  return (
    <div className="user-guide-view">
      <div className="middle-panel">
        <InitialMap outputData={outputFiles[currentIndex]} />
      </div>
      <div className="timeline-panel">
        <TimelineSlider
          totalDays={outputFiles.length}
          selectedDay={currentIndex}
          onDayChange={handleDayChange}
          onScenarioRun={handleRunScenario}
          onScenarioPause={handlePauseScenario}
        />
      </div>
      <div className="chart-panel">
        <DeceasedLineChart eventData={eventData} />
      </div>
      <div className="bottom-panel">
        <CountyInfectedDeceasedTable className="infected-table" outputData={outputFiles[currentIndex]} />
      </div>
    </div>
  );
};

export default ChartView;
