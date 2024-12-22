import Navbar from '@/components/navbar'
import Hero from '@/components/hero'
import Partners from '@/components/partners'
import Features from '@/components/features'
import Events from '@/components/events'
import Team from '@/components/team'
import Games from '@/components/games'
import Testimonials from '@/components/testimonials'
import Contact from '@/components/contact'
import Footer from '@/components/footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Partners />
      <Features />
      <Events />
      <Team />
      <Games />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  )
}

