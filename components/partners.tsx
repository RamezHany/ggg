import Image from 'next/image'

const partners = [
  { name: 'Partner 1', logo: '/placeholder.svg' },
  { name: 'Partner 2', logo: '/placeholder.svg' },
  { name: 'Partner 3', logo: '/placeholder.svg' },
  { name: 'Partner 4', logo: '/placeholder.svg' },
]

export default function Partners() {
  return (
    <div className="bg-gray-50 py-12" id="partners">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid grid-cols-2 items-center gap-x-8 gap-y-10 sm:grid-cols-4 sm:gap-x-10">
          {partners.map((partner) => (
            <div key={partner.name} className="flex justify-center">
              <Image
                src={partner.logo}
                alt={partner.name}
                width={240}
                height={120}
                className="h-24 w-auto object-contain grayscale hover:grayscale-0 transition-all"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
