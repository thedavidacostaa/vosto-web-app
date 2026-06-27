import { useNavigate } from 'react-router-dom'
import { externalLinks } from '../siteContent.js'
import { useScrollReveal } from '../lib/useScrollReveal.js'

export default function GivingPage() {
  const navigate = useNavigate()
  const revealRef = useScrollReveal([])

  return (
    <div className="giving-page" ref={revealRef}>
      <div className="page-header">
        <button className="back-btn" onClick={() => navigate('/more')}>← Back</button>
        <p className="section-eyebrow" style={{ marginTop: 'var(--sp-3)' }}>Generosity</p>
        <h1 className="section-title">Giving</h1>
        <div className="gold-divider" style={{ marginTop: '1rem' }} />
      </div>

      <div className="giving-body">
        <div className="giving-card reveal">
          <span className="giving-icon">💛</span>
          <h2 className="giving-title">Give Online</h2>
          <p className="giving-sub">
            Securely give online through Pushpay, our giving partner. You'll leave the app
            briefly to complete your gift.
          </p>
          <a className="btn-primary" href={externalLinks.giving} target="_blank" rel="noreferrer" style={{ marginTop: 'var(--sp-5)' }}>
            Give Now ↗
          </a>
        </div>

        <p className="giving-note reveal">
          "Each of you should give what you have decided in your heart to give, not
          reluctantly or under compulsion, for God loves a cheerful giver." — 2 Corinthians 9:7
        </p>
      </div>

      <style>{`
        .back-btn { font-size: var(--fs-sm); color: var(--clr-yellow); font-weight: 600; background: none; border: none; cursor: pointer; padding: 0; }
        .giving-body { padding: var(--sp-6) var(--sp-5); display: flex; flex-direction: column; gap: var(--sp-6); }
        .giving-card { background: var(--clr-card-white); color: var(--clr-on-white); border-radius: var(--r-lg); padding: var(--sp-8) var(--sp-6); text-align: center; }
        .giving-icon { font-size: 2.5rem; display: block; margin-bottom: var(--sp-3); }
        .giving-title { font-family: var(--font-display); font-size: var(--fs-2xl); text-transform: uppercase; color: var(--clr-on-white); }
        .giving-sub { font-size: var(--fs-md); color: var(--clr-on-white-muted); line-height: 1.65; margin-top: var(--sp-3); }
        .giving-note { font-size: var(--fs-sm); color: var(--clr-text-muted); font-style: italic; text-align: center; line-height: 1.65; padding: 0 var(--sp-2); }
      `}</style>
    </div>
  )
}
