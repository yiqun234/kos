'use client';

import { useEffect, useState } from 'react';

export default function HeroBanner() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Calculate animation progress based on scroll position
  const animationHeight = 2000;
  const progress = Math.min(scrollY / animationHeight, 1);
  
  const totalFrames = 12;
  const currentFrame = Math.floor(progress * totalFrames);
  const frameIndex = Math.min(currentFrame, totalFrames - 1);
  
  const getCurrentImage = () => {
    return `/gif/${frameIndex + 1}.png`;
  };
  
  // Text opacity: fades out in the first 30% of scroll
  const textFadePoint = 0.3;
  const textOpacity = progress <= textFadePoint ? 
    Math.max(1 - (progress / textFadePoint), 0) : 0;
  
  // Overlay opacity: starts black and gradually becomes transparent
  const overlayOpacity = Math.max(0.8 - (progress * 0.8), 0);

  const isInAnimationZone = scrollY < animationHeight;

  return (
    <>
      <div 
        className={`fixed inset-0 w-full h-screen z-10 transition-opacity duration-300 ${
          isInAnimationZone ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Current Animation Frame */}
        <div 
          className="absolute inset-0 w-full h-full transition-all duration-100 ease-out"
          style={{ 
            backgroundImage: `url(${getCurrentImage()})`,
            backgroundSize: frameIndex === 11 ? 'contain' : 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            transform: 'translateZ(0)', // Hardware acceleration
            backgroundColor: frameIndex === 11 ? '#000' : 'transparent'
          }}
        />
        
        {/* Black Overlay (starts dark, becomes transparent) */}
        <div 
          className="absolute inset-0 bg-black transition-opacity duration-100 ease-out"
          style={{ opacity: overlayOpacity }}
        />
        
        {/* Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h1 
            className="w-[1019px] max-w-full text-white text-6xl font-bold font-raleway leading-[74px] tracking-wide mb-6 transition-opacity duration-100 ease-out"
            style={{ opacity: textOpacity }}
          >
            Redefining the Experience of Everyday Health
          </h1>
          <p 
            className="w-[510px] max-w-full text-white text-lg font-normal font-work-sans leading-normal transition-opacity duration-100 ease-out"
            style={{ opacity: textOpacity }}
          >
            Non-Invasive, Continuous Health Monitoring Technologies
          </p>
        </div>
        
        {/* Scroll Indicator */}
        <div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-opacity duration-300 ease-out"
          style={{ opacity: Math.max(1 - (progress * 3), 0) }}
        >
          <div className="flex flex-col items-center text-white/70 animate-bounce">
            <span className="text-sm font-work-sans mb-2">Scroll to explore</span>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
        
        {/* Debug Info */}
        <div className="absolute top-4 left-4 text-white text-sm bg-black/50 p-2 rounded">
          Frame: {frameIndex + 1} | Progress: {Math.round(progress * 100)}% | Scroll: {scrollY}px
        </div>
      </div>

      <div style={{ height: `${animationHeight}px` }} className="relative z-0" />
    </>
  );
} 