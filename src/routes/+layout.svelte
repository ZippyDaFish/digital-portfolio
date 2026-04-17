<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>

<!-- Nav -->
<nav class="w-full border-b bg-white fixed z-10">
    <div class="max-w-6xl mx-auto flex justify-between items-center p-4">
        <a href="/"><h1 class="font-bold text-lg">Andrew Riker</h1></a>
        <div class="space-x-6">
            <a href="#projects" class="relative inline-block group transition duration-300 hover:-translate-y-1">
                <span class="text-black transition-colors duration-300">Projects</span>
                <span class="absolute left-1/2 -bottom-1 h-0.5 w-0 bg-black transform -translate-x-1/2 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#about" class="relative inline-block group transition duration-300 hover:-translate-y-1">
                <span class="text-black transition-colors duration-300">About</span>
                <span class="absolute left-1/2 -bottom-1 h-0.5 w-0 bg-black transform -translate-x-1/2 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#contact" class="relative inline-block group transition duration-300 hover:-translate-y-1">
                <span class="text-black transition-colors duration-300">Contact</span>
                <span class="absolute left-1/2 -bottom-1 h-0.5 w-0 bg-black transform -translate-x-1/2 transition-all duration-300 group-hover:w-full"></span>
            </a>
        </div>
    </div>
</nav>

{@render children()}
