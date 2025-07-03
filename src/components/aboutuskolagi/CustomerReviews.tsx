import React from 'react';

const CustomerReviews: React.FC = () => (
  <section className="py-12 bg-gradient-to-b from-white to-gray-100">
    <div className="max-w-5xl mx-auto px-4 text-center">
      <h2 className="text-4xl font-bold text-gray-800 mb-8">What Our Customers Say</h2>
      <div className="grid gap-6 md:grid-cols-2">
        {/* Review 1 */}
        <div className="bg-white p-6 rounded-2xl shadow-md border hover:shadow-xl transition-shadow duration-300 text-left">
          <p className="text-gray-700 text-lg italic mb-4">
            &ldquo;I purchased a gold Tilhari set and it was absolutely stunning! The craftsmanship and detail exceeded my expectations. Will definitely shop again.&rdquo;
          </p>
          <p className="text-gray-900 font-semibold">— Nandita Neupane</p>
        </div>

        {/* Review 2 */}
        <div className="bg-white p-6 rounded-2xl shadow-md border hover:shadow-xl transition-shadow duration-300 text-left">
          <p className="text-gray-700 text-lg italic mb-4">
            &ldquo;Their silver collection is elegant and timeless. I received so many compliments on my Rani Haar. The customer service was warm and helpful too.&rdquo;
          </p>
          <p className="text-gray-900 font-semibold">— Aarati M</p>
        </div>
      </div>
    </div>
  </section>
);

export default CustomerReviews;
