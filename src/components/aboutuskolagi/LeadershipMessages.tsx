import React from 'react';
import Image from 'next/image';

const LeadershipMessages: React.FC = () => (
  <section className="py-12">
    <div className="max-w-5xl mx-auto px-4">
      <h2 className="text-4xl font-bold text-center mb-8">Our Leadership</h2>
      <div className="space-y-12">
        {/* First Profile */}
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="flex-shrink-0">
            <Image 
              src="/images/photos%20for%20video/DSC00165.jpg" 
              alt="Punya Kaji Bajracharya" 
              width={192}  // Adjust as needed
              height={192} // Adjust as needed
              className="object-cover rounded-md shadow-lg"
            />
          </div>
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-semibold">Punya Kaji Bajracharya</h3>
            <p className="mt-2 text-gray-600">
              Owner & Husband, running the shop with passion and dedication. He brings a wealth of experience and vision to lead the brand.
            </p>
          </div>
        </div>
        {/* Second Profile */}
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="flex-shrink-0">
            <Image 
              src="/images/photos%20for%20video/DSC00165.jpg" 
              alt="Mangita Shakya Bajracharya" 
              width={192}  
              height={192} 
              className="object-cover rounded-md shadow-lg"
            />
          </div>
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-semibold">Mangita Shakya Bajracharya</h3>
            <p className="mt-2 text-gray-600">
              Owner & Wife, running the shop with grace and meticulous care. She ensures every detail is perfect, making the brand a symbol of quality.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default LeadershipMessages;
