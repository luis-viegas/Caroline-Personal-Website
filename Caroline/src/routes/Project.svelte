<script lang="ts">
	import img from './images/projects/archi.jpeg';

	export let title: string;
</script>

<div class="outline outline-[1px] rounded-lg p-6 mb-8">
	<h1 class="text-2xl font-semibold ">{title}</h1>
	<img class="w-full my-4" src={img} />
	<slot />
</div>
