<script lang="ts">
	export let slides: (string | string[])[] = [];
	export let initialIndex: number = 0;
	export let prevAriaLabel: string = 'Previous';
	export let nextAriaLabel: string = 'Next';

	import back from '$lib/assets/icons/back.svg';
	import fwd from '$lib/assets/icons/fwd.svg';

	let currentIndex: number = Math.min(Math.max(initialIndex, 0), Math.max(slides.length - 1, 0));

	function isListSlide(value: string | string[]): value is string[] {
		return Array.isArray(value);
	}

	function goPrevious(): void {
		if (slides.length === 0) return;
		if (currentIndex <= 0) return;
		currentIndex = Math.max(0, currentIndex - 1);
	}

	function goNext(): void {
		if (slides.length === 0) return;
		if (currentIndex >= slides.length - 1) return;
		currentIndex = Math.min(slides.length - 1, currentIndex + 1);
	}

	$: atStart = currentIndex <= 0;
	$: atEnd = currentIndex >= slides.length - 1;
</script>

{#if slides.length > 0}
	<div class="mt-2 grid pb-12">
		{#key currentIndex}
			{#if isListSlide(slides[currentIndex])}
				<ul
					class="col-start-1 row-start-1 mx-3 list-disc pl-4 text-base/snug text-rsx-silver"
					aria-live="polite"
				>
					{#each slides[currentIndex] as item}
						<li>{item}</li>
					{/each}
				</ul>
			{:else}
				<p class="col-start-1 row-start-1 mx-3 text-base/snug text-rsx-silver" aria-live="polite">
					{slides[currentIndex] as string}
				</p>
			{/if}
		{/key}
	</div>
	{#if slides.length > 1}
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
{:else}
	<p class="mx-0.5 text-sm text-rsx-silver" aria-live="polite"></p>
{/if}
