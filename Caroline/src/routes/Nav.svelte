<script>
	import HiOutlineDocumentDownload from 'svelte-icons-pack/hi/HiOutlineDocumentDownload';
	import FaSolidHamburger from 'svelte-icons-pack/fa/FaSolidHamburger';
	import Icon from 'svelte-icons-pack/Icon.svelte';
	import { tweened } from 'svelte/motion';
	import { Hamburger } from 'svelte-hamburgers';
	import CV from '$lib/assets/CV.pdf';
	let show = false;

	function change() {
		show = !show;
		progressHeight.set(show ? 60 : 0);
		progressOpacity.set(show ? 100 : 0);
	}

	const progressHeight = tweened(0, {
		duration: 500
	});

	const progressOpacity = tweened(0, {
		duration: 500
	});
</script>

<div class="py-4  flex px-7 justify-between items-center mt-1 md:px-16 ">
	<a class=" hover:text-purple-400 outline outline-1 rounded-full px-4 py-2" href={CV} download>
		Download my CV
		<Icon src={HiOutlineDocumentDownload} className="inline w-[20px] h-[20px] mb-1 " />
	</a>
	<Hamburger on:click={change} bind:show />
</div>
<div style="height: {$progressHeight}%; opacity: {$progressOpacity}%" class="text-center mt-28">
	<ul class="text-6xl md:text-7xl">
		<li class="mb-16 hover:text-purple-400">
			<a on:click={change} href="#about">About me</a>
		</li>
		<li class="mb-16 hover:text-purple-400">
			<a on:click={change} href="#projects">Projects</a>
		</li>
		<li class="mb-16 hover:text-purple-400">
			<a on:click={change} href="#contact">Contact</a>
		</li>
	</ul>
</div>
