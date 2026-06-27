import { useNavigate } from 'react-router-dom'
import { imNew, externalLinks, serviceTimes } from '../siteContent.js'
import { useScrollReveal } from '../lib/useScrollReveal.js'

export default function ImNewPage() {
  const navigate = useNavigate()
  const revealRef = useScrollReveal([])
  const sunday = serviceTimes.find(s => s.day === 'Sunday')

  return (
    <div className="imnew-page" ref={revealRef}>
      <div className="page-header">
        <button className="back-btn" onClick={() => navigate('/more')}>← Back</button>
        <p className="section-eyebrow" style={{ marginTop: 'var(--sp-3)' }}>Welcome</p>
        <h1 className="section-title">I'm New</h1>
        <div className="gold-divider" style={{ marginTop: '1rem' }} />
      </div>

      <div className="imnew-body">
        <section className="reveal">
          <h2 className="imnew-h2">Welcome</h2>
          <p className="imnew-p">{imNew.welcome}</p>
        </section>

        {sunday && (
          <section className="when-card reveal">
            <p className="section-eyebrow" style={{ marginBottom: 'var(--sp-2)' }}>When We Meet</p>
            <p className="when-clock">{sunday.time}</p>
            <p className="when-day">{sunday.day}s</p>
          </section>
        )}

        <section className="reveal">
          <h2 className="imnew-h2">What To Expect</h2>
          <p className="imnew-p">{imNew.whatToExpect}</p>
        </section>

        <a className="btn-primary reveal" href={externalLinks.interestForm} target="_blank" rel="noreferrer">
          Fill Out the Interest Form ↗
        </a>
      </div>

      <style>{`
        .back-btn { font-size: var(--fs-sm); color: var(--clr-yellow); font-weight: 600; background: none; border: none; cursor: pointer; padding: 0; }
        .imnew-body { padding: var(--sp-6) var(--sp-5); display: flex; flex-direction: column; gap: var(--sp-6); }
        .imnew-h2 { font-family: var(--font-display); font-size: var(--fs-xl); text-transform: uppercase; color: var(--clr-text); margin-bottom: var(--sp-3); }
        .imnew-p { font-size: var(--fs-md); color: var(--clr-text-muted); line-height: 1.75; }
        .when-card { background: var(--clr-card); border: 1px solid var(--clr-border-white); border-radius: var(--r-lg); padding: var(--sp-5); text-align: center; }
        .when-clock { font-family: var(--font-display); font-size: var(--fs-3xl); color: var(--clr-yellow); margin: var(--sp-1) 0; }
        .when-day { font-size: var(--fs-sm); color: var(--clr-text-muted); }
      `}</style>
    </div>
  )
}
