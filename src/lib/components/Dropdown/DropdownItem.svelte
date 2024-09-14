<script lang="ts">
	import { onMount } from 'svelte';
	import {
		dropdownItemVariants,
		type DropdownItemProps
	} from '../../../styles/tailwind/dropdownItem';

	export let text: string;
	export let disabled: boolean = false;
	export let currentSelectedChoice: string | null = null;

	let currentVariant: DropdownItemProps['variant'] = 'default';
	let isHover: boolean = false;
	let isSelected = false;

	$: isSelected = currentSelectedChoice === text;

	$: {
        if (disabled) {
            currentVariant = "disabled"
        } else if (isHover) {
            currentVariant = "hover"
        } else if (isSelected) {
			currentVariant = 'pressed';
		} else {
            currentVariant = 'default'
        }
	}

	function handleClick() {
		isHover = false;
		currentSelectedChoice = text;
	}
	function handleMouseEnter() {
		if (currentVariant === 'default') isHover = true;
	}
	function handleMouseLeave() {
		isHover = false;
	}

	$: dropdownClass = dropdownItemVariants({ variant: isHover ? 'hover' : currentVariant });
</script>

<button
	class={dropdownClass}
	on:click={handleClick}
	on:mouseenter={handleMouseEnter}
	on:mouseleave={handleMouseLeave}
	{disabled}
>
	{text}
</button>
