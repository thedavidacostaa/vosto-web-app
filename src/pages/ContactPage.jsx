import { useNavigate } from 'react-router-dom'
import { site, serviceTimes } from '../siteContent.js'
import { useScrollReveal } from '../lib/useScrollReveal.js'

export default function ContactPage() {
  const navigate = useNavigate()
  const revealRef = useScrollReveal([])
  const sunday = serviceTimes.find(s => s.day === 'Sunday')

  return (
    <div className="contact-page" ref={revealRef}>
      <div className="page-header">
        <button className="back-btn" onClick={() => navigate('/connect')}>← Back</button>
        <p className="section-eyebrow" style={{ marginTop: 'var(--sp-3)' }}>Get in Touch</p>
        <h1 className="section-title">Contact Us</h1>
        <div className="gold-divider" style={{ marginTop: '1rem' }} />
      </div>

      <div className="contact-body">
        <a className="contact-card card pressable reveal" href={`mailto:${site.email}`}>
          <span className="contact-icon">✉️</span>
          <div>
            <p className="contact-label">Email</p>
            <p className="contact-value">{site.email}</p>
          </div>
        </a>

        {sunday && (
          <div className="contact-card card reveal">
            <span className="contact-icon">🕐</span>
            <div>
              <p className="contact-label">Service Times</p>
              <p className="contact-value">{sunday.day}s at {sunday.time}</p>
            </div>
          </div>
        )}

        <a
          className="contact-card card pressable reveal"
          href={`https://maps.google.com/?q=${encodeURIComponent(site.address)}`}
          target="_blank"
          rel="noreferrer"
        >
          <span className="contact-icon">📍</span>
          <div>
            <p className="contact-label">Address</p>
            <p className="contact-value">{site.address}</p>
          </div>
        </a>
      </div>

      <style>{`
        .back-btn { font-size: var(--fs-sm); color: var(--clr-yellow); font-weight: 600; background: none; border: none; cursor: pointer; padding: 0; }
        .contact-body { padding: var(--sp-6) var(--sp-5); display: flex; flex-direction: column; gap: var(--sp-4); }
        .contact-card { display: flex; align-items: center; gap: var(--sp-4); padding: var(--sp-5); width: 100%; text-align: left; }
        .contact-icon { font-size: 1.5rem; flex-shrink: 0; }
        .contact-label { font-size: var(--fs-xs); font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; color: var(--clr-yellow); margin-bottom: 2px; }
        .contact-value { font-size: var(--fs-md); color: var(--clr-text); }
      `}</style>
    </div>
  )
}
