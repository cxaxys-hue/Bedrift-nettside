import { ArrowUpRight } from 'lucide-react'

const CONTACT_EMAIL = 'Marcel@WebstarKupisz.no'

export default function CTA({ onOpenForm }) {
  return (
    <section id="kontakt" className="py-12 md:py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div
          className="relative overflow-hidden rounded-3xl p-8 md:p-12 lg:p-16 cta-glass"
          style={{
            background: 'rgba(255, 255, 255, 0.4)',
            border: '1px solid rgba(255, 255, 255, 0.5)',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.06), inset 0 1px 0 rgba(255, 255, 255, 0.8)',
          }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div>
                <h2
                  className="font-medium tracking-tight mb-6"
                  style={{
                    fontSize: 'clamp(1.75rem, 4vw, 2.75rem)',
                    lineHeight: 1.15,
                    color: '#1a1a1a',
                  }}
                >
                  La oss snakke om prosjektet ditt
                  <br />
                  <span style={{ color: '#788bff' }}>og komme i gang.</span>
                </h2>
                <p className="text-base md:text-lg mb-8 max-w-lg" style={{ color: '#555', lineHeight: 1.7 }}>
                  Gi oss bare beskjed om hva du trenger, så tar vi resten. En kort e-post er nok — vi ringer eller avtaler en samtale.
                </p>
                <div className="flex flex-wrap items-center gap-4">
                  <a
                    href={`mailto:${CONTACT_EMAIL}`}
                    className="inline-flex items-center gap-2 font-medium text-sm tracking-wider uppercase transition-colors hover:text-[#5465ff]"
                    style={{ color: '#788bff' }}
                  >
                    {CONTACT_EMAIL}
                    <ArrowUpRight size={16} strokeWidth={2} />
                  </a>
                  {onOpenForm && (
                    <button
                      onClick={onOpenForm}
                      className="text-sm font-medium transition-colors hover:text-[#5465ff]"
                      style={{ color: '#666' }}
                    >
                      eller send skjema →
                    </button>
                  )}
                </div>
              </div>
              <div className="hidden lg:block" />
            </div>
        </div>
      </div>
    </section>
  )
}
