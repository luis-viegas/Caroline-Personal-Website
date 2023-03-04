<script>
	import '../app.css';
	import Nav from './Nav.svelte';
</script>

<div class="flex justify-center">
	<div class="md:max-w-[1200px] w-full relative">
		<Nav />
		<slot />
	</div>
</div>
<div
	class="blur_purple1 md:w-[35vw] md:h-[65vh] md:absolute fixed  top-[15vh] left-[5vw] z-0 w-32 h-32"
/>
<div
	class="blur_purple1 md:w-[25vw] md:h-[45vh] md:absolute fixed md:top-[5vh] top-[45vh] right-[15vw] z-0 w-24 h-24"
/>
