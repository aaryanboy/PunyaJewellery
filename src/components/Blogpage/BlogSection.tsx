// /components/BlogSection.tsx
import React from 'react';
import Link from 'next/link';
import { blogData, BlogPost } from '@/data/blogData';

const BlogSection: React.FC = () => {
  // Select the first three posts from the blogData array
  const featuredPosts: BlogPost[] = blogData.slice(0, 3);

  return (
    <section className="my-12 px-4">
      <h2 className="text-center text-3xl font-serif text-gray-800 mt-10 mb-6 uppercase tracking-wide">
        Latest Blog Posts
      </h2>
      <div className="w-full max-w-screen-lg mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-center place-items-center">
        {featuredPosts.map((post) => (
          <div key={post.id} className="m-2 sm:m-4 w-full">
            <Link href={`/blogs/${post.id}`} className="group block relative cursor-pointer">
              <img 
                src={post.img} 
                alt={post.title} 
                className="w-full sm:w-[350px] md:w-[300px] lg:w-[400px] xl:w-[350px] h-[300px] sm:h-[300px] md:h-[250px] lg:h-[300px] object-cover rounded-lg"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition duration-300 rounded-lg">
                <span className="text-white font-semibold text-lg">Expand</span>
              </div>
            </Link>
            <h3 className="text-xl font-semibold mt-4 text-center px-2">{post.title}</h3>
          </div>
        ))}
      </div>
      <div className="text-center mt-8">
        {/* Uncomment and set a valid link to enable the "Show More" button */}
        {/* <Link href="">
          <a className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition duration-300">
            Show More
          </a>
        </Link> */}
      </div>
    </section>
  );
};

export default BlogSection;
