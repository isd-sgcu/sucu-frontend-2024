<script lang="ts">
    import { typography } from '../../styles/tailwind/typography';
	import { cn } from '../../lib/utils/cn';
    import Navbar from "$lib/components/Navbar.svelte";
    import MaxWidthWrapper from "$lib/components/MaxWidthWrapper.svelte";
    import Button from '../../lib/components/Button.svelte';
    import sucuHomeBanner from '../../lib/assets/images/sucuHomeBanner.png';
</script>

<Navbar />
<!-- <MaxWidthWrapper> -->
    <!-- <div class="w-full h-[500px]">
        <img src={sucuHomeBanner} alt="sucu-home-banner" class="w-[100%]" />
        <div>สโมสรนิสิต</div>
    </div> -->
    <div class="w-full h-[500px] flex items-center justify-center text-center bg-cover bg-center" style="background-image: url({sucuHomeBanner});">
        <div class="w-[564px] h-[263px] flex flex-col items-center justify-center justify-between">
            <div class="w-[650px] h-[400px] p-2.5 gap-2.5 text-sucu-gray-dark">
                <div class={cn(
							typography({ variant: 'heading1' }),
                            "w-full h-[69px]")}>
                    สโมสรนิสิต
                </div>
                <div class={cn(
                            typography({ variant: 'heading1' }),
                            "w-full h-[59px]")}>
                    จุฬาลงกรณ์มหาวิทยาลัย
                </div>
                <div class={cn(
                            typography({ variant: 'body-large' }),
                            "w-full h-[50px] font-semibold")}>
                    Student Union, Chulalongkorn University
                </div>
            </div>
            <Button color="white" class="px-9 py-2">รู้จักกับสโมสรนิติฯ</Button>
        </div>
    </div>

<!-- </MaxWidthWrapper> -->

