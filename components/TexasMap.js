import React from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const TexasMap = () => {
  return (
      <MapContainer center={[31.9686, -99.9018]} zoom={6} style={{ height: '500px', width: '800px' }}>
          <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
      </MapContainer>
  );
};

export default TexasMap;