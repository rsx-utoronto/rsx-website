<script lang="ts">
	import mechanical from '$lib/assets/images/subteams/mechanical.png?enhanced';
	import software from '$lib/assets/images/subteams/software.png?enhanced';
	import arm from '$lib/assets/images/subteams/arm.png?enhanced';
	import aerial from '$lib/assets/images/subteams/aerial.png?enhanced';
	import science from '$lib/assets/images/subteams/science.png?enhanced';
	import marketing from '$lib/assets/images/subteams/marketing.png?enhanced';
	import electrical from '$lib/assets/images/subteams/electrical.png?enhanced';
	import drone from '$lib/assets/images/subteams/drone.png?enhanced';

	import SubteamCard from '$lib/components/SubteamCard.svelte';
</script>

<main
	class="mx-0 max-w-screen p-8 font-shapiro text-white md:mx-4 xl:mx-[3%] 2xl:mx-auto 2xl:max-w-350"
>
	<h1 class="mb-4 font-poly text-5xl">Subteams</h1>
	<div class="grid gap-16 md:grid-cols-2 lg:grid-cols-3">
		<SubteamCard
			imageSrc={mechanical}
			imageAlt="mechanical"
			title="MECHANICAL"
			slides={[
				'The Mechanical subteam is responsible for creating the mechanical components that allow the rover to carry out all of its tasks. For instance, the design and manufacture of the rover’s drive system, wheels, and chassis are all responsibilities of our members.',
				'As a member of the mechanical team, you will work on tasks from conceptual design to manufacture, and will have the opportunity to develop hands-on skills in machining, material selection, and more.',
				[
					'CAD 3D modeling software - Solidworks, Fusion360',
					'Manufacturing - Machining, Laser cutting, Carbon fiber layups, etc.',
					'Knowledge of machine design',
					'Experience with power tools and assembly'
				]
			]}
		/>
		<SubteamCard
			imageSrc={software}
			imageAlt="software"
			title="SOFTWARE"
			slides={[
				'The Software Subteam consists of three divisions: Controls, Autonomy, and Communications. Members are responsible for maintaining, integrating, and developing the codebase which enables each of these branches to be operational for all of the RSX rover’s functions. ',
				'You will have the unique opportunity to be involved in the development of an entire code-base for a robotic system using highly sought after industry standards, frameworks, and hardware.',
				[
					'Experience with Git, bash scripting, ROS, Python, C/C++, MATLAB, embedded/low-level programming are all useful skills',
					'A basic understanding of control theory, advanced control theory algoriths, an eagerness to learn, knowledge of path planning algorithms, state estimation, and/or computer networking'
				]
			]}
		/>
		<SubteamCard
			imageSrc={arm}
			imageAlt="arm"
			title="ARM"
			slides={[
				'The Arm Subteam is responsible for designing and developing the robotic arm the rover uses to interact with its environment and accomplish certain competition tasks. ',
				'Our members work on everything from mechanical design to the software that controls the system.',
				[
					'CAD 3D modeling software - Fusion360, Solidworks',
					'Embedded systems design',
					'Software and controls - CAN bus, PID controllers, Inverse kinematics, ROS (C++ and Python), etc.',
					'Manufacturing - Carbon fiber layups, Machining',
					'Design and integration of Firmware, Motor drives, Linkages, Gear boxes, etc.',
					'Willingness to learn'
				]
			]}
		/>
		<SubteamCard
			imageSrc={aerial}
			imageAlt="aerial"
			title="AERIAL"
			slides={[
				'The Aerial team focuses on producing a space probe for entry into the CANSAT competition, hosted by the American Astronautical Society in Virginia, USA.',
				'This project involves the design of a probe that is to be launched in a small scale sounding rocket. The probe must survive launch, decouple from the launch vehicle and then recover itself, while accomplishing additional tasks specific to each year along the way.',
				[
					'CAD 3D modeling software - Fusion 360, SolidWorks, CATIA V5, etc',
					'EDA/PCB Design software - KiCad, Altium, etc.',
					'CFD simulation software - ANSYS Fluent, Solidworks, etc',
					'FEA structural analysis - ANSYS Mechanical, Solidworks, Fusion360, etc.',
					'Integration skills - Designing for modularity as well as manufacturability and foreseeing potential conflicts'
				]
			]}
		/>
		<SubteamCard
			imageSrc={science}
			imageAlt="science"
			title="SCIENCE"
			slides={[
				'The Science Subteam focuses on any payload-specific competition tasks. This varies from very biology-specific tasks (i.e. analyzing soil samples for life detection) and geology-specific tasks (i.e. identifying and dating rocks) to engineering-specific tasks like building a dirt collecting system that minimizes cross-contamination.',
				[
					'CAD 3D modeling software - Fusion360, SolidWorks',
					'CAD circuit software - KiCad',
					'Research - Extraterrestrial geology, Astrobiology, Life detection',
					'Instrumentation and Experimental Design - In-Situ wet lab, Chemical analysis, Fluorescence techniques',
					'Willingness to learn'
				]
			]}
		/>
		<SubteamCard
			imageSrc={marketing}
			imageAlt="marketing and events"
			title="MARKETING & EVENTS"
			slides={[
				'The Marketing & Events team is responsible for marketing, outreach, and sponsorship tasks.',
				'If you are on the M&E team, you are able to join one (1) other technical subteam.',
				[
					'Professional communication (verbal and written)',
					'Public speaking and presentation skills',
					'Experience in graphic design and/or social media management using tools like Canva, Photoshop, Figma, etc.'
				]
			]}
		/>
		<SubteamCard
			imageSrc={electrical}
			imageAlt="electrical"
			title="ELECTRICAL"
			slides={[
				' The Electrical Subteam designs all electrical systems that allow the software and mechanical subsystems to interact with each other. Responsibilities range from designing motor driver printed circuit board systems to powering the entire rover.',
				'As an Electrical member, you will be configuring robotic sensors and the electronic components which make up the core building blocks of the rover’s operations.',
				[
					'CAD circuit software - KiCad, Altium',
					'PCB design and manufacturing',
					'Soldering',
					'Bench-Top Skills (Multimeter, Oscilloscope, Proto-boarding)'
				]
			]}
		/>
		<SubteamCard
			imageSrc={drone}
			imageAlt="drone"
			title="DRONE"
			slides={[
				'The drone team is currently working on building multiple drones that will support the rover by scouting the area during competitions, as well as supporting Aerial’s drop testing plan.',
				'As a drone member, you can expect to be part of a smaller subteam, and will be involved in designing, building, and testing the drones.',
				[
					'SolidWorks',
					'Soldering',
					'Computer vision',
					'Bench-Top Skills (Multimeter, Oscilloscope, Proto-boarding)'
				]
			]}
		/>
	</div>
</main>
