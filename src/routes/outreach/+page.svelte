<script lang="ts">
	import hero from '$lib/assets/images/outreach/hero.png?enhanced';
	import caution from '$lib/assets/images/outreach/caution.svg';

	import event_aircraft_industry_night from '$lib/assets/images/outreach/event_aircraft_industry_night.png?enhanced';
	import event_aircraft_industry_night_2 from '$lib/assets/images/outreach/event_aircraft_industry_night_2.png?enhanced';
	import event_aircraft_industry_night_3 from '$lib/assets/images/outreach/event_aircraft_industry_night_3.png?enhanced';

	import event_skulefest from '$lib/assets/images/outreach/event_skulefest.png?enhanced';
	import event_skulefest_2 from '$lib/assets/images/outreach/event_skulefest_2.png?enhanced';
	import event_skulefest_3 from '$lib/assets/images/outreach/event_skulefest_3.png?enhanced';

	import event_skule150_gala from '$lib/assets/images/outreach/event_skule150_gala.png?enhanced';
	import event_skule150_gala_2 from '$lib/assets/images/outreach/event_skule150_gala_2.png?enhanced';
	import event_skule150_gala_3 from '$lib/assets/images/outreach/event_skule150_gala_3.png?enhanced';

	import event_space_ex_conf from '$lib/assets/images/outreach/event_space_ex_conf.png?enhanced';
	import event_space_ex_conf_2 from '$lib/assets/images/outreach/event_space_ex_conf_2.png?enhanced';
	import event_space_ex_conf_3 from '$lib/assets/images/outreach/event_space_ex_conf_3.png?enhanced';

	import event_campus_day from '$lib/assets/images/outreach/event_campus_day.png?enhanced';

	import event_can_space_conf from '$lib/assets/images/outreach/event_can_space_conf.png?enhanced';
	import event_can_space_conf_2 from '$lib/assets/images/outreach/event_can_space_conf_2.png?enhanced';
	import event_can_space_conf_3 from '$lib/assets/images/outreach/event_can_space_conf_3.png?enhanced';

	import OutreachCard from '$lib/components/OutreachCard.svelte';
</script>

<main class="max-w-screen p-8 font-shapiro text-white md:mx-4 xl:mx-[3%] 2xl:mx-auto 2xl:max-w-350">
	<h1 class="mb-4 font-poly text-5xl">Outreach</h1>
	<div class="flex flex-col gap-8 font-poly-mono md:flex-row md:gap-16">
		<div class="flex w-full flex-col">
			<p class="mb-4 uppercase">
				RSX runs with the support of our community, including the University of Toronto,
				mentors/alumni, and sponsors who support our mission and encourage our members to pursue
				their passions in space engineering and robotics.
			</p>
			<img src={caution} alt="caution" class="h-full w-full scale-101 object-cover" />
		</div>
		<div class="flex w-full flex-col gap-16">
			<p class="uppercase">
				We love to show our passion for the space industry by attending conferences, expos, and
				other events. Through our outreach activities in the Greater Toronto Area, we hope to give
				back to the community and help spark a passion for robotics and space engineering in
				elementary and high school students.
			</p>
		</div>
		<div class="w-full">
			<enhanced:img src={hero} alt="hero" class="object-contain" />
		</div>
	</div>
	<div class="mt-16 grid grid-cols-1 gap-16 md:grid-cols-3">
		<OutreachCard
			images={[
				{ src: event_aircraft_industry_night, alt: 'Aircraft Design & Aerospace Industry Night' },
				{ src: event_aircraft_industry_night_2, alt: 'Aircraft Design & Aerospace Industry Night' },
				{ src: event_aircraft_industry_night_3, alt: 'Aircraft Design & Aerospace Industry Night' }
			]}
			title="Aircraft Design & Aerospace Industry Night"
			description="In January 2025 our CANSAT team attended the Aircraft Design and Aerospace Industry Night hosted by the Engineering Career Center. We had the opportunity to represent our team and network with panelists from MDA Space, Boeing, Safran, and Bombardier. Hearing more about the panelists' expertise and their insights into the future of aerospace innovation was truly inspiring!"
		/>
		<OutreachCard
			images={[
				{ src: event_skulefest, alt: 'SkuleF!est 2024' },
				{ src: event_skulefest_2, alt: 'SkuleF!est 2024' },
				{ src: event_skulefest_3, alt: 'SkuleF!est 2024' }
			]}
			title="SkuleF!est 2024"
			description="Part of the Engineering Frosh events at UofT involves SkuleF!est, a carnival event involving the engineering design teams as a chance to introduce new students to the school on an informal basis. We gave students the challenge of pushing a ball into a goal with the rover! It was great to see students interact with the rover and talk about their passion for space robotics."
		/>
		<OutreachCard
			images={[
				{ src: event_skule150_gala, alt: 'Skule 150 Gala' },
				{ src: event_skule150_gala_2, alt: 'Skule 150 Gala' },
				{ src: event_skule150_gala_3, alt: 'Skule 150 Gala' }
			]}
			title="Skule 150 Gala"
			description="In March 2023 we attended the University of Toronto's Skule 150 Gala where we celebrated 150 years of Engineering at UofT! It was great to meet past alumni, to connect with our current students, and to promote our team within our faculty."
		/>
		<OutreachCard
			images={[
				{ src: event_can_space_conf, alt: 'Canadian Space Exploration Conference' },
				{ src: event_can_space_conf_2, alt: 'Canadian Space Exploration Conference' },
				{ src: event_can_space_conf_3, alt: 'Canadian Space Exploration Conference' }
			]}
			title="Canadian Space Conference 2023"
			description="In January we showcased our team at Canada's largest Space Conference hosted in Montreal. We look forward to attending even more conferences in the future and continuing to with connect passionate students & industry professionals who can provide insights into the new branches and technologies in this exciting ever-changing industry!"
		/>
		<OutreachCard
			images={[
				{ src: event_space_ex_conf, alt: 'Space Exploration Conference' },
				{ src: event_space_ex_conf_2, alt: 'Space Exploration Conference' },
				{ src: event_space_ex_conf_3, alt: 'Space Exploration Conference' }
			]}
			title="Space Exploration Conference 2022"
			description="We attended the Space Exploration Conference hosted at Concordia University in Montreal in Winter 2022. Our team had the opportunity to meet others in the Space Exploration community and connect on the topics of robotics, space medicine, space mining, and more. It was amazing to meet different groups in diverse fields within the Space industry and showcase our Mars Rover and the work we do at RSX!"
		/>
		<OutreachCard
			images={[{ src: event_campus_day, alt: 'Campus Day' }]}
			title="Fall Campus Day"
			description="RSX actively participates in UofT Engineering events to engage with our community and showcase our work. We connect with prospective engineering students and community members to share our passion for space exploration and inspire interest in robotics and aerospace technologies."
		/>
		<OutreachCard
			images={[
				{
					youtube: 'https://youtu.be/N1UOPcELjNs?si=P-om3P5Ju418Ja8x',
					title: 'Canadian Space Exploration Conference'
				}
			]}
			title="Robotics Day at the Ontario Science Centre"
		/>
	</div>
</main>
