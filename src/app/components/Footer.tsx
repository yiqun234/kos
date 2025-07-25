import Link from 'next/link'
import { Linkedin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 md:gap-8">
          
          {/* Left Section - Company Info */}
          <div className="flex flex-col w-full md:w-auto">
            {/* KOS Logo */}
            <div className="mb-6">
              <svg width="72" height="25" viewBox="0 0 72 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21.824 1.2676H14.8339L6.87261 12.0208H13.8661L21.824 1.2676Z" fill="white"/>
                <path d="M6.87261 12.0208H13.8661L21.8241 23.3129H14.8344L6.87261 12.0208Z" fill="white"/>
                <path d="M0.322266 1.32038H6.98976V23.2593H0.322266V1.32038Z" fill="white"/>
                <path d="M35.2931 0C37.753 0 39.8547 0.489588 41.5981 1.46877C43.3654 2.42406 44.7147 3.80923 45.6461 5.62429C46.6014 7.43935 47.0791 9.62459 47.0791 12.18C47.0791 14.7354 46.6014 16.9206 45.6461 18.7357C44.7147 20.5508 43.3654 21.9479 41.5981 22.9271C39.8547 23.8824 37.753 24.36 35.2931 24.36C32.8571 24.36 30.7435 23.8824 28.9524 22.9271C27.1851 21.9479 25.8238 20.5508 24.8685 18.7357C23.9132 16.9206 23.4355 14.7354 23.4355 12.18C23.4355 9.62459 23.9132 7.43935 24.8685 5.62429C25.8238 3.80923 27.1851 2.42406 28.9524 1.46877C30.7435 0.489588 32.8571 0 35.2931 0ZM35.2931 5.58847C34.314 5.58847 33.502 5.83924 32.8571 6.34076C32.2362 6.81841 31.7585 7.53488 31.4242 8.49018C31.1137 9.44547 30.9585 10.6754 30.9585 12.18C30.9585 13.6607 31.1137 14.8906 31.4242 15.8698C31.7585 16.8251 32.2362 17.5535 32.8571 18.0551C33.502 18.5327 34.314 18.7715 35.2931 18.7715C36.2484 18.7715 37.0485 18.5327 37.6933 18.0551C38.3381 17.5535 38.8158 16.8251 39.1263 15.8698C39.4367 14.8906 39.592 13.6607 39.592 12.18C39.592 10.6754 39.4367 9.44547 39.1263 8.49018C38.8158 7.53488 38.3381 6.81841 37.6933 6.34076C37.0485 5.83924 36.2484 5.58847 35.2931 5.58847Z" fill="white"/>
                <path d="M60.8287 0C63.0737 0 65.0679 0.31047 66.8113 0.93141C68.5547 1.52847 70.0832 2.44794 71.3967 3.68982L68.2084 8.38271C67.1337 7.47518 65.9873 6.77065 64.7693 6.26912C63.5752 5.74371 62.2497 5.481 60.7929 5.481C60.0526 5.481 59.4555 5.55265 59.0017 5.69594C58.548 5.83924 58.2136 6.04224 57.9987 6.30494C57.8076 6.54376 57.7121 6.81841 57.7121 7.12888C57.7121 7.511 57.939 7.82147 58.3927 8.06029C58.8704 8.29912 59.5271 8.51406 60.363 8.70512L63.9454 9.52906C66.3336 10.0784 68.1129 10.8904 69.2831 11.9651C70.4533 13.0159 71.0384 14.4608 71.0384 16.2997C71.0384 18.0909 70.5847 19.5835 69.6771 20.7776C68.7935 21.9718 67.5755 22.8674 66.0231 23.4644C64.4708 24.0615 62.7154 24.36 60.7571 24.36C59.2047 24.36 57.6882 24.2048 56.2075 23.8943C54.7507 23.5838 53.4133 23.142 52.1953 22.5688C50.9773 21.9718 49.8971 21.5896 49.0135 20.7776L52.1953 15.6191C52.8401 16.24 53.6282 16.8012 54.5596 17.3028C55.491 17.7804 56.4822 18.1625 57.533 18.4491C58.5838 18.7357 59.5988 18.879 60.578 18.879C61.2706 18.879 61.8318 18.8193 62.2617 18.6999C62.7154 18.5566 63.0379 18.3655 63.2289 18.1267C63.42 17.8879 63.5155 17.6013 63.5155 17.2669C63.5155 16.8609 63.3603 16.5385 63.0498 16.2997C62.7393 16.037 62.1542 15.8101 61.2944 15.6191L57.3539 14.7235C56.0642 14.4369 54.8701 14.0428 53.7715 13.5413C52.6729 13.0398 51.7893 12.3472 51.1206 11.4635C50.4757 10.556 50.1533 9.37382 50.1533 7.917C50.1533 6.36465 50.5713 4.99141 51.4072 3.79729C52.243 2.60318 53.461 1.67176 55.0612 1.00306C56.6613 0.334353 58.5838 0 60.8287 0Z" fill="white"/>
              </svg>
            </div>
            
            {/* Company Address */}
            <div className="w-60 justify-start text-white text-sm font-normal font-['Work_Sans'] leading-none mb-6">
              KOS INC.<br/>
              Stanford Research Park<br/>
              3000 El Camino Real, Suite 3-120<br/>
              Palo Alto, CA 94306
            </div>
            
            {/* LinkedIn Icon */}
            <a href="#" className="inline-flex items-center justify-center w-8 h-8 border border-white rounded hover:bg-white hover:text-black transition-colors">
              <Linkedin size={16} />
            </a>
          </div>

          {/* Middle Section - Explore */}
          <div className="flex flex-col">
            <div className="text-white text-base font-semibold font-['Inter'] leading-snug mb-4">
              Explore
            </div>
            <div className="flex flex-col space-y-4">
              <Link href="/products" className="text-white text-sm font-normal font-['Work_Sans'] leading-none hover:text-gray-300 transition-colors">
                Products
              </Link>
              <Link href="/about" className="text-white text-sm font-normal font-['Work_Sans'] leading-none hover:text-gray-300 transition-colors">
                About Us
              </Link>
              <Link href="/contact" className="text-white text-sm font-normal font-['Work_Sans'] leading-none hover:text-gray-300 transition-colors">
                Contact
              </Link>
              <Link href="/careers" className="text-white text-sm font-normal font-['Work_Sans'] leading-none hover:text-gray-300 transition-colors">
                Careers
              </Link>
            </div>
          </div>

          {/* Right Section - Legal Disclaimer */}
          <div className="w-full md:w-96 justify-start text-white text-sm font-normal font-['Work_Sans'] leading-none">
            The Argus Glucose System is intended for users 18 years and older not on insulin. It is NOT intended for diagnosis of diseases, including diabetes. Consult your healthcare professional before making changes to your diet or exercise regime.
          </div>
        </div>
      </div>

      {/* Bottom Copyright Section */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="w-full h-auto min-h-14 py-4 relative border-t border-slate-200 flex items-center justify-center">
          <div className="text-center text-white text-xs font-light font-['Work_Sans'] leading-normal">
            © 2025 Argus by KOS | All Rights Reserved | Terms and Conditions | Privacy Policy
          </div>
        </div>
      </div>
    </footer>
  )
} 