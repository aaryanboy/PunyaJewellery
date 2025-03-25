// /components/Blogpage/BlogDetailData.tsx
import React from 'react';

interface BlogDetailDataProps {
  blogData: {
    title: string;
    img: string;
    date: string;
    author: string;
    category: string;
    tags: string[];
    content: string;
    relatedPosts: string[];
    comments: { user: string; text: string; date: string }[];
    likes: number;
    readingTime: number;
  };
}

const BlogDetailData: React.FC<BlogDetailDataProps> = ({ blogData }) => {
  return (
    <div className="max-w-3xl mx-auto p-6 font-sans">
      <h1 className="text-4xl font-bold mb-6">{blogData.title}</h1>
      <img className="w-full h-auto mb-6" src={blogData.img} alt={blogData.title} />
      
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
