import React, { useState, useEffect } from 'react';
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

  useEffect(() => {
    const loadFiles = async () => {
      const files = await importAll(require.context('./', false, /\.json$/));
      setOutputFiles(files);
      setLoading(false);
    };

    loadFiles();
  }, []);

  const handleDayChange = (index) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    if (outputFiles[currentIndex]) {
      console.log('Output Data:', outputFiles[currentIndex]);
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
      <TimelineSlider
        totalDays={outputFiles.length}
        selectedDay={currentIndex}
        onDayChange={handleDayChange}
      />
      <InitialMap outputData={outputFiles[currentIndex]} />
      <InitialMapFive outputData={outputFiles[currentIndex]} />
    </div>
  );
};

export default UserGuideView;
