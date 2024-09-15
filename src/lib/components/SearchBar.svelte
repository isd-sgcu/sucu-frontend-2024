<script lang="ts">
	import { faSearch } from '@fortawesome/free-solid-svg-icons';
	import Fa from 'svelte-fa';

	export let value: string = '';
	let inputRef: HTMLInputElement;

	function handleClickIcon() {
		inputRef.focus();
	}
</script>

<div class="search-bar">
	<button on:click={handleClickIcon} type="button">
		<Fa icon={faSearch} class="w-5 h-5" />
	</button>

	<input
		type="text"
		class="w-full text-black focus:border-none focus:outline-none"
		placeholder="ค้นหา"
		bind:value
		bind:this={inputRef}
	/>
</div>

<style>
	.search-bar {
		@apply w-full flex items-center gap-3 px-4 py-3 rounded-sm border border-sucu-gray-light;
	}

	.search-bar:focus-within {
		@apply border-sucu-pink-03;
	}
</style>
