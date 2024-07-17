import React, { useState, useEffect, useRef } from 'react';
import InitialMap from './InitialMap';
import InitialMapFive from './InitialMapFive';
import TimelineSlider from './TimelineSlider';

const importAll = async (r) => {
  const files = r.keys();
  const modules = await Promise.all(files.map(r));
  return modules;
};

const UserGuideView = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [outputFiles, setOutputFiles] = useState([]);
  const [loading, setLoading] = useState(true);
  const intervalRef = useRef(null);

  useEffect(() => {
    const loadFiles = async () => {
      try {
        const files = await importAll(require.context('./', false, /\.json$/));
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
    <div>
      <InitialMap outputData={outputFiles[currentIndex]} />
      <InitialMapFive outputData={outputFiles[currentIndex]} />
      <TimelineSlider
        totalDays={outputFiles.length}
        selectedDay={currentIndex}
        onDayChange={handleDayChange}
        onScenarioRun={handleRunScenario}
        onScenarioPause={handlePauseScenario}
      />
    </div>
  );
};

export default UserGuideView;
