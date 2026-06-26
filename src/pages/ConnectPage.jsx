import { useNavigate } from 'react-router-dom'
import { connectOptions } from '../siteContent.js'
import { useScrollReveal } from '../lib/useScrollReveal.js'
import ExternalLinkCard from '../components/ExternalLinkCard.jsx'

export default function ConnectPage() {
  const navigate = useNavigate()
  const revealRef = useScrollReveal([])

  return (
    <div className="connect-page" ref={revealRef}>
      <div className="page-header">
        <p className="section-eyebrow">Get Involved</p>
        <h1 className="section-title">Connect</h1>
        <div className="gold-divider" style={{ marginTop: '1rem' }} />
      </div>

      <div className="connect-body">
        {connectOptions.map((opt) =>
          opt.external ? (
            <div className="reveal" key={opt.label}>
              <ExternalLinkCard label={opt.label} description={opt.description} url={opt.url} />
            </div>
          ) : (
            <button
              key={opt.label}
              className="connect-internal-card card pressable reveal"
              onClick={() => navigate(opt.internalPath)}
            >
              <div className="connect-internal-body">
                <h3 className="connect-internal-label">{opt.label}</h3>
                {opt.description && <p className="connect-internal-desc">{opt.description}</p>}
              </div>
              <span className="connect-internal-icon">→</span>
            </button>
          )
        )}
      </div>

      <style>{`
        .connect-body { padding: var(--sp-6) var(--sp-5); display: flex; flex-direction: column; gap: var(--sp-4); }
        .connect-internal-card {
          display: flex;
          align-items: center;
          gap: var(--sp-3);
          padding: var(--sp-5);
          width: 100%;
          text-align: left;
        }
        .connect-internal-body { flex: 1; }
        .connect-internal-label { font-family: var(--font-display); font-size: var(--fs-lg); font-weight: 700; color: var(--clr-text); text-transform: uppercase; line-height: 1.2; }
        .connect-internal-desc { font-size: var(--fs-sm); color: var(--clr-text-muted); margin-top: var(--sp-1); line-height: 1.5; }
        .connect-internal-icon { font-size: 1.1rem; color: var(--clr-yellow); flex-shrink: 0; }
      `}</style>
    </div>
  )
}
