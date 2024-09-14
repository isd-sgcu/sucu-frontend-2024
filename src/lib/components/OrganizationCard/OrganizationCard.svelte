<script lang="ts">
	import { typography } from '../../../styles/tailwind/typography';
	import { cn } from '../../utils/cn';

	export let imageURL: string;
	export let orgName: string;
	export let linkHref: string;
</script>

<a
	href={linkHref}
	target="_blank"
	class="h-[422px] w-[422px] bg-white text-sucu-gray-dark rounded shadow-card-shadow hover:shadow-card-shadow-hover transition-shadow flex flex-col items-center"
>
	<div class="p-3 h-[200px] w-[200px]">
		<img src={imageURL} alt={orgName} width="276" height="276" class="w-[100%] rounded" />
	</div>

	<div class="p-4 h-[150px] w-[300px] flex flex-col justify-between">
		<div
			class={cn(
				`max-md:${typography({ variant: 'body-medium' })}`,
				typography({ variant: 'body-medium' }),
				'leading-5 font-semibold'
			)}
		>
			{orgName}
		</div>
	</div>
</a>
