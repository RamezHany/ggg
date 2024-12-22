'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { motion, AnimatePresence } from 'framer-motion'

const navItems = [
  
  { href: '#features', label: 'About' },
  { href: '#events', label: 'Events' },
  { href: '#games', label: 'Games' },
  { href: '#testimonials', label: 'Testimonials' },
  { href: '#team', label: 'Team' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    
    if (element) {
      const navbarHeight = 64; // Height of the fixed navbar
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16 font-arco">
          {/* Logo */}
          <Link href="/" className="text-3xl font-bold text-[#463B75] font-arco tracking-wide">
            GMIND
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={(e) => scrollToSection(e, item.href)}
                className="text-gray-600 hover:text-[#463B75] font-arco"
              >
                {item.label}
              </Link>
            ))}
            <Button className="bg-[#463B75] hover:bg-[#362C5A]">
              Contact Us
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-md text-gray-600 hover:text-[#463B75] hover:bg-gray-100"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          {/* Mobile Navigation */}
          <div
            className={`${
              isOpen ? 'block' : 'hidden'
            } md:hidden absolute top-16 left-0 right-0 bg-white shadow-lg`}
          >
            <div className="px-4 py-2 space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={(e) => scrollToSection(e, item.href)}
                  className="block py-2 text-gray-600 hover:text-[#463B75] font-arco"
                >
                  {item.label}
                </Link>
              ))}
              <div className="pt-2">
                <Button 
                  className="w-full bg-[#463B75] hover:bg-[#362C5A]"
                  onClick={() => setIsOpen(false)}
                >
                  Contact Us
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
