import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

// Netlify serves the app from the root ("/"), so the default base path
// works fine there with no changes needed.
//
// GitHub Pages serves the app from a sub-path instead
// (https://USERNAME.github.io/vosto-web-app/), so when deploying that
// way, the GitHub Actions workflow sets VITE_BASE_PATH to match. See
// docs/GITHUB_MANUAL.md, Part 4.5, for details — most people using
// Netlify (the recommended path) can ignore this entirely.
const basePath = process.env.VITE_BASE_PATH || '/'

export default defineConfig({
  base: basePath,
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['icons/*.png', 'icons/*.svg'],
      manifest: {
        name: 'VOSTO - Victory Outreach Stockholm',
        short_name: 'VOSTO',
        description: 'The official Victory Outreach Stockholm app - services, events, giving, and how to connect.',
        theme_color: '#000000',
        background_color: '#000000',
        display: 'standalone',
        orientation: 'portrait',
        start_url: basePath,
        scope: basePath,
        icons: [
          { src: `${basePath}icons/icon-192.png`, sizes: '192x192', type: 'image/png' },
          { src: `${basePath}icons/icon-512.png`, sizes: '512x512', type: 'image/png' },
          { src: `${basePath}icons/icon-512.png`, sizes: '512x512', type: 'image/png', purpose: 'any maskable' }
        ]
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg,woff2}']
      }
    })
  ]
})
