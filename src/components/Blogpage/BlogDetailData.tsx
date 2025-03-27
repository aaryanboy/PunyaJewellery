import React from 'react';
import Image from 'next/image';
import { BlogPost } from '@/data/blogData'; // Import BlogPost type from your data file

interface BlogDetailDataProps {
  blogData: BlogPost; // Use the BlogPost type for the prop
}

const BlogDetailData: React.FC<BlogDetailDataProps> = ({ blogData }) => {
  const imageSrc = blogData.img || null; // Check if the image URL is empty, set to null if empty

  return (
    <div className="max-w-3xl mx-auto p-6 font-sans">
      <h1 className="text-4xl font-bold mb-6">{blogData.title}</h1>
      
      {imageSrc && ( // Conditionally render the Image component if src is valid
        <div className="relative w-full h-64 mb-6">
          <Image 
            src={imageSrc} 
            alt={blogData.title} 
            fill // Makes the image responsive
           
            className="rounded-lg object-cover"
          />
        </div>
      )}

      <div className="text-gray-600 text-sm mb-4">
        <span>{blogData.date}</span> | <span>{blogData.author}</span> | <span>{blogData.category}</span>
      </div>

      <div className="text-lg leading-relaxed mb-6">
        <p>{blogData.content}</p>
      </div>

      <div className="flex flex-wrap gap-3 mb-6">
        {blogData.tags.map((tag, index) => (
          <span key={index} className="bg-gray-200 text-gray-800 py-1 px-3 rounded-full text-sm">
            {tag}
          </span>
        ))}
      </div>

     
    </div>
  );
};

export default BlogDetailData;
