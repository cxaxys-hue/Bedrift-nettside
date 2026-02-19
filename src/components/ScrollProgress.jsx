import { useState, useEffect } from 'react'

export default function ScrollProgress() {
  const [height, setHeight] = useState(0)

  useEffect(() => {
    let last = -1
    const update = () => {
      const scrolled = window.scrollY
      const max = document.documentElement.scrollHeight - window.innerHeight
      const v = max > 0 ? Math.round((scrolled / max) * 100) : 0
      if (v !== last) {
        last = v
        setHeight(v)
      }
    }
    window.addEventListener('scroll', update, { passive: true })
    update()
    return () => window.removeEventListener('scroll', update)
  }, [])

  return (
    <div
      className="fixed top-1/2 right-2 sm:right-4 -translate-y-1/2 z-[200] pointer-events-none"
      style={{ width: 4 }}
    >
      <div
        className="h-24 rounded-full relative overflow-hidden"
        style={{ background: 'rgba(0,0,0,0.06)', width: 4 }}
      >
        <div
          className="absolute top-0 left-0 right-0 rounded-full"
          style={{
            height: `${height}%`,
            minHeight: height > 0 ? 8 : 0,
            background: 'var(--primary)',
            width: 4,
          }}
        />
      </div>
    </div>
  )
}
