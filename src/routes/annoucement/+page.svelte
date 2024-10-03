<script lang="ts">
	import { cn } from '$lib/utils';
	import {
		faCircleArrowLeft,
		faChevronRight,
		faChevronLeft
	} from '@fortawesome/free-solid-svg-icons';
	import { typography } from '../../styles/tailwind/typography';
	import Fa from 'svelte-fa';
	import TabsRoot from '$lib/components/Tabs/TabsRoot.svelte';
	import TabsList from '$lib/components/Tabs/TabsList.svelte';
	import TabsTrigger from '$lib/components/Tabs/TabsTrigger.svelte';
	import TabsContent from '$lib/components/Tabs/TabsContent.svelte';
	import MaxWidthWrapper from '$lib/components/MaxWidthWrapper.svelte';
	import Navbar from '../../lib/components/Navbar.svelte';
	import pic1 from './../../lib/assets/images/picslide1.jpg';
	import pic2 from './../../lib/assets/images/picslide2.jpg';
	import pic3 from './../../lib/assets/images/picslide3.jpg';
	import pic4 from './../../lib/assets/images/picslide4.jpg';

	const image = [pic1, pic2, pic3, pic4];

	let currentIndex = 0;

	function handleLeftClick() {
		currentIndex = (currentIndex-1) % image.length;
        if(currentIndex == -1) {
            currentIndex = image.length-1;
        }
        console.log("left click: " + currentIndex)
		scrollToImage();
	}

	function handleRightClick() {
        currentIndex = (currentIndex+1) % image.length;
        console.log("right click: " + currentIndex)
		scrollToImage();
	}

	function scrollToImage() {
		const container = document.querySelector('.image-container');
		if (container) {
			const imageWidth = container.clientWidth;
            container.scrollTo({
                left: imageWidth * currentIndex,
                behavior: 'smooth'
            });
		}else{
            console.log("No image       container found");
        }
	}

</script>

<div>
	<Navbar />

<div class="relative flex w-full h-[500px]">
    <button class= "absolute left-5 top-1/2  transform -translate-y-1/2 z-10 cursor-pointer hover:scale-110 transition-all" on:click={handleLeftClick}>
        <Fa icon={faChevronLeft}  />
        </button>
    <div class="relative w-full h-[500px] flex overflow-hidden image-container snap-x">
        
        {#each image as img}
          <div class="w-full h-full flex-shrink-0 snap-center">
            <img src={img} alt="pic" class="w-full h-full object-cover "/>
          </div>
        {/each}
     
      </div>
      <button class= "absolute right-5 top-1/2  transform -translate-y-1/2 z-10 cursor-pointer hover:scale-110 transition-all" on:click={handleRightClick}>
      <Fa icon={faChevronRight}  />
      </button>
    </div>
	<MaxWidthWrapper class="mt-10 space-y-12">
		<div>asdasd</div>
	</MaxWidthWrapper>
</div>
