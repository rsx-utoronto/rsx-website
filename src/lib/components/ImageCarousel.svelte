<script lang="ts">
	// Allow a mixed-media array: images and YouTube videos. Backwards compatible with { src, alt? }.
	// Local structural type for enhanced image objects
	type EnhancedPicture = any;

	type ImageItem = { kind: 'image'; src: string | EnhancedPicture; alt?: string };
	type YouTubeItem = { kind: 'youtube'; youtubeId: string; title?: string };
	type CarouselItem = ImageItem | YouTubeItem;
	type CarouselInputItem =
		| string
		| { src: string | EnhancedPicture; alt?: string }
		| { kind: 'image'; src: string | EnhancedPicture; alt?: string }
		| { kind: 'youtube'; youtubeId: string; title?: string }
		| { youtube: string; title?: string };

	export let images: CarouselInputItem[] = [];
	export let initialIndex: number = 0;
	export let prevAriaLabel: string = 'Previous image';
	export let nextAriaLabel: string = 'Next image';

	import back from '$lib/assets/icons/back.svg';
	import fwd from '$lib/assets/icons/fwd.svg';

	function parseYouTubeId(value: string): string | null {
		// Accept full URLs or raw IDs. Returns null if it cannot determine an ID.
		const trimmed = value.trim();
		// Raw ID heuristic
		if (/^[a-zA-Z0-9_-]{11}$/.test(trimmed)) return trimmed;
		try {
			const url = new URL(trimmed);
			// https://www.youtube.com/watch?v=ID or /shorts/ID or /embed/ID
			if (url.hostname.includes('youtube.com')) {
				const v = url.searchParams.get('v');
				if (v) return v;
				const parts = url.pathname.split('/').filter(Boolean);
				const idx = parts.findIndex((p) => p === 'embed' || p === 'shorts');
				if (idx !== -1 && parts[idx + 1]) return parts[idx + 1];
			}
			// https://youtu.be/ID
			if (url.hostname === 'youtu.be') {
				const id = url.pathname.split('/').filter(Boolean)[0];
				if (id) return id;
			}
		} catch (_) {
			// Not a URL; fall through
		}
		return null;
	}

	function normalizeItem(item: CarouselInputItem): CarouselItem | null {
		// Direct string: could be a YouTube URL/ID or an image URL
		if (typeof item === 'string') {
			const id = parseYouTubeId(item);
			if (id) return { kind: 'youtube', youtubeId: id };
			// treat as image URL
			return { kind: 'image', src: item };
		}

		const anyItem = item as any;
		// Legacy image shape or explicit image shape, allowing enhanced image objects
		if (anyItem && 'src' in anyItem) {
			return { kind: 'image', src: anyItem.src as string | EnhancedPicture, alt: anyItem.alt };
		}
		// Explicit youtube kind
		if (anyItem.kind === 'youtube' && typeof anyItem.youtubeId === 'string') {
			return { kind: 'youtube', youtubeId: anyItem.youtubeId, title: anyItem.title };
		}
		// Alternate youtube shape: { youtube: string }
		if (typeof anyItem.youtube === 'string') {
			const id = parseYouTubeId(anyItem.youtube);
			if (id) return { kind: 'youtube', youtubeId: id, title: anyItem.title };
		}
		return null;
	}

	let mediaItems: CarouselItem[] = [];
	$: mediaItems = images
		.map((it) => normalizeItem(it))
		.filter((it): it is CarouselItem => it !== null);

	function isImage(item: CarouselItem): item is ImageItem {
		return item.kind === 'image';
	}

	function isYouTube(item: CarouselItem): item is YouTubeItem {
		return item.kind === 'youtube';
	}

	let currentIndex: number = initialIndex;

	function goPrevious(): void {
		if (mediaItems.length === 0) return;
		if (currentIndex <= 0) return;
		currentIndex = Math.max(0, currentIndex - 1);
	}

	function goNext(): void {
		if (mediaItems.length === 0) return;
		if (currentIndex >= mediaItems.length - 1) return;
		currentIndex = Math.min(mediaItems.length - 1, currentIndex + 1);
	}

	$: currentIndex = Math.min(Math.max(currentIndex, 0), Math.max(mediaItems.length - 1, 0));
	$: atStart = currentIndex <= 0;
	$: atEnd = currentIndex >= mediaItems.length - 1;
</script>

{#if mediaItems.length > 0}
	<div class="relative overflow-clip">
		{#key currentIndex}
			{@const current = mediaItems[currentIndex]}
			{#if isImage(current)}
				<enhanced:img
					class="block w-full scale-101"
					src={current.src}
					alt={current.alt ?? 'carousel image'}
				/>
			{:else}
				<div class="relative aspect-video w-full">
					<iframe
						class="absolute inset-0 h-full w-full"
						src={`https://www.youtube.com/embed/${current.youtubeId}`}
						title={current.title ?? 'YouTube video player'}
						frameborder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
						referrerpolicy="strict-origin-when-cross-origin"
						allowfullscreen
					></iframe>
				</div>
			{/if}
		{/key}

		{#if mediaItems.length > 1}
			<div class="absolute right-0 bottom-0">
				<div class="flex *:h-8 *:w-8">
					<button
						class="flex items-center justify-center bg-white text-sm hover:cursor-pointer disabled:cursor-not-allowed disabled:bg-rsx-silver"
						type="button"
						aria-label={prevAriaLabel}
						on:click={goPrevious}
						disabled={atStart}
					>
						<img src={back} alt="back" class="h-3 w-3" />
					</button>
					<button
						class="flex items-center justify-center bg-white text-sm hover:cursor-pointer disabled:cursor-not-allowed disabled:bg-rsx-silver"
						type="button"
						aria-label={nextAriaLabel}
						on:click={goNext}
						disabled={atEnd}
					>
						<img src={fwd} alt="forward" class="h-3 w-3" />
					</button>
				</div>
			</div>
		{/if}
	</div>
{:else}
	<div class="relative">
		<div class="aspect-video w-full bg-black/20"></div>
	</div>
{/if}
