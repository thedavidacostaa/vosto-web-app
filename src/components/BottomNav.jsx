import { useLocation, useNavigate } from 'react-router-dom'

const NAV = [
  {
    path: '/',
    label: 'Home',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path d="M3 12L12 3l9 9" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M9 21V12h6v9" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M3 12v9h18V12" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    )
  },
  {
    path: '/services',
    label: 'Services',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path d="M12 2L2 7l10 5 10-5-10-5z" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M2 17l10 5 10-5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M2 12l10 5 10-5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    )
  },
  {
    path: '/events',
    label: 'Events',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <rect x="3" y="4" width="18" height="18" rx="2" strokeLinecap="round" strokeLinejoin="round"/>
        <line x1="16" y1="2" x2="16" y2="6" strokeLinecap="round"/>
        <line x1="8" y1="2" x2="8" y2="6" strokeLinecap="round"/>
        <line x1="3" y1="10" x2="21" y2="10" strokeLinecap="round"/>
      </svg>
    )
  },
  {
    path: '/connect',
    label: 'Connect',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <circle cx="12" cy="12" r="9" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M8 12h8M12 8v8" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    )
  },
  {
    path: '/more',
    label: 'More',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <circle cx="5" cy="12" r="1.5" fill="currentColor"/>
        <circle cx="12" cy="12" r="1.5" fill="currentColor"/>
        <circle cx="19" cy="12" r="1.5" fill="currentColor"/>
      </svg>
    )
  }
]

export default function BottomNav() {
  const location = useLocation()
  const navigate = useNavigate()

  // Treat /more, /giving, /im-new, /contact as all activating the "More" tab,
  // since those pages live behind the More tab.
  const moreGroup = ['/more', '/giving', '/im-new', '/contact']
  const isActive = (path) => {
    if (path === '/more') return moreGroup.includes(location.pathname)
    return location.pathname === path
  }

  return (
    <nav className="bottom-nav" role="navigation" aria-label="Main navigation">
      {NAV.map(item => (
        <button
          key={item.path}
          className={`nav-item${isActive(item.path) ? ' active' : ''}`}
          onClick={() => navigate(item.path)}
          aria-label={item.label}
          aria-current={isActive(item.path) ? 'page' : undefined}
        >
          {item.icon}
          {item.label}
        </button>
      ))}
    </nav>
  )
}
