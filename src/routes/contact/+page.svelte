<script>
	import Icon from '@iconify/svelte';
	import { page } from '$app/stores';

	$: isSuccess = $page.url.searchParams.get('success') === 'true';
</script>

<main class="max-w-screen p-8 font-shapiro text-white md:mx-4 xl:mx-[3%] 2xl:mx-auto 2xl:max-w-350">
	<div class="mx-auto flex flex-col border font-shapiro md:max-w-[50%]">
		<h2 class="px-4 py-3 text-3xl font-bold uppercase">Contact</h2>
		<hr class="" />
		<div class="flex h-full flex-col justify-between">
			{#if isSuccess}
				<div class="flex flex-col items-center gap-4 p-8 text-center">
					<Icon icon="material-symbols:check" class="text-5xl text-rsx-teal" />
					<h3 class="text-2xl font-bold uppercase">Message Sent</h3>
					<p class="md:text-lg">Thanks for reaching out. We'll get back to you soon.</p>
					<a
						href="/contact"
						class="w-full border border-rsx-teal bg-rsx-teal/20 px-4 py-3 font-poly-mono text-white uppercase transition-colors hover:bg-rsx-teal hover:text-black md:w-auto"
					>
						Send Another Message
					</a>
				</div>
			{:else}
				<p class="m-4 md:text-lg">
					If you have any questions or would like to get in touch with us, you can fill out the form
					below or reach out through our <a
						href="https://www.instagram.com/rsx.utoronto?igsh=MTBqd3NvOGl0N3RlcA=="
						class=" underline">Instagram</a
					>.
				</p>
				<form action="https://formsubmit.co/rsx.utoronto@gmail.com" method="POST">
					<div class="p-4">
						<div class="mb-4 flex flex-col gap-4 md:flex-row">
							<div class="w-full">
								<label for="name" class="mb-1 block font-poly-mono text-sm uppercase">Name</label>
								<input
									type="text"
									name="name"
									id="name"
									required
									class="w-full border border-white bg-black p-2 focus:border-rsx-teal focus:outline-none"
									placeholder="Your Name"
								/>
							</div>

							<div class="w-full">
								<label for="email" class="mb-1 block font-poly-mono text-sm uppercase">Email</label>
								<input
									type="email"
									name="email"
									id="email"
									required
									class="w-full border border-white bg-black p-2 focus:border-rsx-teal focus:outline-none"
									placeholder="your.email@example.com"
								/>
							</div>
						</div>

						<div class="mb-4">
							<label for="subject" class="mb-1 block font-poly-mono text-sm uppercase"
								>Subject</label
							>
							<input
								type="text"
								name="subject"
								id="subject"
								required
								class="w-full border border-white bg-black p-2 focus:border-rsx-teal focus:outline-none"
								placeholder="Subject"
							/>
						</div>

						<div class="mb-4">
							<label for="message" class="mb-1 block font-poly-mono text-sm uppercase"
								>Message</label
							>
							<textarea
								name="message"
								id="message"
								rows="5"
								required
								class="w-full border border-white bg-black p-2 focus:border-rsx-teal focus:outline-none"
								placeholder="Your message..."
							></textarea>
						</div>

						<input type="hidden" name="_subject" value="RSX Contact Form Submission" />
						<input
							type="hidden"
							name="_next"
							value="https://rsx-website.marketing-518.workers.dev/contact?success=true"
						/>
						<!-- temp address while dns is being updated-->

						<button
							type="submit"
							class="w-full border border-rsx-teal bg-rsx-teal/30 px-4 py-3 font-poly-mono text-white uppercase transition-colors hover:bg-rsx-teal hover:text-black"
						>
							Send Message
						</button>
					</div>
				</form>
			{/if}
		</div>
	</div>
</main>
