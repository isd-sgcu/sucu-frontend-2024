<script lang="ts">
	import { cn } from '$lib/utils';
	import { getTabsContext } from './tabsContext';

	export let value: string;
	export let className: string = '';
	export { className as class };
	const { activeTab } = getTabsContext();

	$: isActive = $activeTab === value;
</script>

{#if isActive}
	<div class={cn('p-4', className)}>
		<slot />
	</div>
{/if}
