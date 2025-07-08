'use client';

import React from 'react';
import Image from 'next/image';
import Marquee from "react-fast-marquee";

const partners = [
  { name: 'Stanford Medicine', logo: '/images/lv1.png', width: 190, height: 27 },
  { name: 'Texas Instruments', logo: '/images/lv2.png', width: 204, height: 38 },
  { name: 'Teltonika', logo: '/images/lv3.png', width: 172, height: 26 },
  { name: 'STMicroelectronics', logo: '/images/lv4.png', width: 147, height: 42 },
  { name: 'Murata', logo: '/images/lv5.png', width: 130, height: 29 },
];

const Partners = () => {
  return (
    <div className="bg-white py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-left mb-12">
            <p className="font-semibold text-sm text-[#00A9C5] uppercase tracking-wider">PARTNERS</p>
        </div>
        <Marquee pauseOnHover gradient={true} gradientColor="white" gradientWidth={100} speed={40}>
            {partners.map((partner, index) => (
              <div key={index} className="mx-12">
                <Image src={partner.logo} alt={partner.name} width={partner.width} height={partner.height} className="filter transition-all duration-300" />
              </div>
            ))}
        </Marquee>
      </div>
    </div>
  );
};

export default Partners; 