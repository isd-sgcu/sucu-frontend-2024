<script lang="ts">
	import { cn } from '$lib/utils';
	import { faXmark } from '@fortawesome/free-solid-svg-icons';
	import Fa from 'svelte-fa';

	export let active: boolean = false;
	export let label: string;
	export let onClick: () => void;

	let isHovered = false;
</script>

<button
	class={cn(
		'gap-2 flex items-center rounded-full borde w-fit px-2 border border-sucu-gray-light text-sucu-gray-light cursor-pointer hover:border-sucu-pink-01 hover:text-sucu-pink-01',
		{
			'border-sucu-pink-01 text-sucu-pink-01': active
		}
	)}
	on:mouseenter={() => (isHovered = true)}
	on:mouseleave={() => (isHovered = false)}
	on:click={onClick}
>
	<span>{label}</span>
	<Fa
		icon={faXmark}
		class={cn('transition-transform transform', {
			'rotate-45': isHovered
		})}
	/>
</button>
