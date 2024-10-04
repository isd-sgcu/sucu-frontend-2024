<script lang="ts">
    import { typography } from '../../styles/tailwind/typography';
	import { cn } from '../../lib/utils/cn';
    import Navbar from "$lib/components/Navbar.svelte";
    import MaxWidthWrapper from "$lib/components/MaxWidthWrapper.svelte";
    import Button from '../../lib/components/Button.svelte';
    import sucuHomeBanner from '../../lib/assets/images/sucuHomeBanner.png';
    import Footer from '$lib/components/Footer/Footer.svelte';
</script>

<div>
    <Navbar />
    <div class="w-full h-[500px] max-md:h-[246px] flex items-center justify-center text-center bg-cover bg-center" style="background-image: url({sucuHomeBanner});">
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
                "font-semibold px-9 py-2leading-5",
                "max-md:text-xs max-md:leading-3 max-md:px-3 max-md:py-1.5")}>
                รู้จักกับสโมสรนิติฯ
            </Button>
        </div>
    </div>
    <div class="h-[200px]"></div>
    <Footer />
</div>
