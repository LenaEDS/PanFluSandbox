// CountyInfectedTable.js

import React from 'react';
import countyInfectedData from './countyInfectedData';
import '../App.css'; // Import the CSS file

function CountyInfectedTable() {
  return (
    <div className="table-container">
      <h2>County Infected Table</h2>
      <table>
        <thead>
          <tr>
            <th>County</th>
            <th>Infected Count</th>
          </tr>
        </thead>
        <tbody>
          {countyInfectedData.map((county, index) => (
            <tr key={index}>
              <td>{county.county}</td>
              <td>{county.infected}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CountyInfectedTable;
