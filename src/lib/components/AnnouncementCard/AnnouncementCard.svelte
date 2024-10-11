<script lang="ts">
	import { typography } from '../../../styles/tailwind/typography';
	import { cn } from '../../utils/cn';
	import dayjs from 'dayjs';
	import buddhistEra from 'dayjs/plugin/buddhistEra';
	import 'dayjs/locale/th';
	import { onMount } from 'svelte';

	dayjs.extend(buddhistEra);

	export let imageURL: string;
	export let title: string;
	export let createdAt: string;
	export let createdBy: string;
	export let linkHref: string;
	export let className = "";

	function formatDate(dateString: string): string {
		return dayjs(dateString).locale('th').format('DD MMMM BBBB');
	}

	function trimTitle(titleString: string): string {
		return titleString.length > 75 ? titleString.substring(0, 75) + '...' : titleString;
	}

	let isMobile = false;

	const checkScreenSize = () => {
		isMobile = window.innerWidth < 768;
	};

	onMount(() => {
		checkScreenSize();
		window.addEventListener('resize', checkScreenSize);
		return () => window.removeEventListener('resize', checkScreenSize);
	});
</script>

<a
	href={linkHref}
	target="_blank"
	class="${className} h-[450px] w-[300px] max-md:w-[140px] max-md:h-[222px] bg-white text-sucu-gray-dark rounded shadow-card hover:shadow-card-shadow-hover transition-shadow flex flex-col items-center"
>
	<div class="p-3 h-[300px] w-[300px] max-md:w-full max-md:h-auto max-md:p-2">
		{#if imageURL || imageURL.length > 0}
			<img src={imageURL} alt={title} width="276" height="276" class="w-[100%] rounded" />
		{:else}
			<div
				class="w-[276px] h-[276px] max-md:w-full max-md:h-[124px] bg-gray-300 rounded animate-pulse"
			></div>
		{/if}
	</div>

	<div
		class="p-4 h-[150px] w-[300px] max-md:w-[140px] max-md:h-full max-md:p-2 max-md:pt-0 flex flex-col justify-between"
	>
		<div
			class={cn(
				isMobile ? typography({ variant: 'body-small' }) : typography({ variant: 'body-medium' }),
				'leading-5 font-semibold h-auto',
				isMobile ? 'leading-3' : ''
			)}
		>
			{trimTitle(title)}
		</div>

		<div class="flex justify-between mt-auto">
			<div
				class={cn(
					isMobile
						? typography({ variant: 'body-very-small' })
						: typography({ variant: 'body-normal' }),
					'gap-[6px] h-auto',
					isMobile ? 'leading-2' : 'leading-4'
				)}
			>
				{formatDate(createdAt)}
			</div>

			<div
				class={cn(
					isMobile
						? typography({ variant: 'body-very-small' })
						: typography({ variant: 'body-normal' }),
					'gap-[6px] h-auto',
					isMobile ? 'leading-2' : 'leading-4'
				)}
			>
				{createdBy}
			</div>
		</div>
	</div>
</a>

<style>
	@media (min-width: 768px) {
		.shadow-card {
			box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
		}
	}
	@media (max-width: 767px) {
		.shadow-card {
			box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
		}
	}
</style>
