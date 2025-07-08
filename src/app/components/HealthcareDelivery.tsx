'use client'

import React, { useCallback, useEffect, useState } from 'react'
import Image from 'next/image';
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const solutions = [
    {
      title: 'Clinical-Grade Accuracy',
      image: '/images/i1.png',
    },
    {
      title: 'Predictive Analysis',
      image: '/images/i2.png',
    },
    {
      title: 'Easy to Use',
      image: '/images/i3.png',
    },
    {
      title: 'Real-Time Insights',
      image: '/images/i4.jpg',
    }
]

export default function HealthcareDelivery() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start' }, [Autoplay()])
  const [canScrollPrev, setCanScrollPrev] = useState(false)
  const [canScrollNext, setCanScrollNext] = useState(false)

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])
  
  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setCanScrollPrev(emblaApi.canScrollPrev())
    setCanScrollNext(emblaApi.canScrollNext())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    onSelect()
    emblaApi.on('select', onSelect)
    emblaApi.on('reInit', onSelect)
  }, [emblaApi, onSelect])


  return (
    <section className="bg-white py-20 relative font-work-sans overflow-hidden">
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-repeat-x" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='40' height='30' viewBox='0 0 40 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M 0 5 L 5 10 L 10 5 L 15 10 L 20 5 L 25 10 L 30 5 L 35 10 L 40 5' stroke='%23FEE2E2' fill='none' stroke-width='1'/%3E%3Cpath d='M 0 12 L 5 17 L 10 12 L 15 17 L 20 12 L 25 17 L 30 12 L 35 17 L 40 12' stroke='%23FEE2E2' fill='none' stroke-width='1'/%3E%3Cpath d='M 0 19 L 5 24 L 10 19 L 15 24 L 20 19 L 25 24 L 30 19 L 35 24 L 40 19' stroke='%23FEE2E2' fill='none' stroke-width='1'/%3E%3C/svg%3E\")", backgroundSize: "auto 30px" }}></div>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="flex justify-between items-center mb-12">
          <div>
            <h2 className="text-sm uppercase tracking-wider text-[#007A91] mb-2 font-semibold">
              OUTCOMES
            </h2>
            <h3 className="text-4xl md:text-5xl font-bold text-[#213567] font-raleway">
              Efficient Healthcare Delivery
            </h3>
          </div>
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={scrollPrev}
              disabled={!canScrollPrev}
              className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center text-gray-400 disabled:opacity-50 disabled:cursor-not-allowed transition-colors hover:bg-gray-100"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={scrollNext}
              disabled={!canScrollNext}
              className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center text-gray-400 disabled:opacity-50 disabled:cursor-not-allowed transition-colors hover:bg-gray-100"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
        
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex -ml-4">
            {solutions.map((solution, index) => (
              <div key={index} className="flex-shrink-0 w-full md:w-1/3 pl-4">
                <div className="flex flex-col">
                  <div className="h-[27rem] mb-4 overflow-hidden rounded-lg relative">
                    <Image src={solution.image} alt={solution.title} fill className="object-cover" />
                  </div>
                  <h4 className="text-xl font-bold text-[#213567] font-raleway">{solution.title}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Buttons are integrated with the desktop ones now through Embla's logic */}
         <div className="md:hidden flex items-center justify-center gap-4 mt-8">
            <button
              onClick={scrollPrev}
              disabled={!canScrollPrev}
              className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center text-gray-400 disabled:opacity-50 disabled:cursor-not-allowed transition-colors hover:bg-gray-100"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={scrollNext}
              disabled={!canScrollNext}
              className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center text-gray-400 disabled:opacity-50 disabled:cursor-not-allowed transition-colors hover:bg-gray-100"
            >
              <ChevronRight size={24} />
            </button>
        </div>
      </div>
    </section>
  )
} 