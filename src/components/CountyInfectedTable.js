// CountyInfectedTable.js

import React from 'react';
import countyInfectedData from './countyInfectedData';
import '../App.css'; // Import the CSS file

function CountyInfectedTable() {
    return (
      <div className="table-container">
        <h2>Infected Count</h2>
        <div className="table-scroll">
          <table>
            <thead>
              <tr>
                <th>County</th>
                <th>Infected</th>
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
      </div>
    );
  }
  
  export default CountyInfectedTable;