// src/TestParameters.js

import React from 'react';

const TestParameters = ({ data }) => {
  console.log('Rendering TestParameters with data:', data); // Log data

  return (
    <div>
      <h2>Test Parameters</h2>
      <ul>
        {data.map((item) => (
          <li key={item._id}>{item.day}: {item.otherField}</li>
        ))}
      </ul>
    </div>
  );
};

export default TestParameters;
