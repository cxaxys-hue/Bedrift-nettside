import { useState, useCallback } from 'react'
import { X, Send, Upload } from 'lucide-react'

const CONTACT_EMAIL = 'Marcel@WebstarKupisz.no'

export default function ContactModal({ open, onClose }) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [files, setFiles] = useState([])
  const [submitted, setSubmitted] = useState(false)
  const [dragOver, setDragOver] = useState(false)

  const handleSubmit = e => {
    e.preventDefault()
    if (name && email) setSubmitted(true)
  }

  const handleDrop = useCallback(e => {
    e.preventDefault()
    setDragOver(false)
    const items = [...e.dataTransfer.files].filter(f => f.size < 10 * 1024 * 1024)
    setFiles(prev => [...prev, ...items].slice(0, 5))
  }, [])

  const handleDragOver = useCallback(e => {
    e.preventDefault()
    setDragOver(true)
  }, [])

  const handleDragLeave = useCallback(() => setDragOver(false), [])

  const removeFile = i => setFiles(prev => prev.filter((_, idx) => idx !== i))

  const reset = () => {
    setSubmitted(false)
    setName('')
    setEmail('')
    setMessage('')
    setFiles([])
  }

  if (!open) return null

  return (
    <>
      <div
        className="fixed inset-0 z-[100] bg-black/40 backdrop-blur-sm cursor-pointer"
        onClick={onClose}
        aria-hidden
      />

      <div
        className="fixed inset-0 z-[101] flex items-center justify-center p-4 overflow-y-auto"
        onClick={onClose}
      >
        <div
          className="w-full max-w-md rounded-2xl overflow-hidden my-auto max-h-[90dvh] flex flex-col"
          style={{
            background: '#fff',
            border: '1px solid rgba(0,0,0,0.08)',
            boxShadow: '0 25px 60px rgba(0,0,0,0.15)',
          }}
          onClick={e => e.stopPropagation()}
        >
          <div
            className="flex items-center justify-between px-6 py-4 flex-shrink-0 bg-white"
            style={{ borderBottom: '1px solid rgba(0,0,0,0.08)' }}
          >
            <h2 className="font-medium" style={{ color: '#333' }}>Kontakt oss</h2>
            <button
              onClick={onClose}
              className="p-2 rounded-lg transition-colors hover:bg-black/5"
              style={{ color: '#555' }}
              aria-label="Lukk"
            >
              <X size={18} />
            </button>
          </div>

          <div className="px-6 py-6 overflow-y-auto flex-1 min-h-0">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div>
                  <label className="block text-xs font-medium mb-2" style={{ color: '#333' }}>Navn</label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={e => setName(e.target.value)}
                    placeholder="Ditt navn"
                    className="form-input"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium mb-2" style={{ color: '#333' }}>E-post</label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    placeholder="din@epost.no"
                    className="form-input"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium mb-2" style={{ color: '#333' }}>Melding</label>
                  <textarea
                    rows={3}
                    value={message}
                    onChange={e => setMessage(e.target.value)}
                    placeholder="Fortell oss om prosjektet ditt..."
                    className="form-input resize-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium mb-2" style={{ color: '#333' }}>Vedlegg (maks 5)</label>
                  <div
                    onDrop={handleDrop}
                    onDragOver={handleDragOver}
                    onDragLeave={handleDragLeave}
                    className={`border-2 border-dashed rounded-lg p-4 text-center transition-colors ${
                      dragOver ? 'border-[#5465ff]' : 'border-black/12'
                    }`}
                    style={dragOver ? { background: 'rgba(252, 118, 0, 0.06)' } : {}}
                  >
                    <Upload size={20} className="mx-auto mb-1 opacity-50" style={{ color: '#666' }} />
                    <p className="text-xs" style={{ color: '#666' }}>
                      Dra filer hit eller{' '}
                      <label className="cursor-pointer font-medium" style={{ color: '#5465ff' }}>
                        velg
                        <input
                          type="file"
                          multiple
                          className="hidden"
                          onChange={e => setFiles(prev => [...prev, ...e.target.files].slice(0, 5))}
                        />
                      </label>
                    </p>
                    {files.length > 0 && (
                      <ul className="mt-2 space-y-1 text-left text-xs">
                        {files.map((f, i) => (
                          <li key={i} className="flex items-center gap-2" style={{ color: '#333' }}>
                            <span className="truncate flex-1">{f.name}</span>
                            <button type="button" onClick={() => removeFile(i)} className="p-0.5 rounded hover:bg-black/5">
                              <X size={12} />
                            </button>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
                <button type="submit" className="btn-primary w-full py-3 text-sm mt-1">
                  Send melding
                  <Send size={16} strokeWidth={2.5} />
                </button>
              </form>
            ) : (
              <div className="py-8 text-center">
                <p className="font-medium mb-2" style={{ color: '#333' }}>
                  Takk for din henvendelse
                </p>
                <p className="text-sm mb-6" style={{ color: '#555' }}>
                  Vi tar kontakt innen 24 timer.
                </p>
                <button
                  onClick={() => { reset(); onClose() }}
                  className="btn-outline px-6 py-2 text-sm"
                >
                  Lukk
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  )
}
