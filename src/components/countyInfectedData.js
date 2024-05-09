// countyInfectedData.js

import texasOutline from './texasOutline.json';

const countyNames = texasOutline.features.map(feature => feature.properties.name);

const countyInfectedData = countyNames.map(county => ({
  county,
  infected: Math.floor(Math.random() * 1000) // Generate random infected counts for demonstration
}));

export default countyInfectedData;
