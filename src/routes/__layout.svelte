<script>
	import { onMount } from 'svelte';

	let isReady = false;

	onMount(() => {
		isReady = true;
	});
</script>

{#if isReady}
	<slot />
{/if}

<style global>
	@import url('https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap');

	* {
		font-family: Ubuntu, sans-serif;
	}

	@tailwind base;
	@tailwind components;
	@tailwind utilities;

	/* width */
	::-webkit-scrollbar {
		width: 13px;
		background: transparent;
	}

	/* Track */
	::-webkit-scrollbar-track {
		background: transparent;
	}

	/* Handle */
	::-webkit-scrollbar-thumb {
		@apply bg-accent;
		border-radius: 10px;
		border: 4px solid #1f2a37;
	}

	/* Handle on hover */
	::-webkit-scrollbar-thumb:hover {
		background-color: rgba(61, 143, 246, 0.8);
	}

	::-webkit-scrollbar-track-piece {
		background: transparent;
	}
</style>
