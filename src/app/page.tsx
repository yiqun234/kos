import HeroVideo from './components/HeroVideo'
import MissionChart from './components/MissionChart'
import HealthcareDelivery from './components/HealthcareDelivery'
import Team from './components/Team'
import News from './components/News'
import Careers from './components/Careers'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Banner with Scroll Animation */}
      <HeroVideo />

      {/* Mission Section */}
      <section className="pt-40 pb-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-sm uppercase tracking-wider text-[#007A91] mb-4 font-semibold font-work-sans">
              OUR MISSION
            </h2>
            <h3 className="text-3xl md:text-5xl font-bold text-[#213567] mb-8 max-w-4xl mx-auto leading-tight font-raleway">
              Our mission is to make health monitoring effortless, intelligent, and accessible, by predicting and preventing disease.
            </h3>
          </div>
          
          {/* Data Visualization Chart */}
          <div className="h-96 w-full flex justify-center items-center overflow-hidden">
            <MissionChart />
          </div>
        </div>
      </section>

      {/* ARGUS Product Section */}
      <section className="bg-black text-white min-h-screen flex items-center overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            {/* Left Content */}
            <div className="lg:w-1/3 text-left">
              <div className="flex items-center gap-4 mb-6">
                {/* <div className="w-0.5 h-10 bg-gray-600"></div> */}
                <div>
                  <h2 className="text-sm uppercase tracking-wider text-[#007A91] font-semibold font-work-sans">
                    INTRODUCING
                  </h2>
                  <h3 className="text-6xl font-bold font-raleway">
                    ARGUS
                  </h3>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="w-full lg:w-2/3 flex justify-center items-center relative min-h-[500px] lg:min-h-[600px]">
              <Image
                src="/images/gj.png"
                alt="Argus Device Exploded View"
                fill
                className="object-contain"
                style={{
                  transform: 'rotate(-120deg)',
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Healthcare Delivery Section */}
      <HealthcareDelivery />

      {/* Team Section */}
      <Team />

      {/* News Section */}
      <News />

      {/* Careers Section */}
      <Careers />
    </div>
  )
}
