<script lang="ts">
	import { faCalendar, faChalkboard, faPencil } from '@fortawesome/free-solid-svg-icons';
	import { cn } from '$lib/utils';
	import { typography } from '../../../styles/tailwind/typography';
	import Fa from 'svelte-fa';

	export let imageUrl = '';
	export let title = '';
	export let createAt = '';
	export let infoType = '';
	export let createBy = '';
	export let hrefUrl = '';
</script>

<div
	class="flex flex-col md:flex-row bg-white rounded-md overflow-hidden shadow-card-shadow w-full md:w-[1040px] h-auto md:h-[200px] p-2 my-4"
>
	<div class="w-full md:w-[276px] h-[180px] mb-4 md:mb-0">
		<img src={imageUrl} alt={title} class="w-full h-full object-cover" />
	</div>
	<div class="px-2 md:px-7 py-2 flex flex-col justify-between w-full">
		<div>
			<p
				class={cn('font-semibold text-sucu-gray-dark mb-2', typography({ variant: 'body-large' }))}
			>
				{title}
			</p>
			<div class="flex items-center text-sucu-gray-dark mb-3 md:mb-5">
				<Fa icon={faCalendar} class="mr-2" />
				<p
					class={cn(
						'text-sucu-gray-dark',
						typography({ variant: 'body-medium' })
					)}
				>
					{createAt}
				</p>
			</div>
		</div>

		<div class="flex flex-row justify-between pt-3 md:py-0">
			<div class="mb-4 md:mb-0">
				<div class="flex items-center mb-2">
					<Fa icon={faChalkboard} class="mr-2" />
					<p class={cn('text-sucu-gray-dark', typography({ variant: 'body-normal' }))}>
						{infoType}
					</p>
				</div>
				<div class="flex items-center">
					<Fa icon={faPencil} class="mr-2" />
					<p class={cn('text-sucu-gray-dark', typography({ variant: 'body-normal' }))}>
						{createBy}
					</p>
				</div>
			</div>
			<a href={hrefUrl} class="text-black text-lg md:text-xl self-center"> อ่านต่อ » </a>
		</div>
	</div>
</div>
