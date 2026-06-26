# 📘 VOSTO Website App – GitHub Manual
### For first-time GitHub users · Step-by-step

---

## What is GitHub and why do we use it?

GitHub is a website where you store your app's code. Think of it like Google Drive, but specifically for code. It:
- Keeps your code safe in the cloud
- Tracks every change you make
- Lets you publish your app to the web for free (via Netlify)

---

## 🔄 Starting Fresh? Read This First

If you've already created a repo and things feel tangled up — missing folders, duplicate workflow files, confusing errors — it's often genuinely faster to delete it and start clean rather than untangle it. Here's how to do both halves properly.

### Deleting the old repository

1. Go to your repo on GitHub
2. Click **"Settings"** (top right, next to "Insights")
3. Scroll all the way to the bottom — **"Danger Zone"**
4. Click **"Delete this repository"**
5. GitHub will ask you to type the repo's full name (e.g. `thedavidacostaa/vosto-web-app`) to confirm — type it exactly, then confirm
6. It's gone immediately. This cannot be undone, but since this is just code we can re-upload, there's nothing to lose.

### Why the upload went wrong last time

Dragging a whole project folder into GitHub's "Upload files" page at once is risky for two specific reasons:
- Folders starting with a dot, like `.github`, are sometimes treated as "hidden" by your computer's file picker and get silently left out of the drag
- It's easy to lose track of whether *every* nested folder (like `src/pages/` inside `src/`) actually made it in, since the upload page doesn't clearly confirm folder-by-folder

**The fix isn't a different tool — it's uploading in two passes instead of one,** with a checklist in between to catch problems immediately rather than after a failed deploy. Part 3 below walks through this.

---

## PART 1: Create your GitHub Account

