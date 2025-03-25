// components/Map.tsx
import { h1 } from 'framer-motion/client';
import React from 'react';

interface MapProps {
  location: string;
  apiKey: string;
}

const Map: React.FC<MapProps> = ({ location, apiKey }) => {
  const mapSrc = `https://www.google.com/maps/embed/v1/place?q=${encodeURIComponent(location)}&key=${apiKey}`;
  
  return (
   <div className="relative h-96">hello world</div>
  );
};

export default Map;
