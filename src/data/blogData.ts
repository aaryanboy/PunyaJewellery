// /data/blogData.ts

export interface BlogPost {
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
    comments: { user: string; text: string; date: string }[];
    likes: number;
    readingTime: number;
  }
  
  export const blogData: BlogPost[] = [
    {
      id: 'blog-001',
      title: 'The Beauty of Handmade Gold Jewelry',
      img: '/images/Untouched/forsilver.jpg', // Updated
      date: '2025-03-14',
      author: 'Punya Jewelry Team',
      category: 'Jewelry Trends',
      tags: ['gold', 'handmade', 'luxury', 'design'],
      excerpt: 'Discover why handmade gold jewelry is timeless, elegant, and a great investment.',
      content: 'Handmade gold jewelry has been cherished for centuries...',
      relatedPosts: ['blog-002', 'blog-003'],
      comments: [
        { user: 'JohnDoe', text: 'Love this article!', date: '2025-03-15' },
        { user: 'JaneSmith', text: 'Very informative, thanks for sharing!', date: '2025-03-16' }
      ],
      likes: 120,
      readingTime: 5
    },
    {
      id: 'blog-002',
      title: 'How to Care for Your Silver Jewelry',
      img: '/images/Untouched/forsilver.jpg', // Updated
      date: '2025-03-10',
      author: 'Punya Jewelry Experts',
      category: 'Jewelry Care',
      tags: ['silver', 'care', 'maintenance', 'cleaning'],
      excerpt: 'Learn the best tips and tricks to keep your silver jewelry shining.',
      content: 'Silver jewelry is beautiful but requires special care...',
      relatedPosts: ['blog-001', 'blog-004'],
      comments: [
        { user: 'EmilyR', text: 'I didn’t know about the toothpaste trick, thanks!', date: '2025-03-11' }
      ],
      likes: 75,
      readingTime: 4
    },
    {
      id: 'blog-003',
      title: 'Top 5 Engagement Ring Trends for 2025',
      img: '/images/Untouched/forsilver.jpg', // Updated
      date: '2025-02-28',
      author: 'Punya Jewelry Team',
      category: 'Jewelry Trends',
      tags: ['rings', 'engagement', 'diamond', 'trends'],
      excerpt: 'From vintage to modern, here are the engagement ring trends you need to know.',
      content: 'Engagement rings are evolving with new styles...',
      relatedPosts: ['blog-001', 'blog-005'],
      comments: [
        { user: 'LiamG', text: 'I love the vintage styles mentioned!', date: '2025-02-29' }
      ],
      likes: 95,
      readingTime: 6
    }
  ];
  