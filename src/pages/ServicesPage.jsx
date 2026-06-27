import { serviceTimes, site } from '../siteContent.js'
import { useScrollReveal } from '../lib/useScrollReveal.js'

export default function ServicesPage() {
  const revealRef = useScrollReveal([])

  return (
    <div className="services-page" ref={revealRef}>
      <div className="page-header">
        <p className="section-eyebrow">Join Us For Church</p>
        <h1 className="section-title">Services</h1>
        <div className="gold-divider" style={{ marginTop: '1rem' }} />
      </div>

      <div className="services-body">
        {serviceTimes.map((s, i) => (
          <div key={s.name} className={`service-card reveal${i === 0 ? ' service-card--feature' : ''}`}>
            <p className="service-day">{s.day}</p>
            <p className="service-clock">{s.time}</p>
            <h3 className="service-name">{s.name}</h3>
            <p className="service-location">📍 {s.location}</p>
          </div>
        ))}

        <div className="address-card reveal">
          <p className="section-eyebrow" style={{ marginBottom: 'var(--sp-2)' }}>Where to Find Us</p>
          <p className="address-text">{site.address}</p>
          <a
            className="btn-outline"
            href={`https://maps.google.com/?q=${encodeURIComponent(site.address)}`}
            target="_blank"
            rel="noreferrer"
            style={{ marginTop: 'var(--sp-4)', width: '100%' }}
          >
            Get Directions ↗
          </a>
        </div>
      </div>

      <style>{`
        .services-body { padding: var(--sp-6) var(--sp-5); display: flex; flex-direction: column; gap: var(--sp-5); }

        .service-card { background: var(--clr-card); border: 1px solid var(--clr-border-white); border-radius: var(--r-lg); padding: var(--sp-6); text-align: center; }
        .service-card--feature { background: var(--clr-card-white); color: var(--clr-on-white); }
        .service-day { font-size: var(--fs-xs); font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase; color: var(--clr-yellow); }
        .service-card--feature .service-day { color: var(--clr-blue-dk); }
        .service-clock { font-family: var(--font-display); font-size: var(--fs-3xl); margin: var(--sp-2) 0; color: var(--clr-text); }
        .service-card--feature .service-clock { color: var(--clr-on-white); }
        .service-name { font-family: var(--font-display); font-size: var(--fs-lg); text-transform: uppercase; color: var(--clr-text); margin-bottom: var(--sp-2); }
        .service-card--feature .service-name { color: var(--clr-on-white); }
        .service-location { font-size: var(--fs-sm); color: var(--clr-text-muted); }
        .service-card--feature .service-location { color: var(--clr-on-white-muted); }

        .address-card { background: var(--clr-card); border: 1px solid var(--clr-border-white); border-radius: var(--r-lg); padding: var(--sp-5); }
        .address-text { font-size: var(--fs-md); color: var(--clr-text); line-height: 1.6; }
      `}</style>
    </div>
  )
}
