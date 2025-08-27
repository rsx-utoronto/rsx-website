<script lang="ts">
	import Icon from '@iconify/svelte';
	import sponsorship_package from '$lib/assets/pdfs/RSX Sponsorship Package 2025-2026.pdf';

	import solidworks from '$lib/assets/images/sponsors/solidworks.svg';
	import ansys from '$lib/assets/images/sponsors/ansys.svg';
	import altium from '$lib/assets/images/sponsors/altium.svg';
	import cpsif from '$lib/assets/images/sponsors/cpsif.png?enhanced';
	import percepio from '$lib/assets/images/sponsors/percepio.jpg?enhanced';
	import samadhin from '$lib/assets/images/sponsors/samadhin-dark.png?enhanced';
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
	import engsoc from '$lib/assets/images/sponsors/eng_soc.png?enhanced';
	import misumi from '$lib/assets/images/sponsors/misumi.png?enhanced';
	import electromate from '$lib/assets/images/sponsors/electromate.png?enhanced';
	import laifual from '$lib/assets/images/sponsors/laifual.png?enhanced';
</script>

<main class="mx-0 p-8 font-shapiro text-white md:mx-4 xl:mx-[3%] 2xl:mx-auto 2xl:max-w-350">
	<h1 class="mb-4 font-poly text-5xl">Sponsors</h1>
	<div class="flex flex-col gap-8 md:flex-row md:gap-16">
		<div class="flex flex-col gap-4 font-poly-mono uppercase lg:w-full lg:justify-between xl:w-4/5">
			<p>
				RSX runs on the generous support of our sponsors and donors, which enable us to improve
				further, and give students more opportunities to learn about engineering in a hands-on
				environment.
			</p>
			<p>The RSX team thanks all of our sponsors for their invaluable support.</p>
		</div>

		<div class="flex flex-col border font-shapiro">
			<h2 class="px-4 py-3 text-3xl font-bold uppercase">Interested in supporting us?</h2>
			<hr class="" />
			<div class="flex h-full flex-col justify-between">
				<p class="m-4 md:text-lg">
					If your organization aligns with our values of empowering young space robotics
					enthusiasts, we would love to have your support! In our 2025/2026 RSX Sponsorship package,
					you can find past achievements and our sponsor benefit tiers. Don't hesitate to reach out
					for more details.
				</p>
				<div class="flex flex-col items-center justify-between md:flex-row md:items-end md:gap-4">
					<p class="mx-auto my-3 pl-4 text-center uppercase">we thank you for your interest</p>
					<a
						href={sponsorship_package}
						download="RSX Sponsorship Package 2025-2026.pdf"
						class="flex w-full cursor-pointer flex-row items-center justify-center gap-2 border-t px-[2%] py-1 py-3 text-center font-poly-mono hover:bg-white hover:text-black md:w-3/5 md:border-l md:px-[5%]"
					>
						<p class="">2025/2026 SPONSORSHIP PACKAGE</p>
						<Icon icon="material-symbols:arrow-outward" class="mt-0.5 text-xl" />
					</a>
				</div>
			</div>
		</div>
	</div>

	<div class="mt-16 flex flex-col gap-4 bg-white p-6 font-shapiro text-black">
		<h3 class="text-3xl font-bold">PLATINUM TIER SPONSORS</h3>
		<div
			class="mx-auto flex flex-col items-center justify-between gap-4 *:object-contain md:flex-row md:flex-wrap md:gap-8"
		>
			<img src={solidworks} alt="solidworks" class="h-14 max-w-40 object-scale-down" />
			<img src={ansys} alt="ansys" class="h-14 max-w-40 object-scale-down" />
			<img src={altium} alt="altium" class="h-14 max-w-40 object-scale-down" />
			<enhanced:img src={cpsif} alt="cpsif" class="h-14 w-auto object-scale-down" />
			<enhanced:img src={percepio} alt="percepio" class="h-14 max-w-50 object-scale-down" />
			<enhanced:img src={samadhin} alt="samadhin" class="no-filter h-14 w-auto object-scale-down" />
			<enhanced:img src={engsoc} alt="engsoc" class="h-14 max-w-50 object-scale-down" />
		</div>
	</div>

	<div class="mt-16 flex flex-col gap-4 bg-white p-6 font-shapiro text-black">
		<h3 class="text-3xl font-bold">GOLD TIER SPONSORS</h3>
		<div
			class="mx-10 flex flex-col items-center justify-between gap-4 *:object-contain md:flex-row md:flex-wrap md:gap-8"
		>
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
		</div>
	</div>

	<div class="mt-16 flex flex-col gap-4 bg-white p-6 font-shapiro text-black">
		<h3 class="text-3xl font-bold">SILVER TIER SPONSORS</h3>
		<div
			class="mx-10 flex flex-col items-center justify-center gap-4 *:object-contain md:flex-row md:flex-wrap md:gap-10"
		>
			<enhanced:img src={luxmodus} alt="luxmodus" class="h-14 max-w-40 object-scale-down" />
			<enhanced:img src={wurth} alt="wurth" class="h-14 max-w-40 object-scale-down" />
			<enhanced:img src={talmolder} alt="talmolder" class="h-14 max-w-45 object-scale-down" />
			<enhanced:img src={utias} alt="utias" class="h-14 w-auto object-scale-down" />
			<enhanced:img src={laifual} alt="laifual" class="h-6 w-auto object-scale-down" />
			<enhanced:img src={misumi} alt="misumi" class="h-8 w-auto object-scale-down" />
		</div>
	</div>

	<div class="mt-16 flex flex-col gap-4 bg-white p-6 font-shapiro text-black">
		<h3 class="text-3xl font-bold">BRONZE TIER SPONSORS</h3>
		<div
			class="mx-10 flex flex-col items-center justify-center gap-4 md:flex-row md:flex-wrap md:gap-8"
		>
			<enhanced:img src={polymaker} alt="polymaker" class="h-11 w-auto object-scale-down" />
			<enhanced:img src={pcbway} alt="pcbway" class="h-14 w-auto object-scale-down" />
			<img src={digikey} alt="digikey" class="h-9 object-scale-down" />
			<enhanced:img src={electromate} alt="electromate" class="h-14 w-auto object-scale-down" />
		</div>
	</div>
</main>
