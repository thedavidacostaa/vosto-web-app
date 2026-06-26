# VOSTO – Victory Outreach Stockholm (Website Mirror Edition)

A Progressive Web App (PWA) that mirrors the structure of **[vosto.org](https://vosto.org)** — installable on any phone, no app store required.

This version is built to match the website's existing tabs and links exactly, rather than introduce new custom features. It's a fast, native-feeling front door to everything already on vosto.org, including the external tools the church already uses (Pushpay, Church Center).

## How the app maps to the website

| vosto.org | App |
|---|---|
| Home | Home tab |
| Services | Services tab |
| Connect (dropdown) | Connect tab → Learn About Ministry, Interest Form, Contact |
| Giving | More tab → Giving |
| I'm New | More tab → I'm New |
| Event Signup | Events tab |

See [`docs/WEBSITE_MIRROR_MANUAL.md`](docs/WEBSITE_MIRROR_MANUAL.md) for the full breakdown.

## Tech Stack

- **React** + **Vite** (front-end)
- **Netlify** (hosting)
- No backend required — all content lives in one config file

## Getting Started

### 1. Set up GitHub + deploy
See [`docs/GITHUB_MANUAL.md`](docs/GITHUB_MANUAL.md) — covers creating your GitHub account, uploading the code, making the repo public, and going live via either **Netlify** (recommended, easiest) or **GitHub Pages** (everything stays on GitHub, no second service).

### 2. Update content as the website changes
See [`docs/UPDATING_CONTENT_MANUAL.md`](docs/UPDATING_CONTENT_MANUAL.md) — almost everything is editable from one file: `src/siteContent.js`

### 3. Run locally (for developers)
```bash
npm install
npm run dev
```

## The Most Important File

**`src/siteContent.js`** — every link, service time, event detail, and block of text shown in the app lives here. Update vosto.org, then mirror the change here, and every page that uses that piece of content updates automatically.

## Customizing Colors

Brand colors are in `src/styles/global.css`:

```css
--clr-blue:   #316DD4;
--clr-yellow: #FDE800;
```

## Project Structure

```
vosto-web-app/
├── .github/
│   └── workflows/
│       └── deploy.yml        ← Builds + publishes to GitHub Pages automatically (optional path, see GITHUB_MANUAL.md)
├── src/
│   ├── siteContent.js       ← ⭐ All links, times, and text — edit this most
│   ├── App.jsx              ← Routes + page transitions
│   ├── components/
│   │   ├── BottomNav.jsx
│   │   └── ExternalLinkCard.jsx
│   ├── pages/
│   │   ├── HomePage.jsx
│   │   ├── ServicesPage.jsx
│   │   ├── EventsPage.jsx
│   │   ├── ConnectPage.jsx
│   │   ├── ContactPage.jsx
│   │   ├── MorePage.jsx
│   │   ├── GivingPage.jsx
│   │   └── ImNewPage.jsx
│   ├── lib/
│   │   └── useScrollReveal.js
│   └── styles/
│       └── global.css
├── public/
│   └── icons/                ← Drop your app icon files here (see icons/README.md)
├── docs/
│   ├── GITHUB_MANUAL.md
│   ├── UPDATING_CONTENT_MANUAL.md
│   └── WEBSITE_MIRROR_MANUAL.md
└── index.html
```

---

*Built with ❤️ for Victory Outreach Stockholm*
