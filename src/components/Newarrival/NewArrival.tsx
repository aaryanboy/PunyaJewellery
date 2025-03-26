"use client";
import React from "react";
import Image from "next/image"; // Import Next.js Image component

const pic1 = "/images/photos for video/DSC00442.jpg";
const pic2 = "/images/Untouched/yelloWomenlook.jpg";
const pic3 = "/images/photos for video/DSC00442.jpg";
const pic4 = "/images/Untouched/jewwekklly123.jpg";

interface Product {
  src: string;
  alt: string;
  description: string;
}

const newArrivals: Product[] = [
  {
    src: pic1,
    alt: "Enigmatic Gold Necklace Set",
    description: "Enigmatic Gold Necklace Set",
  },
  {
    src: pic2,
    alt: "Solstice Diamond Necklace Set",
    description: "Solstice Diamond Necklace Set",
  },
  {
    src: pic3,
    alt: "Dazzling Diamond Necklace Set",
    description: "Dazzling Diamond Necklace Set",
  },
  {
    src: pic4,
    alt: "Victorian Gold Necklace Set",
    description: "Victorian Gold Necklace Set",
  },
];

const NewArrivals: React.FC = () => (
  <div>
    <h2 className="text-center text-3xl font-serif text-gray-800 mt-10 mb-6 uppercase tracking-wide">
      New Arrivals
    </h2>

    <div className="w-full max-w-screen-lg mx-auto grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 justify-center place-items-center px-4">
    {newArrivals.map((item, index) => (
  <div key={index} className="m-2 sm:m-4">
    <div className="relative w-[200px] sm:w-[250px] md:w-[200px] lg:w-[400px] xl:w-[204px] h-[250px] sm:h-[250px] md:h-[250px] lg:h-[300px] xl:h-[300px]">
      <Image
        src={item.src}
        alt={item.alt}
        fill
        objectFit="cover"
        className="rounded-lg"
        priority={index < 2} // Prioritize loading the first 2 images
      />
    </div>
    <p className="text-gray-700 text-center">{item.description}</p>
  </div>
))}

    </div>
  </div>
);

export default NewArrivals;
