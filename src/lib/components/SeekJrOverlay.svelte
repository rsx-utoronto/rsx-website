<script lang="ts">
    import Icon from '@iconify/svelte';
    import SeekHeader from '$lib/assets/images/landing page/seek-popup-header.png';
    import SeekHeaderMobile from '$lib/assets/images/landing page/seek-popup-header-mobile.png';

	export let open: boolean;
	export let onClose: () => void;

	function handleBackdropClick(event: MouseEvent) {
		if (event.target === event.currentTarget) onClose();
	}

	function onKeydown(event: KeyboardEvent) {
		if (event.key === 'Escape') onClose();
	}

	$: if (typeof document !== 'undefined') {
		document.body.style.overflow = open ? 'hidden' : 'auto';
	}
</script>

{#if open}
	<div
		class="fixed inset-0 z-50 flex items-start justify-center bg-black/70 px-4 overflow-y-auto pt-8 pb-8 md:pt-12 md:pb-12"
		role="dialog"
		aria-modal="true"
		on:click={handleBackdropClick}
		on:keydown={onKeydown}
		on:wheel|capture|stopPropagation
		on:touchmove|capture|stopPropagation
		tabindex="0"
	>
		<div class="w-full max-w-3xl border border-white bg-black text-white">
			<div class="relative">
				<picture>
					<source srcset={SeekHeader} media="(min-width: 768px)" />
					<img src={SeekHeaderMobile} alt="SEEK Jr header" class="block h-auto w-full" />
				</picture>
				<div class="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent px-4 py-3 font-shapiro text-4xl uppercase">
					<h1 class="font-shapiro font-bold">RSX SEEK JR</h1>
                    <p class="font-poly-mono uppercase text-lg opacity-60 ml-0.5">Space Exploration and Engineering Kompetition (SEEK) Junior</p>
				</div>
				<button
					class="absolute right-2 top-2 p-0.5 cursor-pointer bg-white text-black border-rsx-blue  "
					aria-label="Close"
					on:click={onClose}
				>
					<Icon icon="material-symbols:close" class="h-6 w-6" />
				</button>
			</div>

			<div class="space-y-4 p-4">
				<p class="font-shapiro">
					SEEK Jr. is a one-day competition aimed at high school students, affording them the
					opportunity to collaborate in teams of 5 members to construct a lunar rover to navigate
					obstacles and complete tasks to find the perfect spot for a new lunar base. The principal
					objective of this event is to impart foundational principles of robotics within the
					context of space exploration to the forthcoming generation of scientists and engineers.
				</p>
				<p class="font-shapiro">
					In preparation for the competition, we will provide informative modules encompassing a
					range of important subjects. These modules will include an introduction to Arduino and
					Coding, basic sensor technologies, DC motors, Bluetooth, and other relevant topics. These
					educational resources will be made available to participants in the weeks preceding the
					event.
				</p>

				<div class="grid gap-4 md:grid-cols-3 py-4">
					<div>
						<h4 class="font-poly-mono text-sm uppercase text-rsx-silver">Date</h4>
						<p>Saturday, November 29, 2025</p>
                        <p>8:30 AM - 5:35 PM</p>
					</div>
					<div>
						<h4 class="font-poly-mono text-sm uppercase text-rsx-silver">Location</h4>
						<p>55 St George St, Toronto, ON M5S 0C9 — Myhal Centre for Engineering Innovation and Entrepreneurship (Engineering Society Arena)</p>
					</div>
					<div>
						<h4 class="font-poly-mono text-sm uppercase text-rsx-silver">Cost</h4>
						<p>$35 per student (covers materials and food)</p>
					</div>
				</div>

				<div class="space-y-2">
					<h3 class="font-poly-mono text-sm uppercase text-rsx-silver mb-0">Registration</h3>
					<p>
						Registration for SEEK Jr is open until Friday, October 24th, 2025 at 11:59 PM. To register your school's team, a <strong>teacher, parent, or adult guardian</strong> must register your team using the button below.
					</p>
					<p>
						The individual registering must accompany the team to the hackathon and remain with the team for the duration of the event. <strong>Only 12 teams will be admitted due to space availability. Spots will be first come, first serve.</strong>
					</p>
					<p>
						For questions or further information, contact us at
						<a href="mailto:seek.hackathon@rsx.skule.ca" class="underline">seek.hackathon@rsx.skule.ca</a>.
					</p>
				</div>

				<div class="flex flex-wrap gap-3 pt-2">
					<a
						href="https://docs.google.com/forms/d/e/1FAIpQLSejInT_DQreGuy4kGbNOh4dS5oF_5OnUFgkQ3x47rswCj7p8A/viewform?usp=dialog"
						target="_blank"
						class="border border-rsx-blue bg-rsx-blue/30 px-4 py-2 font-poly-mono uppercase hover:bg-rsx-blue hover:text-black"
						>Register Your Team</a
					>
					<a
						href="mailto:seek.hackathon@rsx.skule.ca"
						class="border border-white/30 px-4 py-2 font-poly-mono uppercase hover:bg-white hover:text-black"
						>Contact Us</a
					>
				</div>
			</div>
		</div>
	</div>
{/if}

<style>
	:global(body.overlay-open) {
		overflow: hidden;
	}
</style>
