import React from "react";

const SpecialtySection = () => {
  return (
    <div className="flex justify-center items-center relative -mt-10 " >
        <div className="bg-gray-50 border border-gray-200 text-black rounded shadow-lg p-8 w-full  md:w-[calc(100%-100px)]">
            <div className="text-center">
          <h2 className="text-lg font-semibold tracking-wide uppercase ">
            Our Specialty
          </h2>
          <p className="mt-2 text-3xl  tracking-tight  sm:text-4xl">
            Exquisite Diamond, Gold & Silver Jewelry
          </p>
          <p className="mt-4 text-lg ">
            Established in 2010, Punya Jewelry has become a renowned name in Nepal, known for exceptional quality and craftsmanship in jewelry. We specialize in offering the finest diamond, gold, and silver jewelry that guarantees purity and elegance. Visit our store and discover our stunning collections, designed to elevate your style and make every occasion special.
          </p>
        </div>

        {/* Explore Button */}
        <div className="mt-6 flex justify-center">
          <button className="hover:bg-yellow-500 text-gray-900 text-2xl py-2 px-6 rounded-lg transition">
            Explore
          </button>
        </div>
      </div>
    </div>
  );
};

export default SpecialtySection;
