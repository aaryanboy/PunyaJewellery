'use client';
import Image from "next/image";

const pic = "/images/photos for video/DSC00442.jpg";  // Corrected path

const Images = () => {
    return (
        <div className="relative w-full h-screen">
        <Image 
          src={pic} 
          alt="Background Image"
          layout="fill"
          objectFit="contain"
          quality={100}
         
        />
      </div>
      
    );
}

export default Images;
