<script lang="ts">
	import { typography } from '../../../styles/tailwind/typography';
	import { cn } from '../../utils/cn';
	import arrowRight from '../../assets/icons/arrow-right.svg';

	export let imageURL: string;
	export let orgName: string;
	export let linkHref: string;

	function formatOrgName(name: string): string {
		const words = name.split(' ');
		let result = '';
		let currentLine = '';

		words.forEach((word) => {
			if (currentLine.length + word.length + 1 >= 30) {
				result += currentLine + '\n';
				currentLine = word;
			} else {
				currentLine += (currentLine ? ' ' : '') + word;
			}
			});

		return result + currentLine;
	}
</script>

<a
	href={linkHref}
	target="_blank" 
	class="h-[422px] w-[422px] flex-shrink-0 px-5 pb-5 pt-20 flex flex-col justify-between bg-white text-sucu-gray-dark rounded-md shadow-card-shadow hover:shadow-card-shadow-hover transition-shadow"
>
		<div class="h-[200px] flex justify-center">
			<img src={imageURL} alt={orgName} height="200" width="auto" class="h-full w-auto  object-cover" />
		</div>

		<div class="flex justify-between relative">
			<div class={cn(typography({ variant: 'heading4' }), 'leading-6 whitespace-pre-line')}>
				{formatOrgName(orgName)}
			</div>
			<div class="h-[32px] w-[32px] absolute bottom-0 right-0">
				<img src={arrowRight} alt="arrow" width="24" height="auto" />
			</div>
		</div>
</a>
