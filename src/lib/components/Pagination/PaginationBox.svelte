<script>
	import { cn } from '$lib/utils';
	import { typography } from '../../../styles/tailwind/typography';
	export let param = '0';
</script>

<div
	class={cn('border border-sucu-gray-light rounded-xs w-[32px] h-[32px] flex place-content-center')}
>
	<div class={cn('font-sans font-semibold text-sucu-gray-dark size-3 ')}>
		{param}
	</div>
</div>
