import { useEffect, useState } from 'react'
import ScrollProgress from './components/ScrollProgress'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import GradientBackground from './components/GradientBackground'
import AboutSection from './components/AboutSection'
import FAQ from './components/FAQ'
import CTA from './components/CTA'
import Partners from './components/Partners'
import Footer from './components/Footer'
import ContactModal from './components/ContactModal'

import { ChevronUp } from 'lucide-react'

const DARK_KEY = 'webstarkupisz-dark'

export default function App() {
  const [showTop, setShowTop] = useState(false)
  const [contactOpen, setContactOpen] = useState(false)
  const [darkMode, setDarkMode] = useState(() => {
    try {
      return localStorage.getItem(DARK_KEY) === '1'
    } catch {
      return false
    }
  })

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode)
    try {
      localStorage.setItem(DARK_KEY, darkMode ? '1' : '0')
    } catch {}
  }, [darkMode])

  useEffect(() => {
    window.scrollTo(0, 0)
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual'
    }
  }, [])

  useEffect(() => {
    let last = false
    const onScroll = () => {
      const v = window.scrollY > 600
      if (v !== last) {
        last = v
        setShowTop(v)
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    // #kontakt opens contact modal
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
      <div className="min-h-screen flex flex-col relative" style={{ background: 'transparent' }}>
        <GradientBackground />
        <ScrollProgress />

        <div className="relative z-10 flex-1 flex flex-col">
        <Navbar />
        <Hero />
        <AboutSection />
        <FAQ />
        <CTA onOpenForm={() => setContactOpen(true)} />
        <Partners />
        <Footer darkMode={darkMode} onToggleDark={() => setDarkMode(v => !v)} />
      </div>

      <ContactModal open={contactOpen} onClose={() => setContactOpen(false)} />

      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className={`btn-glow fixed bottom-6 right-4 sm:right-8 z-50 w-10 h-10 sm:w-9 sm:h-9 flex items-center justify-center transition-all duration-300 ${
          showTop ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        style={{ background: 'var(--primary)', color: '#fff', borderRadius: 6 }}
        aria-label="Scroll to top"
      >
        <ChevronUp size={16} strokeWidth={2.5} />
      </button>
      </div>
  )
}
