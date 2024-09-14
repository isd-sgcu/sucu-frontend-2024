<script lang="ts">
	import { typography } from '../../../styles/tailwind/typography';
	import sucuImg from '$lib/assets/images/suculogo.png'
	import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
	import Sccusvg from '$lib/assets/icons/sccu.svg';
	import Fa from 'svelte-fa';

	console.log("svg" ,Sccusvg);
</script>

<div class="h-auto w-full py-[64px] px-[135px] max-md:p-[70px] gap-6 bg-sucu-pink-05">
	<div class="flex justify-between w-full h-full max-md:hidden">
		<div class="h-auto w-auto gap-6 flex">
			<div class="flex flex-col gap-3">
				<!-- sccu icon big -->
				<img src={Sccusvg} alt="sccu icon" width="55" height="55">
				<div class={typography({ variant: 'heading4' })}>สภานิสิตจุฬาลงกรณ์มหาวิทยาลัย</div>

				<div class="flex gap-3">
					<Fa icon={faFacebook} />
					<div class={typography({ variant: 'body-normal' })}>สภานิสิตจุฬาลงกรณ์มหาวิทยาลัย</div>
				</div>

				<div class="flex gap-3">
					<Fa icon={faInstagram} />

					<div class={typography({ variant: 'body-normal' })}>sapanisitchula</div>
				</div>
			</div>
			<div class="flex flex-col gap-3">
				<img src={sucuImg} class="w-[34px] h-[55px]" alt="sucuicon" />

				<div class={typography({ variant: 'heading4' })}>สภานิสิตจุฬาลงกรณ์มหาวิทยาลัย</div>

				<div class="flex gap-3">
					<Fa icon={faFacebook} />
					<div class={typography({ variant: 'body-normal' })}>
						องค์การบริหารสโมสรนิสิตจุฬาลงกรณ์มหาวิทยาลัย (อบจ.)
					</div>
				</div>

				<div class="flex gap-3">
					<Fa icon={faInstagram} />

					<div class={typography({ variant: 'body-normal' })}>sgcu.chula</div>
				</div>
			</div>
		</div>

		<div class="w-[233px] h-full gap-3 mt-[79px] justify-end ml-6 max-md:ml-0">
			<div class={typography({ variant: 'body-normal' })}>ประกาศ</div>
			<div class={typography({ variant: 'body-normal' })}>เอกสาร</div>
			<div class={typography({ variant: 'body-normal' })}>งบประมาณและสถิติ</div>
			<div class={typography({ variant: 'body-normal' })}>สโมสรนิสิตฯ</div>
		</div>
	</div>

	<div class="flex flex-col md:hidden">
		<div class={`max-md:text-center w-full ${typography({ variant: 'body-normal' })}`}>ประกาศ</div>
		<div class="h-[2px] bg-gray-300 w-full my-5"></div>
		<div class={`max-md:text-center w-full ${typography({ variant: 'body-normal' })}`}>เอกสาร</div>
		<div class="h-[2px] bg-gray-300 w-full my-5"></div>
		<div class={`max-md:text-center w-full ${typography({ variant: 'body-normal' })}`}>
			งบประมาณและสถิติ
		</div>
		<div class="h-[2px] bg-gray-300 w-full my-5"></div>
		<div class={`max-md:text-center w-full ${typography({ variant: 'body-normal' })}`}>
			สโมสรนิสิตฯ
		</div>
		<div class="h-[2px] bg-gray-300 w-full my-5"></div>
		<div class={`max-md:text-center w-full ${typography({ variant: 'body-normal' })}`}>
			สภานิสิตจุฬาลงกรณ์มหาวิทยาลัย
		</div>
		<div class="h-[2px] bg-gray-300 w-full my-5"></div>
		<div class={`max-md:text-center w-full ${typography({ variant: 'body-normal' })}`}>
			องค์การบริหารสโมสรนิสิตจุฬาฯ (อบจ.)
		</div>
	</div>

	<div class="h-[2px] bg-gray-300 w-full my-5"></div>
	<div class={`max-md:text-center w-full max-md:${typography({ variant: 'body-small' })}`}>
		© 2024 SGCU. All rights reserved Develop by ISD
	</div>
</div>
