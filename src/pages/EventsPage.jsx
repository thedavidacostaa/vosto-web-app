import { featuredEvent } from '../siteContent.js'
import { useScrollReveal } from '../lib/useScrollReveal.js'

export default function EventsPage() {
  const revealRef = useScrollReveal([])

  return (
    <div className="events-page" ref={revealRef}>
      <div className="page-header">
        <p className="section-eyebrow">Event Registration</p>
        <h1 className="section-title">Upcoming<br />Events</h1>
        <div className="gold-divider" style={{ marginTop: '1rem' }} />
      </div>

      <div className="events-body">
        <div className="event-card reveal">
          <span className="tag">Featured</span>
          <h2 className="event-title">{featuredEvent.title}</h2>
          <p className="event-meta">📅 {featuredEvent.date}  ·  🕐 {featuredEvent.time}</p>
          <p className="event-meta">📍 {featuredEvent.location}</p>
          <p className="event-desc">{featuredEvent.description}</p>
          <a className="btn-primary" href={featuredEvent.registerUrl} target="_blank" rel="noreferrer" style={{ marginTop: 'var(--sp-4)' }}>
            Register Today! ↗
          </a>
        </div>

        <p className="events-note reveal">
          More events get added here as they're announced — check back, or follow us on
          Instagram for the latest.
        </p>
      </div>

      <style>{`
        .events-body { padding: var(--sp-6) var(--sp-5); display: flex; flex-direction: column; gap: var(--sp-5); }
        .event-card { background: var(--clr-card); border: 1px solid var(--clr-border-white); border-radius: var(--r-lg); padding: var(--sp-6); }
        .event-title { font-family: var(--font-display); font-size: var(--fs-xl); text-transform: uppercase; color: var(--clr-text); margin: var(--sp-3) 0 var(--sp-2); line-height: 1.2; }
        .event-meta { font-size: var(--fs-sm); color: var(--clr-text-muted); margin-bottom: var(--sp-1); }
        .event-desc { font-size: var(--fs-md); color: var(--clr-text-muted); line-height: 1.65; margin-top: var(--sp-3); }
        .events-note { font-size: var(--fs-sm); color: var(--clr-text-muted); text-align: center; line-height: 1.6; padding: 0 var(--sp-4); }
      `}</style>
    </div>
  )
}
