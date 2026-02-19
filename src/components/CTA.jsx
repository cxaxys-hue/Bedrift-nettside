import { ArrowUpRight } from 'lucide-react'

const CONTACT_EMAIL = 'marcel@webstarkupisz.no'

export default function CTA({ onOpenForm }) {
  return (
    <section id="kontakt" className="py-12 md:py-16 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 lg:p-16 cta-glass">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div>
                <h2
                  className="font-medium tracking-tight mb-6"
                  style={{
                    fontSize: 'clamp(1.75rem, 4vw, 2.75rem)',
                    lineHeight: 1.15,
                    color: 'var(--text)',
                  }}
                >
                  La oss snakke om prosjektet ditt
                  <br />
                  <span style={{ color: 'var(--secondary)' }}>og komme i gang.</span>
                </h2>
                <p className="text-base md:text-lg mb-8 max-w-lg font-medium" style={{ color: 'var(--text)', opacity: 0.85, lineHeight: 1.7 }}>
                  Gi oss bare beskjed om hva du trenger, så tar vi resten. En kort e-post er nok — vi ringer eller avtaler en samtale.
                </p>
                <div className="flex flex-wrap items-center gap-4">
                  <a
                    href={`mailto:${CONTACT_EMAIL}`}
                    className="inline-flex items-center gap-2 font-medium text-sm tracking-wider lowercase transition-colors hover:text-[var(--primary)]"
                    style={{ color: 'var(--primary)' }}
                  >
                    {CONTACT_EMAIL}
                    <ArrowUpRight size={16} strokeWidth={2} />
                  </a>
                  {onOpenForm && (
                    <button
                      onClick={onOpenForm}
                      className="text-sm font-medium transition-colors hover:text-[var(--primary)]"
                      style={{ color: 'var(--text)', opacity: 0.8 }}
                    >
                      eller send skjema →
                    </button>
                  )}
                </div>
              </div>
              <div className="hidden lg:flex items-center justify-center">
                <img
                  src="/undraw-add-files.svg"
                  alt=""
                  className="w-full max-w-sm xl:max-w-md"
                />
              </div>
            </div>
        </div>
      </div>
    </section>
  )
}
