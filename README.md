## RSX Website

SvelteKit (Svelte 5) + Tailwind CSS 4, built with Vite and prerendered to a fully static site via `@sveltejs/adapter-static`.

### Setup

```bash
npm install
```

### Development

```bash
npm run dev
```

Then open http://localhost:5173.

### Build and Preview

```bash
npm run build
npm run preview
```

### Type Check and Lint/Format

```bash
npm run check
npm run format
npm run lint
```

### GitHub Pages deployment

- **Production URL:** https://rsx-utoronto.github.io/rsx-website/
- **Base path:** `/rsx-website` in production, empty (`''`) in local dev. This is set in
  [`svelte.config.js`](svelte.config.js) via `kit.paths.base`, keyed off whether the command line
  contains `dev`.
- **Workflow:** [`.github/workflows/deploy-pages.yml`](.github/workflows/deploy-pages.yml) runs on
  every push to `main` (and on manual dispatch). It builds with `npm run build` and uploads the
  `build/` directory as the Pages artifact.
- **Repo setting required (one-time, cannot be done from code):** in
  **Settings → Pages → Build and deployment → Source**, select **GitHub Actions**. Until that is
  set, Pages will keep serving the README instead of the built site.

When writing links or referencing files in `static/`, do not hardcode leading-slash paths — they
ignore the base path and 404 in production. Use `import { base } from '$app/paths'` in components
(`href="{base}/subteams"`), `%sveltekit.assets%` in `src/app.html`, and normal `$lib` imports for
images and fonts so Vite rewrites them.

### Note on the old OCI deployment

[`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) deploys to an Oracle OCI Free Tier
instance and expects a Node server bundle (`build/index.js`) produced by `@sveltejs/adapter-node`.
That workflow no longer works now that the project builds with `adapter-static`: delete it, or
switch the adapter back if the OCI instance is still the primary host.
