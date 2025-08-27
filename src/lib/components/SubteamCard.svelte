<script lang="ts">
	import TextCarousel from '$lib/components/TextCarousel.svelte';

	type EnhancedPicture = any;

	export let imageSrc: string | EnhancedPicture;
	export let imageAlt: string;
	export let title: string;
	export let slides: (string | string[])[] = [];

	export let initialIndex: number = 0;
</script>

<div class="relative border border-white">
	<enhanced:img src={imageSrc} alt={imageAlt} class="" />
	<h3 class="mx-3 mt-3 text-3xl font-bold">{title}</h3>
	<TextCarousel {slides} {initialIndex} />
</div>
