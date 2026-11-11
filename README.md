# DevOps Lab

A simple static website (HTML, CSS and JavaScript) used as a starting point for DevOps lab exercises. It is published to GitHub Pages automatically by a GitHub Actions workflow.

## Project structure

```
.
├── index.html                       # page markup
├── css/styles.css                   # styles
├── js/main.js                       # footer year and "Say hello" button
├── .nojekyll                        # serve files as-is (skip Jekyll processing)
└── .github/workflows/deploy-pages.yml
```

## Run locally

No build step is needed. Open `index.html` in a browser, or serve the folder:

```bash
python -m http.server 8000
```

then go to http://localhost:8000.

## Deployment

`.github/workflows/deploy-pages.yml` deploys the repository root to GitHub Pages:

- on every push to `main`
- manually, from the Actions tab (`workflow_dispatch`)

Changes go through a branch and a pull request; merging the pull request into `main` publishes the site.
