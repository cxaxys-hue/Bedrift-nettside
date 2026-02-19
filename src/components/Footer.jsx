import { Mail, Moon, Sun } from 'lucide-react'

const links = [
  { label: 'Tjenester', href: '#tjenester' },
  { label: 'Om oss', href: '#om-oss' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Kontakt', href: '#kontakt' },
]

export default function Footer({ darkMode, onToggleDark }) {
  return (
    <footer
      className="mt-auto pt-12 pb-8 px-4 sm:px-6 w-full footer-dark"
      style={{
        background: 'var(--footer-bg)',
        borderTop: 'var(--footer-border)',
      }}
    >
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-10 md:gap-8 pt-4">
          <div className="text-center md:text-left">
            <a href="#" className="font-medium text-lg tracking-tight block mb-2" style={{ color: '#fff' }}>
              WebStarkupisz
            </a>
            <p className="text-sm max-w-xs mt-3" style={{ color: 'rgba(255,255,255,0.75)', lineHeight: 1.6 }}>
              Norsk webbyrå. Nettsider som leverer.
            </p>
          </div>

          <div className="hidden md:block w-px flex-shrink-0 self-stretch min-h-[60px]" style={{ background: 'linear-gradient(180deg, transparent, rgba(255, 255, 255, 0.15), transparent)' }} />

          <nav className="flex flex-col items-center md:items-start">
            <span className="text-[10px] font-medium tracking-widest uppercase mb-3" style={{ color: 'rgba(255,255,255,0.6)' }}>
              Navigasjon
            </span>
            <div className="flex flex-wrap justify-center md:justify-start gap-x-6 gap-y-1">
              {links.map(link => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm transition-colors hover:text-[var(--primary)]"
                  style={{ color: 'rgba(255,255,255,0.85)' }}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </nav>

          <div className="hidden md:block w-px flex-shrink-0 self-stretch min-h-[60px]" style={{ background: 'linear-gradient(180deg, transparent, rgba(255, 255, 255, 0.15), transparent)' }} />

          <div className="flex flex-col items-center md:items-end text-center md:text-right">
            <span className="text-[10px] font-medium tracking-widest uppercase mb-3" style={{ color: 'rgba(255,255,255,0.6)' }}>
              Kontakt
            </span>
            <a
              href="mailto:marcel@webstarkupisz.no"
              className="text-sm inline-flex items-center gap-2 transition-colors hover:text-[var(--primary)] lowercase"
              style={{ color: 'rgba(255,255,255,0.85)' }}
            >
              <span className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: 'rgba(255, 255, 255, 0.12)', color: 'var(--primary)' }}>
                <Mail size={13} />
              </span>
              marcel@webstarkupisz.no
            </a>
            <a
              href="tel:+4748617939"
              className="text-sm inline-flex items-center gap-2 mt-2 transition-colors hover:text-[var(--primary)]"
              style={{ color: 'rgba(255,255,255,0.85)' }}
            >
              486 17 939
            </a>
          </div>
        </div>

        <div
          className="mt-10 pt-6 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-6"
          style={{ borderTop: '1px solid rgba(255,255,255,0.1)' }}
        >
          <p className="text-xs" style={{ color: 'rgba(255,255,255,0.7)' }}>
            © {new Date().getFullYear()} WebStarkupisz
          </p>
          <span className="hidden sm:inline w-1 h-1 rounded-full" style={{ background: 'rgba(255,255,255,0.4)' }} />
          <p className="text-xs" style={{ color: 'rgba(255,255,255,0.7)' }}>
            Norge
          </p>
          <span className="hidden sm:inline w-1 h-1 rounded-full" style={{ background: 'rgba(255,255,255,0.4)' }} />
          <button
            onClick={onToggleDark}
            className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-medium transition-colors hover:bg-white/10"
            style={{ color: 'rgba(255,255,255,0.85)' }}
            aria-label={darkMode ? 'Bytt til lys modus' : 'Bytt til mørk modus'}
          >
            {darkMode ? <Sun size={14} /> : <Moon size={14} />}
            {darkMode ? 'Lys modus' : 'Mørk modus'}
          </button>
        </div>
      </div>
    </footer>
  )
}
