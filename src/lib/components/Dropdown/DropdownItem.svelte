<script lang="ts">
	import {
		dropdownItemVariants,
		type DropdownItemProps
	} from '../../../styles/tailwind/dropdownItem';
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();

	export let text: string;
	export let disabled: boolean = false;
	export let currentSelectedChoice: string | null = null;

	let currentVariant: DropdownItemProps['variant'] = 'default';
	let isSelected = false;

	$: isSelected = currentSelectedChoice === text;

	$: {
		if (disabled) {
			currentVariant = 'disabled';
		} else if (isSelected) {
			currentVariant = 'pressed';
		} else {
			currentVariant = 'default';
		}
	}

	function handleClick() {
		if (!disabled) {
			isSelected = true;
			dispatch('select', text);
		}
	}

	$: dropdownClass = dropdownItemVariants({ variant: currentVariant });
</script>

<button class={dropdownClass} on:click={handleClick} {disabled}>
	{text}
</button>
