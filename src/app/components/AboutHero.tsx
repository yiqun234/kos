'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const texts = [
  {
    title: 'Our Story',
    content: `Kos Inc. draws its name and inspiration from the island of Kos, birthplace of Hippocrates (c. 460–370 BC), widely regarded as the Father of Medicine. His legacy of clinical observation and patient-centered care guides our mission.`,
    image: null,
  },
  {
    title: 'Our Mission',
    content: `At Kos, we tackle modern health challenges by combining information technology, smart sensors, and IoT to bring continuous health monitoring into daily life. Our platform captures and contextualizes bio-metric data, empowering individuals and their care teams with timely, actionable insights.`,
    image: null,
  },
  {
    title: 'The Kos Cube',
    content: `We approach health outcomes in multi-dimensional approach, blending patient experience, treatment strategies, and system efficiency. This framework, which we call the Kos Health & Wellness Cube, helps us interpret health as a dynamic, daily experience, not just a clinical snapshot.`,
    image: '/images/gj.png'
  }
];

const AboutHero = () => {
  const [animationTriggered, setAnimationTriggered] = useState(false);
  const [textIndex, setTextIndex] = useState(0);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 768);
    
    // Set on initial client load and listen for changes
    handleResize();
    window.addEventListener('resize', handleResize);
    
    const timer = setTimeout(() => setAnimationTriggered(true), 2500);
    
    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    if (!animationTriggered) return;
    const interval = setInterval(() => {
      setTextIndex(current => (current + 1) % texts.length);
    }, 7000);
    return () => clearInterval(interval);
  }, [animationTriggered]);

  return (
    <section className="relative w-full h-[85vh] md:h-[650px] overflow-hidden bg-white flex flex-col md:flex-row shadow-lg">
      
      {/* --- IMAGE PANE (LEFT) --- */}
      <motion.div
        className="relative w-full md:h-full"
        initial={{ 
          width: '100%',
          height: isDesktop ? '100%' : '100%'
        }}
        animate={{ 
          width: animationTriggered && isDesktop ? '50%' : '100%',
          height: isDesktop ? '100%' : (animationTriggered ? '50%' : '100%')
        }}
        transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
      >
        <Image
          src="/images/ab.png"
          alt="Background"
          fill
          className="object-cover"
          priority
        />
        <div
          className="absolute inset-0 flex items-center justify-center pointer-events-none"
        >
          <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold [text-shadow:0_2px_10px_rgba(0,0,0,0.8)] text-center p-4">
            Our Story
          </h1>
        </div>
      </motion.div>

      {/* --- TEXT PANE (RIGHT) --- */}
      <motion.div
        className="relative w-full md:h-full bg-white flex items-center justify-center overflow-hidden"
        style={{ 
            backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23f5f5f5' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")"
        }}
        initial={{ 
          width: '0%',
          height: isDesktop ? '100%' : '0%'
        }}
        animate={{ 
          width: isDesktop ? (animationTriggered ? '50%' : '0%') : '100%',
          height: isDesktop ? '100%' : (animationTriggered ? '50%' : '0%')
        }}
        transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
      >
        <motion.div
          className="w-full h-full flex flex-col justify-center p-8 md:p-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: animationTriggered ? 1 : 0 }}
          transition={{ duration: 0.8, ease: 'easeIn', delay: 1 }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={textIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="h-[250px] flex flex-col justify-center"
            >
              <p className="text-gray-600 text-lg leading-relaxed">
                {texts[textIndex].content}
              </p>
              {texts[textIndex].image && (
                <motion.div 
                  className="mt-8 mx-auto"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                >
                  <Image src={texts[textIndex].image as string} alt="Kos Cube" width={200} height={200} className="mx-auto" />
                </motion.div>
              )}
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default AboutHero; 