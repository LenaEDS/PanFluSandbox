import React, { useState } from 'react';
import countyInfectedData from './countyInfectedData';
import '../App.css'; // Import the CSS file

function CountyInfectedTable() {
  const [sortedData, setSortedData] = useState(countyInfectedData);
  const [sortDirection, setSortDirection] = useState({
    county: 'asc',
    infected: 'asc',
  });

  // Function to handle sorting by county name or infected count
  const sortData = (key) => {
    const sorted = [...sortedData];
    sorted.sort((a, b) => {
      const valueA = a[key];
      const valueB = b[key];
      if (valueA < valueB) {
        return sortDirection[key] === 'asc' ? -1 : 1;
      }
      if (valueA > valueB) {
        return sortDirection[key] === 'asc' ? 1 : -1;
      }
      return 0;
    });
    setSortedData(sorted);
    setSortDirection({
      ...sortDirection,
      [key]: sortDirection[key] === 'asc' ? 'desc' : 'asc',
    });
  };

  return (
    <div className="table-container">
      <h2>Infected Count</h2>
      <div className="table-scroll">
        <table>
          <thead>
            <tr>
              <th>
                County
                <button className="sort-button" onClick={() => sortData('county')}>
                  {sortDirection.county === 'asc' ? '↓' : '↑'}
                </button>
              </th>
              <th>
                Infected
                <button className="sort-button" onClick={() => sortData('infected')}>
                  {sortDirection.infected === 'asc' ? '↓' : '↑'}
                </button>
              </th>
            </tr>
          </thead>
          <tbody>
            {sortedData.map((county, index) => (
              <tr key={index}>
                <td>{county.county}</td>
                <td>{county.infected}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default CountyInfectedTable;
