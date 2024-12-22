import Image from 'next/image'

const features = [
  {
    image: '/a1.png',
    title: 'Lorem ipsum dolor sit amet consectetur',
    description: 'Vel tristique tellus dui non facilisis lorem nulla diam.',
  },
  {
    image: '/a2.png',
    title: 'Lorem ipsum dolor sit',
    description: 'dui non facilisis lorem nulla diam. Diam aliquam fusce egestas quam bibendum nulla.',
  },
]

export default function Features() {
  return (
    <div className="bg-white py-24 sm:py-32" id="features">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="grid grid-cols-2 gap-4">
            {[1, 2, 3, 4].map((index) => (
              <div key={index} className="relative h-48 overflow-hidden rounded-lg">
                <Image
                  src={`/a${index}.png`}
                  alt={`Feature ${index}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-6 font-arco">
              We are GMind, and we're here to revolutionize education
            </h2>
            <p className="text-lg text-gray-600">
              GMind provides 3D educational games with Egyptian curriculum. We provide 3D games, AR , VR and Animation to enhance the formal and informal education process. In addition, we combine communities, monitoring , test and competition besides the games to get the highest value.In another word, we reshape the future of Education
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
