<script lang="ts">
	import img from './images/projects/archi.jpeg';
	import { goto } from '$app/navigation';

	export let title: string;
	export let image: string;
	export let index: number;
</script>

<a
	class="outline outline-[1px] rounded-lg p-6  flex items-center flex-col text-center w-full hover:bg-slate-100 hover:cursor-pointer"
	href={`/projects/${index}`}
>
	<h1 class="text-2xl font-semibold ">{title}</h1>
	<img class="w-64 h-44 my-4 object-cover" src={image === undefined ? img : image} />
	<slot />
</a>
