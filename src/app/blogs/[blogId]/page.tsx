import React from 'react';
import { jewelryData } from '@/data/jewelryData'; // Import data
import BlogDetailData from '@/components/Blogpage/BlogDetailData';

export default async function Blogdetails(
  props: {
    params: Promise<{ blogId: string }>;
  }
) {
  const params = await props.params;
  const { blogId } = params;

 // Find the blog data based on the blogId
const blogData = jewelryData.blogData.find((post) => post.id === blogId);


  if (!blogData) {
    return <div>Blog not found</div>;
  }

  return <BlogDetailData blogData={blogData} />;
}
