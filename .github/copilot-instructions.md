# Copilot instructions for Adventour (adventour-tourism-website)

## Project snapshot
- Static site built with plain HTML, CSS and a small amount of inline JS. No build tools, no package.json, no server-side code.
- Entry point: `index.html` at the repo root. Styles live in `assets/css/`. Media lives in `assets/pictuers/` and `assets/video/`.

## Quick start (how to run & test locally) ✅
- Open `index.html` in a browser for a quick preview, or run a local HTTP server for reliable file/ video behavior:
  - Python (works on Windows): `python -m http.server 8000` then open `http://localhost:8000`
  - Or use VS Code's Live Server extension for live reload.
- When testing on GitHub Pages (Linux, case-sensitive), verify filename case and exact paths.

## What to look for (high-value, repo-specific checks) 🔍
- Broken links and filename mismatches: index references `concept-tours.html` but the project contains `consept-tours.html` and `concept-promised-land.html`. Fix by renaming or updating links consistently.
- Typo-prone asset paths:
  - The images folder is `assets/pictuers/` (misspelled). When adding/renaming assets use the existing folder name or update every reference.
  - CSS file `pacakage.css` is misspelled — confirm references when changing styles.
- Inline JS slideshow uses `images` array; ensure listed filenames match files in `assets/pictuers/`.

## Common edit patterns & examples ✍️
- To change site-wide styling: update `assets/css/style.css`. For page-specific tweaks, check page-specific CSS files (e.g., `assets/css/booking.css`).
- To change hero video: edit sources in `index.html` under `<video>` tags and add files to `assets/video/`.
- Fix a broken nav link example:
  - Current: `<a href="concept-tours.html">` in `index.html` — either rename `consept-tours.html` → `concept-tours.html` OR change the link to `consept-tours.html`. Update all instances.

## Testing & PR checklist ✅
- Serve locally and click every top-level nav link (Home, Services, Tours, Destinations, Contact).
- Confirm images/videos load and section backgrounds don't return 404s.
- Verify responsive layout in devtools, especially header and About section stacking.
- Check for misspelled filenames/paths and case-sensitivity before merging.

## Conventions & expectations for automated edits by agents 🤖
- Avoid large renames (e.g., `assets/pictuers` → `assets/pictures`) without updating all references; such renames can break sites on case-sensitive hosts.
- Keep PRs small and focused: one visual change or bug fix per PR (e.g., "fix nav link" or "improve About layout").
- When updating images used by the slideshow, update the `images` array in `index.html` and verify file names.

## Files to reference 📌
- `index.html` — hero video, slideshow, and core nav
- `assets/css/style.css` — main styling and responsive rules
- `assets/pictuers/` — slideshow images

---

If you want the canonical renaming plan for typos (e.g., `pictuers` → `pictures`) or prefer different header behavior on small screens, tell me which option and I’ll prepare a small PR. ✨