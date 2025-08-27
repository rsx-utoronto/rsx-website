<script>
	import Icon from '@iconify/svelte';
</script>

<main class="max-w-screen p-8 font-shapiro text-white md:mx-4 xl:mx-[3%] 2xl:mx-auto 2xl:max-w-350">
	<div class="mx-auto flex flex-col border font-shapiro md:max-w-[50%]">
		<h2 class="px-4 py-3 text-3xl font-bold uppercase">Contact Info</h2>
		<hr class="" />
		<div class="flex h-full flex-col justify-between">
			<p class="m-4 md:text-lg">
				If you have any questions or would like to get in touch with us, you can reach out to us at
				the email below or through our socials.
			</p>
			<div class="flex flex-col items-center md:flex-row">
				<a
					href="mailto:marketing@rsx.skule.ca"
					class="flex w-full cursor-pointer flex-row items-center justify-center gap-2 border-t px-[5%] py-3 text-center font-poly-mono hover:bg-white hover:text-black md:w-1/2 md:border-r"
				>
					<p class="uppercase">marketing@rsx.skule.ca</p>
					<Icon icon="material-symbols:arrow-outward" class="mt-0.1 text-xl" />
				</a>

				<a
					href="https://www.instagram.com/rsx.utoronto?igsh=MTBqd3NvOGl0N3RlcA=="
					class="flex w-full cursor-pointer flex-row items-center justify-center gap-2 border-t px-[5%] py-3 text-center font-poly-mono hover:bg-white hover:text-black md:w-1/2 md:border-l"
				>
					<Icon icon="mdi:instagram" class="mt-0.1 text-xl" />
					<p class="uppercase">rsx.utoronto</p>
				</a>
			</div>
		</div>
	</div>
</main>
