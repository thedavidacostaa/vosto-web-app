// A tappable card that opens an external link (Pushpay, Church Center, etc.)
// in the phone's browser. Used anywhere the website links out to another
// service rather than hosting the page itself.
export default function ExternalLinkCard({ label, description, url, icon = '↗' }) {
  return (
    <a className="ext-card card pressable" href={url} target="_blank" rel="noreferrer">
      <div className="ext-card-body">
        <h3 className="ext-card-label">{label}</h3>
        {description && <p className="ext-card-desc">{description}</p>}
      </div>
      <span className="ext-card-icon">{icon}</span>

      <style>{`
        .ext-card {
          display: flex;
          align-items: center;
          gap: var(--sp-3);
          padding: var(--sp-5);
          width: 100%;
          text-align: left;
        }
        .ext-card-body { flex: 1; }
        .ext-card-label { font-family: var(--font-display); font-size: var(--fs-lg); font-weight: 700; color: var(--clr-text); text-transform: uppercase; line-height: 1.2; }
        .ext-card-desc { font-size: var(--fs-sm); color: var(--clr-text-muted); margin-top: var(--sp-1); line-height: 1.5; }
        .ext-card-icon { font-size: 1.1rem; color: var(--clr-yellow); flex-shrink: 0; }
      `}</style>
    </a>
  )
}
