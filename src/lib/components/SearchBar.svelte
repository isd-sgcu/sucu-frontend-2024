<script lang="ts">
    import { faSearch } from '@fortawesome/free-solid-svg-icons';
	import Fa from 'svelte-fa';

    export let value: string
    let inputRef: HTMLInputElement
    let isFocus = false
    function handleFocus() {
        isFocus = true
    }
    function handleBlur() {
        isFocus = false
    }

    function handleClickIcon() {
        inputRef.focus()
    }
</script>

<div class={`w-full flex flex-row items-center gap-3 px-4 py-3 rounded-sm border ${isFocus ? "border-sucu-pink-03" : "border-sucu-gray-light"}`}>
    <button on:click={handleClickIcon}>
        <Fa icon={faSearch} class="w-5 h-5"/>
    </button>
    
    <input type="text" class="w-full text-black focus:border-none focus:outline-none" placeholder="ค้นหา" bind:value={value} bind:this={inputRef} on:focus={handleFocus} on:blur={handleBlur}/>
</div>