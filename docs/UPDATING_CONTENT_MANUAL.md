# ✏️ Updating Your App's Content
### A guide for non-developers · No coding experience needed

---

## The one file that controls almost everything

Open this file: **`src/siteContent.js`**

It looks like a list of labeled boxes. You only ever need to change the text **between the quote marks** — never touch anything else (colons, commas, curly braces `{ }`, or the words before the colon).

> 💡 Rule of thumb: if it's inside `'single quotes'` or `"double quotes"`, you can safely edit it. If it's not in quotes, leave it alone.

---

## How to edit a file on GitHub (no software needed)

1. Go to your repository on GitHub
2. Click on `src` → `siteContent.js`
3. Click the pencil icon ✏️ (top right of the file view) to edit
4. Make your change
5. Scroll down, write a short message like "Update event date"
6. Click **"Commit changes"**
7. Wait 1–2 minutes — Netlify rebuilds the app automatically

---

## Common updates

### Changing the featured event

Find this block:

```javascript
export const featuredEvent = {
  title: 'Johnny Chang at Victory Outreach',
  date: 'June 5',
  time: '19:00',
  location: 'Filadelfiakyrkan',
  description: "Mark your calendars for Johnny Chang at Victory Outreach! ...",
  registerUrl: externalLinks.interestForm,
}
```

Replace the text in quotes for `title`, `date`, `time`, `location`, and `description` with your new event's details. Leave `registerUrl: externalLinks.interestForm,` exactly as it is — that's the line that links to your registration form, and the form link is defined in one place above this for you (see "Changing a link" below).

---

### Changing a service time

Find this block:

```javascript
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
    location: 'Karlavägen 9, Östermalm, Stockholm',
  },
]
```

Change the `time`, `day`, or `location` text in quotes. Use 24-hour format (e.g. `'19:00'` not `'7pm'`) to match how the rest of the app displays times.

---

### Changing a link (Giving, Interest Form, etc.)

Find this block near the top:

```javascript
export const externalLinks = {
  giving: 'https://pushpay.com/g/victoryoutreach?src=hpp',
  interestForm: 'https://victory-outreach-stockholm-519158.churchcenter.com/people/forms/1131604',
  ministryInfo: 'https://victoryoutreach.org',
  testimonyVideo: 'https://www.youtube.com/embed/djwmftJ-fag?rel=0',
  moreStories: 'https://watch.voiplus.tv/treasures',
}
```

Replace the URL in quotes with the new one. **Every page that uses that link updates automatically** — you only have to change it here, once, instead of hunting through every page.

> ⚠️ For the YouTube video specifically: the link must be the **embed** link, which looks like `https://www.youtube.com/embed/VIDEO_ID`, not the regular `youtube.com/watch?v=...` link. To get the embed link: open the YouTube video → Share → Embed → copy just the URL from inside the `src="..."` part of the code shown.

---

### Changing the email address or church address

Find this block:

```javascript
export const site = {
  churchName: 'Victory Outreach Stockholm',
  tagline: 'Hope Lives Here',
  email: 'info@vosto.org',
  address: 'Karlavägen 9, Östermalm, Stockholm',
  website: 'https://vosto.org',
  instagram: 'https://www.instagram.com/victoryoutreachstockholm/',
}
```

Update `email` or `address` as needed. The address is also used to build a "Get Directions" Google Maps link automatically, so keep it as a normal readable address (street, area, city).

---

### Changing the "I'm New" or welcome text

Find:

```javascript
export const imNew = {
  welcome: "Victory Outreach Stockholm is a place where people can meet Jesus...",
  whatToExpect: "At Victory Outreach Stockholm, our church service is centered around...",
}
```

Replace the text between the quotes. These can be as long as you like — just make sure to keep the quote marks at the very start and very end.

---

## Things NOT to touch

- Anything **before** a colon `:` (e.g. `title:`, `date:`, `email:`) — these are labels the app code looks for by exact name
- Curly braces `{` and `}` — these mark where each block starts and ends
- Commas `,` at the end of lines — removing one can break the whole file

If you're ever unsure whether something is safe to edit, a good test is: **is it inside quote marks?** If yes, safe. If no, leave it.

---

## If something breaks

If the app shows a blank white screen or an error after an edit:

1. Go back to that file on GitHub → click **"History"**
2. Click on the previous version (before your edit)
3. Click **"Browse files"** at that point in time → open `siteContent.js` → copy its content
4. Paste it back into the current file, replacing your edit
5. Commit again

This always gets you back to a known-working version.

---

## Need Help?

If you want to add a feature this file doesn't cover yet — like a real list of upcoming events instead of just one, or live data from Google Sheets — that's a code-level change, not a content edit. Reach out to whoever set this app up for you.
