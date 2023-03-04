<script>
	import Icon from 'svelte-icons-pack/Icon.svelte';
	import HiOutlineMail from 'svelte-icons-pack/hi/HiOutlineMail';
	import HiOutlinePhone from 'svelte-icons-pack/hi/HiOutlinePhone';
	import AiOutlineFacebook from 'svelte-icons-pack/ai/AiOutlineFacebook';
</script>

<div class="px-14 text-left mt-28 mb-48">
	<h1 class="text-5xl font-semibold md:text-7xl" id="contact">Contact</h1>
	<hr class="´border-solid border-y-1 border-black mt-1" />
	<ul class="mt-8">
		<li class="mb-4">
			<a class="flex items-center" href="tel:+351913113370">
				<Icon src={HiOutlinePhone} className="inline w-[24px] h-[24px] mr-2" />
				+351 913113370
			</a>
		</li>
		<li class="mb-4">
			<a class="flex items-center" href="mailto:a.c.suzano@gmail.com">
				<Icon src={HiOutlineMail} className="inline w-[24px] h-[24px] mr-2" />
				a.c.suzano@gmail.com
			</a>
		</li>
		<li class="mb-4">
			<a class="flex items-center" href="https://www.facebook.com/carolina.suzano.3">
				<Icon src={AiOutlineFacebook} className="inline w-[24px] h-[24px] mr-2" />
				Carolina Suzano
			</a>
		</li>
	</ul>
</div>
