## RSX Website

SvelteKit (Svelte 5) + Tailwind CSS 4, built with Vite and deployed to Cloudflare Workers via the Cloudflare adapter and Wrangler.

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

### Deploy (Cloudflare Workers)

```bash
npm run build
npx wrangler deploy
```

Configuration is in `wrangler.jsonc`; the Cloudflare adapter outputs to `.svelte-kit/cloudflare/`.
