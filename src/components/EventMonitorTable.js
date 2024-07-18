import React from 'react';

const EventMonitorTable = ({ outputFiles, currentIndex }) => {
  const eventData = [];

  if (currentIndex >= 0 && outputFiles[currentIndex]) {
    const totalDeceased = outputFiles[currentIndex].data.reduce((sum, county) => {
      const { D } = county.compartments;
      const countyDeceased = [
        ...D.U.L,
        ...D.U.H,
        ...D.V.L,
        ...D.V.H
      ].reduce((countySum, value) => countySum + value, 0);
      return sum + countyDeceased;
    }, 0);

    eventData.push({ day: currentIndex, deceased: Math.round(totalDeceased) });
  }

  return (
    <div className="table-container">
      <div className="table-scroll">
        <table>
          <thead>
            <tr>
              <th>Day</th>
              <th>Total Deceased</th>
            </tr>
          </thead>
          <tbody>
            {eventData.map((event, index) => (
              <tr key={index} className={index % 2 === 0 ? 'even-row' : 'odd-row'}>
                <td>{event.day}</td>
                <td>{event.deceased}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EventMonitorTable;