1. Go to **[github.com](https://github.com)**
2. Click **"Sign up"** (top right)
3. Choose a username (e.g. `vostostockholm`), enter your email and a password
4. Verify your email address when GitHub sends you a confirmation email
5. Choose the **Free plan** — it's enough for everything we need

---

## PART 2: Create the Repository

A "repository" (or "repo") is the folder on GitHub that holds your app's code.

1. After logging in, click the **"+"** button in the top-right corner
2. Select **"New repository"**
3. Fill in:
   - **Repository name:** `vosto-web-app`
   - **Description:** `Victory Outreach Stockholm - official app, mirrors vosto.org`
   - **Visibility:** Select **Public** (required for free hosting) or **Private** if you prefer
   - ✅ Check **"Add a README file"**
4. Click **"Create repository"**

You now have your repository at: `https://github.com/YOUR_USERNAME/vosto-web-app`

---

## PART 2.5: Making the Repository Public (and what that actually means)

**Important distinction:** GitHub stores and shares your *code*. It does not run your app the way a phone or browser does. To turn the code into a working app people can open, you still need Part 4 below (Netlify). This section just covers the GitHub-side visibility setting people often mean by "public link."

### Checking or changing visibility

1. Go to your repository on GitHub
2. Click **"Settings"** (top right of the repo, next to "Insights")
3. Scroll all the way down to **"Danger Zone"**
4. You'll see either **"Change visibility"** or it'll already say whether the repo is Public or Private
5. If it says Private and you want it Public, click **"Change visibility"** → **"Make public"** → type the repo name to confirm → click **"I understand, change repository visibility"**

### What "public" actually does

- **Public repo:** anyone with the link can view your code, file history, and folder structure. They can copy it, but they **cannot edit your actual repo** unless you specifically add them as a collaborator.
- **Private repo:** only you (and anyone you invite) can see the code at all.

Either setting works fine with Netlify — **the live app itself is public either way**, regardless of whether the underlying code repo is public or private. Visibility only affects who can see the *source code* on GitHub, not who can use the *app* once it's deployed.

> 💡 If you're not sure which to choose: keep it **Public**. It's required for GitHub's free hosting tier in some cases, costs nothing, and the only real risk is someone seeing your code — there's no sensitive data (passwords, API keys) committed to this repo as long as you've followed the manuals as written.

### Getting the "dedicated link" to share your repo

Your repo's permanent link is always:
```
https://github.com/YOUR_USERNAME/vosto-web-app
```
Replace `YOUR_USERNAME` with your actual GitHub username. You can copy this straight from the address bar when viewing the repo, or click the green **"Code"** button on the repo page for a few sharing/cloning options.

This link is for **sharing the code** — it is *not* the link to the live app. For that, see Part 4.

---

## PART 3: Upload the App Files

Everything here happens in your browser — no extra software needed. We'll upload in **two passes** so the easy-to-miss `.github` folder gets its own dedicated step instead of getting lost in one giant drag-and-drop.

### Before you start: unzip the project

1. Find the `vosto-web-app.zip` file you received and double-click it to unzip it (on a Mac, this happens automatically and creates a `vosto-web-app` folder next to the zip)
2. Open that unzipped `vosto-web-app` folder in Finder — you should see `index.html`, `package.json`, `src`, `public`, `docs`, and `.github` inside it

   > 💡 If you don't see a `.github` folder in Finder, your Mac is hiding it because its name starts with a dot. Press **`Cmd + Shift + .`** (period) while Finder is open — this toggles hidden files on, and `.github` will appear.

### Pass 1 — Upload everything except `.github`

1. Go to your repository on GitHub
2. Click **"Add file"** → **"Upload files"**
3. In Finder, select **all the files and folders EXCEPT `.github`** — click `index.html`, then Cmd-click each of `package.json`, `vite.config.js`, `README.md`, `src`, `public`, and `docs` to add them to the selection (leave `.github` unselected for now)
4. Drag that selection into the GitHub upload page
5. Scroll down, write a message like `Upload main project files`, and click **"Commit changes"**
6. Go to your repo's main page and confirm `src`, `public`, and `docs` are now listed — click into `src` and confirm you see `App.jsx`, `main.jsx`, `siteContent.js`, and folders named `pages`, `components`, `lib`, `styles` inside it

### Pass 2 — Upload the `.github` folder separately

This is the folder that went missing before, so it gets its own careful pass:

1. Still on your repo's main page, click **"Add file"** → **"Upload files"** again
2. This time, in Finder, drag in **only the `.github` folder** (with hidden files visible, per the tip above)
3. Scroll down, write a message like `Add deployment workflow`, and click **"Commit changes"**
4. Go to your repo's main page — you should now see a `.github` folder listed alongside everything else
5. Click into `.github` → `workflows` and confirm you see exactly one file: `deploy.yml`

### ✅ Verification checklist — do this before moving to Part 4

Go to your repo's main page and confirm you see **all six** of these:

- [ ] `.github` (folder — click into it, then into `workflows`, and confirm `deploy.yml` is there and **nothing else**)
- [ ] `src` (folder, with `pages`, `components`, `lib`, `styles` inside it)
- [ ] `public` (folder)
- [ ] `docs` (folder)
- [ ] `index.html`
- [ ] `package.json`

If any are missing, repeat the relevant pass above before continuing. Catching a gap here takes 30 seconds; catching it after a failed deploy takes much longer.

---

## PART 4: Deploy the App (Make it Live)

### Using Netlify (free, recommended)

1. Go to **[netlify.com](https://netlify.com)** and create a free account
2. Click **"Add new site"** → **"Import an existing project"**
3. Choose **"GitHub"** and authorize Netlify to access your GitHub
4. Select your `vosto-web-app` repository
5. Configure build settings:
   - **Base directory:** (leave empty)
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
6. Click **"Deploy site"**

Netlify will give you a URL like `https://vosto-web-app.netlify.app` — this is your live app!

To get a custom URL (like `app.vosto.org`), contact your domain provider or Netlify's support.

---

## PART 4.5: "Running" the App Directly From GitHub (no Netlify)

If you'd rather not use Netlify at all and want everything to live on GitHub itself, GitHub has its own free hosting called **GitHub Pages**. It works, but it's a little more manual to set up than Netlify for an app like this one (built with Vite/React, which needs a "build step" before it's web-ready).

### Steps for GitHub Pages

1. In your repo, go to **Settings → Pages**
2. Under **"Build and deployment"**, set **Source** to **"GitHub Actions"**

   > ⚠️ **Important:** This screen sometimes *offers* to set up a starter workflow for you (things like "Static HTML" or "Jekyll"). **Do not pick one of these templates.** This project already includes the correct workflow file — adding GitHub's template on top creates a second, competing workflow (often named `static.yml`) that deploys your raw, un-built source code instead of the real app, which causes a blank screen even though everything looks "successful." If you ever see more than one file inside `.github/workflows/`, delete all except `deploy.yml`.
3. The workflow file that tells GitHub how to build and publish the app is already included at `.github/workflows/deploy.yml` — you don't need to create anything, just make sure that file (and its `.github` folder) got uploaded along with everything else in Part 3

   > ⚠️ **Common snag:** folders starting with a dot (like `.github`) are sometimes hidden by your computer's file picker. If you don't see a `.github` folder in your repo, it didn't get uploaded — go back to Part 3, Pass 2, and make sure hidden files are visible in Finder (`Cmd + Shift + .`) before dragging it in.
4. Once that workflow file is committed, go to your repo's **"Actions"** tab — you'll see it build and deploy automatically every time you push a change
5. Your app will be live at:
   ```
   https://YOUR_USERNAME.github.io/vosto-web-app/
   ```

### Netlify vs. GitHub Pages — which to use

| | Netlify (recommended) | GitHub Pages |
|---|---|---|
| Setup difficulty | Easier — a few clicks | Needs one extra config file |
| Auto-rebuilds on every commit | ✅ Yes, out of the box | ✅ Yes, once set up |
| Custom domain support | ✅ Easy | ✅ Possible, a bit more setup |
| Cost | Free | Free |
| Where your app "lives" | Netlify's servers, pulling code from GitHub | GitHub's own servers |

Both are genuinely free and reliable. **Netlify (Part 4) is the simpler path for a first-time setup** — that's why it's the main instructions in this manual. Only switch to GitHub Pages if you specifically want to avoid using a second company/service.

---

## PART 5: Updating the App in the Future

Most updates (event dates, links, service times) only require editing **`src/siteContent.js`** — see [UPDATING_CONTENT_MANUAL.md](UPDATING_CONTENT_MANUAL.md) for exact instructions on that file.

1. Go to your repo, find the file to edit
2. Click the pencil icon ✏️ to edit
3. Make your changes
4. Click **"Commit changes"** at the bottom
5. Netlify (or GitHub Pages, if that's what you're using) will automatically rebuild and publish within 1–2 minutes

---

## Troubleshooting

**"The app shows old information after I edited a file"**
→ Wait 1–2 minutes for Netlify to rebuild, then refresh. If using the installed app on your phone, you may need to close and reopen it.

**"My GitHub Pages link loads but shows a blank white or black screen"**
→ Open the page, right-click → "Inspect" → click the "Console" tab. If you see an error mentioning `src/main.jsx` failing to load with a 404, it means the raw, un-built source code is being served instead of the built app. This almost always means a second workflow (commonly named `static.yml`) exists alongside `deploy.yml` and is the one actually deploying. Go to `.github/workflows/` in your repo, delete anything that isn't `deploy.yml`, then go to Actions and manually re-run `deploy.yml`.

**"Dependencies lock file is not found" error during build**
→ This was an issue with an earlier version of the workflow file. The current `deploy.yml` caches dependencies in a way that works whether or not `package-lock.json` exists yet, so this error shouldn't appear anymore. If you still see it, you may be using an older copy of `deploy.yml` — re-upload the one included in this project to be sure.

**"I made a mistake and need to undo"**
→ In GitHub, go to the file → click "History" → find the old version → click "Revert"

---

## Need Help?

- GitHub docs: [docs.github.com](https://docs.github.com)
- GitHub Pages docs: [docs.github.com/pages](https://docs.github.com/en/pages)
- Netlify docs: [docs.netlify.com](https://docs.netlify.com)
- Or reach out to whoever set up this app for you!
