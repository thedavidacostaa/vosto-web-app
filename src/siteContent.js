// ─────────────────────────────────────────────────────────────
// VOSTO Site Content & Links
// ─────────────────────────────────────────────────────────────
// This file mirrors the structure of vosto.org. Every tab, link,
// and piece of text the app shows comes from here, so updating
// the app to match a change on the website means editing THIS
// file only — no need to touch any page component.
//
// See docs/UPDATING_CONTENT_MANUAL.md for a non-developer's guide
// to editing this file safely.
// ─────────────────────────────────────────────────────────────

export const site = {
  churchName: 'Victory Outreach Stockholm',
  tagline: 'Hope Lives Here',
  email: 'info@vosto.org', // update to match the real inbox behind the site's email-protected link
  address: 'Karlavägen 9, Östermalm, Stockholm',
  website: 'https://vosto.org',
  instagram: 'https://www.instagram.com/victoryoutreachstockholm/',
}

// External services the website links out to. The app does the
// same — these open in the phone's browser rather than being
// rebuilt inside the app, since they're hosted by other companies.
export const externalLinks = {
  giving: 'https://pushpay.com/g/victoryoutreach?src=hpp',
  interestForm: 'https://victory-outreach-stockholm-519158.churchcenter.com/people/forms/1131604',
  ministryInfo: 'https://victoryoutreach.org',
  testimonyVideo: 'https://www.youtube.com/embed/djwmftJ-fag?rel=0',
  moreStories: 'https://watch.voiplus.tv/treasures',
}

// Service times shown on the Home and Services tabs
export const serviceTimes = [
  {
    name: 'Sunday Celebration',
    day: 'Sunday',
    time: '11:00',
    location: 'Karlavägen 9, Östermalm, Stockholm',
  },
  {
    name: 'Connect Group',
    day: 'Tuesday',
    time: '19:00',
    location: 'Karlavägen 9, Östermalm, Stockholm', // update if Connect Group meets elsewhere
  },
]

// The site's current featured event (from the Event Signup tab).
// Update this whenever a new event is announced on vosto.org —
// or better yet, connect this to the Google Sheet version of the
// app's Events tab. See docs/UPDATING_CONTENT_MANUAL.md.
export const featuredEvent = {
  title: 'Johnny Chang at Victory Outreach',
  date: 'June 5',
  time: '19:00',
  location: 'Filadelfiakyrkan',
  description: "Mark your calendars for Johnny Chang at Victory Outreach! We'll meet at Filadelfiakyrkan. We hope you can join us!",
  registerUrl: externalLinks.interestForm,
}

// "I'm New" page content
export const imNew = {
  welcome: "Victory Outreach Stockholm is a place where people can meet Jesus, engage in life-giving community, and everyone is welcome. We believe in creating a space where people can have authentic encounters with Christ, discover their gifts and use them for God's glory. Join us for our Sunday services!",
  whatToExpect: "At Victory Outreach Stockholm, our church service is centered around worshiping God with a dynamic worship team that leads us in singing and praising His name. We understand that families come to church together, so we offer childcare during our service to ensure that everyone can fully participate in worship without any distractions. Our teachings are based on the Bible, and we strive to provide practical and relevant messages that can be applied to everyday life. Most importantly, we want people to feel loved and accepted in our community as we believe that the church should be a place where people can grow and support one another in their faith journey.",
}

// Home page welcome blurb
export const homeWelcome = {
  heading: 'Welcome',
  body: "Victory Outreach Stockholm is a place where you'll find: Hope - Love - Purpose - Community",
  joinHeading: 'JOIN US FOR SERVICE',
  joinBody: 'Welcome to Victory Outreach Stockholm! We are a community of believers who come together to worship, learn, and grow in our faith. We would like to invite you and your family to join us for our weekly services, where you will experience a warm and welcoming atmosphere.',
}

// "Connect" tab — the website has this as a dropdown with three
// destinations. The app shows it as a single page with three options.
export const connectOptions = [
  {
    label: 'Learn About Our Ministry',
    description: 'Discover the global Victory Outreach ministry and our story.',
    url: externalLinks.ministryInfo,
    external: true,
  },
  {
    label: 'Interest Form',
    description: 'Let us know you stopped by — takes less than a minute.',
    url: externalLinks.interestForm,
    external: true,
  },
  {
    label: 'Contact Us',
    description: 'Reach out directly by email.',
    internalPath: '/contact',
    external: false,
  },
]
