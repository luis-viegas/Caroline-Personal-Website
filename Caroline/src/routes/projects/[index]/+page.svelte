<script lang="ts">
	import { CarouselTransition } from 'flowbite-svelte';
	export let data;
	let title = data.post.properties.Title.title[0].plain_text;

	const images = data.post.properties.Images.files.map((image, index) => {
		return {
			id: index,
			imgurl: image.file.url,
			alt: 'Project Image',
			name: `${index} Project Image`
		};
	});

	let text = data.post.properties.Text.rich_text[0].plain_text;
</script>

<div class="z-10 relative px-6 mt-[-80px] md:mt-0 md:px-0">
	<h1 class="text-center text-5xl md:text-8xl mb-20 font-medium">{title}</h1>
	<div class="w-full mb-20">
		{#if images.length > 0}
			<CarouselTransition
				divClass="overflow-hidden relative h-56 rounded-lg md:h-[50vh]"
				{images}
				transitionType="fly"
				transitionParams={{ delay: 250, duration: 300 }}
				showCaptions={false}
				showThumbs={false}
			/>
		{/if}
	</div>
	<p class="whitespace-pre-wrap">{text}</p>
</div>
