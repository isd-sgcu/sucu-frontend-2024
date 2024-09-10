<script>
	import LOGO from './sucu_logo 1.svg';
	const navItems = [
		{ name: 'ประกาศ', href: '' },
		{ name: 'เอกสาร', href: '' },
		{ name: 'งบประมาณและสถิติ', href: '' },
		{ name: 'สโมสรนิสิตฯ', href: '' }
	];
</script>

<nav class="bg-sucu-pink-01 p-4 flex justify-between items-center">
	<div class="flex items-center space-x-3">
		<img src={LOGO} alt="Logo" class="h-10" />
		<span class="lg:visible invisible text-white text-lg">สโมสรนิสิตจุฬาลงกรณ์มหาวิทยาลัย</span>
	</div>

	<div class="flex space-x-8">
		{#each navItems as item}
			<a href={item.href} class="text-white text-lg hover:underline">{item.name}</a>
		{/each}
	</div>
</nav>
