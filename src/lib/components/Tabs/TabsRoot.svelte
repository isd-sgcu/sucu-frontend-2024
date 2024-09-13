<script lang="ts">
	import { cn } from '$lib/utils';
	import { setTabsContext } from './tabsContext';

	export let defaultActiveTab: string = '';
	export let className: string = '';
	export { className as class };

	const tabs = setTabsContext();

	if (defaultActiveTab) {
		tabs.activeTab.set(defaultActiveTab);
	}
</script>

<div class={className}>
	<slot />
</div>
