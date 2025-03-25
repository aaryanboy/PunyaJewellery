// /components/BlogSection.tsx
import React from 'react';
import Link from 'next/link';
import { blogData, BlogPost } from '@/data/blogData';

const BlogSection: React.FC = () => {
  // Select the first three posts from the blogData array
  const featuredPosts: BlogPost[] = blogData.slice(0, 3);

  return (
    <section className="my-12 p-6">
      <h2 className="text-3xl font-bold text-center mb-8">Latest Blog Posts</h2>
      <div className="grid grid-cols-3 gap-6">
        {featuredPosts.map((post) => (
          <div key={post.id} className="border rounded-lg overflow-hidden shadow-md hover:shadow-xl transition duration-300">
            <img 
              src={post.img} 
              alt={post.title} 
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
              <p className="text-gray-600 text-sm">{post.excerpt}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-8">
        {/* <Link href="">
          <a className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition duration-300">
            Show Morefsdfdsfsds
          </a>
        </Link> */}
      </div>
    </section>
  );
};

export default BlogSection;
