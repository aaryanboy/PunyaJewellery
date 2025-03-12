import React from 'react';

const image = "/images/photos for video/DSC00165.jpg";

const BlogSection: React.FC = () => (
  <section className="py-12 bg-gray-50">
    <div className="max-w-7xl mx-auto px-4">
      <h2 className="text-4xl font-bold text-center mb-8">Our Blog</h2>
      <div className="flex flex-wrap gap-8 justify-center">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden w-full sm:w-1/2 md:w-1/3">
          <img 
            src={image} 
            alt="Antique Gold Jewellery" 
            className="w-full h-56 object-cover" 
          />
          <div className="p-6">
            <h3 className="text-2xl font-semibold mb-2">Antique Gold Jewellery</h3>
            <p className="text-gray-700 mb-4">
              Discover the timeless elegance of antique gold jewellery, blending tradition with modern style.
            </p>
            <a href="#" className="text-blue-600 font-semibold hover:underline">Read More</a>
          </div>
        </div>
        <div className="bg-white shadow-lg rounded-lg overflow-hidden w-full sm:w-1/2 md:w-1/3">
          <img 
            src={image} 
            alt="Jewellery Care Tips" 
            className="w-full h-56 object-cover" 
          />
          <div className="p-6">
            <h3 className="text-2xl font-semibold mb-2">8 Essential Jewellery Care Tips</h3>
            <p className="text-gray-700 mb-4">
              Learn the best practices to maintain and preserve the beauty of your cherished jewellery.
            </p>
            <a href="#" className="text-blue-600 font-semibold hover:underline">Read More</a>
          </div>
        </div>
        <div className="bg-white shadow-lg rounded-lg overflow-hidden w-full sm:w-1/2 md:w-1/3">
          <img 
            src={image} 
            alt="Bridal Jewellery Guide" 
            className="w-full h-56 object-cover" 
          />
          <div className="p-6">
            <h3 className="text-2xl font-semibold mb-2">How to Choose Bridal Jewellery</h3>
            <p className="text-gray-700 mb-4">
              Find out how to select the perfect bridal jewellery that complements your style and personality.
            </p>
            <a href="#" className="text-blue-600 font-semibold hover:underline">Read More</a>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default BlogSection;
