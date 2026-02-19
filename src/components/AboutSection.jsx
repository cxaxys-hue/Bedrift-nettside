import { Palette, Code, Search } from 'lucide-react'

const services = [
  {
    title: 'Webdesign',
    desc: 'Skreddersydd design som reflekterer merkevaren din.',
    icon: Palette,
  },
  {
    title: 'Webutvikling',
    desc: 'Raske, sikre nettsider. Optimalisert for alle enheter.',
    icon: Code,
  },
  {
    title: 'SEO',
    desc: 'Slik at de rette kundene finner deg i Google.',
    icon: Search,
  },
]

export default function AboutSection() {
  return (
    <section id="om-oss" className="py-16 md:py-24 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        <div className="mb-12 md:mb-16">
          <p
            className="text-xs font-medium uppercase tracking-[0.2em] mb-3 flex items-center gap-3"
            style={{ color: 'var(--text)' }}
          >
            Om oss
            <span className="block w-12 h-px rounded-full" style={{ background: 'var(--text)' }} />
          </p>
          <h2
            className="font-medium tracking-tight mb-5"
            style={{ fontSize: 'clamp(1.85rem, 4vw, 2.75rem)', lineHeight: 1.12, color: 'var(--text)' }}
          >
            Vi gjør nettsider til din beste{' '}
            <span style={{ color: 'var(--secondary)' }}>salgskanal</span>.
          </h2>
          <p
            className="text-base max-w-2xl"
            style={{ color: 'var(--muted)', lineHeight: 1.75 }}
          >
            WebStarkupisz er et norsk webbyrå. Vi hjelper bedrifter som trenger en profesjonell
            nettside — raskt, enkelt og uten stress. Design, utvikling og lansering under ett tak.
          </p>
        </div>

        <div id="tjenester" className="scroll-mt-24">
          <h3
            className="text-xl md:text-2xl font-medium tracking-tight mb-8"
            style={{ color: 'var(--text)', lineHeight: 1.2 }}
          >
            Alt du trenger under ett tak.
          </h3>

          <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 mb-12 items-start">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 flex-1">
            {services.map((item, i) => {
              const Icon = item.icon
              const accentColor = i % 2 === 0 ? 'var(--primary)' : 'var(--secondary)'
              return (
                <div
                  key={item.title}
                  className="content-glass glare-box rounded-2xl p-6 md:p-8 flex flex-col relative overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5"
                >
                  <div className="glare-overlay" />
                  <div className="relative z-10">
                    <div
                      className="content-glass-icon w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                    style={{ color: accentColor }}
                  >
                    <Icon size={22} strokeWidth={1.5} />
                  </div>
                    <h4
                      className="text-xs font-semibold tracking-widest uppercase mb-3"
                      style={{ color: 'var(--text)', lineHeight: 1.3 }}
                    >
                      {item.title}
                    </h4>
                    <p className="text-sm flex-1" style={{ color: 'var(--muted)', lineHeight: 1.65 }}>
                      {item.desc}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
          <div className="hidden lg:flex items-end justify-center flex-shrink-0 w-48 xl:w-56">
            <img
              src="/undraw-programming.svg"
              alt=""
              className="w-full max-h-64 object-contain object-bottom"
            />
          </div>
          </div>

          <div
            className="content-glass rounded-2xl p-6 md:p-10 transition-all duration-300 hover:shadow-xl"
          >
            <p
              className="text-lg md:text-xl font-medium leading-relaxed text-center max-w-2xl mx-auto"
              style={{ color: 'var(--text)' }}
            >
              Vi tror på at en god nettside ikke bare ser bra ut — den skal jobbe for deg.
              Hvert prosjekt behandler vi som om det var vår egen bedrift.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
