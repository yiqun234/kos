'use client'

export default function Careers() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left Title */}
          <div>
            <h2 className="text-6xl md:text-7xl font-bold text-[#213567] font-raleway">
              Careers
            </h2>
          </div>

          {/* Right Content */}
          <div>
            <p className="text-lg text-gray-600 mb-6 font-work-sans leading-relaxed">
              Transforming everyday health monitoring is an interdisciplinary mission.
            </p>
            <p className="text-lg text-gray-600 mb-8 font-work-sans leading-relaxed">
              We&apos;re building a team of innovators across engineering, biomedical science, data science, and clinical research, all working together to redefine how chronic conditions are detected and managed.
            </p>
            
            <button className="bg-[#007A91] text-white px-8 py-4 rounded-md font-semibold font-work-sans hover:bg-[#005f73] transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
              View Open Roles
            </button>
          </div>
        </div>
      </div>
    </section>
  )
} 