import React from 'react';
import Image from 'next/image';
import { BlogPost } from '@/data/blogData';

interface RelatedPostsProps {
  relatedPosts: string[];
  blogData: BlogPost[];
}

const RelatedPosts: React.FC<RelatedPostsProps> = ({ relatedPosts, blogData }) => {
  return (
    <div className="flex justify-center"> {/* Center the list horizontally */}
      <ul className="w-full max-w-4xl">
        {relatedPosts.map((postId) => {
          const relatedPost = blogData.find((post) => post.id === postId);

          if (!relatedPost) return null; // Skip if post not found

          return (
            <li key={postId}  
            className="mb-4 flex items-start gap-4 justify-center h-auto ml-0 lg:ml-[-150px]"> 
{/* Flex container with equal height */}
              {/* Image */}
              <div className="relative w-16 h-16">
                <Image
                  src={relatedPost.img} // Use the image of the related post
                  alt={relatedPost.title}
                  fill
                  
                  className="rounded-md object-cover"
                />
              </div>
              {/* Text */}
              <div className="flex flex-col justify-between h-full"> {/* Ensure text is stretched to fill the available space */}
                <a href={`/blogs/${postId}`} className="text-blue-500 hover:underline text-sm">
                  {relatedPost.title} {/* Display the title of the related post */}
                </a>
                {/* Excerpt with min and max width */}
                <p className=" text-gray-500 text-xs max-w-[300px]">{relatedPost.excerpt}</p> {/* Display an excerpt or a small description */}
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default RelatedPosts;
