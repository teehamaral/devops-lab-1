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
| `js/main.js` | Client-side interactions |
| `js/theme.js` | Pure theme helpers (for unit tests) |
| `tests/unit/` | Example Node unit test (remaining cases TBD) |
| `tests/e2e/` | 3 Playwright functional tests |
| `Dockerfile` | Container image serving the site with nginx |
| `docker-compose.yml` | Runs the app and the test suite in isolated containers |
| `.github/workflows/playwright.yml` | CI: unit example + Playwright e2e on push/PR |
| `.github/workflows/deploy-pages.yml` | Deploy to GitHub Pages |
| `.github/workflows/docker-build.yml` | Builds and smoke-tests the Docker image on PRs |

## Local preview

Open `index.html` in a browser, or serve the folder with any static server:

```bash
# Python
python3 -m http.server 8080

# Node (if you have npx)
npx serve .
```

Then visit `http://localhost:8080`.

## Tests

```bash
npm ci
npx playwright install chromium   # first time only
npm test                          # unit example + e2e
npm run test:unit                 # unit tests only
npm run test:e2e                  # 3 Playwright functional tests
```

Without `BASE_URL`, Playwright starts `python3 -m http.server 8080` automatically.

### Test inventory

| Type | File | What it covers |
|------|------|----------------|
| Unit (example) | `tests/unit/theme.test.js` | `nextTheme("light") → "dark"` — remaining unit tests TBD |
| E2E | `tests/e2e/navigation.spec.js` | Title, hero, About/Contact navigation |
| E2E | `tests/e2e/cta.spec.js` | CTA alert dialog |
| E2E | `tests/e2e/theme.spec.js` | Theme toggle + persistence after reload |

## Run with Docker

### Application only

```bash
docker compose up -d --build web
```

Then visit `http://localhost:8080`.

Stop with:

```bash
docker compose down
```

### Application + tests

```bash
docker compose --profile test run --rm tests
```

This builds/starts `web` (nginx), waits until it is healthy, then runs the unit example and Playwright against `http://web:80` inside the Playwright container.

Equivalent one-liner with plain Docker:

```bash
docker build -t devops-lab-1 .
docker run --rm -p 8080:80 devops-lab-1
```

## GitHub Actions

| Workflow | When | What |
|----------|------|------|
| `playwright.yml` | push/PR to `main` | `npm ci` → unit example → Playwright Chromium e2e |
| `docker-build.yml` | PR to `main` | Build image + curl smoke checks |
| `deploy-pages.yml` | push to `main` | Publish GitHub Pages |
| `validate-html.yml` | PR to `main` | HTML validation |

## GitHub Pages setup

1. Push this repository to GitHub.
2. Go to **Settings → Pages**.
3. Under **Build and deployment**, set **Source** to **GitHub Actions**.
4. Merge/push to `main` (or run the **Deploy GitHub Pages** workflow manually).
5. Open the live URL above once the workflow succeeds.
