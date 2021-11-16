<script>
	import Navbar from '$lib/components/Navbar/Navbar.svelte';
</script>

<main class="w-screen h-screen dark:bg-gray-800 text-body dark:text-white">
	<Navbar action={true} />
	<div class="banner h-2/3 w-full bg-gray-900 font-bold flex items-center">
		<div class="container mx-auto">
			<div class="flex justify-center flex-col">
				<h1 class="text-8xl font-bold text-body">Take action</h1>
				<p class="text-6xl text-accent">Against</p>
			</div>
		</div>
	</div>
</main>

<style>
	.banner {
		background-size: cover;
		background-position: center;
		background-repeat: no-repeat;
		background-image: url(/graphics/windpower.jpg);
	}
</style>
