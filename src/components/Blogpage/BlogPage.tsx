"use client";

import React from 'react';
import Link from "next/link";
import Image from "next/image"; // Import Next.js Image component
import { blogData, BlogPost } from "@/data/blogData";

const BlogPage: React.FC = () => {
  const blogPosts: BlogPost[] = blogData;

  return (
    <div className="flex flex-col items-center p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Jewelry Blog</h1>

      {/* Blog Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-screen-xl">
        {blogPosts.map((post) => (
          <div
            key={post.id}
            className="p-4 border rounded-lg shadow-md hover:shadow-xl transition duration-300 bg-white"
          >
            {/* Use Next.js Image component */}
            <div className="relative w-full h-48 mb-4">
              <Image
                src={post.img}
                alt={post.title}
                fill // Makes image responsive
                
                className="rounded-md object-cover"
              />
            </div>

            <h2 className="text-2xl font-semibold text-gray-800">{post.title}</h2>
            <p className="text-gray-500 text-sm mb-2">
              By {post.author} | {post.date} | {post.category}
            </p>
            <p className="text-gray-700">{post.excerpt}</p>

            {/* Read More Button with Link to Details Page */}
            <Link href={`/blogs/${post.id}`}>
              <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
                Read More
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};  

export default BlogPage;
