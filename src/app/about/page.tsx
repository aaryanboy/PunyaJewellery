import React from "react";

const AboutUs = () => {
  return (
    <div className="bg-gray-50 text-gray-800 py-16">
      <div className="container mx-auto px-4">
        {/* Title Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-semibold text-gray-800 mb-4">About Us</h1>
          <p className="text-lg text-gray-600">
            Our passion for fine jewelry meets craftsmanship and style.
          </p>
        </div>

        {/* Mission Section */}
        <div className="flex flex-col md:flex-row mb-16">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Mission</h2>
            <p className="text-gray-600">
              At Jewelry Shop, we believe that jewelry is more than just an accessory. It is a reflection of one's individuality, elegance, and style. We craft each piece with the utmost care, ensuring it not only looks stunning but also tells a unique story.
            </p>
          </div>
          <div className="md:w-1/2">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Craftsmanship</h2>
            <p className="text-gray-600">
              Every piece of jewelry we create is handmade with precision, using only the finest materials. Our artisans pay attention to every detail, ensuring that each creation is of the highest quality, giving you timeless beauty and durability.
            </p>
          </div>
        </div>

        {/* Our Story Section */}
        <div className="text-center mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Story</h2>
          <p className="text-lg text-gray-600">
            Founded by a group of passionate jewelry enthusiasts, our journey began with a simple yet powerful vision: to offer jewelry that blends traditional techniques with contemporary designs. From humble beginnings, we have grown into a trusted name in the jewelry industry, continually pushing boundaries while staying true to our roots.
          </p>
        </div>

        {/* Team Section */}
        <div className="flex flex-col md:flex-row justify-between gap-8">
          <div className="md:w-1/3">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Jane Doe</h3>
            <p className="text-gray-600">Founder & CEO</p>
            <p className="text-gray-500 text-sm mt-2">
              Jane’s expertise in design and passion for craftsmanship led her to create Jewelry Shop. She ensures each piece resonates with her love for beauty and detail.
            </p>
          </div>
          <div className="md:w-1/3">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">John Smith</h3>
            <p className="text-gray-600">Lead Designer</p>
            <p className="text-gray-500 text-sm mt-2">
              John’s vision and creativity drive the unique styles of our collections. His commitment to innovative design elevates the timelessness of each piece.
            </p>
          </div>
          <div className="md:w-1/3">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Emily Johnson</h3>
            <p className="text-gray-600">Master Artisan</p>
            <p className="text-gray-500 text-sm mt-2">
              Emily’s unparalleled craftsmanship ensures that every piece is meticulously made. Her dedication to quality and excellence is at the heart of our brand.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
