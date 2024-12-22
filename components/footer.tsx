'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Facebook, Twitter, Instagram, Youtube, Linkedin, Phone, Mail, MapPin } from 'lucide-react'

const navigation = {
  main: [
    { name: 'About Us', href: '#' },
    { name: 'Contact Us', href: '#' },
    { name: 'Blog', href: '#' },
    { name: 'Privacy Policy', href: '#' },
    { name: 'Site Map', href: '#' },
  ],
  social: [
    { name: 'Facebook', icon: Facebook, href: '#', color: '#1877F2' },
    { name: 'Twitter', icon: Twitter, href: '#', color: '#1DA1F2' },
    { name: 'Instagram', icon: Instagram, href: '#', color: '#E4405F' },
    { name: 'YouTube', icon: Youtube, href: '#', color: '#FF0000' },
    { name: 'LinkedIn', icon: Linkedin, href: '#', color: '#0A66C2' },
  ],
  contact: [
    { icon: Phone, text: '+1 234 567 890', href: 'tel:+1234567890' },
    { icon: Mail, text: 'contact@gmind.com', href: 'mailto:contact@gmind.com' },
    { icon: MapPin, text: '123 Education St, Learning City', href: '#' },
  ]
}

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-white to-gray-50">
      <div className="mx-auto max-w-7xl px-6 py-12 sm:py-20 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Column */}
          <div className="space-y-6">
            <Link href="/" className="text-2xl font-bold text-[#463B75] hover:text-[#362C5A] transition-colors font-arco">
              GMIND
            </Link>
            <p className="text-gray-600 text-sm">
              Revolutionizing educational experiences through innovative learning solutions.
            </p>
            <Image
              src="/placeholder.svg"
              alt="QR Code"
              width={100}
              height={100}
              className="rounded-lg hover:shadow-lg transition-shadow"
            />
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {navigation.main.map((item) => (
                <li key={item.name}>
                  <Link 
                    href={item.href} 
                    className="text-gray-600 hover:text-[#463B75] transition-colors flex items-center group"
                  >
                    <span className="w-1 h-1 bg-[#463B75] rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Contact Us</h3>
            <ul className="space-y-4">
              {navigation.contact.map((item, index) => (
                <li key={index}>
                  <Link 
                    href={item.href}
                    className="flex items-center text-gray-600 hover:text-[#463B75] transition-colors"
                  >
                    <item.icon className="h-5 w-5 mr-3" />
                    <span>{item.text}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Newsletter</h3>
            <p className="text-gray-600 text-sm mb-4">
              Subscribe to our newsletter for updates and educational content.
            </p>
            <form className="space-y-3">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-[#463B75] focus:ring-1 focus:ring-[#463B75] transition-all"
              />
              <button
                type="submit"
                className="w-full bg-[#463B75] text-white py-2 rounded-lg hover:bg-[#362C5A] transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Social Links */}
        <div className="border-t border-gray-200 pt-8">
          <div className="flex flex-wrap justify-center gap-6">
            {navigation.social.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="group relative"
              >
                <span className="sr-only">{item.name}</span>
                <div className="transform transition-transform group-hover:-translate-y-1">
                  <item.icon 
                    className="h-6 w-6 transition-colors" 
                    style={{ color: item.color }}
                  />
                </div>
              </Link>
            ))}
          </div>
          <p className="mt-8 text-center text-sm text-gray-500">
            &copy; {new Date().getFullYear()} GMind. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
