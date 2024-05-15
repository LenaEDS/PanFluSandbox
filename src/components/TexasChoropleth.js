import React from 'react';
import { MapContainer, TileLayer, GeoJSON } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import texasOutline from './texasOutline.json';

class TexasChoropleth extends React.Component {
  onEachCounty = (county, layer) => {
    const name = county.properties.name; // Assuming county names are stored in the "name" property
    if (name) {
      layer.bindTooltip(name, { permanent: false, direction: 'auto' });
    }
  };

  render() {
    return (
      <MapContainer center={[31.0, -100.0]} zoom={6} style={{ height: '500px', width: '800px' }}>
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
          onEachFeature={this.onEachCounty}
        />
      </MapContainer>
    );
  }
}

export default TexasChoropleth;