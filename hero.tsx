'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { ScrollAnimation } from './animations/scroll-animation'

export default function Hero() {
  return (
    <div className="relative isolate overflow-hidden bg-white mt-20 sm:mt-24 min-h-[85vh] border-b-2 border-gray-200" id="about">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-2 h-full flex flex-col justify-start">
        {/* Main Content Container */}
        <div className="flex flex-col items-center justify-center">
          {/* Top Title */}
          <div className="w-full text-center mb-4 sm:mb-8 px-2">
            <ScrollAnimation direction="down">
              <div className="relative w-full flex items-center justify-start pl-2 sm:pl-8 mb-0 sm:mb-2">
                <span className="text-lg sm:text-2xl font-medium text-[#463B75] font-arco">GMind Revolutionizes</span>
                <div className="flex-grow h-[2px] bg-[#463B75] ml-2 sm:ml-4 mr-2 sm:mr-8"></div>
              </div>
              <motion.h1 
                className="text-[2.5rem] sm:text-8xl lg:text-9xl xl:text-[10rem] font-bold tracking-tight text-[#463B75] w-full text-center sm:text-left font-arco -mt-1"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                EDUCATIONAL
              </motion.h1>
            </ScrollAnimation>
          </div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 items-start gap-8 sm:gap-2 w-full mt-4 sm:mt-[-2rem]">
            {/* Left Side - Button */}
            <div className="flex items-center sm:items-start justify-center sm:justify-start sm:pl-8 order-2 sm:order-1">
              <ScrollAnimation direction="left" delay={0.4}>
                <Button 
                  size="lg" 
                  className="bg-[#463B75] hover:bg-[#362C5A] transform transition-all hover:scale-105 text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6"
                  onClick={() => {
                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Get Started
                </Button>
              </ScrollAnimation>
            </div>

            {/* Middle - Vector Image */}
            <div className="relative w-full mx-auto -mt-8 sm:-mt-16 order-1 sm:order-2">
              <ScrollAnimation direction="up">
                <Image
                  src="/hero-vector.svg"
                  alt="Educational Character"
                  width={800}
                  height={800}
                  className="w-[200px] sm:w-[250px] h-[400px] sm:h-[500px] object-contain mx-auto"
                  priority
                  unoptimized
                />
              </ScrollAnimation>
            </div>

            {/* Right Side - Text Content */}
            <div className="flex items-center sm:items-start justify-center sm:justify-start px-4 sm:pl-2 order-3">
              <ScrollAnimation direction="right" delay={0.2}>
                <p className="text-lg sm:text-xl leading-7 sm:leading-8 text-gray-600 max-w-sm text-center sm:text-left">
                  Through our games, we help learners improve their skills and critical thinking in a fun and interactive way.
                </p>
              </ScrollAnimation>
            </div>
          </div>
        </div>
      </div>

      {/* Animated background elements */}
      <motion.div
        className="absolute inset-0 -z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
      </motion.div>
    </div>
  )
}
