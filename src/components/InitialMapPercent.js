import React, { useEffect, useState, useRef } from 'react';
import { MapContainer, TileLayer, GeoJSON, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import texasOutline from './texasOutline.json';
import './Legend.css'; // Ensure you have a CSS file for styling

// Color mapping function
const getColor = (normalizedValue) => {
  return normalizedValue > 0.8 ? '#800026' :
    normalizedValue > 0.6 ? '#BD0026' :
      normalizedValue > 0.4 ? '#E31A1C' :
        normalizedValue > 0.2 ? '#FC4E2A' :
          normalizedValue > 0.1 ? '#FD8D3C' :
            normalizedValue > 0.05 ? '#FEB24C' :
              normalizedValue > 0.01 ? '#FED976' :
                '#FFEDA0';
};

// Parsing Texas outline data
const parseTexasOutline = (texasOutline) => {
  return texasOutline.features.map((feature) => ({
    name: feature.properties.name,
    geoid: feature.properties.geoid
  }));
};

// Parsing and normalizing data
const parseData = (jsonData, texasCounties) => {
  if (!jsonData || !jsonData.data) {
    console.error('No data or invalid data format:', jsonData);
    return [];
  }

  const rawData = jsonData.data.map((county) => {
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
      infected: Math.ceil(totalInfected) // Round up the infected count
    };
  });

  // Calculate min and max infected counts
  const infectedCounts = rawData.map(data => data.infected);
  const minInfected = Math.min(...infectedCounts);
  const maxInfected = Math.max(...infectedCounts);

  // Normalize the infected counts
  const normalizedData = rawData.map(data => {
    const normalizedInfected = maxInfected === minInfected ? 0 : (data.infected - minInfected) / (maxInfected - minInfected);
    return {
      ...data,
      normalizedInfected: normalizedInfected
    };
  });

  return normalizedData;
};

const Legend = () => {
  const map = useMap();

  useEffect(() => {
    const legend = L.control({ position: 'bottomright' });

    legend.onAdd = function () {
      const div = L.DomUtil.create('div', 'info legend');
      const grades = [0.8, 0.6, 0.4, 0.2, 0.1, 0.05, 0.01, 0];
      let labels = [];

      for (let i = 0; i < grades.length; i++) {
        const grade = grades[i];
        const nextGrade = grades[i - 1];
        labels.push(
          `<i style="background:${getColor(grade)}"></i> ${
            grade === 0.8 ? '80%+' : `${(grade * 100).toFixed(0)}%&ndash;${(nextGrade * 100).toFixed(0) || 0}%`
          }`
        );
      }

      div.innerHTML = `<strong>Normalized Infected (%)</strong><br>${labels.join('<br>')}`;
      return div;
    };

    legend.addTo(map);

    return () => {
      legend.remove();
    };
  }, [map]);

  return null;
};

const InitialMapPercent = ({ outputData }) => {
  const [countyData, setCountyData] = useState([]);
  const mapRef = useRef();

  useEffect(() => {
    const texasCounties = parseTexasOutline(texasOutline);
    if (outputData) {
      const data = parseData(outputData, texasCounties);
      setCountyData(data);
      console.log('County data loaded:', data); // Debug log
    }
  }, [outputData]);

  const onEachCounty = (feature, layer) => {
    const geoid = feature.properties.geoid;
    const countyInfo = countyData.find(item => item.fips === geoid);

    if (countyInfo) {
      const tooltipContent = `${countyInfo.county}: ${countyInfo.infected} infected (${(countyInfo.normalizedInfected * 100).toFixed(2)}%)`;
      layer.bindTooltip(tooltipContent, {
        permanent: false,
        direction: 'auto',
        className: 'county-tooltip'
      });
    } else {
      const tooltipContent = `${feature.properties.name}: No data`;
      layer.bindTooltip(tooltipContent, {
        permanent: false,
        direction: 'auto',
        className: 'county-tooltip'
      });
    }
    layer.on('mouseover', function () {
      this.openTooltip();
    });
    layer.on('mouseout', function () {
      this.closeTooltip();
    });
  };

  const geoJsonStyle = (feature) => {
    const countyInfo = countyData.find(item => item.fips === feature.properties.geoid);
    const normalizedInfected = countyInfo ? countyInfo.normalizedInfected : 0;
    console.log(`County: ${feature.properties.name}, Normalized Infected: ${normalizedInfected}`); // Debug log
    return {
      fillColor: getColor(normalizedInfected),
      weight: 1,
      color: 'white',
      fillOpacity: 0.7
    };
  };

  // Clean up layers on outputData change
  useEffect(() => {
    if (mapRef.current) {
      mapRef.current.eachLayer(layer => {
        if (layer instanceof L.GeoJSON) {
          layer.clearLayers();
        }
      });
    }
  }, [outputData]);

  return (
    <div>
      <MapContainer
        id="map"
        center={[31.0, -100.0]}
        zoom={6}
        style={{ height: '500px', width: '800px' }}
        whenCreated={mapInstance => { mapRef.current = mapInstance; }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {countyData.length > 0 && (
          <GeoJSON
            key={JSON.stringify(outputData)}
            data={texasOutline}
            style={geoJsonStyle}
            onEachFeature={onEachCounty}
          />
        )}
        <Legend />
      </MapContainer>
    </div>
  );
};

export default InitialMapPercent;
