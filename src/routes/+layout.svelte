<script lang="ts">
	import '../app.css';
	import favicon_96x96 from '$lib/assets/icons/favicon-96x96.png';
	import favicon_svg from '$lib/assets/icons/favicon.svg';
	import favicon_ico from '$lib/assets/icons/favicon.ico';
	import apple_touch_icon from '$lib/assets/icons/apple-touch-icon.png';
	import site_webmanifest from '$lib/assets/icons/site.webmanifest';
	import Navbar from '$lib/components/Navbar.svelte';
	import Footer from '$lib/components/Footer.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" type="image/png" href={favicon_96x96} sizes="96x96" />
	<link rel="icon" type="image/svg+xml" href={favicon_svg} />
	<link rel="shortcut icon" href={favicon_ico} />
	<link rel="apple-touch-icon" sizes="180x180" href={apple_touch_icon} />
	<meta name="apple-mobile-web-app-title" content="RSX" />
	<link rel="manifest" href={site_webmanifest} />
</svelte:head>

<div class="flex min-h-dvh flex-col justify-between bg-black">
	<!-- debug-screens -->
	<div>
		<Navbar />
	</div>
	<main>{@render children?.()}</main>
	<Footer />
</div>
