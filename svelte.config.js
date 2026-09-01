import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

// `vite dev` is the only script that passes "dev" on the command line, so this
// keeps the base path empty locally and set to the project-pages prefix in CI.
const dev = process.argv.includes('dev');

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://svelte.dev/docs/kit/integrations
	// for more information about preprocessors
	preprocess: vitePreprocess(),
	kit: {
		adapter: adapter(),
		paths: {
			base: dev ? '' : '/rsx-website'
		}
	}
};

export default config;
