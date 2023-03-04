<script>
	import About from './About.svelte';
	import Projects from './Projects.svelte';
	import Contact from './Contact.svelte';
	export let data;
</script>

<div class="absolute z-10 ">
	<div class="relative w-full mb-16 md:mb-[30vh]">
		<div class="pb-36 px-12  text-left">
			<h3 class="md:text-3xl ml-1 md:ml-2">Architect</h3>
			<h1 class="text-6xl font-semibold my-4 md:text-9xl">Carolina Suzano</h1>
			<h3 class="md:text-2xl">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sed est risus. Fusce
				vehicula libero ac elementum congue. In vitae elit ipsum. Aliquam erat volutpat.
			</h3>
		</div>
	</div>
	<About />
	<Projects posts={data.posts} />
	<Contact />
</div>
