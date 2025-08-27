<script lang="ts">
	import wordmark from '$lib/assets/images/RSX-Wordmark-White.png?enhanced';
	import hero from '$lib/assets/images/landing page/hero.png?enhanced';
	import solidworks from '$lib/assets/images/sponsors/solidworks.svg';
	import ansys from '$lib/assets/images/sponsors/ansys.svg';
	import altium from '$lib/assets/images/sponsors/altium.svg';
	import cpsif from '$lib/assets/images/sponsors/cpsif.png?enhanced';
	import percepio from '$lib/assets/images/sponsors/percepio.jpg?enhanced';
	import samadhin from '$lib/assets/images/sponsors/samadhin.png?enhanced';
	import nordspace from '$lib/assets/images/sponsors/nordspace.png?enhanced';
	import protocase from '$lib/assets/images/sponsors/protocase.png?enhanced';
	import calian from '$lib/assets/images/sponsors/calian.png?enhanced';
	import thorlabs from '$lib/assets/images/sponsors/thorlabs.svg';
	import edmund from '$lib/assets/images/sponsors/edmund.png?enhanced';
	import north_liberties from '$lib/assets/images/sponsors/north liberties.png?enhanced';
	import luxmodus from '$lib/assets/images/sponsors/luxmodus.png?enhanced';
	import wurth from '$lib/assets/images/sponsors/wurth.png?enhanced';
	import talmolder from '$lib/assets/images/sponsors/talmolder.png?enhanced';
	import utias from '$lib/assets/images/sponsors/utias.png?enhanced';
	import polymaker from '$lib/assets/images/sponsors/polymaker.png?enhanced';
	import pcbway from '$lib/assets/images/sponsors/pcbway.png?enhanced';
	import digikey from '$lib/assets/images/sponsors/digikey.svg';

	import innovate from '$lib/assets/images/landing page/innovate.png?enhanced';
	import educate from '$lib/assets/images/landing page/educate.png?enhanced';
	import compete from '$lib/assets/images/landing page/compete.png?enhanced';
	import collaborate from '$lib/assets/images/landing page/collaborate.png?enhanced';

	import Footer from '$lib/components/Footer.svelte';
	import { onMount, onDestroy } from 'svelte';
	import Icon from '@iconify/svelte';

	// Action to fit text within container width
	function fitText(node: HTMLElement) {
		const resizeText = () => {
			const parent = node.parentElement;
			if (!parent) return;

			const parentWidth = parent.clientWidth;
			let fontSize = 120; // Start with a large font size

			node.style.fontSize = fontSize + 'px';

			// Decrease font size until text fits
			while (node.scrollWidth > parentWidth && fontSize > 12) {
				fontSize--;
				node.style.fontSize = fontSize + 'px';
			}
		};

		// Initial resize
		setTimeout(resizeText, 0); // Use setTimeout to ensure DOM is ready

		// Resize observer for dynamic changes
		const resizeObserver = new ResizeObserver(resizeText);
		const parent = node.parentElement;
		if (parent) {
			resizeObserver.observe(parent);
		}

		return {
			destroy() {
				resizeObserver.disconnect();
			}
		};
	}

	let sponsorsContainer: HTMLDivElement;
	let rafId: number | null = null;
	let marqueeX = 0;
	let marqueeSpeedPxPerSec = 120; // tune speed
	let lastTs = 0;

	function nextFrame() {
		rafId = requestAnimationFrame(tick);
	}

	function tick(ts: number) {
		if (!lastTs) lastTs = ts;
		const dt = (ts - lastTs) / 1000;
		lastTs = ts;

		const container = sponsorsContainer;
		if (container) {
			const first = container.firstElementChild as HTMLElement | null;
			if (first) {
				const dx = marqueeSpeedPxPerSec * dt;
				marqueeX -= dx;
				const firstWidth = first.offsetWidth + getGapPx(container);
				if (-marqueeX >= firstWidth) {
					marqueeX += firstWidth;
					container.appendChild(first);
				}
				container.style.transform = `translateX(${marqueeX}px)`;
			}
		}

		// Determine active scrolling state based on time since last input
		isActivelyScrolling = ts - lastInputAtTs < ACTIVE_SCROLL_MS;

		// Ease-in-out snapping when not actively scrolling
		if (!isActivelyScrolling) {
			const clamped = Math.max(0, Math.min(words.length, scrollProgress));
			const target = Math.round(clamped);
			if (!snapping) {
				if (Math.abs(displayProgress - target) > 0.0005) {
					snapping = true;
					snapFrom = displayProgress;
					snapTo = target;
					snapStart = ts;
				}
			} else {
				const t = Math.min(1, (ts - snapStart) / snapDuration);
				const eased = easeInOutCubic(t);
				displayProgress = snapFrom + (snapTo - snapFrom) * eased;
				if (t >= 1) {
					displayProgress = snapTo;
					snapping = false;
					// If we snapped to the wordmark, lock in final state
					if (snapTo === words.length) {
						scrollProgress = words.length;
						wordmarkVisible = true;
					}
				}
			}
		} else {
			// Follow user input directly while scrolling or after reveal
			displayProgress = Math.max(0, Math.min(words.length, scrollProgress));
			snapping = false;
		}

		nextFrame();
	}

	function getGapPx(container: HTMLElement): number {
		const style = getComputedStyle(container);
		const gapVal = style.columnGap || (style as any).gap || '0px';
		return parseFloat(gapVal) || 0;
	}

	onMount(() => {
		lastTs = 0;
		nextFrame();
		return () => {
			if (rafId) cancelAnimationFrame(rafId);
			rafId = null;
		};
	});

	onDestroy(() => {
		if (typeof document !== 'undefined') {
			document.body.style.overflow = 'auto';
		}
	});

	let scrollProgress = 0; // 0 to words.length (continuous)
	let lastTouchY = 0;
	let transitionMs = 400;
	let wordmarkVisible = false;
	let displayProgress = 0; // rendered progress for transforms
	// Snap tween state
	let snapping = false;
	let snapFrom = 0;
	let snapTo = 0;
	let snapStart = 0;
	let snapDuration = 450; // ms

	function easeInOutCubic(t: number) {
		return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
	}

	const words = ['innovators', 'educators', 'contendors', 'collaborators', 'dreamers', 'builders'];
	const PIXELS_PER_WORD = 120; // pixels of scroll needed to advance one full word
	const TOTAL_SCROLL_NEEDED = words.length * PIXELS_PER_WORD;

	// Derived values for smooth animation with snapping
	$: currentWordIndex = Math.floor(scrollProgress);
	$: wordRotationProgress = scrollProgress % 1; // fractional part for smooth rotation

	// Track if we're actively scrolling (timestamp-based)
	let isActivelyScrolling = false;
	let lastInputAtTs = 0;
	const ACTIVE_SCROLL_MS = 80; // consider input "active" within this window

	// Snap to nearest word when close enough (within 0.15 of a word boundary)
	$: snappedProgress = (() => {
		const fractional = scrollProgress % 1;
		const base = Math.floor(scrollProgress);

		// Only snap if we're not actively scrolling
		if (!isActivelyScrolling && fractional < 0.15) {
			return base; // Snap to current word
		} else if (!isActivelyScrolling && fractional > 0.85) {
			return base + 1; // Snap to next word
		} else {
			return scrollProgress; // Smooth interpolation
		}
	})();

	function advanceStepsFromDelta(delta: number) {
		if (wordmarkVisible) return;

		// Mark as actively scrolling
		isActivelyScrolling = true;
		lastInputAtTs = performance.now();

		// Convert scroll delta to progress (0 to words.length)
		const progressDelta = delta / PIXELS_PER_WORD;
		scrollProgress = Math.max(0, scrollProgress + progressDelta);

		// Check if we've reached the end
		if (scrollProgress >= words.length) {
			scrollProgress = words.length;
			wordmarkVisible = true;
			document.body.style.overflow = 'auto';
		}

		// No timeout; RAF will flip isActivelyScrolling shortly after input stops

		// Map delta magnitude to transition duration (faster scroll → shorter duration)
		const speedRatio = Math.min(1, Math.abs(delta) / 240);
		transitionMs = Math.round(240 - 140 * speedRatio);
	}

	function handleScroll(event: WheelEvent | TouchEvent) {
		if (wordmarkVisible) return;
		// Prevent default scroll behavior while in the intro sequence
		event.preventDefault();
		if (event instanceof WheelEvent) {
			advanceStepsFromDelta(Math.max(0, event.deltaY)); // forward only
		} else {
			const touch = (event as TouchEvent).touches?.[0] ?? (event as TouchEvent).changedTouches?.[0];
			if (touch) {
				const dy = lastTouchY ? lastTouchY - touch.clientY : 0;
				lastTouchY = touch.clientY;
				advanceStepsFromDelta(Math.max(0, dy)); // forward only
			}
		}
	}

	// Toggle body scroll lock based on intro visibility (SSR-safe)
	$: typeof document !== 'undefined' &&
		(document.body.style.overflow = wordmarkVisible ? 'auto' : 'hidden');
