<script lang="ts">
	import { buttonVariants, type ButtonProps } from '../../styles/tailwind/button';
	import Button from '$lib/components/Button.svelte';
    import { modalShow } from './store'
    import { onMount, onDestroy } from 'svelte';
	export let variant: ButtonProps['variant'] = 'default';
	export let size: ButtonProps['size'] = 'default';
	export let color: ButtonProps['color'] = undefined;
	export let className: string = '';
	export { className as class };

	$: classes = buttonVariants({ variant, size, className, color });
    

    let x = false;

    function handleStorageChange(event : any) {
        if (event.key === 'modalShow') {
            x = event.newValue === 'true';
        }
    }

    onMount(() => {
        if (typeof window !== 'undefined') {
            window.addEventListener('storage', handleStorageChange);
            modalShow.subscribe(value => {
                x = value;
            });
        }
    });

    onDestroy(() => {
        if (typeof window !== 'undefined') {
            window.removeEventListener('storage', handleStorageChange);
        }
    });
    function closeModal() {
        modalShow.set(false);
    }

</script>


{#if x}
<div>
	<Button variant="default" size="default" on:click={() => closeModal()}>Close Modal</Button>
</div>
{/if}
