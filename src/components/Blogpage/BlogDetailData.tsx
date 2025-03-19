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

      <div className="text-sm text-gray-500 mb-6">
        <span>Likes: {blogData.likes}</span> | <span>Reading Time: {blogData.readingTime} min</span>
      </div>

      <div className="mt-12">
        <h3 className="text-2xl font-semibold mb-4">Comments</h3>
        {blogData.comments.length === 0 ? (
          <p>No comments yet. Be the first to comment!</p>
        ) : (
          blogData.comments.map((comment, index) => (
            <div key={index} className="bg-gray-100 p-4 mb-4 rounded-lg">
              <strong className="text-lg">{comment.user}</strong>
              <p className="text-gray-700 mt-2">{comment.text}</p>
              <small className="text-gray-500 block mt-2">{comment.date}</small>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default BlogDetailData;
