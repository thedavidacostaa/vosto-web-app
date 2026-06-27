import { Routes, Route, useLocation } from 'react-router-dom'
import BottomNav from './components/BottomNav.jsx'
import HomePage from './pages/HomePage.jsx'
import ServicesPage from './pages/ServicesPage.jsx'
import EventsPage from './pages/EventsPage.jsx'
import ConnectPage from './pages/ConnectPage.jsx'
import ContactPage from './pages/ContactPage.jsx'
import MorePage from './pages/MorePage.jsx'
import GivingPage from './pages/GivingPage.jsx'
import ImNewPage from './pages/ImNewPage.jsx'

export default function App() {
  const location = useLocation()

  return (
    <div className="app-shell">
      <main className="page-content">
        <div className="page-transition-enter" key={location.pathname}>
          <Routes location={location}>
            <Route path="/"          element={<HomePage />} />
            <Route path="/services"  element={<ServicesPage />} />
            <Route path="/events"    element={<EventsPage />} />
            <Route path="/connect"   element={<ConnectPage />} />
            <Route path="/contact"   element={<ContactPage />} />
            <Route path="/more"      element={<MorePage />} />
            <Route path="/giving"    element={<GivingPage />} />
            <Route path="/im-new"    element={<ImNewPage />} />
          </Routes>
        </div>
      </main>
      <BottomNav />
    </div>
  )
}
