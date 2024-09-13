<script lang="ts">
	import { typography } from '../../styles/tailwind/typography';
	import Button from './Button.svelte';
	import TabCapsuleItem from './TabCapsule.svelte';
	import Modal from '$lib/components/Modal/Modal.svelte';
	import { modalShow } from './Modal/store';
	import TabsRoot from './Tabs/TabsRoot.svelte';
	import TabsList from './Tabs/TabsList.svelte';
	import TabsTrigger from './Tabs/TabsTrigger.svelte';
	import TabsContent from './Tabs/TabsContent.svelte';

	modalShow.set(false);

	function showModal() {
		modalShow.set(true);
	}

	const typographyVariants: Array<
		| 'heading1'
		| 'heading2'
		| 'heading3'
		| 'heading4'
		| 'body-large'
		| 'body-medium'
		| 'body-normal'
		| 'body-small'
		| 'body-very-small'
	> = [
		'heading1',
		'heading2',
		'heading3',
		'heading4',
		'body-large',
		'body-medium',
		'body-normal',
		'body-small',
		'body-very-small'
	];

	const grayClasses = ['bg-sucu-gray-dark', 'bg-sucu-gray', 'bg-sucu-gray-light'];

	const pinkClasses = [
		'bg-sucu-pink-01',
		'bg-sucu-pink-02',
		'bg-sucu-pink-03',
		'bg-sucu-pink-04',
		'bg-sucu-pink-05',
		'bg-sucu-pink-hover',
		'bg-sucu-pink-focus'
	];

	let selectedTabs: string[] = [];
	let tabs = pinkClasses.map((label) => ({ label, active: false }));
	function toggle(index: number) {
		tabs = tabs.map((tab, i) => (i === index ? { ...tab, active: !tab.active } : tab));
		const tab = tabs[index];
		selectedTabs = tab.active
			? [...selectedTabs, tab.label]
			: selectedTabs.filter((label) => label !== tab.label);
	}
</script>

<div>
	<!-- Typography Section -->
	<section class="section">
		<h2 class="font-bold text-2xl mb-4">Typography Variants</h2>
		{#each typographyVariants as variant}
			<div class={typography({ variant })}>
				{variant}
			</div>
		{/each}
	</section>

	<!-- Color Scheme Section - Gray -->
	<section class="section">
		<h2 class="font-bold text-2xl mb-4">Gray Color Scheme</h2>
		{#each grayClasses as grayClass}
			<div class="flex items-center space-x-2">
				<div class={`color-box ${grayClass}`}></div>
				<span>{grayClass}</span>
			</div>
		{/each}
	</section>

	<!-- Color Scheme Section - Pink -->
	<section class="section">
		<h2 class="font-bold text-2xl mb-4">Pink Color Scheme</h2>
		{#each pinkClasses as pinkClass}
			<div class="flex items-center space-x-2">
				<div class={`color-box ${pinkClass}`}></div>
				<span>{pinkClass}</span>
			</div>
		{/each}
	</section>

	<section class="section">
		<h2 class="font-bold text-2xl mb-4">Button Shadow</h2>
		<button class="shadow-button-shadow p-4 bg-white text-black rounded">
			Button with Shadow
		</button>
	</section>

	<!-- Card Shadow Test -->
	<section class="section">
		<h2 class="font-bold text-2xl mb-4">Card Shadow (Hover)</h2>
		<div
			class="p-6 bg-white text-black rounded shadow-card-shadow hover:shadow-card-shadow-hover transition-shadow"
		>
			Card with hover shadow
		</div>
	</section>

	<!-- Button Test -->
	<section class="section w-fit">
		<h2 class="font-bold text-2xl mb-4">Button Variants</h2>
		<div class="grid grid-cols-3 gap-2">
			<div class="flex flex-col items-center gap-2">
				<h4>Small</h4>
				<Button variant="default" size="sm">Small</Button>
				<Button color="black" size="sm">Small Black</Button>
				<Button color="white" size="sm">Small White</Button>
				<Button variant="outline" size="sm">Small Outline</Button>
			</div>
			<div class="flex flex-col items-center gap-2">
				<h4>Default</h4>
				<Button variant="default" size="default">Default</Button>
				<Button color="black">Default Black</Button>
				<Button color="white">Default White</Button>
				<Button variant="outline">Default Outline</Button>
				<Button class="bg-amber-700 text-white rounded-2xl">Custom Css</Button>
			</div>
			<div class="flex flex-col items-center gap-2">
				<h4>Large</h4>
				<Button variant="default" size="lg">Large</Button>
				<Button size="lg" color="black">Large Black</Button>
				<Button variant="default" size="lg" color="white">Large White</Button>
				<Button variant="outline" size="lg">Large Outline</Button>
			</div>
		</div>
	</section>

	<!-- TabCapsule.svelte -->
	<section class="section">
		<h2 class="font-bold text-2xl mb-4">Capsule Tabs</h2>
		<div class="flex flex-wrap items-center gap-2">
			{#each tabs as tab, i}
				<TabCapsuleItem active={tab.active} label={tab.label} on:click={() => toggle(i)} />
			{/each}
		</div>
		{#if selectedTabs.length > 0}
			<p class="mt-4">Selected Tabs: {selectedTabs.join(', ')}</p>
		{:else}
			<p class="mt-4">No Tab Selected</p>
		{/if}
	</section>

	<section class="section w-fit">
		<h2 class="font-bold text-2xl mb-4">Modal</h2>
		<Button variant="default" size="default" on:click={() => showModal()}>Click For Modal</Button>

		{#if modalShow}
			<Modal />
		{/if}
	</section>

	<section class="section">
		<TabsRoot defaultActiveTab="all">
			<TabsList>
				<TabsTrigger value="all">ทั้งหมด</TabsTrigger>
				<TabsTrigger value="sgcu">อบจ.</TabsTrigger>
				<TabsTrigger value="sccu">สภานิสิต</TabsTrigger>
			</TabsList>

			<TabsContent value="all">
				<p>This is the all tab content.</p>
			</TabsContent>
			<TabsContent value="sgcu">
				<p>This is the sgcu tab content.</p>
			</TabsContent>
			<TabsContent value="sccu">
				<p>This is the sccu tab content.</p>
			</TabsContent>
		</TabsRoot>
	</section>
</div>

<style>
	.section {
		padding: 2rem;
		border-bottom: 1px solid #ccc;
	}
	.color-box {
		width: 100px;
		height: 100px;
		display: inline-block;
		margin-right: 10px;
		margin-bottom: 10px;
	}
</style>
