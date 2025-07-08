'use client';

import React from 'react';
import Image from 'next/image';
import NonInvasiveIcon from './icons/NonInvasiveIcon';
import ContinuousMonitoringIcon from './icons/ContinuousMonitoringIcon';
import LongBatteryIcon from './icons/LongBatteryIcon';
import EasyToUseIcon from './icons/EasyToUseIcon';
import ClinicalGradeAccuracyIcon from './icons/ClinicalGradeAccuracyIcon';

const features = [
  { text: 'Non Invasive', icon: <NonInvasiveIcon /> },
  { text: 'Continuous Monitoring', icon: <ContinuousMonitoringIcon /> },
  { text: 'Long Battery', icon: <LongBatteryIcon /> },
  { text: 'Easy to Use', icon: <EasyToUseIcon /> },
  { text: 'Clinical Grade Accuracy', icon: <ClinicalGradeAccuracyIcon /> },
];

const ProductHero = () => {
  return (
    <section className="relative w-full min-h-screen overflow-hidden">
      <div 
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundImage: 'repeating-linear-gradient(90deg, #F8BBD9, #F8BBD9 10px, #FCCFDB 10px, #FCCFDB 20px)',
        }}
      />
      
      <div className="absolute bottom-0 left-0 w-[45%] sm:w-[40%] lg:w-[35%] h-[60%] flex items-end z-10">
        <div className="relative w-full h-full">
          <Image 
              src="/images/shou.png" 
              alt="Hand wearing Argus device" 
              fill
              style={{ objectFit: 'contain', objectPosition: 'left bottom' }}
          />
        </div>
      </div>

      <div className="absolute top-[30%] left-[5%] z-20">
        <p className="text-[#00A9C5] font-semibold tracking-widest text-sm md:text-base">INTRODUCING</p>
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-['Raleway'] mt-2 text-[#213566] leading-tight">ARGUS</h1>
        <p className="text-sm sm:text-base md:text-lg text-[#213566] mt-4">
            The only truly non-invasive blood glucose monitoring device
        </p>
      </div>

      <div className="absolute right-[5%] top-1/2 -translate-y-1/2 z-20 hidden lg:flex items-center">
        <div className="bg-white text-black p-6 lg:p-8 rounded-lg shadow-2xl w-full max-w-sm mr-4">
            <ul className="space-y-4 lg:space-y-6">
            {features.map((feature, index) => (
                <li key={index} className="flex items-center space-x-4">
                    <div className="w-8 h-8 flex-shrink-0">{feature.icon}</div>
                    <span className="font-semibold text-base lg:text-lg text-[#213566]">{feature.text}</span>
                </li>
            ))}
            </ul>
            <button className="w-full mt-6 lg:mt-8 bg-[#007A91] text-white py-3 px-6 rounded-lg font-semibold hover:bg-[#005f73] transition-colors duration-300">
                Explore Argus
            </button>
        </div>
        
        <button className="w-12 h-12 bg-white/80 rounded-full shadow-lg flex items-center justify-center hover:bg-white transition-colors">
            <svg className="w-6 h-6 text-[#213566]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
        </button>
      </div>

      <div className="lg:hidden absolute bottom-0 left-0 right-0 z-30 p-4">
        <div className="bg-white text-black p-6 rounded-lg shadow-2xl mx-auto max-w-sm">
            <ul className="space-y-4">
            {features.map((feature, index) => (
                <li key={index} className="flex items-center space-x-3">
                    <div className="w-6 h-6 flex-shrink-0">{feature.icon}</div>
                    <span className="font-semibold text-sm text-[#213566]">{feature.text}</span>
                </li>
            ))}
            </ul>
            <button className="w-full mt-6 bg-[#007A91] text-white py-3 px-6 rounded-lg font-semibold">
                Explore Argus
            </button>
        </div>
      </div>
      
    </section>
  );
};

export default ProductHero; 