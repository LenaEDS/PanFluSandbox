import React, { useEffect, useState, useRef } from 'react';
import { MapContainer, TileLayer, GeoJSON, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import texasOutline from './texasOutline.json';
import './styles.css'; // Import your CSS file

const getColor = (infectedCount) => {
  return infectedCount > 5000 ? '#611D6C' :
    infectedCount > 2000 ? '#912969' :
      infectedCount > 1000 ? '#B1395B' :
        infectedCount > 500 ? '#CE5849' :
          infectedCount > 200 ? '#E0845B' :
            infectedCount > 100 ? '#EDBA76' :
              infectedCount > 50 ? '#F7EE9F' :
                '#FBFFE1';
};

const parseTexasOutline = (texasOutline) => {
  return texasOutline.features.map((feature) => ({
    name: feature.properties.name,
    geoid: feature.properties.geoid
  }));
};

const parseData = (jsonData, texasCounties) => {
  return jsonData.data.map((county) => {
    const { fips_id, compartments } = county;
    const { I } = compartments;
    const totalInfected = [
      ...I.U.L,
      ...I.U.H,
      ...I.V.L,
      ...I.V.H
    ].reduce((sum, value) => sum + value, 0);

    const countyName = texasCounties.find(tc => tc.geoid === fips_id)?.name || 'Unknown';

    return {
      county: countyName,
      fips: fips_id,
      infected: totalInfected
    };
  });
};

const Legend = () => {
  const map = useMap();

  useEffect(() => {
    const legend = L.control({ position: 'bottomright' });

    legend.onAdd = function () {
      const div = L.DomUtil.create('div', 'info legend');
      const grades = [0, 50, 100, 200, 500, 1000, 2000, 5000];
      let labels = [];

      for (let i = 0; i < grades.length; i++) {
        div.innerHTML +=
          '<i style="background:' + getColor(grades[i] + 1) + '"></i> ' +
          grades[i] + (grades[i + 1] ? '&ndash;' + grades[i + 1] + '<br>' : '+');
      }

      return div;
    };

    legend.addTo(map);

    return () => {
      legend.remove();
    };
  }, [map]);

  return null;
};

const InitialMapThree = ({ outputData }) => {
  const [countyData, setCountyData] = useState([]);

  useEffect(() => {
    const texasCounties = parseTexasOutline(texasOutline);
    const data = parseData(outputData, texasCounties);
    setCountyData(data);
  }, [outputData]);

  const onEachCounty = (feature, layer) => {
    const name = feature.properties.name;
    const countyInfo = countyData.find(item => item.county === name);

    if (countyInfo) {
      layer.bindTooltip(`${name}: ${countyInfo.infected} infected`, {
        permanent: false,
        direction: 'auto',
        className: 'county-tooltip'
      });
    } else {
      console.log(`No data found for county: ${name}`); // Debug log
    }
  };

  const geoJsonStyle = (feature) => ({
    fillColor: getColor(countyData.find(item => item.county === feature.properties.name)?.infected || 0),
    weight: 1,
    color: 'white',
    fillOpacity: 0.7
  });

  return (
    <MapContainer center={[31.0, -100.0]} zoom={6} style={{ height: '500px', width: '800px' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <GeoJSON
        data={texasOutline}
        style={geoJsonStyle}
        onEachFeature={onEachCounty}
      />
      <Legend />
    </MapContainer>
  );
};

export default InitialMapThree;
