import Image from 'next/image'

const events = [
  { title: 'Workshop 1', image: '/placeholder.svg' },
  { title: 'Workshop 2', image: '/placeholder.svg' },
  { title: 'Workshop 3', image: '/placeholder.svg' },
  { title: 'Workshop 4', image: '/placeholder.svg' },
  { title: 'Workshop 5', image: '/placeholder.svg' },
]

export default function Events() {
  return (
    <section className="py-16 bg-white relative" id="events">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-[#463B75] mb-12">OUR EVENTS</h2>
        <div className="grid grid-cols-12 gap-4 relative">
          {/* GR SVG Image */}
          <div className="absolute top-0 right-[-70px] z-10 -mt-32">
            <Image
              src="/gr.svg"
              alt="Decorative Element"
              width={150}
              height={150}
              className="object-contain"
            />
          </div>
          
          <div className="col-span-12 md:col-span-6 lg:col-span-8">
            <div className="relative h-80 rounded-lg overflow-hidden">
              <Image
                src={events[0].image}
                alt={events[0].title}
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div className="col-span-12 md:col-span-6 lg:col-span-4">
            <div className="grid grid-cols-2 gap-4 h-full">
              {events.slice(1).map((event, index) => (
                <div key={index} className="relative h-[150px] rounded-lg overflow-hidden">
                  <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
