'use client';

import React from 'react';
import Image from 'next/image';

const teamImages = [
  // All percentages are calculated based on a 1440x843px design frame.
  // Format: { left, width, height } in percentage.
  { src: '/images/r1.png', alt: 'Team member 1', zIndex: 2, className: 'w-[17.15%] h-[45.6%] left-[15.34%]' },
  { src: '/images/r2.png', alt: 'Team member 2', zIndex: 3, className: 'w-[16.04%] h-[45.8%] left-[25.62%]' },
  { src: '/images/r3.png', alt: 'Team member 3', zIndex: 5, className: 'w-[19.86%] h-[50.9%] left-[34.02%]' },
  { src: '/images/r4.png', alt: 'Team member 4', zIndex: 4, className: 'w-[23.26%] h-[59.6%] left-[41.73%]' },
  { src: '/images/r5.png', alt: 'Team member 5', zIndex: 6, className: 'w-[20.41%] h-[48.7%] left-[52.84%]' },
  { src: '/images/r6.png', alt: 'Team member 6', zIndex: 1, className: 'w-[15.76%] h-[50.9%] left-[64.02%]' },
  { src: '/images/r7.png', alt: 'Team member 7', zIndex: 3, className: 'w-[18.19%] h-[54.2%] left-[70.13%]' },
];

const TeamCulture = () => {
  return (
    <>
      <section className="bg-neutral-900 text-white text-center pt-24 pb-0 overflow-hidden relative">
        <div className="container mx-auto px-6 relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold font-['Raleway'] leading-tight">
            <span className="text-cyan-500">Brilliant, bold</span>, and <br className="hidden sm:block" />
            deeply collaborative!
          </h2>
          <a
            href="#"
            className="mt-8 inline-block text-white text-lg sm:text-xl font-normal font-['Work_Sans'] underline leading-relaxed"
          >
            View Full Team on LinkedIn
          </a>
        </div>
        
        <div className="relative w-full h-[50vw] max-h-[600px] min-h-[400px] mt-16">
            {teamImages.map((img, index) => (
                <div key={index} className={`absolute bottom-0 ${img.className}`} style={{ zIndex: img.zIndex }}>
                    <Image 
                        src={img.src} 
                        alt={img.alt} 
                        fill
                        className="object-contain object-bottom"
                    />
                </div>
            ))}
        </div>
      </section>

      <div className="bg-white">
        <div className="max-w-6xl mx-auto pb-16 pt-2 px-6 lg:px-8">
            <p className="text-slate-600 text-sm font-normal font-['Work_Sans'] leading-none">
                Pictured here (left to right): Casey, Abhinav, John, Alex
            </p>
        </div>
      </div>
    </>
  );
};

export default TeamCulture; 