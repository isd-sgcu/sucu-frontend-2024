<script lang="ts">
	import { typography } from '../../../styles/tailwind/typography';
	import { cn } from '../../utils/cn';
	import dayjs from 'dayjs';
	import buddhistEra from 'dayjs/plugin/buddhistEra';
	import 'dayjs/locale/th';

	dayjs.extend(buddhistEra);

	export let imageURL: string;
	export let title: string;
	export let createdAt: string;
	export let createdBy: string;
	export let linkHref: string;

	function formatDate(dateString: string): string {
		return dayjs(dateString).locale('th').format('DD MMMM BBBB');
	}

	function trimTitle(titleString: string): string {
		return titleString.length > 100 ? titleString.substring(0, 100) + '...' : titleString;
	}
</script>

<a
	href={linkHref}
	target="_blank"
	class="h-[450px] w-[300px] bg-white text-sucu-gray-dark rounded shadow-card-shadow hover:shadow-card-shadow-hover transition-shadow flex flex-col items-center"
>
	<div class="p-3 h-[300px] w-[300px]">
		<img src={imageURL} alt={title} width="276" height="276" class="w-[100%] rounded" />
	</div>

	<div class="p-4 h-[150px] w-[300px] flex flex-col justify-between">
		<div
			class={cn(
				`max-md:${typography({ variant: 'body-medium' })}`,
				typography({ variant: 'body-medium' }),
				'leading-5 font-semibold'
			)}
		>
			{trimTitle(title)}
		</div>

		<div class="flex justify-between mt-auto">
			<div
				class={cn(
					`max-md:${typography({ variant: 'body-normal' })}`,
					typography({ variant: 'body-normal' }),
					'leading-4 gap-[6px]'
				)}
			>
				{formatDate(createdAt)}
			</div>

			<div
				class={cn(
					`max-md:${typography({ variant: 'body-normal' })}`,
					typography({ variant: 'body-normal' }),
					'leading-4 gap-[6px]'
				)}
			>
				{createdBy}
			</div>
		</div>
	</div>
</a>
