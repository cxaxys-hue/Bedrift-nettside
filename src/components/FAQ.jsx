import { useState, memo, useCallback } from 'react'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    q: 'Hvor raskt kan dere starte?',
    a: 'Vi kan som regel starte innen 1–2 uker, avhengig av kapasitet. Etter en uforpliktende samtale gir vi deg en tydelig tidsplan. Send oss en melding, så finner vi ut av det sammen.',
  },
  {
    q: 'Hva koster det å lage en nettside?',
    a: 'Hvert prosjekt er unikt, så prisen avhenger av omfang, kompleksitet og tidsramme. Vi gir alltid et fast pristilbud — ingen overraskelser. Kontakt oss for et uforpliktende tilbud.',
  },
  {
    q: 'Hva om jeg ikke liker designet?',
    a: 'Det er en naturlig del av prosessen. Vi jobber tett med deg gjennom hele designfasen, med jevnlige tilbakemeldingsrunder. Du godkjenner designet før vi starter utvikling.',
  },
  {
    q: 'Hva slags teknologi bruker dere?',
    a: 'Vi bruker moderne teknologi som React, Next.js og Tailwind CSS. Alt er optimalisert for hastighet, sikkerhet og SEO. Du får en nettside som er fremtidssikker.',
  },
  {
    q: 'Tilbyr dere support etter lansering?',
    a: 'Ja. Vi tilbyr vedlikehold og support etter lansering. Vi er tilgjengelige for endringer, oppdateringer og teknisk hjelp når du trenger det.',
  },
  {
    q: 'Kan dere hjelpe med innhold og tekst?',
    a: 'Absolutt. Vi hjelper deg med å strukturere innhold og kan gi veiledning rundt tekst som konverterer. Vi samarbeider gjerne med innholdsskapere om du ønsker det.',
  },
]

const FAQItem = memo(function FAQItem({ q, a, isOpen, index }) {
  return (
    <div
      className="border-b transition-colors faq-item"
      style={{ borderColor: 'rgba(0, 0, 0, 0.08)' }}
    >
      <button
        type="button"
        data-faq-index={index}
        className="w-full flex items-center justify-between py-5 text-left group"
      >
        <span
          className="font-medium text-base pr-8 transition-colors group-hover:text-[var(--primary)]"
          style={{ color: isOpen ? 'var(--primary)' : 'var(--text)' }}
        >
          {q}
        </span>
        <ChevronDown
          size={20}
          className={`faq-chevron flex-shrink-0 transition-colors ${isOpen ? 'open' : ''}`}
          style={{ color: isOpen ? 'var(--primary)' : 'var(--muted)' }}
        />
      </button>
      <div className={`faq-answer ${isOpen ? 'open' : ''}`}>
        <div>
          <p className="pb-5 text-sm" style={{ color: 'var(--muted)', lineHeight: 1.7 }}>
            {a}
          </p>
        </div>
      </div>
    </div>
  )
})

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)
  const handleToggle = useCallback((e) => {
    const btn = e.target.closest('button[data-faq-index]')
    if (btn) {
      const i = +btn.dataset.faqIndex
      setOpenIndex(prev => prev === i ? -1 : i)
    }
  }, [])

  return (
    <section id="faq" className="py-12 md:py-16 px-4 sm:px-6">
      <div className="max-w-3xl mx-auto">
        <div className="mb-8 text-center md:text-left">
          <span className="text-xs font-medium tracking-widest uppercase mb-4 block" style={{ color: 'var(--primary)' }}>
            Spørsmål & Svar
          </span>
          <h2
            className="font-medium tracking-tight mb-4"
            style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: 'var(--text)', lineHeight: 1.1 }}
          >
            Ofte stilte spørsmål
          </h2>
          <p className="text-base max-w-xl mx-auto md:mx-0" style={{ color: 'var(--muted)', lineHeight: 1.6 }}>
            Finn raske svar på de vanligste spørsmålene.
          </p>
        </div>

        <div>
          <div className="pro-card rounded-2xl overflow-hidden" style={{ padding: '0 1.5rem' }} onClick={handleToggle}>
            {faqs.map((item, i) => (
              <FAQItem
                key={i}
                q={item.q}
                a={item.a}
                index={i}
                isOpen={openIndex === i}
              />
            ))}
          </div>
        </div>
      </div>

    </section>
  )
}
