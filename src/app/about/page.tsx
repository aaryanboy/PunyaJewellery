import React from 'react';
import HeroSection from '@/components/aboutuskolagi/HeroSection';
import LeadershipMessages from '@/components/aboutuskolagi/LeadershipMessages';
import CustomerReviews from '@/components/aboutuskolagi/CustomerReviews';
import BlogSection from '@/components/Blogpage/BlogSection';

const AboutUsPage: React.FC = () => (
  <div className="space-y-12">
    <HeroSection />
    <LeadershipMessages />
   
    <BlogSection /> 
    <CustomerReviews />
  </div>
);

export default AboutUsPage;
