'use client'

import Image from 'next/image';

const newsItems = [
  {
    logoType: 'KOS',
    text: 'The KOS team has been awarded Best Paper at ICAIRME 2025.',
    link: '#'
  },
  {
    logoType: 'uspto',
    text: 'Patent approval for the technology and design from USPTO',
    link: '#'
  },
  {
    logoType: 'uspto', 
    text: 'The KOS team has been awarded Best Paper at ICAIRME 2025.',
    link: '#'
  }
]

export default function News() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left Image */}
          <div className="w-full h-auto rounded-lg overflow-hidden relative" style={{aspectRatio: '1.2'}}>
            <Image 
              src="/images/i-new.png" 
              alt="KOS Office" 
              fill
              className="object-cover"
            />
          </div>

          {/* Right Content */}
          <div>
            {/* Title */}
            <div className="justify-start text-blue-950 font-bold font-raleway text-5xl mb-8 pb-2 leading-[58px]">
              News & Press
            </div>

            {/* News List */}
            <div className="space-y-6">
              {newsItems.map((item, index) => (
                <div 
                  key={index}
                  className="hover:-translate-y-2 transition-transform duration-300 cursor-pointer group py-6 border-b border-gray-200"
                >
                  <div className="flex items-start gap-4 mb-2">
                    {/* Logo Circle - Made smaller */}
                    <div className="w-24 h-24 flex-shrink-0 bg-black rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-xs">
                        {item.logoType}
                      </span>
                    </div>
                    <div className="flex-1">
                      <p className="text-blue-950 text-xl font-normal font-['Work_Sans'] leading-relaxed group-hover:text-[#007A91] transition-colors duration-300">
                        {item.text}
                      </p>

                        <p 
                        // href={item.link}
                        className="mt-3 text-blue-950 text-xl font-normal font-['Work_Sans'] underline leading-relaxed hover:text-[#007A91] transition-colors duration-300"
                        >
                        Read More
                        </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 