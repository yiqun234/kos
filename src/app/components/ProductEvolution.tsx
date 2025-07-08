'use client';

import React, { useState } from 'react';
import Image from 'next/image';

interface ProductVersion {
  name: string;
  year: string;
  image: string;
  isActive?: boolean;
}

const UnselectedDot = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute">
    <circle cx="9" cy="9" r="9" fill="white"/>
  </svg>
);

const SelectedDot = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute">
    <circle cx="20" cy="20" r="20" fill="#E33E2B" fillOpacity="0.3"/>
    <circle cx="20" cy="20" r="10" fill="#E33E2B"/>
  </svg>
);


const ProductEvolution = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const products: ProductVersion[] = [
    { name: 'Argus 1.0', year: '2020', image: '/images/p1.png' },
    { name: 'Argus 2.0', year: '2021', image: '/images/p2.png' },
    { name: 'Argus 13.0', year: '2023', image: '/images/p3.png', isActive: true },
    { name: 'Argus 13.1', year: '2025', image: '/images/p4.png' },
  ];
  
  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  return (
    <section className="bg-black text-white py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
        
        <div className="text-left mb-24">
          <h2 className="text-sm uppercase tracking-wider text-[#00A9C5] mb-4 font-semibold font-['Work_Sans']">
            EVOLUTION
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold text-white font-['Raleway']">
            With Over 6 Years of Research
          </h3>
        </div>

        <div className="relative w-full" onMouseLeave={handleMouseLeave}>
          {/* Dashed Timeline in the background */}
          <div 
            className="absolute top-[280px] left-0 right-0 h-px w-full"
            style={{
                background: 'repeating-linear-gradient(to right, white 0, white 4px, transparent 4px, transparent 10px)'
            }}
          ></div>
        
          <div className="w-full flex justify-between items-start mb-30">
            {products.map((product, index) => {
              const isSelected = hoveredIndex === index || (hoveredIndex === null && product.isActive);
              
              return (
                <div
                  key={index}
                  className="flex flex-col items-center cursor-pointer w-1/4"
                  onMouseEnter={() => setHoveredIndex(index)}
                >
                  {/* Image */}
                  <div className={`transition-all duration-300 ease-in-out ${isSelected ? 'scale-100' : 'scale-90 opacity-70'}`}>
                    <Image
                      src={product.image}
                      alt={product.name}
                      width={200}
                      height={200}
                      className="object-contain h-52"
                    />
                  </div>

                  {/* Badge */}
                  <div className={`mt-4 px-4 pt-1 rounded-full transition-all duration-300 ${isSelected ? 'bg-gray-300 text-black' : 'bg-gray-700 text-white'}`}>
                      <span className="text-sm font-medium font-['Work_Sans']">{product.name}</span>
                  </div>

                  {/* Timeline Dot - Positioned relative to the column */}
                  <div className="relative w-full h-10 mt-2 flex justify-center items-center">
                    {isSelected ? <SelectedDot /> : <UnselectedDot />}
                  </div>

                  {/* Year */}
                  <div className={`mt-2 text-lg font-bold transition-all duration-300 font-['Work_Sans'] ${isSelected ? 'text-white' : 'text-gray-500'}`}>
                    {product.year}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="w-full h-2 bg-white"></div>
    </section>
  );
};

export default ProductEvolution; 