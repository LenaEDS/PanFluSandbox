// InitialMap.js

import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, GeoJSON } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import texasOutline from './texasOutline.json';
import OUTPUT_day0 from './OUTPUT_day0.json';
import './styles.css'; // Import your CSS file

const getColor = (susceptibleCount) => {
  return susceptibleCount > 50000 ? '#800026' :
    susceptibleCount > 20000 ? '#BD0026' :
      susceptibleCount > 10000 ? '#E31A1C' :
        susceptibleCount > 5000 ? '#FC4E2A' :
          susceptibleCount > 2000 ? '#FD8D3C' :
            susceptibleCount > 1000 ? '#FEB24C' :
              susceptibleCount > 500 ? '#FED976' :
                '#FFEDA0';
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
    const { S } = compartments;
    const totalSusceptible = [
      ...S.U.L,
      ...S.U.H,
      ...S.V.L,
      ...S.V.H
    ].reduce((sum, value) => sum + value, 0);

    const countyName = texasCounties.find(tc => tc.geoid === fips_id)?.name || 'Unknown';

    return {
      county: countyName,
      fips: fips_id,
      susceptible: totalSusceptible
    };
  });
};

const InitialMap = () => {
  const [countyData, setCountyData] = useState([]);

  useEffect(() => {
    const texasCounties = parseTexasOutline(texasOutline);
    const data = parseData(OUTPUT_day0, texasCounties);
    setCountyData(data);
  }, []);

  const onEachCounty = (feature, layer) => {
    const name = feature.properties.name;
    const countyInfo = countyData.find(item => item.county === name);

    if (countyInfo) {
      layer.bindTooltip(`${name}: ${countyInfo.susceptible} susceptible`, {
        permanent: false,
        direction: 'auto',
        className: 'county-tooltip'
      });
    } else {
      console.log(`No data found for county: ${name}`); // Debug log
    }
  };

  const geoJsonStyle = (feature) => ({
    fillColor: getColor(countyData.find(item => item.county === feature.properties.name)?.susceptible || 0),
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
    </MapContainer>
  );
};

export default InitialMap;
