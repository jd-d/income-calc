# Income Planner

A responsive web app for service-based professionals to plan monthly revenue, understand the impact of taxes and costs, and
experiment with price and workload combinations. The calculator runs entirely in the browser and stores nothing on a server.

## Key features

- Instant summary of the monthly gross revenue required to hit a chosen net or gross income target.
- Configurable assumptions for fixed costs, per-booking costs, expected workload, and safety buffers.
- Interactive scenario table that compares net income outcomes across price points and booking volumes.
- Light and dark themes with automatic persistence, plus a built-in instructions dialog.
- Progressive Web App support so the planner installs to a home screen and works offline.

## Getting started locally

1. Serve the repository root with any static file server. For example:
   ```bash
   python -m http.server 8000
   ```
2. Open `http://localhost:8000/index.html` in a browser.
3. Adjust the inputs and verify that the summary and scenario table update instantly.

## Deployment notes

The site is designed for static hosting (GitHub Pages, Netlify, etc.). Update `service-worker.js` when changing the list of
precached files so returning visitors receive the latest assets.

## Manual regression checks

- **Scenario table highlights** – Set a net target and confirm that cells meeting or exceeding the goal show the green highlight.
- **Theme persistence** – Switch themes, reload the page, and confirm the selection persists.
- **Instructions dialog** – Open and close the “How to use” dialog with the button, the backdrop, and the Escape key.
