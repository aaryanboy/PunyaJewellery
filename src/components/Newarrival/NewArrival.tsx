import React from 'react';



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
    alt: 'Enigmatic Gold Necklace Set',
    description: 'Enigmatic Gold Necklace Set',
  },
  {
    src: pic2,
    alt: 'Solstice Diamond Necklace Set',
    description: 'Solstice Diamond Necklace Set',
  },
  {
    src: pic3,
    alt: 'Dazzling Diamond Necklace Set',
    description: 'Dazzling Diamond fdgdfgNecklace Set',
  },
  {
    src: pic4,
    alt: 'Victorian Gold Necklace Set',
    description: 'Victorian Gold Necklace Set',
  },
];

const NewArrivals: React.FC = () => (
  <div>
    <h2>New Arrivals</h2>
    <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap' }}>
  {newArrivals.map((item, index) => (
    <div key={index} style={{ textAlign: 'center', margin: '10px' }}>
      <img
        src={item.src}
        alt={item.alt}
        style={{
          width: '200px',  // Fixed width for all images
          height: '200px', // Fixed height to ensure uniform size
          objectFit: 'cover', // Ensures images are cropped to fit the container without distortion
          borderRadius: '8px'
        }}
      />
      <p>{item.description}</p>
    </div>
  ))}
</div>

  </div>
);

export default NewArrivals;
