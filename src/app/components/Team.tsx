'use client'

import Image from 'next/image';

const leaders = [
  { 
    name: 'Schalal Habib', 
    title: 'Founder, Chairman & CEO', 
    description: 'Serial entrepreneur, technologist, and inventor. Led $4B+ in M&A and managed multi-billion dollar P&Ls, driving innovation, strategic growth, and market disruption.',
    image: '/images/ib1.png'
  },
  { 
    name: 'Trevor Barran', 
    title: 'CFO', 
    description: 'Technologist, business entrepreneur and investor with over 25 years of experience leading investment and execution across financial services and healthcare.',
    image: '/images/ib2.jpg'
  },
  { 
    name: 'Jeff Berkowitz', 
    title: 'Board Member', 
    description: 'Served as Executive Vice President at UnitedHealth Group, Executive Vice President at Walgreens Boots, Senior Vice President at Merck.',
    image: '/images/ib3.png'
  },
  { 
    name: 'Dr. Nabil Abadir', 
    title: 'Board Member', 
    description: 'Former Global Head at Novartis Gene Therapies, and EVP at Clementia.',
    image: '/images/ib4.png'
  },
  { 
    name: 'Dr. Bruno Strigini', 
    title: 'Board Member', 
    description: 'Served as the Chief Executive Officer of Novartis Oncology at Novartis and Merck & Co.',
    image: '/images/ib5.png'
  }
]

export default function Team() {
  return (
    <section className="py-20 bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mx-auto mb-16 md:text-left">
          <h2 className="text-sm uppercase tracking-wider text-[#007A91] mb-2 font-semibold font-work-sans">
            EXECUTIVE TEAM
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold mb-4 font-raleway">
            Backed by the Best
          </h3>
          <p className="text-sm text-white font-work-sans">
            Trusted by the world&apos;s top medical professionals, technologists
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-x-16 gap-y-12">
          {leaders.map((leader) => (
            <div key={leader.name} className="flex items-start gap-6 group transition-all duration-300 ease-in-out hover:scale-105">
              <div className="w-28 h-28 flex-shrink-0 relative">
                <Image 
                  src={leader.image} 
                  alt={`Photo of ${leader.name}`} 
                  fill
                  className="rounded-lg object-cover"
                />
              </div>
              <div className="flex-grow">
                <h3 className="text-xl font-bold text-white font-raleway">{leader.name}</h3>
                <p className="text-sm font-semibold text-white mb-3 font-work-sans">{leader.title}</p>
                <p className="text-white text-base leading-relaxed font-work-sans">{leader.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 