# Project rules

## Prompt log
- Keep a `PROMPTS.md` file at the root of the project. Create it if it doesn't exist.
- Before you start on any prompt I give you, log it as a time-stamped entry in `PROMPTS.md`.

## Plans
- When I approve a plan, save a copy of it in a `plans/` folder at the root of the project, numbered in order (for example, `plans/1st_portfolio.md`).

## Git
- Never commit to `main`. Before you change any code, create a new branch, or confirm we're already on one that isn't `main`.
- Don't commit, push, merge, or open pull requests. I'll do those myself.
- Use underscores, not hyphens, in names you choose (files, folders, branches).

## Project
- You may use any of the following stacks (or a similar one of your choosing). Because the site is hosted on Google Cloud Run, and because we want to experience building a container during deployment, a static website is not an option. You cannot simply create an HTML/CSS/JS page; you must create a dynamic web app.
- Option A: React
  Create React App or Vite
  Modern, component-based architecture
  Good for more interactive portfolios
- Option B: Next.js
  A React framework with routing built in
  Server-side rendering capabilities
  More complex, but powerful

- Option C: Vue.js
    A progressive JavaScript framework
    Component-based, like React
    A gentle learning curve
- Never put API keys, passwords, or other secrets in the code or in any file that gets committed.

