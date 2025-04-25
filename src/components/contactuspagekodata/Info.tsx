import React from "react";
import Image from 'next/image';

import { FaFacebook, FaInstagram, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Info: React.FC = () => {
  return (
    <div className=" mx-auto p-6  rounded-2xl mt-10 space-y-6 text-gray-800">
      <h2 className="text-3xl font-bold text-center">Contact Us</h2>

<div className="flex justify-center">
    
    <Image
        src="/images/Untouched/bulbul-ahmed-60xSSwxiyao-unsplash.jpg" // photo of the shop
        alt="A beautiful piece of jewelry from Punya Jewelry"
        width={500}  // Image width in pixels
        height={300} // Image height in pixels
        className="rounded-xl shadow-lg "
      />
</div>
      
      <div className="space-y-2 text-center">
        <p className="flex items-center justify-center gap-2">
          <FaPhoneAlt className="text-blue-500" /> +977-9800000000
        </p>
        <p className="flex items-center justify-center gap-2">
          <FaEnvelope className="text-red-500" /> support@punyajewelry.com
        </p>
        <p className="flex items-center justify-center gap-2">
          <FaMapMarkerAlt className="text-green-500" /> Kathmandu, Nepal
        </p>
      </div>

      <div className="flex justify-center gap-6 text-xl mt-4">
        <a href="https://facebook.com/punyajewelry" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
          <FaFacebook />
        </a>
        <a href="https://instagram.com/punyajewelry" target="_blank" rel="noopener noreferrer" className="text-pink-600 hover:text-pink-800">
          <FaInstagram />
        </a>
      </div>

      <div className="text-center mt-6">
        <p>Business Hours: <strong>Sun - Fri, 10AM - 6PM</strong></p>
        <p>We usually respond within 24 hours.</p>
      </div>
    </div>
  );
};

export default Info;
