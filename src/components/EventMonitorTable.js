import React, { useState, useEffect } from 'react';

const EventMonitorTable = ({ outputFiles, currentIndex }) => {
  const [eventData, setEventData] = useState([]);

  // Function to parse data and calculate deceased counts for a specific day
  const parseEventData = (jsonData, day) => {
    let totalDeceased = 0;

    if (jsonData) {
      totalDeceased = jsonData.data.reduce((sum, county) => {
        const { D } = county.compartments;
        const countyDeceased = [
          ...D.U.L,
          ...D.U.H,
          ...D.V.L,
          ...D.V.H
        ].reduce((countySum, value) => countySum + value, 0);
        return sum + countyDeceased;
      }, 0);
    }

    return { day, deceased: Math.round(totalDeceased) };
  };

  useEffect(() => {
    if (currentIndex >= 0 && currentIndex < outputFiles.length) {
      const newEvent = parseEventData(outputFiles[currentIndex], currentIndex);
      setEventData((prevEventData) => [...prevEventData, newEvent]);
    }
  }, [currentIndex, outputFiles]);

  // Function to render table rows based on event data
  const renderRows = () => {
    return eventData.map((event, index) => (
      <tr key={index} className={index % 2 === 0 ? 'even-row' : 'odd-row'}>
        <td>{event.day}</td>
        <td>{event.deceased}</td>
      </tr>
    ));
  };

  return (
    <div className="table-container">
      <div className="table-scroll">
        <table>
          <thead>
            <tr>
              <th>Day</th>
              <th>Deceased</th>
            </tr>
          </thead>
          <tbody>
            {renderRows()}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EventMonitorTable;