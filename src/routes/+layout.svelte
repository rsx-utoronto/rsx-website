<script lang="ts">
	import '../app.css';
	import Navbar from '$lib/components/Navbar.svelte';
	import Footer from '$lib/components/Footer.svelte';

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
