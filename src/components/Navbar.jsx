import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const links = [
  { label: 'Tjenester', href: '#tjenester' },
  { label: 'Prosess', href: '#prosess' },
  { label: 'Om oss', href: '#om-oss' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Kontakt', href: '#kontakt' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'py-3 navbar-glass' : 'py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        <a
          href="#"
          className="font-medium text-base tracking-tight transition-colors hover:text-[#5465ff]"
          style={{ color: '#1a1a1a' }}
        >
          WebStarkupisz
        </a>

        <div className="hidden md:flex items-center gap-7">
          {links.map(item => (
            <a
              key={item.label}
              href={item.href}
              className="nav-link text-sm font-medium"
            >
              {item.label}
            </a>
          ))}
        </div>

        <button
          className="md:hidden p-2 rounded-lg transition-colors hover:bg-black/5"
          style={{ color: '#333' }}
          onClick={() => setMenuOpen(v => !v)}
          aria-label="Meny"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <div
        className={`md:hidden absolute top-full left-0 right-0 navbar-glass border-t border-black/5 transition-all duration-300 ${
          menuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'
        }`}
      >
        <div className="px-6 py-4">
          {links.map(item => (
            <a
              key={item.label}
              href={item.href}
              className="block py-3 text-sm font-medium text-[#333] transition-colors hover:text-[#5465ff]"
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  )
}
