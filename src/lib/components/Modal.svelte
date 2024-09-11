<script lang="ts">
	import { buttonVariants, type ButtonProps } from '../../styles/tailwind/button';
	import Button from '$lib/components/Button.svelte';
	import { modalShow } from './store';
	import { onMount, onDestroy } from 'svelte';
	import { typography } from '../../styles/tailwind/typography';
	export let variant: ButtonProps['variant'] = 'default';
	export let size: ButtonProps['size'] = 'default';
	export let color: ButtonProps['color'] = undefined;
	export let className: string = '';
	export { className as class };

	$: classes = buttonVariants({ variant, size, className, color });

	let x = false;

	function handleStorageChange(event: any) {
		if (event.key === 'modalShow') {
			x = event.newValue === 'true';
		}
	}

	onMount(() => {
		if (typeof window !== 'undefined') {
			window.addEventListener('storage', handleStorageChange);
			modalShow.subscribe((value) => {
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

	const mockData = [
		{ id: 1, content: 'เอกสารที่เกี่ยวข้อง1.pdf' },
		{ id: 2, content: 'เอกสารที่เกี่ยวข้อง2.pdf' },
		{ id: 3, content: 'เอกสารที่เกี่ยวข้อง3.pdf' },
		{ id: 4, content: 'เอกสารที่เกี่ยวข้อง4.pdf' },
		{ id: 5, content: 'เอกสารที่เกี่ยวข้อง5.pdf' },
		{ id: 6, content: 'เอกสารที่เกี่ยวข้อง6.pdf' },
		{ id: 7, content: 'เอกสารที่เกี่ยวข้อง7.pdf' },
		{ id: 8, content: 'เอกสารที่เกี่ยวข้อง8.pdf' },
		{ id: 9, content: 'เอกสารที่เกี่ยวข้อง9.pdf' },
		{ id: 10, content: 'เอกสารที่เกี่ยวข้อง10.pdf' }
	];
</script>

{#if x}
	<div class="fixed inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center z-50">
		<div class="bg-white h-[500px] w-[800px] rounded p-[36px] flex flex-col">
			<div class="flex justify-between items-center">
				<div class={typography({ variant: 'heading2' })}>เอกสารที่เกี่ยวข้อง</div>
				<button class="hover:scale-105 transition-all" on:click={() => closeModal()}>
					<svg
						width="28"
						height="28"
						viewBox="0 0 28 28"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M2 2L26 26M2 26L26 2L2 26Z"
							stroke="black"
							stroke-width="3"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
					</svg>
				</button>
			</div>
			<div class="h-[2px] bg-sucu-pink-03 w-full mt-5"></div>
			<div
				class="max-h-[400px] overflow-y-auto
 [&::-webkit-scrollbar]:w-2
  [&::-webkit-scrollbar-track]:rounded-full
  [&::-webkit-scrollbar-track]:bg-gray-100
  [&::-webkit-scrollbar-thumb]:rounded-full
  [&::-webkit-scrollbar-thumb]:bg-gray-300
  dark:[&::-webkit-scrollbar-track]:bg-neutral-700
  dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500 mt-5"
			>
				{#each mockData as item}
					<div class="w-[500px] mb-2">
						<Button variant="default" size="default"
							><div class="mr-3">
								<svg
									width="16"
									height="20"
									viewBox="0 0 16 20"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M5 10H11M5 14H11M13 19H3C2.46957 19 1.96086 18.7893 1.58579 18.4142C1.21071 18.0391 1 17.5304 1 17V3C1 2.46957 1.21071 1.96086 1.58579 1.58579C1.96086 1.21071 2.46957 1 3 1H8.586C8.8512 1.00006 9.10551 1.10545 9.293 1.293L14.707 6.707C14.8946 6.89449 14.9999 7.1488 15 7.414V17C15 17.5304 14.7893 18.0391 14.4142 18.4142C14.0391 18.7893 13.5304 19 13 19Z"
										stroke="white"
										stroke-width="2"
										stroke-linecap="round"
										stroke-linejoin="round"
									/>
								</svg>
							</div>
							{item.content}</Button
						>
					</div>
				{/each}
			</div>
		</div>
		<!-- <Button variant="default" size="default" on:click={() => closeModal()}>Close Modal</Button> -->
	</div>
{/if}

<style>
	.overflow-auto {
		scrollbar-width: thin;
	}

	.overflow-auto::-webkit-scrollbar {
		width: 12px;
		border-radius: 10px;
	}

	.overflow-auto::-webkit-scrollbar-track {
		background: #f1f1f1;
		border-radius: 10px;
	}

	.overflow-auto::-webkit-scrollbar-thumb {
		background-color: #888;
		border-radius: 10px;
		border: 3px solid #f1f1f1;
	}

	.overflow-auto::-webkit-scrollbar-button {
		display: none;
	}
</style>
