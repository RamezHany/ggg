'use client'

import { Star } from 'lucide-react'
import Image from 'next/image'
import { motion } from 'framer-motion'

const testimonials = [
  {
    name: "Sam john",
    role: "CEO FIS",
    rating: 5,
    text: "Lorem ipsum dolor sit amet consectetur. Vel tristique tellus dui non facilisis lorem nulla diam. Diam aliquam fusce egestas quam bibendum nulla.",
    image: "https://img.freepik.com/free-photo/young-man-with-beard-wearing-blue-shirt_273609-6368.jpg"
  },
  {
    name: "Sam john",
    role: "CEO FIS",
    rating: 5,
    text: "Lorem ipsum dolor sit amet consectetur. Vel tristique tellus dui non facilisis lorem nulla diam. Diam aliquam fusce egestas quam bibendum nulla.",
    image: "https://img.freepik.com/free-photo/cheerful-young-woman-with-dark-curly-hair_171337-10130.jpg"
  },
  {
    name: "Sam john",
    role: "CEO FIS",
    rating: 5,
    text: "Lorem ipsum dolor sit amet consectetur. Vel tristique tellus dui non facilisis lorem nulla diam. Diam aliquam fusce egestas quam bibendum nulla.",
    image: "https://img.freepik.com/free-photo/close-up-young-successful-man-smiling-camera-standing-casual-outfit-against-blue-background_1258-66609.jpg"
  },
]

export default function Testimonials() {
  return (
    <section className="py-24 bg-[#463B75] relative overflow-hidden" id="testimonials">
      {/* Character Image */}
      <div className="absolute right-0 top-0 h-full w-1/4">
        <Image
          src="/pen.svg"
          alt="Educational Character"
          width={400}
          height={600}
          className="object-contain"
          unoptimized
        />
      </div>

      <div className="container mx-auto px-6 relative">
        <div className="max-w-3xl">
          <h2 className="text-5xl font-bold text-white mb-4">
            WHAT OUR CUSTOMER <span className="text-[#90EE90]">SAY'S</span>
          </h2>
          <p className="text-white/80 text-xl mb-12">
            Lorem ipsum dolor sit amet consectetur.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-[30px] p-8 shadow-lg"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="relative w-12 h-12">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={48}
                    height={48}
                    className="rounded-full"
                    unoptimized
                  />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">{testimonial.name}</h3>
                  <p className="text-gray-500 text-sm">{testimonial.role}</p>
                </div>
                <div className="flex text-yellow-400 ml-auto">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-gray-600">{testimonial.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
