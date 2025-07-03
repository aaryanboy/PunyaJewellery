// /pages/blogs/index.tsx or /components/BlogsPage.tsx
import React from 'react';
import BlogPage from '@/components/Blogpage/BlogPage';
import CustomerReviews from '@/components/aboutuskolagi/CustomerReviews';

const BlogsPage: React.FC = () => (
  <div className="space-y-12">
    <BlogPage />
    <CustomerReviews />

  </div>
);

export default BlogsPage;
