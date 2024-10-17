<script lang="ts">
	import { type Variant, listVariants } from '../../../styles/tailwind/list';
	import { typography } from '../../../styles/tailwind/typography';
	import { cn } from '../../utils/cn';
	import dayjs from 'dayjs';
	import buddhistEra from 'dayjs/plugin/buddhistEra';
	import 'dayjs/locale/th';

	dayjs.extend(buddhistEra);

	export let title: string;
	export let createdAt: string;
	export let createdBy: string;
	export let linkHref: string;
	export let variant: Variant;

	function formatDate(dateString: string): string {
		return dayjs(dateString).locale('th').format('DD MMMM BBBB');
	}
</script>

<a
	href={linkHref}
	class={cn(
		'h-auto w-full flex flex-col py-3 px-4',
		listVariants({ variant }),
		'hover:bg-sucu-pink-05'
	)}
>
	<div
		class={cn(
			'text-ellipsis whitespace-nowrap overflow-hidden',
			typography({ variant: 'body-normal' }),
			'md:text-2xl'
		)}
	>
		{title}
	</div>

	<div class={cn(typography({ variant: 'body-small' }), 'md:text-base')}>
		{formatDate(createdAt)} โดย {createdBy}
	</div>
</a>
