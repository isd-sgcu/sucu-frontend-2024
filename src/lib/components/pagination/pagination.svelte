<script lang="ts">
  export let Arrayitem: any[] = []; // Explicitly define the type as any[]
    let currentPage: number = 1;
    let itemsPerPage: number = 3; // Default items per page
    let totalPages: number = Math.ceil(Arrayitem.length / itemsPerPage);
    let paginatedItems: any[] = [];

    function changePage(page : any) {
        currentPage = page;
        paginateItems();
    }

    function paginateItems() {
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
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
        totalPages = Math.ceil(Arrayitem.length / itemsPerPage);
        paginateItems();
    }

    $: if (!itemsPerPage || itemsPerPage < 1) {
        itemsPerPage = 5;
    }
</script>

<div class="flex flex-col gap-2">
    <div class="flex gap-2">
        {#each getVisiblePages(totalPages, currentPage) as page}
            {#if page === '...'}
                <span class="px-4 py-2">...</span>
            {:else}
                <button
                    class="bg-gray-200 px-4 py-2 rounded-md hover:bg-gray-300"
                    class:font-bold={currentPage === page}
                    on:click={() => changePage(page)}
                >
                    {page}
                </button>
            {/if}
        {/each}
    </div>
    <div class="flex gap-2 items-center">
        <label for="itemsPerPage" class="font-bold">Items per page:</label>
        <input 
            id="itemsPerPage" 
            type="number" 
            bind:value={itemsPerPage} 
            class="bg-gray-200 px-4 py-2 rounded-md" 
            min="1"
        />
    </div>
</div>

<div class="items-list">
    {#each paginatedItems as item}
        <div class="item">
            {item}
        </div>
    {/each}
</div>