# 🌐 VOSTO App — Website Mirror Edition
### How this app maps to vosto.org · Step-by-step manual

---

## What this app is

This version of the app is built to match **vosto.org** tab-for-tab. Instead of a custom devotional/sermon-notes app, it's a clean, fast, installable front door to everything already on your website — including the external tools you already use (Pushpay for giving, Church Center for forms).

| vosto.org tab | App tab | What happens |
|---|---|---|
| Home | Home | Hero, I'm New CTA, service times, testimony video, welcome text |
| Services | Services | Sunday Celebration + Connect Group times, address with map link |
| Connect → Learn About Our Ministry | Connect | Opens **victoryoutreach.org** in the browser |
| Connect → Interest Form | Connect | Opens the **Church Center** form in the browser |
| Connect → Contact | Connect → Contact | In-app page: email, service times, address |
| Giving | More → Giving | Opens **Pushpay** in the browser |
| I'm New | More → I'm New | In-app page matching the site's welcome + what-to-expect text |
| Event Signup | Events | Featured event + opens Church Center to register |

Six website tabs become **five app tabs** (Home, Services, Events, Connect, More) since a six-item bottom bar is cramped on a phone. Giving, I'm New, and Contact live one tap deeper, inside **More**.

---

## Why some buttons "leave the app"

Three things on vosto.org are powered by other companies, not by the website itself:
- **Giving** → Pushpay (a payment processor — handling money requires bank-level security the app shouldn't try to rebuild)
- **Interest Form** → Church Center (Planning Center's tool — it's where your team likely already reviews submissions)
- **Learn About Our Ministry** → victoryoutreach.org (a separate website you don't control)

The app opens these in the phone's browser instead of copying them, so you keep using the same Pushpay dashboard and Church Center inbox you already have — nothing changes on the backend.

---

## File structure

```
vosto-web-app/
├── src/
│   ├── siteContent.js         ← ⭐ THE FILE YOU'LL EDIT MOST. All text, links, and times.
│   ├── App.jsx                ← Routes
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
│   └── styles/
│       └── global.css         ← Colors, fonts, spacing
├── docs/
│   ├── GITHUB_MANUAL.md
│   └── UPDATING_CONTENT_MANUAL.md
└── index.html
```

**The most important file is `src/siteContent.js`.** Every link, service time, and block of text the app shows is defined there in one place. You should almost never need to touch a `.jsx` page file — just edit `siteContent.js` and the right page updates automatically.

---

## Keeping the app in sync with vosto.org

Whenever vosto.org changes — a new event, a new service time, a changed link — open `src/siteContent.js` and update the matching value. See **[UPDATING_CONTENT_MANUAL.md](UPDATING_CONTENT_MANUAL.md)** for exact, no-code instructions.

---

## Setting up GitHub & going live

See **[GITHUB_MANUAL.md](GITHUB_MANUAL.md)** for the full first-time walkthrough: creating your GitHub account, uploading these files, and deploying to Netlify so the app has a real URL people can install.

---

## What this app does NOT include (yet)

This version intentionally does not have:
- A custom Google Sheets backend (the previous app version had this — ask if you'd like it added back for things like sermon notes)
- Push notifications
- A photo gallery

If you'd like any of those folded into this website-mirror version, just ask — they can be added on top of this same structure.
