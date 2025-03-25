"use client";

import { Blogdata } from "@/data/Blogdata";

import Link from "next/link";

interface BlogPost {
  id: string;
  title: string;
  img: string;
  date: string;
  author: string;
  category: string;
  tags: string[];
  excerpt: string;
  content: string;
  relatedPosts: string[];
}

export default function BlogPage() {
  const blogPosts: BlogPost[] = Blogdata.blogData || [];

  return (
    <div className="flex flex-col items-center p-6 bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">Jewelry Blog</h1>

      {/* Blog Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
        {blogPosts.map((post) => (
          <div
            key={post.id}
            className="p-4 border rounded-lg shadow-md hover:shadow-lg transition duration-300 bg-white"
          >
            <img
              src={post.img}
              alt={post.title}
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">{post.title}</h2>
            <p className="text-gray-500 text-sm mb-2">
              By {post.author} | {post.date} | {post.category}
            </p>
            <p className="text-gray-700 mb-4">{post.excerpt}</p>
            <div className="flex justify-between items-center">
              <Link href={`/blogs/${post.id}`}>
                <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
                  Read More
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
