'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import LinkedInIcon from './icons/LinkedInIcon';

const leaders = [
  {
    name: 'Schalal Habib',
    title: 'Founder, Chairman & CEO',
    image: '/images/l1.png',
    linkedin: '#',
    description: 'With over 20 years of experience in MedTech, Schalal founded KOS with a vision to make proactive health monitoring accessible to everyone.',
  },
  {
    name: 'Trevor Barran',
    title: 'CFO',
    image: '/images/l2.jpg',
    linkedin: '#',
    description: 'Trevor brings extensive experience in financial strategy and capital management for high-growth technology companies, ensuring our sustainable expansion.',
  },
  {
    name: 'Jeff Berkowitz',
    title: 'Board Member',
    image: '/images/l3.png',
    linkedin: '#',
    description: 'Served as Executive Vice President at UnitedHealth Group, Executive Vice President at Walgreens Boots, Senior Vice President at Merck.',
  },
  {
    name: 'Dr. Nabil Abadir',
    title: 'Board Member',
    image: '/images/l4.png',
    linkedin: '#',
    description: 'A seasoned expert in medical device commercialization, Dr. Abadir provides critical guidance on our product strategy and market fit.',
  },
  {
    name: 'Dr. Bruno Strigini',
    title: 'Board Member',
    image: '/images/l5.png',
    linkedin: '#',
    description: "Formerly the head of oncology at a major pharmaceutical firm, Dr. Strigini's insights into clinical development and regulatory pathways are invaluable.",
  },
];

const Leaders = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleInteraction = (index: number | null) => {
    setActiveIndex(index);
  };

  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-16 text-left">
          <p className="text-sm font-semibold text-[#00A9C5] uppercase tracking-wider">EXECUTIVE TEAM</p>
          <h2 className="text-4xl md:text-5xl font-bold text-[#213566] mt-2">Our Leaders</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {leaders.map((leader, index) => {
            const isExpanded = activeIndex === index && leader.description;
            return (
              <div
                key={leader.name}
                className="relative aspect-[3/4] rounded-lg overflow-hidden group"
                onMouseEnter={() => handleInteraction(index)}
                onMouseLeave={() => handleInteraction(null)}
                onClick={() => handleInteraction(activeIndex === index ? null : index)}
              >
                <Image
                  src={leader.image}
                  alt={`Portrait of ${leader.name}`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover w-full h-full"
                />
                <div
                  className={`absolute bottom-0 left-0 right-0 rounded-tl-xl rounded-tr-xl bg-gradient-to-br from-white/25 to-white/5 shadow-[0px_0px_50px_-25px_rgba(0,0,0,0.50)] outline outline-[3px] outline-offset-[-3px] outline-white/20 backdrop-blur-[50px] overflow-hidden transition-all duration-500 ease-in-out ${
                    isExpanded ? 'h-48' : 'h-24'
                  }`}
                >
                  <div className="relative w-full h-full p-5">
                    <h3 className="text-white text-xl font-medium font-['Work_Sans'] leading-7">{leader.name}</h3>
                    <p className="text-white/90 text-sm font-normal font-['Work_Sans'] leading-snug mt-1">{leader.title}</p>
                    <a href={leader.linkedin} target="_blank" rel="noopener noreferrer" className="absolute top-5 right-5">
                      <LinkedInIcon />
                    </a>
                    {leader.description && (
                      <p className="absolute top-[92px] left-5 right-5 text-white text-xs font-normal font-['Work_Sans'] leading-snug opacity-0 transition-opacity duration-300 ease-in-out delay-200"
                         style={{ opacity: isExpanded ? 1 : 0 }}
                      >
                        {leader.description}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Leaders; 