<script>
	let isMenuOpen = false;
	const toggleMenu = () => {
		isMenuOpen = !isMenuOpen;
	};

	const navItems = [
		{ name: 'ประกาศ', href: '/' },
		{ name: 'เอกสาร', href: '/' },
		{ name: 'งบประมาณและสถิติ', href: '/' },
		{ name: 'สโมสรนิสิตฯ', href: '/' }
	];
</script>

<nav class="bg-sucu-pink-01 p-4 px-11 flex justify-between items-center">
	<div class="flex items-center space-x-3 z-50">
		<img src="/sucu_logo_1.svg" alt="Logo" class="h-12" />
		<div class="hidden md:block text-white font-bold">
			<p>สโมสรนิสิต</p>
			<p>จุฬาลงกรณ์มหาวิทยาลัย</p>
		</div>
	</div>

	{#if isMenuOpen}
		<button class="text-white text-4xl self-end focus:outline-none z-50" on:click={toggleMenu}>
			&times;
		</button>
	{:else}
		<button class="block md:hidden text-white focus:outline-none z-50" on:click={toggleMenu}>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="h-8 w-8"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
				stroke-width="2"
			>
				<path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
			</svg>
		</button>
	{/if}

	<div class="hidden md:flex space-x-8">
		{#each navItems as item}
			<a href={item.href} class="text-white text-lg hover:underline">{item.name}</a>
		{/each}
	</div>

	<div
		class="fixed inset-0 bg-sucu-pink-01 flex flex-col items-end justify-end space-y-8 p-8 text-white transform duration-300 ease-in-out"
		class:menu-open={isMenuOpen}
		class:menu-closed={!isMenuOpen}
	>
		{#each navItems as item}
			<a href={item.href} class="text-white text-lg hover:underline">{item.name}</a>
		{/each}
	</div>
</nav>

<style>
	.menu-open {
		transform: translateY(-60%);
	}
	.menu-closed {
		transform: translateY(-100%);
	}
</style>
