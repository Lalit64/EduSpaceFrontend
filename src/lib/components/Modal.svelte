<script>
	export let hidden;
	export let src;
</script>

<div
	class:hidden
	class="w-1/2 h-2/4 absolute top-1/4 rounded-xl z-50 dark:bg-gray-700 shadow-lg flex items-center justify-center"
>
	{#if hidden === false}
		<iframe
			width="980"
			height="500"
			src={`https://www.youtube.com/embed/${src}`}
			title="YouTube video player"
			frameborder="0"
			allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
			allowfullscreen
			class="rounded-xl"
		/>
	{/if}
	<button
		on:click={() => {
			hidden = true;
		}}
		class="dark:bg-gray-800 rounded-full h-8 w-8 flex items-center justify-center dark:text-white absolute top-4 right-4"
	>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			class="icon icon-tabler icon-tabler-minimize"
			width="20"
			height="20"
			viewBox="0 0 24 24"
			stroke-width="1.5"
			stroke="currentColor"
			stroke-linecap="round"
			stroke-linejoin="round"
		>
			<path stroke="none" d="M0 0h24v24H0z" fill="none" />
			<path d="M15 19v-2a2 2 0 0 1 2 -2h2" />
			<path d="M15 5v2a2 2 0 0 0 2 2h2" />
			<path d="M5 15h2a2 2 0 0 1 2 2v2" />
			<path d="M5 9h2a2 2 0 0 0 2 -2v-2" />
		</svg>
	</button>
</div>
