# DevOps Lab 1

Simple static website boilerplate used as a demo for DevOps practices (version control, CI/CD, and static hosting).

## Live demo

**Website:** [https://teehamaral.github.io/devops-lab-1/](https://teehamaral.github.io/devops-lab-1/)

The site is published with **GitHub Pages** via the workflow in `.github/workflows/deploy-pages.yml`. Every push to `main` triggers a new deploy.

## What this project includes

| Path | Description |
|------|-------------|
| `index.html` | Main page (hero, about, contact) |
| `css/styles.css` | Responsive layout and theme |
| `js/main.js` | Small client-side interactions |
| `.nojekyll` | Disables Jekyll so static files publish as-is |
| `.gitignore` | Ignores OS, editor, env, and build artifacts |
| `.github/workflows/deploy-pages.yml` | GitHub Actions deploy to Pages |

## Local preview

Open `index.html` in a browser, or serve the folder with any static server:

```bash
# Python
python3 -m http.server 8080

# Node (if you have npx)
npx serve .
```

Then visit `http://localhost:8080`.

## GitHub Pages setup

1. Push this repository to GitHub.
2. Go to **Settings → Pages**.
3. Under **Build and deployment**, set **Source** to **GitHub Actions**.
4. Merge/push to `main` (or run the **Deploy GitHub Pages** workflow manually).
5. Open the live URL above once the workflow succeeds.
