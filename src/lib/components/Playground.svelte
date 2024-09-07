<script lang="ts">
	import { typography } from '../../styles/tailwind/typography';

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
		'bg-sucu-pink-05'
	];
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
