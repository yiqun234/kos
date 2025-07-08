'use client';

import React from 'react';
import OurValuesIcon1 from './icons/OurValuesIcon1';
import OurValuesIcon2 from './icons/OurValuesIcon2';
import OurValuesIcon3 from './icons/OurValuesIcon3';

interface ValueCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ValueCard: React.FC<ValueCardProps> = ({ icon, title, description }) => (
  <div className="bg-gradient-to-br from-cyan-700/80 to-sky-900 rounded-lg p-8 text-white flex flex-col items-start h-full">
    <div className="opacity-80">{icon}</div>
    <h3 className="text-2xl font-bold mb-4 font-['Raleway']">{title}</h3>
    <p className="text-base font-['Work_Sans'] opacity-90">{description}</p>
  </div>
);

const OurValues = () => {
  const values = [
    {
      icon: <OurValuesIcon1 />,
      title: 'Experienced Leadership',
      description: 'Our executives have led projects in some of the most iconic companies in the world.',
    },
    {
      icon: <OurValuesIcon2 />,
      title: 'Global Team',
      description: 'Our diverse team of experts covers all areas of science and technology.',
    },
    {
      icon: <OurValuesIcon3 />,
      title: 'Research Driven',
      description: 'With strong research background, we invent breakthrough technologies.',
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-[#213566] mb-12 font-['Raleway']">Our Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <ValueCard key={index} icon={value.icon} title={value.title} description={value.description} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurValues; 