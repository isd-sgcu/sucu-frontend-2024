<script lang="ts">
	import { cn } from '$lib/utils';

	export let className: string = '';
	export { className as class };
</script>

<div class={cn('border-b border-sucu-gray-light', className)}>
	<nav class="-mb-2 sm:mb-0 flex space-x-8 text-sucu-pink-hover">
		<slot />
	</nav>
</div>
