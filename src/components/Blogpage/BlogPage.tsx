// /components/Blogpage/BlogPage.tsx
"use client";

import React from 'react';
import Link from "next/link";
import { blogData, BlogPost } from "@/data/blogData"; // Updated import

const BlogPage: React.FC = () => {
  // Since blogData is now an array of BlogPost objects, we use it directly.
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
            <img
              src={post.img}
              alt={post.title}
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h2 className="text-2xl font-semibold text-gray-800">{post.title}</h2>
            <p className="text-gray-500 text-sm mb-2">
              By {post.author} | {post.date} | {post.category}
            </p>
            <p className="text-gray-700">{post.excerpt}</p>
            <div className="flex justify-between items-center mt-4">
              <p className="text-sm text-gray-500">{post.readingTime} min read</p>
              <p className="text-sm text-gray-500">{post.likes} ❤️</p>
            </div>

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
