import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const universities = [
  {
    name: 'Harvard University',
    location: { lat: 42.3770, lng: -71.1167 },
    dripScore: 150000,
  },
  {
    name: 'Stanford University',
    location: { lat: 37.4275, lng: -122.1697 },
    dripScore: 120000,
  },
  // Add more universities
];

const MapPage = () => {
  return (
    <div className="h-screen bg-black text-white">
      <div className="h-full">
        <MapContainer
          center={[42.3770, -71.1167]}
          zoom={2}
          scrollWheelZoom={true}
          className="h-full"
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          
          {universities.map((university, index) => (
            <Marker
              key={index}
              position={university.location}
            >
              <Popup>
                <div className="text-center">
                  <h3 className="font-semibold">{university.name}</h3>
                  <p className="text-sm">DripScore: {university.dripScore}</p>
                </div>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
};

export default MapPage;
