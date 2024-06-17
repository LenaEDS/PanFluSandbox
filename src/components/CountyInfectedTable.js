import React, { useState } from 'react';
import countyInfectedData from './countyInfectedData';
import '../App.css'; // Import the CSS file
import search from './search.png';

function CountyInfectedTable() {
  const [sortedData, setSortedData] = useState(countyInfectedData);
  const [searchTerm, setSearchTerm] = useState('');
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

  // Function to filter data based on search term
  const filteredData = sortedData.filter((county) =>
    county.county.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="table-container">
      <h2>
      <img src={search} alt="Search" className="search-icon" />
        Infected
          <input
            type="text"
            className="search-input"
            placeholder="Search County..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
      </h2>
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
            {filteredData.map((county, index) => (
              <tr key={index} className={index % 2 === 0 ? 'even-row' : 'odd-row'}>
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
