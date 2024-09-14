<script lang="ts">
	import { cn } from '$lib/utils';
	import { faPlus } from '@fortawesome/free-solid-svg-icons';
	import Fa from 'svelte-fa';

	export let active: boolean = false;
	export let label: string;
</script>

<button
	class={cn(
		'gap-2 flex items-center rounded-full w-fit px-2 border border-sucu-gray-light text-sucu-gray-light cursor-pointer',
		{
			'border-sucu-pink-01 text-sucu-pink-01': active
		}
	)}
	on:click
>
	<span class="text-sm md:text-base">{label}</span>
	<Fa
		icon={faPlus}
		class={cn('transition-transform transform', {
			'rotate-45': active
		})}
	/>
</button>
