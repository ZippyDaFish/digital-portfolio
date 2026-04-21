<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>

<!-- Nav -->
<nav class="w-full border-b bg-white fixed z-20">
    <div class="max-w-6xl mx-auto flex justify-between items-center p-4">
        <a href="/">
            <h1 class="font-bold text-lg">Andrew Riker</h1>
        </a>
        <div class="flex gap-6">
            <div class="group">
                <a href="/#projects" class="relative inline-block px-3 py-2 transition-transform duration-300
                        group-hover:-translate-y-1
                        after:content-[''] after:absolute after:left-1/2 after:bottom-0
                        after:h-0.5 after:w-0 after:bg-black
                        after:-translate-x-1/2
                        after:transition-all after:duration-300
                        group-hover:after:w-full">Projects </a>
            </div>

            <div class="group">
                <a href="/#about" class="relative inline-block px-3 py-2 transition-transform duration-300
                        group-hover:-translate-y-1
                        after:content-[''] after:absolute after:left-1/2 after:bottom-0
                        after:h-0.5 after:w-0 after:bg-black
                        after:-translate-x-1/2
                        after:transition-all after:duration-300
                        group-hover:after:w-full">About</a>
            </div>

            <div class="group">
                <a href="/#contact" class="relative inline-block px-3 py-2 transition-transform duration-300
                        group-hover:-translate-y-1
                        after:content-[''] after:absolute after:left-1/2 after:bottom-0
                        after:h-0.5 after:w-0 after:bg-black
                        after:-translate-x-1/2
                        after:transition-all after:duration-300
                        group-hover:after:w-full">Contact</a>
            </div>
        </div>
    </div>
</nav>

{@render children()}
