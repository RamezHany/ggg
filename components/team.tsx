'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

interface TeamMember {
  name: string;
  role: string;
  image: string;
}

const teamMembers: TeamMember[] = [
  {
    name: "Name Here",
    role: "JOB TITLE",
    image: "https://img.freepik.com/free-photo/young-man-with-headphones-sitting-desk_23-2147666688.jpg?w=740&t=st=1703174444~exp=1703175044~hmac=6f1c89196707c3e5f5d5a8e5c34a294f2d6c8b2c9c9b2c9c9b2c9c9b2c9c9b2",
  },
  {
    name: "Name Here",
    role: "JOB TITLE",
    image: "https://img.freepik.com/free-photo/young-businessman-wearing-suit_23-2148935598.jpg?w=740&t=st=1703174478~exp=1703175078~hmac=6f1c89196707c3e5f5d5a8e5c34a294f2d6c8b2c9c9b2c9c9b2c9c9b2c9c9b2",
  },
  {
    name: "Name Here",
    role: "JOB TITLE",
    image: "https://img.freepik.com/free-photo/young-asian-man-suit_23-2148935597.jpg?w=740&t=st=1703174499~exp=1703175099~hmac=6f1c89196707c3e5f5d5a8e5c34a294f2d6c8b2c9c9b2c9c9b2c9c9b2c9c9b2",
  },
  {
    name: "Name Here",
    role: "JOB TITLE",
    image: "https://img.freepik.com/free-photo/young-man-wearing-casual-clothes_23-2148935599.jpg?w=740&t=st=1703174520~exp=1703175120~hmac=6f1c89196707c3e5f5d5a8e5c34a294f2d6c8b2c9c9b2c9c9b2c9c9b2c9c9b2",
  },
  {
    name: "Name Here",
    role: "JOB TITLE",
    image: "https://img.freepik.com/free-photo/young-man-wearing-hoodie_23-2148935600.jpg?w=740&t=st=1703174541~exp=1703175141~hmac=6f1c89196707c3e5f5d5a8e5c34a294f2d6c8b2c9c9b2c9c9b2c9c9b2c9c9b2",
  },
]

export default function Team() {
  return (
    <section className="bg-[#463B75] py-24" id="team">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-5xl font-bold text-white mb-6"
          >
            OUR TEAM
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-white/80 text-xl"
          >
            Lorem ipsum dolor sit amet consectetur. Vel tristique tellus dui non facilisis lorem nulla diam. Diam aliquam
          </motion.p>
        </div>

        <div className="flex justify-center gap-6 overflow-x-auto pb-6 -mx-6 px-6">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex-none"
            >
              <div className="relative w-48 h-48">
                <div className="absolute inset-0 rounded-full border-4 border-white overflow-hidden grayscale">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                    unoptimized
                  />
                </div>
              </div>
              <div className="text-center mt-6">
                <p className="text-[#90EE90] text-sm mb-1">{member.role}</p>
                <h3 className="text-white font-medium text-lg">{member.name}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
