<script lang="ts">
	import { typography } from '../../../styles/tailwind/typography';
	import { cn } from '../../utils/cn';
	import Fa from 'svelte-fa';
	import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
	import { organizations } from '../../constant/organizations';
</script>

<div class="flex flex-nowrap w-full h-full items-center justify-center gap-[30px] max-md:hidden">
	{#each organizations as organization}
		<a
			href={organization.linkHref}
			target="_blank"
			class="h-[400px] w-[400px] group first:ml-3 last:mr-3 flex-shrink-0 flex flex-col p-5 max-2xl:h-[350px] max-2xl:w-[350px] max-xl:h-[300px] max-xl:w-[300px] max-lg:h-[220px] max-lg:w-[220px] bg-white text-sucu-gray-dark rounded-md shadow-card-shadow hover:shadow-card-shadow-hover transition-shadow"
		>
			<div class="flex flex-col justify-between h-full">
				<div class="h-5/6 flex justify-center items-center">
					<img
						src={organization.imageURL}
						alt={organization.orgName}
						height="full"
						width="auto"
						class="object-contain p-20 pt-16 max-lg:p-12 max-lg:pt-1"
					/>
				</div>

				<div class="h-1/6 flex justify-between relative">
					<div
						class={cn(
							typography({ variant: 'heading4' }),
							'leading-6 whitespace-pre-line text-wrap absolute bottom-0 pr-8',
							'max-2xl:text-xl max-xl:text-xl max-lg:text-base max-lg:leading-5'
						)}
					>
						{organization.orgName}
					</div>
					<div
						class="h-8 w-8 absolute bottom-0 right-0 flex items-center justify-center transform transition-transform duration-300 group-hover:translate-x-1"
					>
						<Fa icon={faArrowRight} scale={1.5} />
					</div>
				</div>
			</div>
		</a>
	{/each}
</div>

<div class="flex flex-col gap-[40px] md:hidden items-center justify-center">
	{#each organizations as organization}
		<a
			href={organization.linkHref}
			target="_blank"
			class="h-[105px] w-auto p-4 gap-[14px] flex items-center bg-white text-sucu-gray-dark rounded border border-sucu-pink-05 shadow-card-shadow hover:shadow-card-shadow-hover transition-shadow"
		>
			<div class="w-[75px] h-[75px]">
				<img
					src={organization.imageURL}
					alt={organization.orgName}
					height="74"
					width="74"
					class="object-contain"
				/>
			</div>
			<div
				class={cn(
					typography({ variant: 'body-medium' }),
					'h-[72px] w-[202px] leading-5 font-semibold whitespace-pre-line text-wrap flex items-center'
				)}
			>
				{organization.orgName}
			</div>
			<div
				class="w-8 h-8 flex flex-shrink-0 mt-auto justify-center items-center rounded-full border-2 border-sucu-gray-light"
			>
				<Fa icon={faArrowRight} class="text-xl text-sucu-gray-light" />
			</div>
		</a>
	{/each}
</div>
