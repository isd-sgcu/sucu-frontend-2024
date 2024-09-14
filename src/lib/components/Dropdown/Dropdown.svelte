<script lang="ts">
	import Fa from 'svelte-fa';
	import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
	import { dropdownVariants, type DropdownProps } from '../../../styles/tailwind/dropdown';
	import DropdownList from '$lib/components/Dropdown/DropdownList.svelte';
	import { onDestroy, onMount } from 'svelte';

	export let items: string[] = [];
	export let currentChoice: string | null = null;
	export let outerClass: string = '';
	let isOpen = false;
	let hasSelected = false;
	let currentVariant: DropdownProps['variant'] = 'transparent';
	let dropdownClass: string = dropdownVariants({ variant: currentVariant });
	let placeholder: string = 'Select Item';
	let saveChoice: string | null = null;

	onMount(() => {
		currentChoice = items[0] || null;
		saveChoice = currentChoice;
	});

	$: {
		if (currentChoice) {
			isOpen = false;
			if (currentChoice !== saveChoice) {
				hasSelected = true;
			}
		}
	}

	$: {
		if (isOpen) {
			currentVariant = 'focus';
		} else if (hasSelected) {
			currentVariant = 'default';
		} else {
			currentVariant = 'transparent';
		}

		dropdownClass = dropdownVariants({ variant: currentVariant });
	}

	function handleClickOpen() {
		isOpen = !isOpen;
	}

	let dropdownRef: HTMLElement;
	function handleClickOutside(event: MouseEvent) {
		if (dropdownRef && !dropdownRef.contains(event.target as Node)) {
			isOpen = false;
		}
	}
	onMount(() => {
		if (typeof document !== 'undefined') {
			document.addEventListener('click', handleClickOutside);
		}
	});

	onDestroy(() => {
		if (typeof document !== 'undefined') {
			document.removeEventListener('click', handleClickOutside);
		}
	});
</script>

<div class={`relative w-full ${outerClass}`}>
	<button
		class={`w-full px-4 py-3 flex flex-row justify-between items-center rounded-sm ${dropdownClass}`}
		on:click={handleClickOpen}
	>
		<span>{currentChoice || placeholder}</span>
		<Fa icon={faChevronDown} class={`w-6 h-6 transition-transform ${isOpen && 'rotate-180'}`} />
	</button>

	{#if isOpen}
		<div class="absolute top-[calc(100%+8px)] w-full">
			<DropdownList bind:items bind:currentChoice />
		</div>
	{/if}
</div>
