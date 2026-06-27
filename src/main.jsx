import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './styles/global.css'

// On GitHub Pages, the app lives at a sub-path
// (https://USERNAME.github.io/vosto-web-app/) instead of the domain root.
// Without telling React Router about that sub-path, every route
// (including "/") fails to match anything, and the app renders nothing.
// Vite injects the correct base path into import.meta.env.BASE_URL at
// build time (see vite.config.js's VITE_BASE_PATH), so we reuse it here
// rather than hardcoding it - this keeps Netlify (root-hosted, base "/")
// working unchanged.
const basename = import.meta.env.BASE_URL

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename={basename}>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)
