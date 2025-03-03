'use client';
import Image from "next/image";

const pic = "/images/photos for video/DSC00442.jpg";  // Corrected path

const Images = () => {
  return (
    <div className="relative w-full h-screen">
      <Image 
        src={pic} 
        alt="Background Image"
        fill // This automatically makes the image fill its container
        style={{ objectFit: 'contain' }} // Using CSS objectFit property
        quality={100}
      />
    </div>
  );
}

export default Images;
