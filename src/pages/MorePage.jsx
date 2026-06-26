import { useNavigate } from 'react-router-dom'
import { site } from '../siteContent.js'
import { useScrollReveal } from '../lib/useScrollReveal.js'

const MORE_ITEMS = [
  { label: 'Giving', desc: 'Give online through Pushpay', icon: '💛', path: '/giving' },
  { label: "I'm New", desc: 'What to expect, and when we meet', icon: '🙋', path: '/im-new' },
  { label: 'Contact Us', desc: 'Email, address, and service times', icon: '✉️', path: '/contact' },
]

export default function MorePage() {
  const navigate = useNavigate()
  const revealRef = useScrollReveal([])

  return (
    <div className="more-page" ref={revealRef}>
      <div className="page-header">
        <p className="section-eyebrow">More</p>
        <h1 className="section-title">More from<br />VOSTO</h1>
        <div className="gold-divider" style={{ marginTop: '1rem' }} />
      </div>

      <div className="more-body">
        {MORE_ITEMS.map((item) => (
          <button key={item.path} className="more-card card pressable reveal" onClick={() => navigate(item.path)}>
            <span className="more-icon">{item.icon}</span>
            <div className="more-body-text">
              <h3 className="more-label">{item.label}</h3>
              <p className="more-desc">{item.desc}</p>
            </div>
            <span className="more-arrow">→</span>
          </button>
        ))}

        <a className="more-card card pressable reveal" href={site.instagram} target="_blank" rel="noreferrer">
          <span className="more-icon">📷</span>
          <div className="more-body-text">
            <h3 className="more-label">Follow Us</h3>
            <p className="more-desc">@victoryoutreachstockholm on Instagram</p>
          </div>
          <span className="more-arrow">↗</span>
        </a>

        <a className="more-card card pressable reveal" href={site.website} target="_blank" rel="noreferrer">
          <span className="more-icon">🌐</span>
          <div className="more-body-text">
            <h3 className="more-label">Visit Our Website</h3>
            <p className="more-desc">vosto.org</p>
          </div>
          <span className="more-arrow">↗</span>
        </a>
      </div>

      <style>{`
        .more-body { padding: var(--sp-6) var(--sp-5); display: flex; flex-direction: column; gap: var(--sp-4); }
        .more-card { display: flex; align-items: center; gap: var(--sp-4); padding: var(--sp-5); width: 100%; text-align: left; }
        .more-icon { font-size: 1.6rem; flex-shrink: 0; }
        .more-body-text { flex: 1; }
        .more-label { font-family: var(--font-display); font-size: var(--fs-lg); text-transform: uppercase; color: var(--clr-text); line-height: 1.2; }
        .more-desc { font-size: var(--fs-sm); color: var(--clr-text-muted); margin-top: 2px; }
        .more-arrow { font-size: 1.1rem; color: var(--clr-yellow); flex-shrink: 0; }
      `}</style>
    </div>
  )
}
