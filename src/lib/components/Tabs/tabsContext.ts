import { writable, get, type Writable } from 'svelte/store';
import { setContext, getContext } from 'svelte';

interface Tab {
	value: string;
}

export interface TabsContext {
	activeTab: Writable<string>;
	tabs: Writable<Tab[]>;
	registerTab: (tab: Tab) => void;
	selectTab: (value: string) => void;
}

const createTabs = (): TabsContext => {
	const activeTab = writable<string>('');
	const tabs = writable<Tab[]>([]);

	const registerTab = (tab: Tab) => {
		tabs.update((currTabs) => [...currTabs, tab]);
		if (get(activeTab) === '') activeTab.set(tab.value);
	};

	const selectTab = (value: string) => {
		activeTab.set(value);
	};

	return {
		activeTab,
		tabs,
		registerTab,
		selectTab
	};
};

export const setTabsContext = (): TabsContext => {
	const tabs = createTabs();
	setContext<TabsContext>('tabs', tabs);
	return tabs;
};

export const getTabsContext = (): TabsContext => {
	return getContext<TabsContext>('tabs');
};
