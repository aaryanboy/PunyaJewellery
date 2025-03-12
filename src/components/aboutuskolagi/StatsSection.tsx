import React from 'react';

const stats = [
  { id: 1, text: "Designed & Produced in Nepal" },
  { id: 2, text: "Certified Diamonds & Gemstones" },
  { id: 3, text: "One-of-a-kind Unique Jewelry" },
  { id: 4, text: "International Standard 3-step Quality Control" },
  { id: 5, text: "Custom Handcrafted Jewelry" },
  { id: 6, text: "Earning Customer's Trust Since 2010" },
  { id: 7, text: "Exceptional Customer Care" },
];

const StatsSection: React.FC = () => {
  return (
    <section className="py-12 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-wrap justify-center gap-6">
          {stats.map((item) => (
            <div 
              key={item.id} 
              className="flex flex-col items-center p-4 bg-white shadow rounded-md w-full sm:w-1/2 md:w-1/3 lg:w-1/4"
            >
              <span className="text-3xl font-bold mb-2">{item.id}</span>
              <p className="text-center text-md">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
