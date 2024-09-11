<script>
	import Button from '$lib/components/Button.svelte';
	import Modal from '$lib/components/Modal.svelte';
	import { modalShow } from '../../lib/components/store';

	function showModal() {
		modalShow.set(true);
		console.log(localStorage.getItem('modalShow'));
	}
</script>

<div class="absolute justify-center items-center w-[100vw] flex h-[100vh]">
	<Button variant="default" size="default" on:click={() => showModal()}>Click For Modal</Button>

	{#if modalShow}
		<Modal />
	{/if}
</div>
