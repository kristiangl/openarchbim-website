import { useEffect, useState, type FormEvent, type ReactNode } from 'react'

// Temporary pre-launch gate. It only keeps casual visitors out; the site
// content is still in the JS bundle. To remove it at launch, set GATE_ENABLED
// to false (or unwrap <Gate> in main.tsx).
const GATE_ENABLED = true
const PASSWORD_SHA256 =
  '88221827aad0538e2ca0d1a467bdf79fc145921809df13fb8521d29a422c7c07'
const STORAGE_KEY = 'openarch-gate'

async function sha256(text: string) {
  const bytes = new TextEncoder().encode(text)
  const digest = await crypto.subtle.digest('SHA-256', bytes)
  return Array.from(new Uint8Array(digest))
    .map((b) => b.toString(16).padStart(2, '0'))
    .join('')
}

function remembered() {
  try {
    return localStorage.getItem(STORAGE_KEY) === PASSWORD_SHA256
  } catch {
    return false
  }
}

export default function Gate({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(!GATE_ENABLED)
  const [value, setValue] = useState('')
  const [failed, setFailed] = useState(false)

  useEffect(() => {
    if (remembered()) setOpen(true)
  }, [])

  async function submit(event: FormEvent) {
    event.preventDefault()
    if ((await sha256(value)) === PASSWORD_SHA256) {
      try {
        localStorage.setItem(STORAGE_KEY, PASSWORD_SHA256)
      } catch {
        /* storage unavailable, gate just asks again next visit */
      }
      setOpen(true)
    } else {
      setFailed(true)
    }
  }

  if (open) return <>{children}</>

  return (
    <div className="gate">
      <form onSubmit={submit}>
        <img src="/brand/openarch-logo.svg" alt="OpenArch BIM" />
        <label htmlFor="gate-password">Password</label>
        <input
          id="gate-password"
          type="password"
          autoFocus
          value={value}
          onChange={(e) => {
            setValue(e.target.value)
            setFailed(false)
          }}
        />
        {failed && <p className="gate-error">Incorrect password.</p>}
        <button type="submit">Enter</button>
      </form>
    </div>
  )
}
