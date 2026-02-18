export default function GradientBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 100% 80% at 0% 20%, rgba(84, 101, 255, 0.25) 0%, transparent 55%),
            radial-gradient(ellipse 90% 70% at 100% 80%, rgba(120, 139, 255, 0.2) 0%, transparent 55%),
            radial-gradient(ellipse 80% 60% at 50% 100%, rgba(191, 215, 255, 0.5) 0%, transparent 50%),
            #eef2ff
          `,
        }}
      />
    </div>
  )
}
