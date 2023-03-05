<script lang="ts">
	import Project from './ProjectCard.svelte';

	export let posts;
	console.log(posts);

	function limit_description_name_length(name: string) {
		if (name.length > 250) {
			return name.slice(0, 250) + '...';
		} else {
			return name;
		}
	}
</script>

<div class="px-14 text-left mt-28">
	<h1 class="text-5xl font-semibold md:text-7xl" id="projects">Projects</h1>
	<hr class="´border-solid border-y-1 border-black mt-1" />
	<div class="mt-14 md:mt-0 pt-14 flex justify-between">
		{#each posts as post, index}
			<Project
				title={post.properties.Title.title[0].plain_text}
				image={post.properties.Images.files[0]?.file.url}
				{index}
			>
				<p class="text-sm font-light">
					{limit_description_name_length(post.properties.Text.rich_text[0].plain_text)}
				</p>
			</Project>
		{/each}
	</div>
</div>
