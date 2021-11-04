<script>
	import { supabase } from '$lib/supabase';

	let loading = false;

	async function signOut() {
		try {
			loading = true;
			let { error } = await supabase.auth.signOut();
			if (error) throw error;
		} catch (error) {
			return;
		} finally {
			loading = false;
			location.replace('/');
		}
	}

	export let home;
	export let about;
</script>

<div class="nav w-full sticky h-16 top-0 z-50 dark:bg-gray-800 flex justify-center">
	<div class="h-full w-1/2 flex items-center justify-between dark:text-white text-body">
		<h1 class="font-bold flex text-xl">
			<img src="/graphics/Logo.svg" alt="" class="w-7 mr-2" /> EduSpace
		</h1>
	</div>
	<div class="flex items-center text-body dark:text-white">
		<div class="m-3">
			<a href="/" class="relative" class:active={home}>Home</a>
		</div>
		<div class="m-3">
			<a href="/about" class="relative" class:active={about}>About</a>
		</div>
		<button
			on:click={signOut}
			disabled={loading}
			class="ring-accent ring-2 rounded p-2 m-3 px-4 hover:bg-accent dark:active:bg-gray-700 active:bg-gray-300 transition duration-500"
		>
			Sign Out
		</button>
	</div>
</div>

<style>
	.nav {
		box-shadow: 0 1px 6px rgba(0, 0, 0, 0.4);
	}

	.active::after {
		@apply bg-accent rounded-full absolute w-full h-1/6;
		content: '';
		left: 0;
		top: 1.5rem;
	}

	.relative:hover:after {
		@apply bg-accent rounded-full absolute w-full h-1/6;
		content: '';
		left: 0;
		top: 1.5rem;
	}
</style>
