# Theo Moritz — Professional Portfolio (React + Vite + Tailwind)

## Context
The assignment calls for a professional portfolio with five required parts: a Home page, a Projects showcase (3 or more), Skills with proficiency levels, Contact details, and a responsive layout. It also expects professional polish. The repo is empty apart from a blank `CLAUDE.md`. Decisions from the user:
- **Stack:** React + Vite + Tailwind CSS, multi-page with React Router
- **Hosting:** Google Cloud, deployed from this git repo. Plan: Cloud Run with continuous deployment from the repo, built from a Dockerfile.
- **Identity:** Theo Moritz, MSBAIM student at Purdue University
- **Contact:** moritz5@purdue.edu · github.com/tmoritz2005 · linkedin.com/in/theomoritz
- **Projects:** this portfolio (real) plus 2 placeholder slots for the user to fill in
- **Skills:** sample analytics-oriented placeholders (user will supply the real list)

All personal content lives in **one data file**, so the user can edit it without touching components. Every placeholder is marked `TODO(theo)` so none slips into the submission.

## Design
- Dark, modern look: slate-950 background, one accent color (Purdue-inspired gold `#CFB991`, with a deeper gold for hover), and Inter from Google Fonts.
- A sticky header on every page, with a hamburger menu on mobile. Mobile-first Tailwind breakpoints (`sm`/`md`/`lg`).
- The Home hero has a gradient/grid background, name, headline, a value proposition, CTA buttons (View Projects, Contact), and quick-nav cards for the other pages.

## File structure
```
index.html                  # title, meta description, favicon, Inter font
vite.config.js              # react + @tailwindcss/vite plugins
package.json                # react, react-dom, react-router-dom, tailwindcss v4, eslint
src/
  main.jsx                  # BrowserRouter
  App.jsx                   # Routes + Layout
  index.css                 # @import "tailwindcss"; @theme tokens (colors, font)
  data/profile.js           # name, headline, intro, contact, projects[], skills[]  ← user edits this
  components/
    Layout.jsx              # Navbar + <Outlet/> + Footer, scroll-to-top on route change
    Navbar.jsx              # NavLink active states, mobile menu toggle
    Footer.jsx              # contact icons + ©
    ProjectCard.jsx         # image, title, description, tech badges, GitHub/demo buttons
    SkillBar.jsx            # accessible progress bar (role="progressbar", aria-valuenow) + level label
    Section.jsx / Icons.jsx # shared heading wrapper; inline SVG icons (GitHub, LinkedIn, Mail)
  pages/
    Home.jsx                # hero + value proposition + quick links + featured projects
    Projects.jsx            # responsive grid: 1 col → 2 (md) → 3 (lg)
    Skills.jsx              # grouped categories (Analytics & Data, Programming, Tools, Learning)
    Contact.jsx             # email (mailto), LinkedIn, GitHub cards + short availability note
    NotFound.jsx            # 404 with link home
public/
  favicon.svg
  images/                   # portfolio screenshot + placeholder project cover SVGs
Dockerfile                  # node:20-alpine build → nginx:alpine serving dist on port 8080
nginx.conf                  # listen 8080; try_files $uri /index.html (SPA deep links); cache assets
.dockerignore, .gitignore
README.md                   # run locally, edit profile.js, Google Cloud deploy steps
PROMPTS.md                  # time-stamped prompt log (per CLAUDE.md)
plans/1st_portfolio.md      # copy of this approved plan
                            # CLAUDE.md is the user's rules file — left untouched
```

## Content (src/data/profile.js)
- **Hero:** "Theo Moritz", "MSBAIM Student · Purdue University", and a drafted value proposition about turning data into business decisions with analytics, information systems and code. Marked TODO so the user can refine it.
- **Projects:**
  1. *Personal Portfolio Website*: React, Vite, Tailwind CSS, React Router, Docker, Google Cloud Run. GitHub link `github.com/tmoritz2005/portfolio` (TODO: confirm the repo name/visibility). A real screenshot is captured after the build.
  2. & 3. Placeholder analytics-style projects (for example, a dashboard and a predictive model). They get generic SVG cover art, `TODO(theo)` text, and no links until real ones are supplied, so no links are broken.
- **Skills (placeholders):** Python, SQL, R, Excel, Tableau / Power BI, pandas / scikit-learn, JavaScript / React, Git. Each has a percentage and a descriptive level (Advanced / Intermediate / Learning).
- **Contact:** the three links above. External links use `target="_blank" rel="noopener noreferrer"`.

## Google Cloud deployment (documented in README)
1. The user commits the `portfolio_build` branch, merges it to `main` and pushes it to GitHub (I don't do any of this).
2. Cloud Console → Cloud Run → **Deploy container → Continuously deploy from a repository** → connect the GitHub repo, branch `main`, build type **Dockerfile**.
3. Allow unauthenticated invocations. Container port 8080.
4. Each push to `main` then rebuilds and redeploys through Cloud Build.

## Project rules (from CLAUDE.md), applied before any code
0a. Create `PROMPTS.md` at the repo root and log every prompt from this session with a timestamp (the original requirements request, the "save the plan in plans / follow CLAUDE.md" instruction, "check if claude md is empty now?"). From then on, log each new prompt before acting on it.
0b. Save this approved plan as `plans/1st_portfolio.md`.
0c. `git checkout -b portfolio_build`, so no work happens on `main`. Never commit, push, merge or open PRs; the user does those.
0d. Use underscores in every name I choose (files, folders, branch).
0e. No secrets anywhere. None are needed: the contact details are public links and there's no form/API.
0f. Stack: React + Vite (Option A). Deployed as a container built by Cloud Build at deploy time (multi-stage Dockerfile), never as a plain static HTML page.

## Implementation steps
1. Scaffold the Vite React app in place, then add tailwindcss, @tailwindcss/vite and react-router-dom.
2. Theme tokens, Layout, Navbar and Footer.
3. `profile.js`, then the pages and components.
4. Cover SVGs and favicon. Build, then capture the portfolio screenshot.
5. Dockerfile, nginx.conf, README, CLAUDE.md.

## Verification
- `npm run lint` and `npm run build` complete with no errors.
- `npm run dev`, then check every page at **375px (mobile), 768px (tablet), 1440px (desktop)** with headless Playwright screenshots from the scratchpad: no horizontal scroll, the nav menu works on mobile, the grid reflows.
- Link check: every internal route resolves and every image loads (no 404s in the console). External links point at the confirmed URLs.
- `docker build -t portfolio . && docker run -p 8080:8080 portfolio`, then confirm that `/`, `/projects`, `/skills`, `/contact`, a hard refresh on a deep link, and an unknown route (404 page) all work.
- `grep -r "TODO(theo)"` lists the placeholders the user still needs to fill in before submitting.
