export default function About() {
  return (
    <section id="om-oss" className="py-12 md:py-16 px-6">
      <div className="max-w-3xl mx-auto text-center md:text-left">
        <p className="text-xs uppercase tracking-widest mb-4" style={{ color: '#5465ff' }}>
          Om oss
        </p>
        <h2
          className="font-medium tracking-tight mb-4"
          style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)', lineHeight: 1.15, color: '#1a1a1a' }}
        >
          Vi gjør nettsider til din beste{' '}
          <span style={{ color: '#788bff' }}>salgskanal</span>.
        </h2>
        <p className="text-base" style={{ color: '#555', lineHeight: 1.7 }}>
          WebStarkupisz er et norsk webbyrå. Vi hjelper bedrifter som trenger en profesjonell
          nettside — raskt, enkelt og uten stress. Design, utvikling og lansering under ett tak.
        </p>
      </div>
    </section>
  )
}
