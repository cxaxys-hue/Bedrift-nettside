import LogoLoop from './LogoLoop'
import { SiReact, SiVite, SiTailwindcss, SiHtml5, SiCss3, SiJavascript, SiNodedotjs } from 'react-icons/si'

const techLogos = [
  { node: <SiReact size={32} style={{ color: '#61DAFB' }} />, title: 'React', href: 'https://react.dev' },
  { node: <SiVite size={32} style={{ color: '#646CFF' }} />, title: 'Vite', href: 'https://vitejs.dev' },
  { node: <SiTailwindcss size={32} style={{ color: '#06B6D4' }} />, title: 'Tailwind CSS', href: 'https://tailwindcss.com' },
  { node: <SiJavascript size={32} style={{ color: '#F7DF1E' }} />, title: 'JavaScript', href: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
  { node: <SiHtml5 size={32} style={{ color: '#E34F26' }} />, title: 'HTML5', href: 'https://developer.mozilla.org/en-US/docs/Web/HTML' },
  { node: <SiCss3 size={32} style={{ color: '#1572B6' }} />, title: 'CSS3', href: 'https://developer.mozilla.org/en-US/docs/Web/CSS' },
  { node: <SiNodedotjs size={32} style={{ color: '#339933' }} />, title: 'Node.js', href: 'https://nodejs.org' },
]

export default function Partners() {
  return (
    <section className="py-12 md:py-16 px-6">
      <div className="max-w-3xl mx-auto">
        <p className="text-xs uppercase tracking-widest mb-6 text-center" style={{ color: '#788bff' }}>
          Teknologier vi bruker
        </p>
        <div style={{ height: '56px', position: 'relative', overflow: 'hidden' }}>
          <LogoLoop
            logos={techLogos}
            speed={50}
            direction="left"
            logoHeight={36}
            gap={40}
            hoverSpeed={0}
            scaleOnHover
            ariaLabel="Teknologier"
          />
        </div>
      </div>
    </section>
  )
}
