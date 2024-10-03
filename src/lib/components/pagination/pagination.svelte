<script lang="ts">
	import { cn } from '../../utils/cn';
	import Fa from 'svelte-fa';
	import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
    import Dropdown from '../Dropdown/Dropdown.svelte';

	export let Arrayitem: any[] = []; // Explicitly define the type as any[]
	let currentPage: number = 1;
	let itemsPerPage: string = '5'; // Default items per page
	let totalPages: number = Math.ceil(Arrayitem.length / parseInt(itemsPerPage));
	let paginatedItems: any[] = [];

    const pageChoice: string[] = [
		'5','10','15'
	];

	function changePage(page: any) {
		currentPage = page;
		paginateItems();
	}


    function paginateItems() {
        const startIndex = (currentPage - 1) * parseInt(itemsPerPage);
        const endIndex = startIndex + parseInt(itemsPerPage);
        paginatedItems = Arrayitem.slice(startIndex, endIndex);
    }

	function getVisiblePages(totalPages: number, currentPage: number) {
		let pages = [];
		if (totalPages <= 7) {
			pages = Array.from({ length: totalPages }, (_, i) => i + 1);
		} else {
			pages.push(1);
			if (currentPage > 4) {
				pages.push('...');
			}
			let startPage = Math.max(2, currentPage - 2);
			let endPage = Math.min(totalPages - 1, currentPage + 2);
			for (let i = startPage; i <= endPage; i++) {
				pages.push(i);
			}
			if (currentPage < totalPages - 3) {
				pages.push('...');
			}
			pages.push(totalPages);
		}
		return pages;
	}

	$: {
		totalPages = Math.ceil(Arrayitem.length / parseInt(itemsPerPage));
		paginateItems();
	}

	$: if (!itemsPerPage || parseInt(itemsPerPage) < 1) {
		itemsPerPage = '5';
	}

       
    $: paginateItems();
</script>

<div class="flex flex-col gap-2">
	<div class="flex gap-2">
		<button
			class="px-4 py-2 rounded bg-white border"
			on:click={() => changePage(currentPage - 1)}
			disabled={currentPage === 1}
		>
			<Fa icon={faChevronLeft} scale={0.75} />
		</button>

		{#each getVisiblePages(totalPages, currentPage) as page}
			{#if page === '...'}
				<span class="px-4 py-2">...</span>
			{:else}
				<button
					class={cn(
						'  px-4 py-2 rounded',
						currentPage === page ? 'text-white bg-sucu-pink-02 ' : 'text-black bg-white border'
					)}
					on:click={() => changePage(page)}
				>
					{page}
				</button>
			{/if}
		{/each}

		<button
			class="px-4 py-2 rounded bg-white border"
			on:click={() => changePage(currentPage + 1)}
			disabled={currentPage === totalPages}
		>
			<Fa icon={faChevronRight} scale={0.75} />
		</button>
        <Dropdown 
            items={pageChoice} 
            bind:currentChoice={itemsPerPage} 
            outerClass="w-20 bg-opacity-50 " 
            on:change={(e) => itemsPerPage = e.detail}
        />
        <div class="flex items-center"> / page</div>
	</div>
</div>

<div class="items-list mt-5">
	{#each paginatedItems as item}
		<div class="item">
			{item}
		</div>
	{/each}
</div>


