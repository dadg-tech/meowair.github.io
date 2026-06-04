# мяу мяу воздух landing

Static landing page for `мяу мяу воздух`: a Telegram-first VPN bot that sells
AmneziaWG access through Telegram Stars.

The project intentionally has no build step. GitHub Pages can publish the
repository as-is, while the source code is still split by responsibility.

## Project Structure

```text
.
├── index.html                  # Page markup and content
├── src/
│   ├── scripts/
│   │   ├── app.js              # Browser entry point
│   │   ├── dom.js              # Shared DOM helpers
│   │   ├── motion.js           # Parallax and dashboard tilt
│   │   ├── nav.js              # Fixed nav state and anchor scrolling
│   │   └── reveal.js           # Scroll and chat reveal animations
│   └── styles/
│       └── main.css            # Global styles, components, responsive rules
└── .github/workflows/pages.yml # GitHub Pages deployment
```

## Architecture

The page is a static, dependency-free frontend:

- `index.html` owns semantic content, SEO meta tags, and section order.
- `src/styles/main.css` owns design tokens, layout, components, animation, and
  responsive behavior.
- `src/scripts/app.js` wires small ES modules together.
- Feature modules stay isolated: navigation logic in `nav.js`, reveal logic in
  `reveal.js`, and non-essential motion effects in `motion.js`.
- Motion-heavy behavior respects `prefers-reduced-motion`.

This keeps the repository deployable as plain static files while avoiding a
single large JavaScript file.

## Local Development

Run any static server from the repository root:

```bash
python3 -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

Opening `index.html` directly can also work, but a local server is closer to the
GitHub Pages environment and handles ES modules consistently.

## Content Updates

- Main landing copy: edit `index.html`.
- Visual styling and breakpoints: edit `src/styles/main.css`.
- Scroll behavior, animation triggers, and pointer effects: edit files in
  `src/scripts/`.
- Telegram bot links point to `https://t.me/Muimuivozduhbot`.

## Deployment

The repository is configured for GitHub Pages through
`.github/workflows/pages.yml`.

Initial setup:

1. Open repository settings.
2. Go to `Pages`.
3. Set the source to `GitHub Actions`.
4. Push to `main` or run the workflow manually.

The workflow uploads the repository root, so `index.html` must remain at the
root unless the workflow path is changed.

By default GitHub Pages will serve the site on a GitHub domain:

```text
https://<username>.github.io/<repo>/
```

Add a `CNAME` file only after a custom domain is purchased and its DNS records
point to GitHub Pages.
