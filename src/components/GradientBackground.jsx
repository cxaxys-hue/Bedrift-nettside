export default function GradientBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0 gradient-bg">
      <div className="absolute inset-0 gradient-bg-inner" />
    </div>
  )
}
