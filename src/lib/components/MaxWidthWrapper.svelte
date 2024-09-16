<script lang="ts">
	import { cn } from '$lib/utils';

	export let className: string = '';
	export { className as class };
</script>

<div
	class={cn(
		'h-full mx-auto w-full max-w-screen-xl px-6 lg:px-[200px] mt-6 lg:mt-[72px]',
		className
	)}
>
	<slot />
</div>
