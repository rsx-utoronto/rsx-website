## RSX Website

SvelteKit (Svelte 5) + Tailwind CSS 4, built with Vite and deployed to a Oracle OCI Free Tier compute instance via a CI/CD GitHub Action.

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

### Deploy

Deployment is handled via the CI/CD GitHub Action. Any push to this repository automatically triggers a build and updates the website. Due to the performance constraints of GitHub's free runners, it may take ~3 minutes for the Action to finish running and the site to update.
