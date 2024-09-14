<script lang="ts">
	import DropdownItem from '$lib/components/Dropdown/DropdownItem.svelte';

	export let items: string[] = [];
	export let currentChoice: string | null = null;
</script>

<div
	class="flex flex-col outline outline-1 outline-sucu-gray rounded-sm gap-1 overflow-hidden bg-white"
>
	{#each items as item}
		<DropdownItem text={item} bind:currentSelectedChoice={currentChoice} />
	{/each}
</div>
