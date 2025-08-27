<script lang="ts">
	import ImageCarousel from '$lib/components/ImageCarousel.svelte';
	type EnhancedPicture = any;

	export let title: string;
	export let description: string | undefined = undefined;
	// Accept mixed media: legacy image items, explicit image, or youtube entries
	type ImageItem =
		| { src: string | EnhancedPicture; alt?: string }
		| { kind: 'image'; src: string | EnhancedPicture; alt?: string };
	type YouTubeItem =
		| { kind: 'youtube'; youtubeId: string; title?: string }
		| { youtube: string; title?: string };
	export let images: (ImageItem | YouTubeItem)[] = [];

	export let initialIndex: number = 0;
</script>

<div class="bg-white font-shapiro text-black">
	<ImageCarousel {images} {initialIndex} />
	<h3 class="mx-3 mt-3 mb-2 text-3xl font-bold uppercase">{title}</h3>
	{#if description}
		<p class="mx-3 pb-3 text-base/snug text-rsx-silver">{description}</p>
	{/if}
</div>
