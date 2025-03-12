// pages/contact.tsx
import React from 'react';
import Map from '../contactuspagekodata/Map';

const contact: React.FC = () => {
  const location = "123 Jewelry Avenue, City, Country"; // Update with your actual location
  const apiKey = "YOUR_GOOGLE_MAPS_API_KEY"; // Replace with your actual Google Maps API key

  return (
    <div className="py-10">
      <h1 className="text-3xl font-bold text-center mb-8">Contact Us</h1>

      {/* Include the Map component */}
      <Map location={location} apiKey={apiKey} />

      {/* Add additional contact information here */}
      <div className="text-center mt-6">
        <p>Phone: <a href="tel:+1234567890" className="text-blue-500">+1 (234) 567-890</a></p>
        <p>Email: <a href="mailto:contact@jewelrystore.com" className="text-blue-500">contact@jewelrystore.com</a></p>
      </div>
    </div>
  );
};

export default contact;
