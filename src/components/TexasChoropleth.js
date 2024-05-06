// TexasChoroplethjs
import React from 'react';
import { MapContainer, TileLayer, GeoJSON } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import texasOutline from './texasOutline.json'; // Texas outline JSON data from City of Denton (https://data.cityofdenton.com/en/dataset/texas-counties-polygon/resource/be1b384f-3b2e-4238-88a8-4410cb36f7fc)

class TexasChoropleth extends React.Component {
  render() {
    return (
      <MapContainer center={[31.0, -100.0]} zoom={6} style={{ height: '500px', width: '800px' }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <GeoJSON
          data={texasOutline}
          style={() => ({
            fillColor: '#238b45',
            weight: 1,
            color: 'white',
            fillOpacity: 0.7
          })}
        />
      </MapContainer>
    );
  }
}

export default TexasChoropleth;
