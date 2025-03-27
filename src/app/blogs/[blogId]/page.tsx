import React from 'react';
import { blogData, BlogPost } from '@/data/blogData'; // Updated import
import BlogDetailData from '@/components/Blogpage/BlogDetailData';
import RelatedPosts from '@/components/Blogpage/RelatedPosts'; // Import the new component

export default async function BlogDetails(
  props: { params: Promise<{ blogId: string }> }
) {
  const params = await props.params;
  const { blogId } = params;

  // Find the blog data based on the blogId
  const blogDataItem = blogData.find((post: BlogPost) => post.id === blogId);

  if (!blogDataItem) {
    return <div>Blog not found</div>;
  }

  // Fix blog data format
  return (
    <div>
      <BlogDetailData blogData={blogDataItem} />
      {/* Pass relatedPosts and blogData to the RelatedPosts component */}
      <RelatedPosts relatedPosts={blogDataItem.relatedPosts} blogData={blogData} />
    </div>
  );
}
