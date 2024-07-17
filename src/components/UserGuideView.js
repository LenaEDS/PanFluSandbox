import React, { useState, useEffect, useRef } from 'react';
import InitialMap from './InitialMap';
import InitialMapFive from './InitialMapFive';
import TimelineSlider from './TimelineSlider';
import CountyInfectedTable from './CountyInfectedTable';
import './UserGuideView.css';
import OUTPUT_1 from './OUTPUT_1.json'
import OUTPUT_2 from './OUTPUT_2.json'
import OUTPUT_3 from './OUTPUT_3.json'
import OUTPUT_4 from './OUTPUT_4.json'
import OUTPUT_5 from './OUTPUT_5.json'
import OUTPUT_6 from './OUTPUT_6.json'
import OUTPUT_7 from './OUTPUT_7.json'
import OUTPUT_8 from './OUTPUT_8.json'
import OUTPUT_9 from './OUTPUT_9.json'
import OUTPUT_10 from './OUTPUT_10.json'
import OUTPUT_11 from './OUTPUT_11.json'
import OUTPUT_12 from './OUTPUT_12.json'
import OUTPUT_13 from './OUTPUT_13.json'
import OUTPUT_14 from './OUTPUT_14.json'
import OUTPUT_15 from './OUTPUT_15.json'

async function importAll(r) {
  const files = r.keys();
  const modules = await Promise.all(files.map(r));
  return modules;
}

const UserGuideView = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [outputFiles, setOutputFiles] = useState([]);
  const [loading, setLoading] = useState(true);
  const intervalRef = useRef(null);

  useEffect(() => {
    const loadFiles = async () => {
      try {
        const files = await importAll(require.context('../output', false, /\.json$/));
        setOutputFiles(files);
        console.log('Files loaded:', files); // Print all loaded files
        setLoading(false);
      } catch (error) {
        console.error('Error loading files:', error); // Print error if files can't be loaded
      }
    };

    loadFiles();
  }, []);

  const handleDayChange = (index) => {
    setCurrentIndex(index);
  };

  const handleRunScenario = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        if (prevIndex < outputFiles.length - 1) {
          console.log('Reading file:', `OUTPUT_${prevIndex + 1}.json`); // Print current file being read
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
      console.log('Output Data:', outputFiles[currentIndex]); // Print current output data
    }
  }, [currentIndex, outputFiles]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!outputFiles[currentIndex]) {
    return <div>No data available for this index.</div>;
  }

  return (
    <div className="user-guide-view">
      <div className="left-panel">
        <CountyInfectedTable className="infected-table" outputData={outputFiles[currentIndex]} />
      </div>
      <div className="right-panel">
        <InitialMap outputData={outputFiles[currentIndex]} />
        <InitialMapFive outputData={outputFiles[currentIndex]} />
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