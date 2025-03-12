import React from 'react';

const HeroSection: React.FC = () => {
  const backgroundImage = "/images/photos%20for%20video/DSC00165.jpg";

  return (
    <section 
      className="relative bg-cover bg-center h-[60vh] flex items-center justify-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="absolute inset-0 bg-purple-900 opacity-50"></div>
      <div className="relative z-10 text-center text-white px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">About Punya Jeweley</h1>
        <p className="text-lg md:text-xl">Crafting Timeless Pieces with Modern Flair</p>
      </div>
    </section>
  );
};

export default HeroSection;
