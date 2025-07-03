import React, { useState, useEffect } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '80vh'
};

const center = {
  lat: 39.8283,
  lng: -98.5795
}; // Center of the USA

const universityLocations = [
  {
    name: 'Stanford University',
    position: { lat: 37.4275, lng: -122.1697 },
    logo: '/dripverse/images/universities/stanford.png'
  },
  {
    name: 'UC Berkeley',
    position: { lat: 37.8719, lng: -122.2585 },
    logo: '/dripverse/images/universities/berkeley.png'
  },
  {
    name: 'UCLA',
    position: { lat: 34.0689, lng: -118.4452 },
    logo: '/dripverse/images/universities/ucla.png'
  },
  {
    name: 'NYU',
    position: { lat: 40.7291, lng: -73.9965 },
    logo: '/dripverse/images/universities/nyu.png'
  },
  {
    name: 'Columbia University',
    position: { lat: 40.8075, lng: -73.9626 },
    logo: '/dripverse/images/universities/columbia.png'
  },
  {
    name: 'University of Chicago',
    position: { lat: 41.7899, lng: -87.5962 },
    logo: '/dripverse/images/universities/chicago.png'
  },
  {
    name: 'University of Michigan',
    position: { lat: 42.2808, lng: -83.7430 },
    logo: '/dripverse/images/universities/michigan.png'
  },
  {
    name: 'Harvard University',
    position: { lat: 42.3767, lng: -71.1165 },
    logo: '/dripverse/images/universities/harvard.png'
  },
  {
    name: 'MIT',
    position: { lat: 42.3583, lng: -71.0923 },
    logo: '/dripverse/images/universities/mit.png'
  },
  {
    name: 'University of Washington',
    position: { lat: 47.6539, lng: -122.3095 },
    logo: '/dripverse/images/universities/washington.png'
  }
];

const Maps = () => {
  const [selectedUniversity, setSelectedUniversity] = useState(null);
  const googleMapsApiKey = 'YOUR_API_KEY_HERE'; // You'll need to replace this with your actual API key

  const handleMarkerClick = (university) => {
    setSelectedUniversity(university);
  };

  const CustomMarker = ({ position, logo, name }) => {
    return (
      <div className="relative">
        <Marker
          position={position}
          onClick={() => handleMarkerClick({ name, position })}
        />
        <div className="absolute -top-10 -left-10 transform -translate-x-1/2 -translate-y-1/2">
          <img
            src={logo}
            alt={name}
            className="w-12 h-12 rounded-full border-2 border-white"
          />
        </div>
      </div>
    );
  };

  return (
    <div className="max-w-7xl mx-auto px-4">
      <h2 className="text-3xl font-bold text-red-500 mb-6">University Locations</h2>
      
      <LoadScript googleMapsApiKey={googleMapsApiKey}>
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={4}
        >
          {universityLocations.map((university, index) => (
            <CustomMarker
              key={index}
              position={university.position}
              logo={university.logo}
              name={university.name}
            />
          ))}
        </GoogleMap>
      </LoadScript>

      {selectedUniversity && (
        <div className="mt-6 bg-white p-6 rounded-lg shadow">
          <h3 className="text-xl font-semibold mb-2">{selectedUniversity.name}</h3>
          <div className="flex items-center gap-4">
            <img
              src={selectedUniversity.logo}
              alt={selectedUniversity.name}
              className="w-24 h-24 rounded-lg"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Maps;
