<script lang="ts">
    import { typography } from '../../styles/tailwind/typography';
	import { cn } from '../../lib/utils/cn';
    import Navbar from "$lib/components/Navbar.svelte";
    import Button from '../../lib/components/Button.svelte';
    import sucuHomeBanner1 from '../../lib/assets/images/sucuHomeBanner1.png';
    import sucuHomeBanner2 from '../../lib/assets/images/sucuHomeBanner2.png';
    import sucuHomeBanner3 from '../../lib/assets/images/sucuHomeBanner3.png';
    import sucuHomeBanner4 from '../../lib/assets/images/sucuHomeBanner4.png';
    import Footer from '$lib/components/Footer/Footer.svelte';
    import AnnoucementCard from '$lib/components/AnnoucementCard/AnnoucementCard.svelte';
    import OrganizationCard from '$lib/components/OrganizationCard/OrganizationCard.svelte';
    import thumbnail from '../../lib/assets/images/thumbnail.png';

    const annoucementCard = Array(4).fill({
		imageURL: thumbnail,
		title:
			'ประกาศจุฬาลงกรณ์มหาวิทยาลัย เรื่อง การไปต่างประเทศหรือการเข้ามาในประเทศเพื่อศึกษา อบรม วิจัย หรือปฏิบัติงาน ในสถานการณ์ปัจจุบัน ลงวันที่ 22 พฤศจิกายน 2565',
		createdAt: '2024-07-04',
		createdBy: 'สภานิสิต',
		linkHref: 'https://www.google.com'
	});

	annoucementCard.push({
		imageURL: '',
		title: 'ประกาศรับสมัครคณะกรรมาธิการวิสามัญพิจารณางบประมาณสโมสรนิสิตฯ',
		createdAt: '2024-07-04',
		createdBy: 'สภานิสิต',
		linkHref: 'https://www.google.com'
	});
</script>


<div>
    <Navbar />
    <div class="w-full h-[500px] max-md:h-[246px] flex items-center justify-center text-center bg-cover bg-center" style="background-image: url({sucuHomeBanner1});">
        <div class="w-[650px] h-[263px] max-md:h-[160px] flex flex-col items-center justify-center justify-between">
            <div class="w-full h-[192px] max-md:h-[120px] p-2.5 flex flex-col gap-2.5 max-md:gap-1 text-sucu-gray-dark">
                <div class={cn(
                    typography({ variant: 'heading1' }),
                    "tracking-tight leading-none",
                    "max-md:text-3xl max-md:font-semibold")}>
                    สโมสรนิสิต
                </div>
                <div class={cn(
                    typography({ variant: 'heading1' }),
                    "tracking-tight leading-none",
                    "max-md:text-3xl max-md:font-semibold")}>
                    จุฬาลงกรณ์มหาวิทยาลัย 
                </div>
                <div class={cn(
                    typography({ variant: 'body-large' }),
                    "font-semibold leading-6",
                    "max-md:text-xs max-md:leading-3")}>
                    Student Union, Chulalongkorn University
                </div>
            </div>
            <Button color="white" size="sm" class={cn(
                typography({ variant: 'body-medium' }),
                "font-semibold px-9 py-2 leading-5",
                "max-md:text-xs max-md:leading-3 max-md:px-3 max-md:py-1.5")}>
                รู้จักกับสโมสรนิติฯ
            </Button>
        </div>
    </div>
    <div class="flex w-full h-[642px] py-[72px] px-[120px] gap-12 items-center text-sucu-gray-dark bg-white max-md:hidden">
        <div class="flex flex-col w-[297px] h-[208px] min-w-[297px] min-h-[208px] justify-between text-end">
            <div class={cn(
                typography({ variant: 'heading1' }),
                "tracking-tight leading-none")}>
                ประกาศ
            </div>
            <div class={cn(
                typography({ variant: 'body-medium' }),
                "tracking-tight leading-7")}>
                ประกาศล่าสุดของสโมสรนิสิตจุฬาฯ อบจ. และสภานิสิตจุฬาฯ
            </div>
            <div class="flex justify-end">
                <Button size="sm" class={cn(
                    typography({ variant: 'body-medium' }),
                    "font-semibold px-9 py-2 leading-5 bg-sucu-pink-01 hover:bg-sucu-pink-02",
                    "max-md:text-xs max-md:leading-3 max-md:px-3 max-md:py-1.5")}>
                    ดูประกาศเพิ่มเติม
                </Button>
            </div>
        </div>
        <div class="flex overflow-auto p-6 gap-6 scrollbar-thin scrollbar-thumb-sucu-gray-light scrollbar-track-white">
            {#each annoucementCard as card}
				<AnnoucementCard
					imageURL={card.imageURL}
					title={card.title}
					createdAt={card.createdAt}
					createdBy={card.createdBy}
					linkHref={card.linkHref}
				/>
			{/each}
        </div>
    </div>
    <div class="flex flex-col h-[483px] p-[26px] gap-4 text-sucu-gray-dark bg-white md:hidden">
        <div class="flex flex-col h-[76px] gap-3">
            <div class={cn(
                typography({ variant: 'heading2' }),
                "tracking-tight leading-none")}>
                ประกาศ
            </div>
            <div class={cn(
                typography({ variant: 'body-normal' }),
                "tracking-tight leading-none")}>
                ประกาศล่าสุดของสโมสรนิสิตจุฬาฯ อบจ. และสภานิสิตจุฬาฯ
            </div>
        </div>
        <div class="flex h-[257px] px-2.5 gap-2.5 overflow-auto items-center">
            {#each annoucementCard as card}
				<AnnoucementCard
					imageURL={card.imageURL}
					title={card.title}
					createdAt={card.createdAt}
					createdBy={card.createdBy}
					linkHref={card.linkHref}
				/>
			{/each}
        </div>
        <div class="flex justify-center items-center text-center h-[5px] w-[69px]">
            <div class="h-[5px] w-[69px] bg-slate-300"></div>
        </div>
        <div class="flex justify-center">
            <Button size="sm" class={cn(
                typography({ variant: 'body-normal' }),
                "font-semibold px-3 py-1.5 leading-6 bg-sucu-pink-01 hover:bg-sucu-pink-02")}>
                ดูประกาศทั้งหมด
            </Button>
        </div>
    </div>
    <!-- <div class="w-full h-[288px] bg-cover bg-center max-md:hidden" style="background-image: url({sucuHomeBanner2});"></div>
    <div class="w-full h-[184px] bg-cover bg-center md:hidden" style="background-image: url({sucuHomeBanner3});"></div> -->
    <div class="flex flex-col w-full h-[694px] max-md:h-[576px] md:h-[576px] max-2xl:h-[620px] max-xl:h-[500px] max-lg:h-[370px] py-[72px] max-md:py-px gap-[72px] max-md:gap-[38px] bg-cover bg-center items-center justify-center text-sucu-gray-dark" style="background-image: url({sucuHomeBanner4}); background-size: contain;">
        <div class={cn(
            typography({ variant: 'heading1' }),
            "tracking-tight leading-none",
            "max-md:font-bold max-md:text-3xl")}>
            3 องค์กรหลักในจุฬาฯ
        </div>
        <OrganizationCard />
    </div>
    <div class="h-[200px] bg-slate-100"></div>
    <Footer />
</div>
