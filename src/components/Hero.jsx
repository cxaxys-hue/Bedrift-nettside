import { ArrowRight } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-28 pb-20 md:pt-36 md:pb-28 text-center md:text-left w-full">
        <h1
          className="font-medium tracking-tight mb-8"
          style={{
            fontSize: 'clamp(2.75rem, 9vw, 6.5rem)',
            lineHeight: 1.12,
            color: 'var(--text)',
            letterSpacing: '-0.035em',
          }}
        >
          Vi bygger nettsider
          <br />
          <span style={{ color: 'var(--secondary)' }}>som leverer</span>
        </h1>

        <p
          className="text-lg max-w-md mb-10 mx-auto md:mx-0"
          style={{ color: 'var(--muted)', lineHeight: 1.6 }}
        >
          Skreddersydd design. Rask levering. 2–4 uker fra idé til lansering.
        </p>

        <div className="flex flex-wrap items-center justify-center md:justify-start gap-3">
          <a href="#kontakt" className="btn-primary">
            Start prosjektet
            <ArrowRight size={14} strokeWidth={2.5} />
          </a>
          <a href="#tjenester" className="text-sm font-medium transition-colors hover:text-[var(--secondary)]" style={{ color: 'var(--muted)' }}>
            Se tjenester
          </a>
        </div>

        <div className="mt-20 flex items-center justify-center md:justify-start gap-6 text-xs uppercase tracking-widest" style={{ color: 'var(--muted)' }}>
          <span>Webbyrå</span>
          <span className="w-px h-3 bg-current opacity-40" />
          <span>Norge</span>
        </div>
      </div>
    </section>
  )
}
