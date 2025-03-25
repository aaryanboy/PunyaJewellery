// /pages/blogs/index.tsx or /components/BlogsPage.tsx
import React from 'react';
import BlogPage from '@/components/Blogpage/BlogPage';

const BlogsPage: React.FC = () => (
  <div className="space-y-12">
    <BlogPage />
  </div>
);

export default BlogsPage;
