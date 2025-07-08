"use client";

import { useLayoutEffect, useRef } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const HeroVideo = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const finalImageRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.onloadedmetadata = () => {
      const container = containerRef.current;
      const overlay = overlayRef.current;
      const finalImage = finalImageRef.current;
      if (!container || !overlay || !finalImage) return;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          start: 'top top',
          end: `bottom+=${video.duration * 1000} bottom`,
          scrub: 1,
          pin: true,
        },
      });

      tl.to(overlay, {
        opacity: 0,
        duration: 2,
      });

      tl.to(video, {
        currentTime: video.duration,
        duration: video.duration, 
      }, ">");

      tl.fromTo(finalImage, 
        { y: '100%', opacity: 0 },
        { y: '0%', opacity: 1, duration: 2 },
        ">"
      );
    };

    if (video.readyState >= 2) {
      video.dispatchEvent(new Event('loadedmetadata'));
    }
  }, []);

  return (
    <div ref={containerRef} className="relative w-full h-screen bg-black">
      <div ref={overlayRef} className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-black/70">
        <h1 className="text-white text-5xl md:text-7xl font-bold font-['Raleway']">A New Era of</h1>
        <h2 className="text-white text-5xl md:text-7xl font-bold font-['Raleway'] mt-4">Patient Monitoring</h2>
      </div>
      <div className="video-container w-full h-full flex items-center justify-center">
        <video
          ref={videoRef}
          src="/gif/video.mp4"
          playsInline
          preload="auto"
          muted
          className="w-full h-full object-contain"
        />
      </div>
      <div ref={finalImageRef} className="absolute inset-0 z-20 opacity-0">
        <Image src="/gif/12.png" alt="Final Frame" fill className="object-contain" />
      </div>
    </div>
  );
};

export default HeroVideo; 