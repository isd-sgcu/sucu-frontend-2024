<script>
	import Footer from '$lib/components/Footer/Footer.svelte';
	import Navbar from '$lib/components/Navbar.svelte';
	import '../styles/app.css';
</script>

<div>
	<Navbar />
	<slot />
	<Footer />
</div>
