import React from 'react';

const CustomerReviews: React.FC = () => (
  <section className="py-8 bg-gray-100">
    <h2 className="text-3xl font-bold text-center mb-4">Customer Reviews</h2>
    <div className="space-y-6 max-w-3xl mx-auto">
      <div className="bg-white p-6 rounded shadow">
        <p className="text-md mb-2">
          "Booked an online consultant being at home – it was so comfortable. Very much satisfied with the product."
        </p>
        <p className="text-sm font-semibold">- Nandita Neupane</p>
      </div>
      <div className="bg-white p-6 rounded shadow">
        <p className="text-md mb-2">
          "The staff is well organized and very respectful. Will consider as one of the best jewelry stores in Kathmandu."
        </p>
        <p className="text-sm font-semibold">- Aarati M</p>
      </div>
    </div>
  </section>
);

export default CustomerReviews;
