"use client";
import React, { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const milestones = [
  { year: "2020", progress: 0.05, text: "Concept and algorithm development", align: "left" },
  { year: "2021", progress: 0.22, text: "First prototype and lab testing", align: "right" },
  { year: "2022", progress: 0.40, text: "Secured seed funding", align: "left" },
  { year: "2023", progress: 0.55, text: "Clinical trials initiated", align: "left" },
  { year: "2024", progress: 0.65, text: "Founded in Palo Alto", align: "right" },
  { year: "2025", progress: 0.85, text: "FDA clearance anticipated", align: "left" },
  { year: "2026", progress: 0.98, text: "", align: "center" },
] as const;

export default function RoadTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const highlightRef = useRef<SVGPathElement>(null);
  const milestoneRefs = useRef<(HTMLDivElement | null)[]>([]);

  useLayoutEffect(() => {
    const path = pathRef.current;
    const highlight = highlightRef.current;
    const container = containerRef.current;
    const wrapper = wrapperRef.current;

    if (!path || !highlight || !container || !wrapper) {
      return;
    }

    const pathLength = path.getTotalLength();
    
    gsap.set(highlight, {
      strokeDasharray: pathLength,
      strokeDashoffset: pathLength,
    });

    // Position milestones along the path
    milestoneRefs.current.forEach((el, idx) => {
      if (el) {
        const milestone = milestones[idx];
        const point = path.getPointAtLength(milestone.progress * pathLength);
        gsap.set(el, {
          left: point.x,
          top: point.y,
          xPercent: -50,
          yPercent: -50,
        });
      }
    });

    // Set initial state (same as progress = 0)
    const containerRect = container.getBoundingClientRect();
    const centerX = containerRect.width / 2;
    const centerY = containerRect.height / 2;
    const initialPoint = path.getPointAtLength(0);
    const isMobile = containerRect.width < 768;
    const initialScale = isMobile ? 0.5 : 0.8;
    const initialTranslateX = centerX - initialPoint.x * initialScale;
    const initialTranslateY = centerY - initialPoint.y * initialScale;

    gsap.set(wrapper, {
      x: initialTranslateX,
      y: initialTranslateY,
      scale: initialScale,
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: 'top top',
        end: '+=800%',
        scrub: 1.5,
        pin: true,
        onUpdate: (self) => {
          const progress = self.progress;
          
          // Get current point on path
          const currentPoint = path.getPointAtLength(progress * pathLength);
          
          // Calculate container center
          const containerRect = container.getBoundingClientRect();
          const centerX = containerRect.width / 2;
          const centerY = containerRect.height / 2;
          
          // Mobile detection
          const isMobile = containerRect.width < 768;
          
          // Smooth camera behavior with gradual transitions
          let scale, focusX, focusY;
          
          // Dynamic scale that varies smoothly - different for mobile
          if (isMobile) {
            // Mobile scaling - keep things more zoomed out
            if (progress < 0.4) {
              scale = gsap.utils.mapRange(0, 0.4, 0.5, 0.7, progress);
            } else if (progress < 0.7) {
              scale = gsap.utils.mapRange(0.4, 0.7, 0.7, 0.5, progress);
            } else {
              scale = gsap.utils.mapRange(0.7, 1, 0.5, 0.6, progress);
            }
          } else {
            // Desktop scaling
            if (progress < 0.4) {
              scale = gsap.utils.mapRange(0, 0.4, 0.8, 1.0, progress);
            } else if (progress < 0.7) {
              scale = gsap.utils.mapRange(0.4, 0.7, 1.0, 0.8, progress);
            } else {
              scale = gsap.utils.mapRange(0.7, 1, 0.8, 0.9, progress);
            }
          }
          
          // Dynamic focus point that smoothly transitions
          if (isMobile) {
            // Mobile: Always follow the current point more closely
            if (progress < 0.2) {
              focusX = currentPoint.x;
              focusY = currentPoint.y;
            } else if (progress < 0.4) {
              const t = gsap.utils.mapRange(0.2, 0.4, 0, 1, progress);
              const overviewX = 720;
              const overviewY = 600;
              focusX = gsap.utils.interpolate(currentPoint.x, overviewX, t * 0.3); // Even less transition
              focusY = gsap.utils.interpolate(currentPoint.y, overviewY, t * 0.3);
            } else {
              // Stay closer to current point on mobile
              const t = 0.3; // Less overview effect
              focusX = gsap.utils.interpolate(currentPoint.x, 720, t);
              focusY = gsap.utils.interpolate(currentPoint.y, 600, t);
            }
          } else {
            // Desktop: Original behavior
            if (progress < 0.3) {
              // Early: Follow current point closely
              focusX = currentPoint.x;
              focusY = currentPoint.y;
            } else if (progress < 0.5) {
              // Mid: Gradual transition to overview
              const t = gsap.utils.mapRange(0.3, 0.5, 0, 1, progress);
              const overviewX = 720;
              const overviewY = 500;
              focusX = gsap.utils.interpolate(currentPoint.x, overviewX, t);
              focusY = gsap.utils.interpolate(currentPoint.y, overviewY, t);
            } else if (progress < 0.8) {
              // Mid-late: Stay in overview mode
              focusX = 720;
              focusY = 600;
            } else {
              // Final: Gradually return to following the path
              const t = gsap.utils.mapRange(0.8, 1, 0, 1, progress);
              focusX = gsap.utils.interpolate(720, currentPoint.x, t);
              focusY = gsap.utils.interpolate(600, currentPoint.y, t);
            }
          }
          
          const translateX = centerX - focusX * scale;
          const translateY = centerY - focusY * scale;
          
          gsap.set(wrapper, {
            x: translateX,
            y: translateY,
            scale: scale,
          });

          // Update milestone states
          let activeIndex = -1;
          milestones.forEach((milestone, idx) => {
            if (progress >= milestone.progress) {
              activeIndex = idx;
            }
          });
          
          milestoneRefs.current.forEach((el, idx) => {
            if (el) {
              el.classList.toggle('is-active', idx === activeIndex);
            }
          });
        },
      },
    });

    // Animate the highlight path
    tl.to(highlight, {
      strokeDashoffset: 0,
      ease: 'none',
    }, 0);

    return () => {
      if (tl.scrollTrigger) {
        tl.scrollTrigger.kill();
      }
      tl.kill();
    };
  }, []);

      return (
    <div ref={containerRef} className="timeline-container relative w-full h-screen bg-black overflow-hidden">
      {/* Top mask overlay */}
      <div className="absolute top-0 left-0 right-0 h-64 z-10 pointer-events-none bg-gradient-to-b from-black/80 via-black/40 to-transparent backdrop-blur-sm"></div>
      
      <div className="absolute top-32 left-0 right-0 z-20 text-center pointer-events-none">
        <h2 className="text-4xl md:text-5xl font-bold text-white">
          From Prototype to Proof,
        </h2>
        <h3 className="text-4xl md:text-5xl font-bold text-white mt-2">
          Our Key Milestones
        </h3>
      </div>

             <div ref={wrapperRef} className="absolute top-0 left-0 w-full h-full" style={{ transformOrigin: 'center center' }}>
        <svg
          className="absolute top-0 left-0"
          width="1440"
          height="1600"
          viewBox="0 0 1440 1600"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="fadeGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="white" stopOpacity="0.1" />
              <stop offset="50%" stopColor="white" stopOpacity="0.5" />
              <stop offset="100%" stopColor="white" stopOpacity="1" />
            </linearGradient>
            <linearGradient id="highlightFadeGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#00B6D9" stopOpacity="0.2" />
              <stop offset="50%" stopColor="#00B6D9" stopOpacity="0.7" />
              <stop offset="100%" stopColor="#00B6D9" stopOpacity="1" />
            </linearGradient>
            <linearGradient id="futureGradient" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#00B6D9" stopOpacity="1" />
              <stop offset="60%" stopColor="#00B6D9" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#00B6D9" stopOpacity="0.05" />
            </linearGradient>
          </defs>
          <path
            ref={pathRef}
            d="M23 52C23 52 1410.15 76.4981 1416.97 300.006C1423.79 523.514 185.969 547.693 185.969 793.215C185.969 1038.74 1001.82 1035.02 1039.31 1159.64C1076.8 1284.26 678.876 1394 678.876 1394"
            stroke="url(#fadeGradient)"
            strokeWidth="4"
            fill="none"
          />
          <path
            ref={highlightRef}
            d="M23 52C23 52 1410.15 76.4981 1416.97 300.006C1423.79 523.514 185.969 547.693 185.969 793.215C185.969 1038.74 1001.82 1035.02 1039.31 1159.64C1076.8 1284.26 678.876 1394 678.876 1394"
            stroke="url(#highlightFadeGradient)"
            strokeWidth="6"
            fill="none"
            style={{ filter: "drop-shadow(0 0 10px #00B6D9) blur(1px)" }}
          />
          
          {/* Future continuation path - extending beyond 2026 */}
          <path
            d="M678.876 1394C678.876 1394 500 1450 350 1500C200 1550 100 1580 50 1600"
            stroke="url(#futureGradient)"
            strokeWidth="5"
            strokeDasharray="12,8"
            fill="none"
            opacity="0.8"
          />
          
          {/* Additional future dots to suggest continuation */}
          <circle cx="400" cy="1470" r="4" fill="#00B6D9" opacity="0.5" />
          <circle cx="250" cy="1530" r="3" fill="#00B6D9" opacity="0.4" />
          <circle cx="120" cy="1580" r="2" fill="#00B6D9" opacity="0.3" />
        </svg>

        {milestones.map((milestone, idx) => (
          <div
            key={idx}
            ref={(el) => { milestoneRefs.current[idx] = el; }}
            className={`milestone-marker absolute milestone-${idx}`}
          >
            <svg
              className="pillar-line"
              width="4"
              height="80"
              viewBox="0 0 4 80"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient id={`pillarDefault-${idx}`} x1="-0.5" y1="0" x2="0.282761" y2="80" gradientUnits="userSpaceOnUse">
                  <stop stopColor="white"/>
                  <stop offset="1" stopColor="#171717"/>
                </linearGradient>
                <linearGradient id={`pillarActive-${idx}`} x1="-1.5" y1="0" x2="-0.545507" y2="80" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#00B6D9"/>
                  <stop offset="1" stopColor="#171717"/>
                </linearGradient>
              </defs>
              <line className="default-line" x1="2" y1="0" x2="2" y2="80" strokeWidth="4" stroke={`url(#pillarDefault-${idx})`} />
              <line className="active-line" x1="2" y1="0" x2="2" y2="80" strokeWidth="4" stroke={`url(#pillarActive-${idx})`} />
            </svg>

            <div className={`text-container absolute ${
              milestone.align === 'left' ? 'right-full mr-4 text-right' : 
              milestone.align === 'right' ? 'left-full ml-4 text-left' : 
              'left-1/2 -translate-x-1/2 bottom-full mb-4 text-center'
            }`}>
              <div className="year-text text-xl text-white opacity-70 mb-1">{milestone.year}</div>
              <div className="description-text text-lg text-white opacity-0 transition-opacity duration-300 whitespace-nowrap flex items-center">
                {milestone.text && (
                    <svg 
                    className="location-icon mr-2 flex-shrink-0" 
                    width="16" 
                    height="16" 
                    viewBox="0 0 24 24" 
                    fill="none"
                  >
                    <path 
                      d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22S19 14.25 19 9C19 5.13 15.87 2 12 2ZM12 11.5C10.62 11.5 9.5 10.38 9.5 9S10.62 6.5 12 6.5S14.5 7.62 14.5 9S13.38 11.5 12 11.5Z" 
                      fill="currentColor"
                    />
                  </svg>
                )}
                
                {milestone.text}
              </div>
            </div>
          </div>
        ))}
      </div>

             <style jsx>{`
         /* Default state: show default line, hide active line */
         .milestone-marker .pillar-line .default-line {
           opacity: 1;
           transition: opacity 0.6s ease;
         }
         .milestone-marker .pillar-line .active-line {
           opacity: 0;
           transition: opacity 0.6s ease;
         }
         
         /* Active state: hide default line, show active line */
         .milestone-marker.is-active .pillar-line .default-line {
           opacity: 0;
         }
         .milestone-marker.is-active .pillar-line .active-line {
           opacity: 1;
         }
         .milestone-marker.is-active .year-text {
           color: #00B6D9;
           opacity: 1;
         }
         .milestone-marker.is-active .description-text {
           opacity: 1;
           color: #00B6D9;
         }
         .milestone-marker.is-active .location-icon {
           color: #00B6D9;
         }
       `}</style>
    </div>
  );
}
