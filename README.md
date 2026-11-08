# Theo Moritz — Portfolio

A multi-page personal portfolio built with **React 19**, **Vite**, **Tailwind CSS v4**, and **React Router**. It is packaged as a Docker container (nginx) and deployed to **Google Cloud Run**.

Pages: **Home**, **Projects**, **Skills**, **Contact**, and a **404** page.

---

## Run the app locally

**Requirements:** Node.js 20.19+ or 22.12+ (check with `node -v`).

```bash
npm install        # install dependencies (first time only)
npm run dev        # start the dev server → http://localhost:5173
```

| Command           | What it does                                                    |
| ----------------- | --------------------------------------------------------------- |
| `npm run dev`     | Development server with hot reload                              |
| `npm run build`   | Production build into `dist/`                                   |
| `npm run preview` | Serve the production build locally → http://localhost:4173      |
| `npm run lint`    | Check the code with ESLint                                      |

### Run it as a container (optional, needs Docker)

```bash
docker build -t portfolio .
docker run -p 8080:8080 portfolio   # → http://localhost:8080
```

---

## How the app is structured: everything that branches off `index.html`

The browser loads `index.html` first. Every other part of the app hangs off it:

```
index.html                      Page shell: <head> (title, description, favicon, Inter font) and an empty <div id="root">
└── src/main.jsx                Mounts React into #root, wraps the app in <BrowserRouter>, loads index.css
    ├── src/index.css           Tailwind import + theme tokens (gold accent colors, Inter font) + hero grid backdrop
    └── src/App.jsx             Defines the routes (which URL shows which page)
        └── components/Layout.jsx      Shared frame for every page; scrolls to top + sets the tab title on navigation
            ├── components/Navbar.jsx  Sticky top bar; highlights the active page; hamburger menu on mobile
            ├── <Outlet/>              ← the current page renders here
            │   ├── "/"         pages/Home.jsx      Hero (name, headline, value proposition, CTAs, social links),
            │   │                                   "Explore" cards linking to the other pages, featured project
            │   ├── "/projects" pages/Projects.jsx  Responsive grid of ProjectCard components (1 → 2 → 3 columns)
            │   │                 └── components/ProjectCard.jsx  Image, title, description, tech badges, Code/Demo links
            │   ├── "/skills"   pages/Skills.jsx    Skill groups with proficiency bars + "Tools I use" / "Currently learning"
            │   │                 └── components/SkillBar.jsx     Accessible progress bar with a text level (e.g. Proficient)
            │   ├── "/contact"  pages/Contact.jsx   Email, LinkedIn, and GitHub cards + current availability note
            │   └── "*"         pages/NotFound.jsx  404 page for any unknown URL, with a link home
            └── components/Footer.jsx  Copyright + email / LinkedIn / GitHub icon links
```

Shared helpers used across the tree:

- **`src/data/profile.js`**: all personal content (name, intro, contact links, projects, skills). **Edit this file to change what the site says.** No component changes are needed.
- **`src/components/Section.jsx`**: consistent page wrapper (eyebrow, heading, intro) used by Projects, Skills, and Contact.
- **`src/components/Icons.jsx`**: inline SVG icons (GitHub, LinkedIn, mail, arrows, menu).
- **`public/`**: static files served as-is: `favicon.svg` and the project images in `public/images/`.

### Updating content

Open `src/data/profile.js` and search for `TODO(theo)` to find every placeholder that still needs real content. For a project, set `github` or `demo` to a URL to show those buttons, or leave them `null` to hide them. Remove `placeholder: true` to drop the "Sample project" badge.

---

## Deploying to Google Cloud Run

The container is built from the `Dockerfile` in two stages:

1. **Build stage** (`node:22-alpine`): runs `npm ci` and `npm run build` to produce `dist/`.
2. **Serve stage** (`nginx:alpine`): serves `dist/` on port **8080** using `nginx.conf`. The config sends unknown paths such as `/projects` back to `index.html`, so a refresh on any page works.

### Option 1: deploy from Google Cloud Shell

```bash
git clone https://github.com/tmoritz2005/portfolio.git
cd portfolio
gcloud config set project YOUR_PROJECT_ID
gcloud run deploy portfolio --source . --region us-central1 --allow-unauthenticated
```

`--source .` uploads the code, builds the container with Cloud Build from the `Dockerfile`, and deploys it. The command prints the service URL when it finishes.

### Option 2: continuous deployment from the Git repository

Cloud Console → **Cloud Run** → **Deploy container** → **Continuously deploy from a repository** → connect the GitHub repo, choose branch `main` and build type **Dockerfile**, and allow unauthenticated invocations. Every push to `main` then rebuilds and redeploys the site.

---

## Project files

| Path                | Purpose                                                     |
| ------------------- | ----------------------------------------------------------- |
| `src/`              | Application source (see the tree above)                     |
| `public/`           | Static assets (favicon, project images)                     |
| `Dockerfile`        | Builds the production container                             |
| `nginx.conf`        | Web server config inside the container                      |
| `.dockerignore`     | Files left out of the container build                       |
| `vite.config.js`    | Vite config (React + Tailwind plugins)                      |
| `eslint.config.js`  | Lint rules                                                  |
| `PROMPTS.md`        | Time-stamped log of prompts used to build the project       |
| `plans/`            | Approved implementation plans                               |
| `CLAUDE.md`         | Project rules for Claude Code                               |
