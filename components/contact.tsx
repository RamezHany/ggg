'use client'

import { Button } from "@/components/ui/button"
import { motion } from 'framer-motion'
import Image from 'next/image'
import { useState } from 'react'

export default function Contact() {
  const [isPartner, setIsPartner] = useState(false)

  return (
    <section className="relative py-16" id="contact">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1610116306796-6fea9f4fae38?q=80&w=2070"
          alt="VR Education"
          fill
          className="object-cover brightness-50"
          priority
        />
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-white"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              STAY UPDATED WITH <span className="text-[#463B75]">GMIND</span>
            </h2>
            <p className="text-base md:text-lg opacity-90 max-w-xl">
              Be the first to know about GMind's upcoming workshops, exclusive at-home learning resources, and special offers.
            </p>
          </motion.div>

          {/* Right Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white rounded-3xl p-6 shadow-xl"
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold text-[#463B75]">
                {isPartner ? 'Partner Form' : 'School Form'}
              </h3>
              <div className="flex bg-gray-100 p-1 rounded-full">
                <button
                  onClick={() => setIsPartner(false)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    !isPartner 
                      ? 'bg-[#463B75] text-white' 
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  School
                </button>
                <button
                  onClick={() => setIsPartner(true)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    isPartner 
                      ? 'bg-[#463B75] text-white' 
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  Partner
                </button>
              </div>
            </div>

            <form className="space-y-6">
              <div className="space-y-2">
                <label className="block text-gray-700">
                  {isPartner ? 'Company Name' : 'School Name'} <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder={isPartner ? 'Your Company Name' : 'Your School Name'}
                  required
                  className="w-full px-4 py-2 rounded-md border border-gray-200 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#463B75]"
                />
              </div>

              <div className="space-y-2">
                <label className="block text-gray-700">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  placeholder="Your Email"
                  required
                  className="w-full px-4 py-2 rounded-md border border-gray-200 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#463B75]"
                />
              </div>

              <div className="space-y-2">
                <label className="block text-gray-700">
                  Phone <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  placeholder="Your Phone"
                  required
                  className="w-full px-4 py-2 rounded-md border border-gray-200 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#463B75]"
                />
              </div>

              {isPartner ? (
                <div className="space-y-2">
                  <label className="block text-gray-700">
                    Company Size <span className="text-red-500">*</span>
                  </label>
                  <select
                    required
                    className="w-full px-4 py-2 rounded-md border border-gray-200 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#463B75]"
                  >
                    <option value="">Select Company Size</option>
                    <option value="1-10">1-10 employees</option>
                    <option value="11-50">11-50 employees</option>
                    <option value="51-200">51-200 employees</option>
                    <option value="201-500">201-500 employees</option>
                    <option value="500+">500+ employees</option>
                  </select>
                </div>
              ) : (
                <div className="space-y-2">
                  <label className="block text-gray-700">
                    School Type <span className="text-red-500">*</span>
                  </label>
                  <select
                    required
                    className="w-full px-4 py-2 rounded-md border border-gray-200 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#463B75]"
                  >
                    <option value="">Select School Type</option>
                    <option value="elementary">Elementary School</option>
                    <option value="middle">Middle School</option>
                    <option value="high">High School</option>
                    <option value="college">College/University</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              )}

              <div className="space-y-2">
                <label className="block text-gray-700">
                  Message
                </label>
                <textarea
                  placeholder="Your Message"
                  rows={3}
                  className="w-full px-4 py-2 rounded-md border border-gray-200 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#463B75]"
                />
              </div>

              <Button 
                type="submit" 
                className="w-full bg-[#463B75] hover:bg-[#362C5A] text-white font-semibold py-4"
              >
                Send Message
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
