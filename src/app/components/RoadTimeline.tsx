"use client";

import { useEffect, useMemo, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function RoadTimeline() {
  const pathRef = useRef<SVGPathElement>(null);
  const highlightRef = useRef<SVGPathElement>(null);
  const milestoneRefs = useRef<(HTMLDivElement | null)[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  const milestones = useMemo(() => [
    { year: "2020", progress: 0.05, text: "Concept and algorithm development", align: "left" },
    { year: "2021", progress: 0.22, text: "First prototype and lab testing", align: "right" },
    { year: "2022", progress: 0.40, text: "Secured seed funding", align: "right" },
    { year: "2023", progress: 0.55, text: "Clinical trials initiated", align: "left" },
    {
      year: "2024",
      progress: 0.65,
      text: "Founded in Palo Alto",
      icon: true,
      align: "left",
    },
    { year: "2025", progress: 0.85, text: "FDA clearance anticipated", align: "right" },
    { year: "2026", progress: 0.98, text: "Commercial launch", align: "center" },
  ], []);

  useEffect(() => {
    const path = pathRef.current;
    const highlight = highlightRef.current;
    const container = containerRef.current;

    if (!path || !highlight || !container) {
      return;
    }

    const pathLength = path.getTotalLength();

    milestoneRefs.current.forEach((el, idx) => {
      if (el) {
        const milestone = milestones[idx];
        const point = path.getPointAtLength(milestone.progress * pathLength);
        
        gsap.set(el, {
          left: `${point.x}px`,
          top: `${point.y}px`,
          xPercent: -50,
          yPercent: -100,
        });
      }
    });

    gsap.set(highlight, {
      strokeDasharray: pathLength,
      strokeDashoffset: pathLength,
    });

    gsap.to(highlight, {
      strokeDashoffset: 0,
      scrollTrigger: {
        trigger: container,
        start: "top top",
        end: "bottom bottom",
        scrub: 1,
        onUpdate: (self) => {
          if (!self.animation) return;
          const animProgress = self.animation.progress();
          let lastActiveIndex = -1;
          milestones.forEach((milestone, idx) => {
            if (animProgress >= milestone.progress) {
              lastActiveIndex = idx;
            }
          });

          milestoneRefs.current.forEach((el, idx) => {
            if (el) {
              if (idx === lastActiveIndex) {
                el.classList.add('is-active');
              } else {
                el.classList.remove('is-active');
              }
            }
          });
        },
      },
    });

  }, [milestones]);

  return (
    <div ref={containerRef} className="timeline-container relative w-full h-[250vh] bg-black overflow-hidden font-['Raleway']">
       <style jsx>{`
        .milestone-marker {
          transform-origin: bottom center;
        }
        .pillar-line {
          stroke: white;
          opacity: 0.3;
          transition: stroke 0.4s, opacity 0.4s;
        }
        .year-text {
          color: white;
          opacity: 0.7;
          font-weight: 500;
          transition: color 0.4s, opacity 0.4s;
        }
        .description-text {
          color: white;
          opacity: 0;
          transform: translateY(10px);
          transition: opacity 0.4s 0.1s, transform 0.4s 0.1s;
           white-space: nowrap;
        }

        .milestone-marker.is-active .pillar-line {
          stroke: #00B6D9;
          opacity: 1;
        }
        .milestone-marker.is-active .year-text {
           color: #00B6D9;
           opacity: 1;
        }
        .milestone-marker.is-active .description-text {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
      <svg
        className="absolute top-0 left-1/2 -translate-x-1/2"
        viewBox="0 0 1398 1348"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid meet"
        style={{ width: "auto", height: "250vh" }}
      >
        <path
          ref={pathRef}
          d="M1 3C1 3 1388.15 27.4981 1394.97 251.006C1401.79 474.514 163.969 498.693 163.969 744.215C163.969 989.737 979.815 986.018 1017.31 1110.64C1054.8 1235.26 656.876 1345 656.876 1345"
          stroke="white"
          strokeOpacity="0.6"
          strokeWidth="6"
          fill="none"
        />
        <path
          ref={highlightRef}
          d="M1 3C1 3 1388.15 27.4981 1394.97 251.006C1401.79 474.514 163.969 498.693 163.969 744.215C163.969 989.737 979.815 986.018 1017.31 1110.64C1054.8 1235.26 656.876 1345 656.876 1345"
          stroke="#00bfff"
          strokeWidth="6"
          fill="none"
          style={{ filter: "drop-shadow(0 0 6px #00bfff)" }}
        />
      </svg>

      {milestones.map((m, idx) => (
        <div
          key={idx}
          ref={(el) => { milestoneRefs.current[idx] = el; }}
          className="milestone-marker absolute"
        >
          <div className="relative w-full h-full">

            <svg
              className="pillar-line absolute left-1/2 -translate-x-1/2 bottom-0"
              width="4"
              height="120"
              viewBox="0 0 4 120"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line x1="2" y1="0" x2="2" y2="120" strokeWidth="4" />
            </svg>

            <div
              className={`text-container absolute whitespace-nowrap flex flex-col ${
                m.align === 'left' ? 'items-end right-full mr-4' : ''
              } ${
                m.align === 'right' ? 'items-start left-full ml-4' : ''
              } ${
                m.align === 'center' ? 'items-center bottom-full left-1/2 -translate-x-1/2 mb-2' : 'bottom-0'
              }`}
            >
              <div className="year-text text-xl mb-1">{m.year}</div>
              <div className={`description-text text-2xl font-medium flex items-center ${m.icon ? 'text-cyan-400' : 'text-white'}`}>
                {m.icon && (
                  <svg
                    className="mr-2"
                    width="24"
                    height="24"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15.9997 29.8834C13.3412 29.8834 11.1719 29.4621 9.49165 28.6197C7.81143 27.7775 6.97132 26.69 6.97132 25.3574C6.97132 24.7442 7.16565 24.174 7.55432 23.6467C7.94299 23.1194 8.48732 22.6598 9.18732 22.268L11.5027 24.5377C11.26 24.6319 10.9994 24.7439 10.721 24.8737C10.4425 25.0032 10.218 25.1591 10.0473 25.3414C10.3751 25.7436 11.1312 26.0956 12.3157 26.3974C13.5001 26.6991 14.7313 26.85 16.0093 26.85C17.2871 26.85 18.5211 26.6991 19.7113 26.3974C20.9015 26.0956 21.6595 25.7436 21.9853 25.3414C21.7924 25.1369 21.5499 24.9699 21.2577 24.8404C20.9654 24.7106 20.6895 24.5986 20.43 24.5044L22.72 22.2014C23.4644 22.61 24.0352 23.0807 24.4323 23.6134C24.8294 24.146 25.028 24.7268 25.028 25.3557C25.028 26.6888 24.1879 27.7767 22.5077 28.6194C20.8272 29.462 18.6579 29.8834 15.9997 29.8834Z"
                      fill="currentColor"
                    />
                  </svg>
                )}
                {m.text}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
