<script lang="ts">
    export let Arrayitem: any[] = [];
    let currentPage = 1;
    let arrayshow: number[] = [];
    let itemsPerPage = 5;
    let paginatedItems: any[][] = [];
    $: totalPages = Math.ceil(Arrayitem.length / itemsPerPage);

    // Function to split Arrayitem into chunks of itemsPerPage size
    function paginateItems() {
        paginatedItems = [];
        for (let i = 0; i < Arrayitem.length; i += itemsPerPage) {
            paginatedItems.push(Arrayitem.slice(i, i + itemsPerPage));
        }
    }

    // Initialize arrayshow and paginate items
    $: {
        arrayshow = [];
        paginateItems();
        if (Arrayitem.length < 8) {
            for (let i = 0; i < totalPages; i++) {
                arrayshow.push(i + 1);
            }
        } else {
            for (let i = 0; i < 3; i++) {
                arrayshow.push(i + 1);
            }
            arrayshow.push(totalPages);
        }
    }

    function changePage(page: number) {
        if (page < totalPages - 2 && totalPages - 2 > 0) {
            currentPage = page;
            getPageNumbers();
        }
        if (page >= totalPages - 2 && totalPages - 2 > 0) {
            currentPage = page;
            arrayshow = [];
            arrayshow.push(1);
            for (let i = page - 2; i <= totalPages; i++) {
                if (!arrayshow.includes(i)) {
                    arrayshow.push(i);
                }
            }
        }
    }

    function showpagenum() {
        console.log('arrayitem', Arrayitem);
        console.log('arrayshow', arrayshow);
        console.log('paginatedItems', paginatedItems);
        console.log('currentPage', currentPage);
    }

    function getPageNumbers() {
        arrayshow = [];
        const range = 2; // Number of arrayshow to show around the current page

        arrayshow.push(1); // Always show the first page
        if (currentPage == 1 || currentPage == 2 || currentPage == 3 || currentPage == 4) {
            for (let i = 2; i <= currentPage + 2; i++) {
                if (!arrayshow.includes(i)) {
                    arrayshow.push(i);
                }
            }
            if (!arrayshow.includes(totalPages)) {
                arrayshow.push(totalPages);
            }
        } else if (currentPage > 4) {
            for (let i = currentPage - range; i <= currentPage + range; i++) {
                if (!arrayshow.includes(i)) {
                    arrayshow.push(i);
                }
            }
            if (!arrayshow.includes(totalPages)) {
                arrayshow.push(totalPages);
            }
        }

        return arrayshow;
    }

    function updateItemsPerPage(event: any) {
        itemsPerPage = parseInt(event.target.value) || 1;
        currentPage = 1; // Reset to the first page
        totalPages = Math.ceil(Arrayitem.length / itemsPerPage); // Recalculate total pages
        paginateItems(); // Re-paginate items
        getPageNumbers(); // Update page numbers
    }
</script>

<div class="flex flex-col gap-2">
    <div class="flex gap-2">
        {#each arrayshow as page}
            <button
                class="bg-gray-200 px-4 py-2 rounded-md hover:bg-gray-300"
                class:font-bold={currentPage === page}
                on:click={() => changePage(page)}
            >
                {page}
            </button>
        {/each}
    </div>
    <div class="flex gap-2 items-center">
        <label for="itemsPerPage" class="font-bold">Items per page:</label>
        <input
          id="itemsPerPage"
          type="number"
          min="1"
          value={itemsPerPage}
          on:input={updateItemsPerPage}
          class="bg-gray-200 px-4 py-2 rounded-md"
        />
      </div>
    <button class="bg-gray-200 px-4 py-2 rounded-md hover:bg-gray-300" on:click={showpagenum}>
        Show page number (console)
    </button>
    <div>
        <h3>Current Page Items:</h3>
        <ul>
            {#each paginatedItems[currentPage - 1] as item}
                <li>{item}</li>
            {/each}
        </ul>
    </div>
</div>