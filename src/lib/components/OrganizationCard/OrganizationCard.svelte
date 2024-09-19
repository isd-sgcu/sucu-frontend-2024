<script lang="ts">
	import { typography } from '../../../styles/tailwind/typography';
	import { cn } from '../../utils/cn';
	import arrowRight from '../../assets/icons/arrow-right.svg';
	import sapanisit from '../../assets/images/sapanisit.png';
	import smo from '../../assets/images/smo.png';
	import sgcu from '../../assets/images/sgcu.png';

	const organizations = [
		{
			imageURL: smo,
			orgName: 'สโมสรนิสิต \n จุฬาลงกรณ์มหาวิทยาลัย',
			linkHref: 'https://www.google.com'
		},
		{
			imageURL: sgcu,
			orgName: 'องค์การบริหารสโมสรนิสิต จุฬาลงกรณ์มหาวิทยาลัย (อบจ.)',
			linkHref: 'https://www.chula.ac.th/academics/academic-units/sgcu/'
		},
		{
			imageURL: sapanisit,
			orgName: 'สภานิสิต \n จุฬาลงกรณ์มหาวิทยาลัย',
			linkHref:
				'https://www.sa.chula.ac.th/%E0%B8%AA%E0%B8%A0%E0%B8%B2%E0%B8%99%E0%B8%B4%E0%B8%AA%E0%B8%B4%E0%B8%95/'
		}
	];
</script>

<div class="flex flex-nowrap w-full h-full items-center justify-center gap-[30px]">
	{#each organizations as organization}
		<a
			href={organization.linkHref}
			target="_blank"
			class="h-[400px] w-[400px] group first:ml-3 last:mr-3 flex-shrink-0 flex flex-col p-5 max-2xl:h-[350px] max-2xl:w-[350px] max-xl:h-[300px] max-xl:w-[300px] max-lg:h-[240px] max-lg:w-[240px] bg-white text-sucu-gray-dark rounded-md shadow-card-shadow hover:shadow-card-shadow-hover transition-shadow"
		>
			<div class="flex flex-col justify-between h-full">
				<div class="h-5/6 flex justify-center items-center">
					<img
						src={organization.imageURL}
						alt={organization.orgName}
						height="full"
						width="auto"
						class="object-contain p-20 pt-16"
					/>
				</div>

				<div class="h-1/6 flex justify-between relative">
					<div
						class={cn(
							typography({ variant: 'heading4' }),
							'leading-6 whitespace-pre-line text-wrap absolute bottom-0 pr-8'
						)}
					>
						{organization.orgName}
					</div>
					<div
						class="h-[32px] w-[32px] absolute bottom-0 right-0 flex items-center justify-center transform transition-transform duration-300 group-hover:translate-x-1"
					>
						<img src={arrowRight} alt="arrow" width="24" height="auto" />
					</div>
				</div>
			</div>
		</a>
	{/each}
</div>