</script>

<svelte:window on:wheel|nonpassive={handleScroll} on:touchmove|nonpassive={handleScroll} />

<main
	class="relative mx-0 max-w-screen p-8 font-shapiro text-white md:mx-4 xl:mx-[3%] 2xl:mx-auto 2xl:max-w-350"
>
	<div class="grid items-center md:grid-cols-2">
		<div class="space-y-2">
			<p class="font-poly text-3xl leading-none sm:text-5xl">We are</p>

			<!-- Rolodex-style word cycling container -->
			<div
				class="relative flex h-26 overflow-clip [perspective:1000px]"
				class:rolodex-mask={!wordmarkVisible}
			>
				{#if !wordmarkVisible}
					<!-- Rolodex container with perspective -->
					<div class="relative h-full w-full">
						<!-- Rolodex cards container -->
						<div class="relative h-14 w-full [transform-style:preserve-3d] md:h-full">
							{#each words as word, index}
								<!-- Individual rolodex card -->
								<div
									class="absolute inset-0 flex items-center justify-start transition-[transform,opacity] ease-in-out will-change-[transform,opacity] [backface-visibility:hidden] [transform-style:preserve-3d]"
									style="
										transform: rotateX({(displayProgress - index) * 60}deg) translateZ(120px);
										opacity: {Math.max(0, 1 - Math.abs(displayProgress - index))};
										z-index: {words.length - Math.abs(index - displayProgress)};
										transition-duration: 0ms;
									"
								>
									<span
										use:fitText
										class="transform-gpu text-7xl leading-none font-bold uppercase md:pr-10"
									>
										{word}
									</span>
								</div>
							{/each}
						</div>
					</div>
				{/if}

				<!-- RSX Wordmark (hidden initially) -->
				<div class="absolute">
					<enhanced:img
						src={wordmark}
						alt="RSX Wordmark"
						class="h-20 w-auto object-contain transition-[transform,opacity] ease-in-out will-change-[transform,opacity] [backface-visibility:hidden]"
						style="
						transform: rotateX({(displayProgress - words.length) * 60}deg) translateZ(120px);
						opacity: {Math.max(0, displayProgress - words.length + 1)};
						transform-origin: center bottom;
						pointer-events: {wordmarkVisible ? 'auto' : 'none'};
						transition-duration: 0ms;
					"
					/>
				</div>
			</div>

			<div class="mt-5 mb-8 md:mt-10 md:mr-20">
				<hr class="md:mb-2 md:-ml-2" />
				<p class="text-md font-shapiro">
					Robotics for Space Exploration (RSX) is the University of Toronto's Faculty of Applied
					Science and Engineering affiliated design team aimed at investigating the use of robotics
					within and throughout space
				</p>
				<a
					href="https://docs.google.com/forms/d/e/1FAIpQLSed28HJaX7QlluC7SZq7l7ynV5yA8hmCcd84v-bq0q3YqyX8Q/viewform?usp=dialog"
					target="_blank"
					class="mt-10 flex w-fit cursor-pointer flex-row items-center gap-2 border border-rsx-red bg-rsx-red/30 p-2 px-6 font-poly-mono"
				>
					<h3 class="">JOIN RSX</h3>
					<Icon icon="material-symbols:arrow-outward" class="mt-0.1 text-xl" />
				</a>
			</div>
		</div>
		<enhanced:img src={hero} alt="placeholder" class="mt-10 object-cover md:mt-0" />
	</div>

	<div id="sponsors" class="relative mt-16 overflow-hidden">
		<h3 class="mb-2 text-center font-poly-mono">SUPPORTED BY</h3>
		<hr class="" />
		<div bind:this={sponsorsContainer} class="sponsors-scroller gap-8 py-4">
			<img src={solidworks} alt="solidworks" class="h-14 max-w-40 object-scale-down" />
			<img src={ansys} alt="ansys" class="h-14 max-w-40 object-scale-down" />
			<img src={altium} alt="altium" class="h-14 max-w-40 object-scale-down" />
			<enhanced:img src={cpsif} alt="cpsif" class="h-14 w-auto object-scale-down" />
			<enhanced:img src={percepio} alt="percepio" class="h-14 max-w-50 object-scale-down" />
			<enhanced:img src={samadhin} alt="samadhin" class="no-filter h-14 w-auto object-scale-down" />
			<enhanced:img src={nordspace} alt="nordspace" class="h-14 max-w-40 object-scale-down" />
			<enhanced:img src={protocase} alt="protocase" class="h-14 w-auto object-scale-down" />
			<enhanced:img src={calian} alt="calian" class="h-14 max-w-40 object-scale-down" />
			<img src={thorlabs} alt="thorlabs" class="h-14 max-w-40 object-scale-down" />
			<enhanced:img src={edmund} alt="edmund" class="h-14 max-w-45 object-scale-down" />
			<enhanced:img
				src={north_liberties}
				alt="north_liberties"
				class="h-14 max-w-50 object-scale-down"
			/>
			<enhanced:img src={luxmodus} alt="luxmodus" class="h-14 max-w-40 object-scale-down" />
			<enhanced:img src={wurth} alt="wurth" class="h-14 max-w-40 object-scale-down" />
			<enhanced:img src={talmolder} alt="talmolder" class="h-14 max-w-45 object-scale-down" />
			<enhanced:img src={utias} alt="utias" class="h-14 w-auto object-scale-down" />
			<enhanced:img src={polymaker} alt="polymaker" class="h-11 w-auto object-scale-down" />
			<enhanced:img src={pcbway} alt="pcbway" class="h-14 w-auto object-scale-down" />
			<img src={digikey} alt="digikey" class="h-9 object-scale-down" />
		</div>
		<hr class="" />
	</div>

	<div class="mt-32">
		<hr class="mb-1 w-75" />
		<h3 class="mb-6 font-poly-mono text-lg">ABOUT</h3>
		<div class="grid gap-12 font-shapiro md:grid-cols-3">
			<p>
				We compete in international competitions, such as the University Rover Challenge, European
				Rover Challenge, Canadian International Rover Challenge, and CANSAT Competition
			</p>
			<p>
				Since being formed in 2013 by passionate roboticists, space enthusiasts, and undergraduate
				students, we've challenged students to innovate and push boundaries.
			</p>
			<p>
				We encourage students to learn about, experiment with, and develop proficiency in
				engineering technology, and promote growth through hands-on experience
			</p>
		</div>
	</div>

	<p class="mt-28 text-center text-3xl">"For us, the sky isn't the limit—it's just in the way"</p>

	<div class="mt-24 text-base">
		<hr class="mb-1 w-75" />
		<h3 class="mb-10 font-poly-mono">WHAT WE DO</h3>
		<div class="grid gap-14 md:grid-cols-2 lg:grid-cols-4">
			<div class="border border-rsx-teal bg-rsx-teal/30 p-4 py-3">
				<h3 class="mb-3 text-xl font-bold">INNOVATE</h3>
				<enhanced:img src={innovate} alt="innovate" class="" />
				<p class="mx-0.5 mt-4">
					Our technical subteams tackle missions such as in-situ life-detection testing, autonomous
					navigation and equipment servicing, gaining technical expertise in areas such as
					artificial intelligence, electrical board design, or robot simulation.
				</p>
			</div>
			<div class="border border-rsx-pink bg-rsx-pink/30 p-4 py-3">
				<h3 class="mb-3 text-xl font-bold">EDUCATE</h3>
				<enhanced:img src={educate} alt="educate" class="" />
				<p class="mx-0.5 mt-4">
					RSX promotes STEM education amongst youth, giving back to the community and paying the
					deed forward. Our outreach initiatives, including the annual robotics challenges, SEEK and
					SEEK Jr, give students the opportunity to learn more about the engineering design process,
					and learn about robotics in a hands-on environment.
				</p>
			</div>
			<div class="border border-rsx-violet bg-rsx-violet/30 p-4 py-3">
				<h3 class="mb-3 text-xl font-bold">COMPETE</h3>
				<enhanced:img src={compete} alt="compete" class="" />
				<p class="mx-0.5 mt-4">
					RSX proudly represents the University of Toronto at various international competitions,
					including the University Rover Challenge, European Rover Challenge, and Canadian
					International Rover Challenge.
				</p>
			</div>
			<div class="border border-rsx-red bg-rsx-red/30 p-4 py-3">
				<h3 class="mb-3 text-xl font-bold">COLLABORATE</h3>
				<enhanced:img src={collaborate} alt="collaborate" class="" />
				<p class="mx-0.5 mt-4">
					RSX works regularly with a variety of organizations throughout the year, whether it be
					with sponsors to fund research and development of the rover, or high schools to coordinate
					hackathons.
				</p>
			</div>
		</div>
	</div>
</main>
