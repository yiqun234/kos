'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Logo from './Logo'

export default function Navigation() {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { href: '/products', label: 'Products' },
    { href: '/about', label: 'About Us' },
    { href: '/contact', label: 'Contact' },
  ]

  const isDarkTheme = pathname === '/'
  
  const navClasses = isDarkTheme 
    ? 'bg-black' 
    : 'bg-white shadow-sm'

  return (
    <nav className={`fixed w-full top-0 z-50 transition-all duration-300 ${navClasses}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/">
              <Logo theme={isDarkTheme ? 'dark' : 'light'} />
            </Link>
          </div>
          
          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <div key={item.href} className="relative">
                <Link
                  href={item.href}
                  className={`font-work-sans text-lg transition-colors duration-200 ${
                    pathname === item.href
                      ? "text-blue-950 font-bold"
                      : isDarkTheme
                        ? "text-white font-normal hover:text-gray-300"
                        : "text-[#213567] font-normal hover:text-[#007A91]"
                  }`}
                >
                  {item.label}
                </Link>
                {pathname === item.href && (
                  <div className="w-full h-px bg-blue-950 mt-1"></div>
                )}
              </div>
            ))}
            
            <button className={`w-40 h-8 rounded-[40px] border font-work-sans transition-all duration-200 ${
              isDarkTheme
                ? 'bg-white/0 border-white text-white hover:bg-white/10'
                : 'bg-white/0 border-[#213567] text-[#213567] hover:bg-[#213567]/10'
            }`}>
              Get in touch
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`cursor-pointer focus:outline-none ${isDarkTheme ? 'text-white' : 'text-black'}`}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <div
        className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} absolute top-20 left-0 w-full ${isDarkTheme ? 'bg-black' : 'bg-white'} transition-all duration-300 ease-in-out`}
      >
        <div className="px-6 pt-2 pb-8 space-y-4">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setIsMenuOpen(false)}
              className={`block text-lg font-work-sans text-center py-2 rounded-md ${
                pathname === item.href
                  ? 'font-bold text-blue-950'
                  : isDarkTheme ? 'font-normal text-white' : 'font-normal text-[#213567]'
              }`}
            >
              {item.label}
            </Link>
          ))}
          <div className="flex justify-center mt-4">
            <button className={`w-40 h-10 rounded-[40px] border font-work-sans transition-all duration-200 ${
              isDarkTheme
                ? 'bg-white/0 border-white text-white hover:bg-white/10'
                : 'bg-white/0 border-[#213567] text-[#213567] hover:bg-[#213567]/10'
            }`}>
              Get in touch
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
} 