<script lang="ts">
	import '../app.css';
	import Navbar from '$lib/components/Navbar.svelte';
	import Footer from '$lib/components/Footer.svelte';

	import posthog from 'posthog-js';
	import { browser } from '$app/environment';
	import { onMount } from 'svelte';

	export const load = async () => {
		if (browser) {
			posthog.init('phc_idu7SeQKlqVqddStc6dxdH8rfCTmAr1kDRN7NvfPeqp', {
				api_host: 'https://us.i.posthog.com',
				defaults: '2025-05-24',
				person_profiles: 'identified_only' // or 'always' to create profiles for anonymous users as well
			});
		}

		return;
	};

	let { children } = $props();
</script>

<div class="flex min-h-dvh flex-col justify-between bg-black">
	<!-- debug-screens -->
	<div>
		<Navbar />
	</div>
	<main>{@render children?.()}</main>
	<Footer />
</div>
