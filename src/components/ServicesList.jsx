const services = [
  { title: 'Webdesign', desc: 'Skreddersydd design som reflekterer merkevaren din.', color: '#5465ff' },
  { title: 'Webutvikling', desc: 'Raske, sikre nettsider. Optimalisert for alle enheter.', color: '#788bff' },
  { title: 'SEO', desc: 'Slik at de rette kundene finner deg i Google.', color: '#9bb1ff' },
]

const steps = [
  { num: '1', title: 'Konsultasjon', desc: 'Gratis samtale. Vi forstår mål og behov.', color: '#5465ff' },
  { num: '2', title: 'Design', desc: 'Skreddersydd design som du godkjenner.', color: '#788bff' },
  { num: '3', title: 'Utvikling', desc: 'Vi bygger. Du holdes informert.', color: '#9bb1ff' },
  { num: '4', title: 'Lansering', desc: 'Nettsiden lanseres. Support etterpå.', color: '#bfd7ff' },
]

const stats = [
  { value: '2–4 uker', label: 'Leveringstid', color: '#788bff' },
  { value: '100%', label: 'Skreddersydd', color: '#9bb1ff' },
  { value: '24/7', label: 'Support', color: '#5465ff' },
  { value: '1 dag', label: 'Oppstart', color: '#788bff' },
]

export default function ServicesList() {
  return (
    <section id="tjenester" className="py-16 md:py-20 px-6">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-medium tracking-tight mb-12" style={{ color: '#1a1a1a', lineHeight: 1.2 }}>
          Alt du trenger under ett tak.
        </h2>

        <div className="space-y-0">
          {services.map((item, i) => (
            <div
              key={item.title}
              className="group py-6 border-b border-black/6 last:border-0"
            >
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2">
                <h3
                  className="text-lg font-medium tracking-tight transition-colors group-hover:text-[#5465ff]"
                  style={{ color: '#1a1a1a' }}
                >
                  {item.title}
                </h3>
                <span className="text-xs font-mono tabular-nums" style={{ color: item.color }}>
                  {String(i + 1).padStart(2, '0')}
                </span>
              </div>
              <p className="mt-1 text-sm max-w-xl" style={{ color: '#555', lineHeight: 1.6 }}>
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        <h2 id="prosess" className="text-2xl md:text-3xl font-medium tracking-tight mt-16 mb-12" style={{ color: '#1a1a1a', lineHeight: 1.2 }}>
          Fra idé til lansering.
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {steps.map((item) => (
            <div key={item.num} className="relative pl-6">
              <div
                className="absolute left-0 top-0.5 w-1 h-1 rounded-full"
                style={{ background: item.color }}
              />
              <span className="text-xs font-mono" style={{ color: item.color }}>
                {item.num}
              </span>
              <h3 className="font-medium mt-0.5" style={{ color: '#1a1a1a' }}>
                {item.title}
              </h3>
              <p className="text-sm mt-1" style={{ color: '#555', lineHeight: 1.5 }}>
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-10 flex flex-wrap justify-between gap-6" style={{ borderTop: '1px solid rgba(0,0,0,0.08)' }}>
          {stats.map((item) => (
            <div key={item.label}>
              <span className="font-medium text-lg" style={{ color: item.color }}>
                {item.value}
              </span>
              <span className="text-sm ml-1.5" style={{ color: '#666' }}>
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
