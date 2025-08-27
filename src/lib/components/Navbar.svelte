<script lang="ts">
	let isOpen = $state(false);

	import logo from '$lib/assets/images/RSX-Lockup-White.svg';
	import Icon from '@iconify/svelte';
	import { slide } from 'svelte/transition';
	import { quintInOut } from 'svelte/easing';
</script>

<nav
	class="mx-4 max-w-screen font-poly-mono text-lg text-white xl:mx-[3%] 2xl:mx-auto 2xl:max-w-350"
>
	<div class="mt-3 border-b px-2 pb-2 md:mt-6 md:px-6 md:pb-0.5">
		<div class="flex flex-row items-center justify-between md:items-baseline">
			<!-- mt-6 pb-1 -->
			<a href="/" class="" onclick={() => (isOpen = false)}>
				<img src={logo} alt="RSX Logo" class="h-10 object-contain lg:h-10" />
			</a>

			<div class="hidden gap-10 *:hover:font-bold md:flex lg:gap-22">
				<a href="subteams" class="">SUBTEAMS</a>
				<a href="outreach" class="">OUTREACH</a>
				<a href="sponsors" class="">SPONSORS</a>
				<a href="contact" class="">CONTACT</a>
			</div>
			<button class="mt-3 md:hidden" aria-label="Toggle menu" onclick={() => (isOpen = !isOpen)}>
				<Icon icon="material-symbols:menu" class="h-7 w-7" />
			</button>
		</div>
	</div>
	{#if isOpen}
		<div
			in:slide={{ duration: 300, easing: quintInOut }}
			out:slide={{ duration: 200, easing: quintInOut }}
			class="z-10 *:px-2 *:pt-4 *:active:border-b-2 *:active:font-bold md:hidden"
		>
			<a href="subteams" class="block border-b" onclick={() => (isOpen = false)}>SUBTEAMS</a>
			<a href="outreach" class="block border-b" onclick={() => (isOpen = false)}>OUTREACH</a>
			<a href="sponsors" class="block border-b" onclick={() => (isOpen = false)}>SPONSORS</a>
			<a href="contact" class="block border-b" onclick={() => (isOpen = false)}>CONTACT</a>
		</div>
	{/if}
</nav>
