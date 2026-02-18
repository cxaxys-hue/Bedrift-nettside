import { Mail, Phone } from 'lucide-react'

const links = [
  { label: 'Tjenester', href: '#tjenester' },
  { label: 'Prosess', href: '#prosess' },
  { label: 'Om oss', href: '#om-oss' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Kontakt', href: '#kontakt' },
]

export default function Footer() {
  return (
    <footer className="pt-20 pb-12 px-6 relative">
      <div
        className="footer-box max-w-4xl mx-auto rounded-2xl px-8 py-12 md:px-12 md:py-14 relative overflow-hidden"
        style={{
          background: 'rgba(255, 255, 255, 0.5)',
          border: '1px solid rgba(120, 139, 255, 0.12)',
          boxShadow: '0 4px 24px rgba(0, 0, 0, 0.04), inset 0 1px 0 rgba(255, 255, 255, 0.9)',
        }}
      >
        {/* Accent line */}
        <div
          className="absolute top-0 left-8 right-8 md:left-12 md:right-12 h-px"
          style={{ background: 'linear-gradient(90deg, transparent, rgba(84, 101, 255, 0.35), transparent)' }}
        />

        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-10 md:gap-8">
          <div className="text-center md:text-left">
            <a href="#" className="font-medium text-lg tracking-tight block mb-2 group" style={{ color: '#1a1a1a' }}>
              WebStarkupisz
              <span className="block w-8 h-0.5 mt-2 rounded-full transition-all group-hover:w-12" style={{ background: '#5465ff' }} />
            </a>
            <p className="text-sm max-w-xs mt-3" style={{ color: '#555', lineHeight: 1.6 }}>
              Norsk webbyrå. Nettsider som leverer.
            </p>
          </div>

          <div className="hidden md:block w-px flex-shrink-0 self-stretch min-h-[60px]" style={{ background: 'linear-gradient(180deg, transparent, rgba(120, 139, 255, 0.15), transparent)' }} />

          <nav className="flex flex-col items-center md:items-start">
            <span className="text-[10px] font-medium tracking-widest uppercase mb-3" style={{ color: '#999' }}>
              Navigasjon
            </span>
            <div className="flex flex-wrap justify-center md:justify-start gap-x-6 gap-y-1">
              {links.map(link => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm transition-colors hover:text-[#5465ff]"
                  style={{ color: '#555' }}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </nav>

          <div className="hidden md:block w-px flex-shrink-0 self-stretch min-h-[60px]" style={{ background: 'linear-gradient(180deg, transparent, rgba(120, 139, 255, 0.15), transparent)' }} />

          <div className="flex flex-col items-center md:items-end text-center md:text-right">
            <span className="text-[10px] font-medium tracking-widest uppercase mb-3" style={{ color: '#999' }}>
              Kontakt
            </span>
            <a
              href="mailto:Marcel@WebstarKupisz.no"
              className="text-sm inline-flex items-center gap-2 transition-colors hover:text-[#5465ff]"
              style={{ color: '#555' }}
            >
              <span className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: 'rgba(84, 101, 255, 0.12)', color: '#5465ff' }}>
                <Mail size={13} />
              </span>
              Marcel@WebstarKupisz.no
            </a>
            <a
              href="tel:+4748617939"
              className="text-sm inline-flex items-center gap-2 mt-2 transition-colors hover:text-[#5465ff]"
              style={{ color: '#555' }}
            >
              <span className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: 'rgba(120, 139, 255, 0.12)', color: '#788bff' }}>
                <Phone size={13} />
              </span>
              486 17 939
            </a>
          </div>
        </div>

        <div
          className="mt-10 pt-6 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-6"
          style={{ borderTop: '1px solid rgba(0,0,0,0.06)' }}
        >
          <p className="text-xs" style={{ color: '#888' }}>
            © {new Date().getFullYear()} WebStarkupisz
          </p>
          <span className="hidden sm:inline w-1 h-1 rounded-full" style={{ background: '#ccc' }} />
          <p className="text-xs" style={{ color: '#999' }}>
            Norge
          </p>
        </div>
      </div>
    </footer>
  )
}
