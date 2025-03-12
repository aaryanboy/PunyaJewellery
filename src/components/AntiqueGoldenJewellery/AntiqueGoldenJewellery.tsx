'use client';
import React from 'react';
import Image from 'next/image';

const image="/images/photos for video/DSC00165.jpg"

const AntiqueGoldenJewellery: React.FC = () => {
  return (
    <section className="antique-golden-jewellery py-12">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
      <div className="image-wrapper w-full md:w-1/2 flex justify-center mb-8 md:mb-0 relative">
  {/* Black Background */}
  <div className="bg-gray-300 absolute top-20 left-0 w-full h-full"></div>

  {/* Image Container */}
  <div className="p-4 relative" style={{ width: '550px', height: '500px' }}>
    <Image
      src={image}
      alt="Antique Bridal Jewellery in Nepal"
      width={550}
      height={500}
      className="object-cover w-full h-full relative"
    />
  </div>
</div>

        <div className="content w-full md:w-1/2 md:pl-9">
          <h2 className="text-3xl font-bold mb-4">Antique Golden Jewellery</h2>
          <p className="mb-4">
            A piece of antique jewellery is a timeless classic that will always be in fashion. We offer a wide range of antique golden jewellery, each piece with its own unique story.
          </p>
          <p className="mb-6">
            Our pieces are made with the finest materials and craftsmanship, ensuring that you will love them for years to come. Timeless Elegance.
          </p>
          <a href="/shop" className="inline-block bg-gold text-white py-2 px-4 rounded">
            SHOP NOW
          </a>
        </div>
      </div>
    </section>
  );
};

export default AntiqueGoldenJewellery;
