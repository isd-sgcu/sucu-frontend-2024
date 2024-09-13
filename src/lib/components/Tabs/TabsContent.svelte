<script lang="ts">
	import { getTabsContext, type TabsContext } from './tabsContext';

	export let value: string;
	const { activeTab } = getTabsContext();

	$: isActive = $activeTab === value;
</script>

{#if isActive}
	<div class="p-4">
		<slot />
	</div>
{/if}
