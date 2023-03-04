<script lang="ts">
	import Project from './Project.svelte';

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
	<div class="grid grid-cols-1 md:grid-cols-2 md:pt-16 md:px-8 gap-16">
		<div class="mt-14 md:mt-0">
			{#each posts as post}
				<Project title={post.properties.Title.title[0].plain_text}>
					<p class="text-sm font-light">
						{limit_description_name_length(post.properties.Text.rich_text[0].plain_text)}
					</p>
				</Project>
			{/each}
		</div>
	</div>
</div>
