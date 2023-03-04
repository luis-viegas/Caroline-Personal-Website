<script>
	import profilepic from './images/profilepic.png';
	import Skill from './Skill.svelte';
</script>

<div class="text-left px-14">
	<h1 class="text-5xl font-semibold md:text-7xl" id="about">About me</h1>
	<hr class="´border-solid border-y-1 border-black mt-1" />
	<div class="grid md:grid-cols-2  grid-cols-1 mt-10 md:my-20">
		<img class="mt-8 md:w-1/2 md:rounded-full md:ml-[25%]" src={profilepic} alt="Profile" />
		<div class="md:flex md:items-center">
			<ul class="my-10 text-xl font-medium md:text-3xl">
				<li>Ana Carolina Silva Suzano</li>
				<li>26/10/1998</li>
				<li>From Portugal</li>
			</ul>
		</div>
	</div>
	<div class="grid grid-cols-1 gap-8 md:grid-cols-2">
		<div>
			<Skill>
				<h3 class="font-medium text-2xl pb-2">
					<span class="">→</span> Digital Skills
				</h3>
				<ul>
					<li>Archicad</li>
					<li>Adobe InDesign</li>
					<li>Adobe Photoshop</li>
					<li>Microsoft Office</li>
				</ul>
			</Skill>
			<Skill>
				<h3 class="font-medium text-2xl pb-2">→ Languages</h3>
				<ul>
					<li>English</li>
					<li>Portuguese</li>
				</ul>
			</Skill>
			<Skill>
				<h3 class="font-medium text-2xl pb-2">→ Hobbies</h3>
				<ul>
					<li>Athletics</li>
					<li>Drawing</li>
					<li>Photography</li>
				</ul>
			</Skill>
			<Skill>
				<h3 class="font-medium text-2xl pb-2">→ Organizational Skills | Certificate</h3>
				<p>
					Good teamwork and communication acquired through the participation in volunteering
					activities.
					<br />
					<br />
					Great ability in speaking in English due to the fact of having Cambridge B2 level of Bristol
					School in Maia.
				</p>
			</Skill>
		</div>
		<div>
			<Skill>
				<h3 class="font-medium text-2xl pb-2">→ Education</h3>
				<p class="font-light text-sm">Since 2016</p>
				<p>Faculty of Architecture of the University of Porto - Master Degree in Architecture</p>
			</Skill>
			<Skill>
				<h3 class="font-medium text-2xl pb-2">→ Professional Experience</h3>
				<p class="font-light text-sm">2019-2020</p>
				<p>Bartender in BoomBar</p>
			</Skill>
			<Skill>
				<h3 class="font-medium text-2xl pb-2">→ Extracurricular Activities</h3>
				<p class="font-light text-sm">2018-2019</p>
				<p class="mb-4">Volunteer at Open House Porto</p>

				<p class="font-light text-sm">2014-2015</p>
				<p class="mb-4">Volunteer at a vacation camp called Férias Desportivas da Maia</p>

				<p class="font-light text-sm">2014-2016</p>
				<p class="mb-4">Voleyball</p>

				<p class="font-light text-sm">2008-2014 | 2016 until now</p>
				<p>Athletics</p>
			</Skill>
		</div>
	</div>
</div>
