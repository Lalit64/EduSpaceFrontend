<script>
	import axios from 'axios';
	import { onMount } from 'svelte';

	let videos = [];
	const getPosts = () => {
		axios.get('https://eduspace-gxp.herokuapp.com').then((res) => {
			videos = res.data.video;
			console.log(videos);
		});
	};
	onMount(getPosts);
</script>

<main class="w-full flex flex-col">
	<h1 class="text-3xl font-bold dark:text-white text-body">About These SDG's</h1>
	<!--	prettier-ignore-->
	<div class="flex p-3 h-full w-full flex-col">
			{#each videos as video}
				<div class="m-4">
					<h1 class="dark:text-white font-bold text-xl mb-2">
						{video.name}
					</h1>
					{#each video.source as source}
						<button class="w-1/4 m-2" on:click={() => {
						console.log("click")
					}}>
							<img class="w-full rounded-lg" src={`https://i.ytimg.com/vi/${source}/maxresdefault.jpg`} >
						</button>
					{/each}
				</div>
			{/each}
		</div>
</main>

<style>
	main {
		height: calc(100% - 64px);
	}

	@media (max-width: 770px) {
		main {
			display: flex;
			align-items: center;
			justify-content: center;
		}
	}
</style>
