import { useNavigate } from 'react-router-dom'
import { site, serviceTimes, homeWelcome, externalLinks, imNew } from '../siteContent.js'
import { useScrollReveal } from '../lib/useScrollReveal.js'

export default function HomePage() {
  const navigate = useNavigate()
  const revealRef = useScrollReveal([])

  const sunday = serviceTimes.find(s => s.day === 'Sunday')

  return (
    <div className="home-page" ref={revealRef}>

      {/* ── Hero ─────────────────────────────────────── */}
      <header className="home-hero">
        <div className="hero-bg" aria-hidden="true" />
        <div className="hero-content">
          <p className="hero-eyebrow">{site.churchName}</p>
          <h1 className="hero-title">Hope<br />Lives Here</h1>
          <p className="hero-sub">{site.tagline} · God Has a Plan</p>
        </div>
      </header>

      <div className="home-body">

        {/* ── I'm New CTA (mirrors site's top "I'm New" block) ── */}
        <section className="imnew-card reveal">
          <p className="section-eyebrow">I'm New</p>
          <h2 className="imnew-title">We'd love to hear from you.</h2>
          <p className="imnew-sub">Fill out the form below to get started.</p>
          <a className="btn-primary" href={externalLinks.interestForm} target="_blank" rel="noreferrer" style={{ marginTop: 'var(--sp-4)' }}>
            Interest Form ↗
          </a>
        </section>

        {/* ── Service times ─────────────────────────────── */}
        <section className="times-section reveal">
          <p className="section-eyebrow" style={{ marginBottom: 'var(--sp-3)' }}>Join Us</p>
          {sunday && (
            <div className="time-card card-white">
              <p className="time-day">{sunday.day}</p>
              <p className="time-clock">{sunday.time}</p>
              <p className="time-name">{sunday.name}</p>
            </div>
          )}
          <button className="see-all-times-link" onClick={() => navigate('/services')}>
            See all service & connect group times →
          </button>
        </section>

        {/* ── Watch This Powerful Story ──────────────────── */}
        <section className="story-section reveal">
          <p className="section-eyebrow" style={{ marginBottom: 'var(--sp-3)' }}>Watch This Powerful Story</p>
          <div className="video-wrap">
            <iframe
              src={externalLinks.testimonyVideo}
              title="Hope has a name"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          <p className="story-quote">
            Hope has a name. And transformation has a story.<br />
            This is Art Blajos, ex mafia hitman. Once lost, now found.<br />
            Once broken, now saved by the grace of God.<br />
            If God can change one life, He can change anyone.
          </p>
          <a className="btn-outline" href={externalLinks.moreStories} target="_blank" rel="noreferrer" style={{ width: '100%' }}>
            See More Stories ↗
          </a>
        </section>

        {/* ── Welcome ─────────────────────────────────────── */}
        <section className="welcome-section reveal">
          <p className="section-eyebrow" style={{ marginBottom: 'var(--sp-2)' }}>{homeWelcome.heading}</p>
          <p className="welcome-text">{homeWelcome.body}</p>
        </section>

        {/* ── Join us for service ───────────────────────── */}
        <section className="join-section reveal">
          <div className="join-card">
            <p className="section-eyebrow" style={{ marginBottom: 'var(--sp-2)' }}>{homeWelcome.joinHeading}</p>
            <p className="join-text">{homeWelcome.joinBody}</p>
          </div>
        </section>

        {/* ── Quick links ─────────────────────────────────── */}
        <section className="quick-actions reveal">
          <p className="section-eyebrow" style={{ marginBottom: 'var(--sp-4)' }}>Quick Links</p>
          <div className="qa-grid">
            <button className="qa-card pressable" onClick={() => navigate('/services')}>
              <span className="qa-icon">⛪</span>
              <span className="qa-label">Services</span>
            </button>
            <button className="qa-card pressable" onClick={() => navigate('/events')}>
              <span className="qa-icon">📅</span>
              <span className="qa-label">Events</span>
            </button>
            <button className="qa-card pressable" onClick={() => navigate('/giving')}>
              <span className="qa-icon">💛</span>
              <span className="qa-label">Giving</span>
            </button>
            <button className="qa-card qa-card--yellow pressable" onClick={() => window.open(site.instagram, '_blank')}>
              <span className="qa-icon">✨</span>
              <span className="qa-label">Follow Us</span>
            </button>
          </div>
        </section>

      </div>

      <style>{`
        .home-hero {
          position: relative;
          min-height: 220px;
          display: flex;
          align-items: flex-end;
          padding: 0 var(--sp-5) var(--sp-8);
          overflow: hidden;
        }
        .hero-bg {
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, #000000 0%, var(--clr-blue-dk) 65%, var(--clr-blue) 100%);
          z-index: 0;
          animation: heroBgShift 8s ease-in-out infinite alternate;
          background-size: 140% 140%;
        }
        @keyframes heroBgShift { from { background-position: 0% 0%; } to { background-position: 100% 100%; } }
        .hero-bg::after {
          content: '';
          position: absolute;
          inset: 0;
          background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60'%3E%3Ccircle cx='30' cy='30' r='28' fill='none' stroke='rgba(253,232,0,0.08)' stroke-width='2'/%3E%3C/svg%3E") repeat;
          background-size: 60px 60px;
        }
        .hero-content { position: relative; z-index: 1; animation: heroContentIn 0.7s var(--ease-out) both; }
        @keyframes heroContentIn { from { opacity: 0; transform: translateY(16px); } to { opacity: 1; transform: translateY(0); } }
        .hero-eyebrow { font-size: var(--fs-xs); font-weight: 700; letter-spacing: 0.14em; text-transform: uppercase; color: var(--clr-yellow); }
        .hero-title { font-family: var(--font-display); font-size: var(--fs-3xl); font-weight: 900; color: var(--clr-white); line-height: 1.05; margin: 0.35rem 0; text-transform: uppercase; }
        .hero-sub { font-size: var(--fs-sm); color: rgba(255,255,255,0.7); margin-top: 0.25rem; }

        .home-body { padding: var(--sp-6) var(--sp-5); display: flex; flex-direction: column; gap: var(--sp-8); }

        .imnew-card { background: var(--clr-card); border: 1px solid var(--clr-border-white); border-radius: var(--r-lg); padding: var(--sp-5); }
        .imnew-title { font-family: var(--font-display); font-size: var(--fs-xl); color: var(--clr-text); text-transform: uppercase; margin-top: var(--sp-2); line-height: 1.2; }
        .imnew-sub { font-size: var(--fs-sm); color: var(--clr-text-muted); margin-top: var(--sp-1); }

        .time-card { padding: var(--sp-5); text-align: center; }
        .time-day { font-size: var(--fs-xs); font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: var(--clr-blue-dk); }
        .time-clock { font-family: var(--font-display); font-size: var(--fs-2xl); color: var(--clr-on-white); margin: var(--sp-1) 0; }
        .time-name { font-size: var(--fs-sm); color: var(--clr-on-white-muted); }
        .see-all-times-link {
          display: block;
          width: 100%;
          text-align: center;
          margin-top: var(--sp-3);
          padding: var(--sp-3);
          font-size: var(--fs-sm);
          font-weight: 600;
          color: var(--clr-yellow);
        }

        .video-wrap { position: relative; width: 100%; aspect-ratio: 16/9; border-radius: var(--r-md); overflow: hidden; background: var(--clr-card); border: 1px solid var(--clr-border-white); }
        .video-wrap iframe { width: 100%; height: 100%; border: 0; }
        .story-quote { font-size: var(--fs-md); font-style: italic; color: var(--clr-text-muted); line-height: 1.7; margin: var(--sp-4) 0; }

        .welcome-text { font-size: var(--fs-lg); color: var(--clr-text); line-height: 1.6; }

        .join-card { background: linear-gradient(135deg, rgba(49,109,212,0.22), rgba(49,109,212,0.06)); border: 1px solid rgba(49,109,212,0.4); border-radius: var(--r-lg); padding: var(--sp-5); }
        .join-text { font-size: var(--fs-md); color: var(--clr-text-muted); line-height: 1.7; }

        .qa-grid { display: grid; grid-template-columns: 1fr 1fr; gap: var(--sp-4); }
        .qa-card {
          background: var(--clr-card);
          border: 1px solid var(--clr-border-white);
          border-radius: var(--r-md);
          padding: var(--sp-5) var(--sp-4);
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: var(--sp-2);
          text-align: left;
        }
        .qa-card--yellow { border-color: rgba(253,232,0,0.3); }
        .qa-icon { font-size: 1.5rem; }
        .qa-label { font-size: var(--fs-sm); font-weight: 700; color: var(--clr-text); }
      `}</style>
    </div>
  )
}
