<script lang="ts">
	import { createEventDispatcher, onMount } from 'svelte';
	import { getTabsContext } from './tabsContext';
	import { cn } from '$lib/utils';
	import { slide } from 'svelte/transition';

	export let value: string;
	export let disabled: boolean = false;

	const tabsContext = getTabsContext();
	const { activeTab } = tabsContext;
	const dispatch = createEventDispatcher();

	onMount(() => {
		tabsContext.registerTab({ value });
	});

	$: isActive = $activeTab === value;

	function handleClick() {
		if (!disabled) {
			tabsContext.selectTab(value);
			dispatch('click', { value });
		}
	}
</script>

<div class="relative inline-block">
	<button
		class={cn(
			'mx-auto whitespace-nowrap py-4 px-1 font-medium text-xl text-sucu-gray hover:text-sucu-pink-hover hover:border-gray-300',
			{
				'border-sucu-pink-hover text-indigo': isActive
			}
		)}
		on:click={handleClick}
		{disabled}
	>
		<slot />
	</button>

	{#if isActive}
		<div
			class={cn(
				'absolute left-1/2 transform -translate-x-1/2 -bottom-1 h-2 w-[120%] bg-sucu-pink-hover rounded-lg'
			)}
			transition:slide={{ duration: 300, axis: 'x' }}
		/>
	{/if}
</div>
