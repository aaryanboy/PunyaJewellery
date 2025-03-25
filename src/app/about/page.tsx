import React from 'react';
import HeroSection from '@/components/aboutuskolagi/HeroSection';
import StatsSection from '@/components/aboutuskolagi/StatsSection';
import LeadershipMessages from '@/components/aboutuskolagi/LeadershipMessages';
import CustomerReviews from '@/components/aboutuskolagi/CustomerReviews';
import BlogSection from '@/components/Blogpage/BlogSection';
import ContactInfo from '@/components/aboutuskolagi/ContactInfo';

const AboutUsPage: React.FC = () => (
  <div className="space-y-12">
    <HeroSection />
    <StatsSection />
    <LeadershipMessages />
    <CustomerReviews />
    <BlogSection />
    <ContactInfo />
  </div>
);

export default AboutUsPage;
