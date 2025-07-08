'use client'
import OurValues from '../components/OurValues';
import TestimonialQuote from '../components/TestimonialQuote';
import RoadTimeline from '../components/RoadTimeline';

import Leaders from '../components/Leaders';
import Partners from '../components/Partners';
import TeamCulture from '../components/TeamCulture';
import AboutHero from '../components/AboutHero';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <AboutHero />
      <TestimonialQuote />
      <RoadTimeline />
      <OurValues />
      <Leaders />
      <Partners />
      <TeamCulture />
    </div>
  );
} 