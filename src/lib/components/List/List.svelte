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
	target="_blank"
	class={`h-auto w-[761px] flex flex-col py-3 px-4 max-md:w-full rounded ${listVariants({ variant })}`}
>
	<div
		class={cn(
			'text-ellipsis whitespace-nowrap overflow-hidden',
			typography({ variant: 'body-large' }),
			`max-md:${typography({ variant: 'body-normal' })}`
		)}
	>
		{title}
	</div>

	<div
		class={cn(
			`max-md:${typography({ variant: 'body-small' })}`,
			typography({ variant: 'body-normal' })
		)}
	>
		{formatDate(createdAt)} โดย {createdBy}
	</div>
</a>
