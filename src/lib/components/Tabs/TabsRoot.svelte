<script lang="ts">
	import { setTabsContext } from './tabsContext';

	export let defaultActiveTab: string = '';

	const tabs = setTabsContext();

	if (defaultActiveTab) {
		tabs.activeTab.set(defaultActiveTab);
	}
</script>

<div>
	<slot />
</div>
