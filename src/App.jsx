import { useEffect, useState } from 'react'
import ScrollProgress from './components/ScrollProgress'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import GradientBackground from './components/GradientBackground'
import About from './components/About'
import ServicesList from './components/ServicesList'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'
import CTA from './components/CTA'
import Partners from './components/Partners'
import Footer from './components/Footer'
import ContactModal from './components/ContactModal'

import { ChevronUp } from 'lucide-react'

export default function App() {
  const [showTop, setShowTop] = useState(false)
  const [contactOpen, setContactOpen] = useState(false)

  // Scroll to top on page load/refresh
  useEffect(() => {
    window.scrollTo(0, 0)
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual'
    }
  }, [])

  // Show scroll-to-top button
  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 600)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Intercept #kontakt links to open modal
  useEffect(() => {
    const handleClick = e => {
      const anchor = e.target.closest('a[href="#kontakt"]')
      if (anchor) {
        e.preventDefault()
        setContactOpen(true)
      }
    }
    document.addEventListener('click', handleClick)
    return () => document.removeEventListener('click', handleClick)
  }, [])

  return (
      <div className="min-h-screen relative" style={{ background: '#eef2ff' }}>
        <GradientBackground />
        <ScrollProgress />

        <div className="relative z-10">
        <Navbar />
        <Hero />
        <About />
        <ServicesList />
        <Testimonials />
        <FAQ />
        <CTA onOpenForm={() => setContactOpen(true)} />
        <Partners />
        <Footer />
      </div>

      <ContactModal open={contactOpen} onClose={() => setContactOpen(false)} />

      {/* Scroll-to-top */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className={`fixed bottom-6 right-4 sm:right-8 z-50 w-10 h-10 sm:w-9 sm:h-9 flex items-center justify-center transition-all duration-300 ${
          showTop ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        style={{ background: '#5465ff', color: '#fff', borderRadius: 6 }}
        aria-label="Scroll to top"
      >
        <ChevronUp size={16} strokeWidth={2.5} />
      </button>
      </div>
  )
}
