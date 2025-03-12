// components/Map.tsx
import React from 'react';

interface MapProps {
  location: string;
  apiKey: string;
}

const Map: React.FC<MapProps> = ({ location, apiKey }) => {
  const mapSrc = `https://www.google.com/maps/embed/v1/place?q=${encodeURIComponent(location)}&key=${apiKey}`;
  
  return (
    <section className="contact-us container mx-auto p-4">
      <h2 className="text-2xl font-semibold mb-4">Our Location</h2>

      {/* Google Map Embed */}
      <div className="map-container mb-6">
        <iframe
          src={mapSrc}
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          className="rounded-lg shadow-lg"
        ></iframe>
      </div>
    </section>
  );
};

export default Map;
