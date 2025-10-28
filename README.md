# course-pricing-calculator
Something for working out costs and income.

## Progressive Web App support
The calculator now exposes a web app manifest and service worker so it can be installed on supported devices and keep working offline. Static assets and core pages are precached, and subsequent navigation attempts fall back to the cached calculator when the network is unavailable.

## Deployment options
This repository publishes the static site defined in `index.html` to
GitHub Pages using the **Pages (prod + previews)** workflow in
`.github/workflows/pages.yml`. The workflow runs for pushes to `main`,
pull requests targeting `main`, and any manual `workflow_dispatch`
invocations. Each run builds the site once and uploads it as a shared
`site-dist` artifact that every deployment job reuses.

### Production deployment (`main`)
When commits land on `main`, the workflow deploys the contents of the
`site-dist` artifact to the root of the `gh-pages` branch. This publishes
the production site at the repository's standard GitHub Pages URL.

### Pull request preview deployments
Pull requests against `main` trigger the same workflow. Their builds are
published to `gh-pages` under `previews/pr-<number>/`, and the workflow
comments the preview URL on the pull request so you can verify changes
before merging. The comment step writes back to the pull request thread,
so the workflow file must grant it `issues: write` permissions (and
optionally `pull-requests: write`) to keep that automation functioning.

### Preview cleanup
Preview directories are removed automatically when a pull request
closes, courtesy of `.github/workflows/cleanup-preview.yml`.

## Manual regression test

Use these steps to confirm acceptable-income persistence treats blank maximums as an open range.

1. Load the calculator and enable the **Remember my inputs** option.
2. Set an acceptable minimum income value, leave the maximum field blank, and toggle any basis if desired.
3. Reload the page. The acceptable income inputs should show the saved minimum and an empty maximum, and the acceptable range shading should extend through the full graph to represent no upper bound.
