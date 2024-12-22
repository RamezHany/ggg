'use client'

import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'

interface Game {
  name: string;
  description: string;
  image: string;
}

const games: Game[] = [
  {
    name: "GAME NAME",
    description: "THIS GAME HAS ALWAYS BEEN, AND WILL ALWAYS BE, ABOUT BUCKETS.",
    image: "https://img.freepik.com/free-photo/woman-wearing-vr-headset-medium-shot_23-2149126949.jpg",
  },
  {
    name: "GAME NAME",
    description: "THIS GAME HAS ALWAYS BEEN, AND WILL ALWAYS BE, ABOUT BUCKETS.",
    image: "https://img.freepik.com/free-photo/woman-wearing-vr-headset-medium-shot_23-2149126949.jpg",
  },
  {
    name: "GAME NAME",
    description: "THIS GAME HAS ALWAYS BEEN, AND WILL ALWAYS BE, ABOUT BUCKETS.",
    image: "https://img.freepik.com/free-photo/woman-wearing-vr-headset-medium-shot_23-2149126949.jpg",
  },
  {
    name: "GAME NAME",
    description: "THIS GAME HAS ALWAYS BEEN, AND WILL ALWAYS BE, ABOUT BUCKETS.",
    image: "https://img.freepik.com/free-photo/woman-wearing-vr-headset-medium-shot_23-2149126949.jpg",
  },
]

export default function Games() {
  return (
    <section className="py-24 bg-gray-50 relative overflow-hidden" id="games">
      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-full h-32 bg-white transform -skew-y-6" />
      
      <div className="container mx-auto px-6 relative">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-5xl font-bold text-[#463B75] mb-16"
        >
          FEATURED GAMES
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {games.map((game, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="relative w-32 h-32 mx-auto mb-6">
                <div className="absolute inset-0 rounded-full overflow-hidden">
                  <Image
                    src={game.image}
                    alt={game.name}
                    fill
                    className="object-cover"
                    unoptimized
                  />
                </div>
              </div>
              
              <h3 className="text-[#90EE90] text-lg font-medium mb-4">
                {game.name}
              </h3>
              
              <p className="text-gray-600 text-sm mb-6 min-h-[60px]">
                {game.description}
              </p>
              
              <Button
                variant="default"
                className="bg-[#463B75] hover:bg-[#362C5A] text-white rounded-full px-8"
              >
                Learn More
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
