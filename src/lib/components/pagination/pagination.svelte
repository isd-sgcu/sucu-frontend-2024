<script lang="ts">
	import { page } from "$app/stores";

    export let Arrayitem: any[] = [];
    let currentPage = 1;
    let arrayshow: any[] = [];
    $: totalPages = Arrayitem.length;
    if(Arrayitem.length < 8){
        for(let i = 0; i < Arrayitem.length; i++){
            arrayshow.push(i+1);
        }
    }else{
        for(let i = 0; i < 3; i++){
            arrayshow.push(i+1);
        }
        arrayshow.push(Arrayitem.length);
    }


    function changePage(page: number) {
        if(page < totalPages-2){
        currentPage = page;
        getPageNumbers();
    }
    if(page >= totalPages-2){
        currentPage = page;
        arrayshow = [];
        arrayshow.push(1);
        for(let i = page-2; i <= totalPages; i++){
            arrayshow.push(i);
        }
    }
    }
    
    function showpagenum(){
        console.log("arrayitem",Arrayitem);
        console.log("arrayshow",arrayshow);
        console.log(currentPage);
    }

    function getPageNumbers() {
    arrayshow = [];
      const range = 2; // Number of arrayshow to show around the current page
  
      arrayshow.push(1); // Always show the first page
      if((currentPage == 1 || currentPage == 2 || currentPage == 3 || currentPage == 4 )){
        for(let i = 2; i <= currentPage+2 ; i++){
            arrayshow.push(i);
        }
        arrayshow.push(totalPages);
      }
      else if(currentPage > 4){
        for(let i = currentPage - range; i <= currentPage + range; i++){
            arrayshow.push(i);
        }
        arrayshow.push(totalPages);
      }


  
  
      return arrayshow;
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
<button
class="bg-gray-200 px-4 py-2 rounded-md hover:bg-gray-300"
on:click={showpagenum}
>
Show page number (console)
</button>
  </div>