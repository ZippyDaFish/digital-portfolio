<script>
    import pfp from "$lib/assets/Photo01_Zoomed.jpg";
    import weatherAppImg from "$lib/assets/weatherapp.png";
    import creativeSuiteImg from "$lib/assets/creativesuite.png";
    import characterBuilderImg from "$lib/assets/characterbuilder.png";

    const projects = [
        {
            slug: "weather-app",
            image: weatherAppImg,
            imageAlt: "Weather app example",
            title: "Weather App",
            desc: "A simple app that displays the weather in a city of your choosing.",
            tech: "JavaScript, API"
        },
        {
            slug: "creative-suite",
            image: creativeSuiteImg,
            imageAlt: "Landing page example",
            title: "Creative Suite Landing",
            desc: "A demo landing page with a focus on design and calls to action.",
            tech: "Svelte, Tailwind"
        },
        {
            slug: "character-builder",
            image: characterBuilderImg,
            imageAlt: "Character builder example",
            title: "Character Builder",
            desc: "A custom character builder for a tabletop-roleplaying-game.",
            tech: "React.js, Firebase"
        }
    ];
</script>

<!-- Hero -->
<section class="max-w-6xl mx-auto px-6 py-32 grid md:grid-cols-2 gap-12 items-center">
    <div>
        <h2 class="text-4xl font-bold mb-4">Hello, I'm Andrew</h2>
        <p class="text-lg text-gray-600 mb-6">Full-Stack Web Developer.</p>
        <div class="space-x-4">
            <div class="group inline-block">
                <a href="#contact" class="relative inline-block px-3 py-2 transition-transform duration-300
                        group-hover:-translate-y-1
                        after:content-[''] after:absolute after:left-1/2 after:bottom-0
                        after:h-0.5 after:w-2/3 after:bg-gray-500
                        after:-translate-x-1/2
                        after:transition-all after:duration-300
                        group-hover:after:w-full
                        group-hover:after:bg-black">Let's Get in Contact</a>
            </div>
        </div>
    </div>

    <div class="flex justify-center">
        <div class="w-64 h-64 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
            <img alt="Profile" src={pfp} class="w-full h-full object-cover"/>
        </div>
    </div>
</section>

<!-- Projects -->
<section id="projects" class="bg-gray-50 py-20">
    <div class="max-w-6xl mx-auto px-6">
        <h3 class="text-3xl font-bold mb-10">Featured Projects</h3>
        <div class="grid md:grid-cols-3 gap-8">
            {#each projects as project} 
                <a href={`/projects/${project.slug}`}
                   class="group block bg-white border rounded-xl overflow-hidden shadow-sm transition duration-300 ease-out hover:-translate-y-1 hover:shadow-lg">
                    <!-- Image -->
                    <div class="h-40 bg-gray-200 flex items-center justify-center overflow-hidden">
                        <img alt={project.imageAlt} src={project.image} class="object-cover w-full h-full transition duration-300"/>
                    </div>
                    <!-- Content -->
                    <div class="p-6">
                        <h4 class="font-semibold text-lg mb-2 group-hover:text-blue-600 transition-colors">{project.title}</h4>
                        <p class="text-gray-600 text-sm mb-3">{project.desc}</p>
                        <p class="text-xs text-gray-500 mb-4">{project.tech}</p>
                    </div>
                </a>
            {/each}
        </div>
    </div>
</section>

<!-- About -->
<section id="about" class="max-w-6xl mx-auto px-6 py-20">
    <h3 class="text-3xl font-bold mb-6">About Me</h3>

    <p class="text-gray-600 mb-6 max-w-xl">
        I am a Software Developer who takes a systematic approach to my work and my life. By taking things one step at a time, and always asking how I can make each step more efficient, I can make space for what truly matters to me. I'm particularly interested in building productivity tools and designing websites using tools such as React, 
        Vue, and Svelte. In addition to the software side of things, I have an appreciation for robotics, electronics, and working with microcontrollers.<br><br>Proficient in JavaScript, HTML, CSS, Python, C++, and more. Driven by curiosity and a commitment to continuous learning.
    </p>

    <div class="flex flex-wrap gap-3">
        <span class="px-3 py-1 bg-gray-200 rounded">Svelte</span>
        <span class="px-3 py-1 bg-gray-200 rounded">JavaScript</span>
        <span class="px-3 py-1 bg-gray-200 rounded">Python</span>
        <span class="px-3 py-1 bg-gray-200 rounded">C++</span>
        <span class="px-3 py-1 bg-gray-200 rounded">React</span>
        <span class="px-3 py-1 bg-gray-200 rounded">Vue</span>
        <span class="px-3 py-1 bg-gray-200 rounded">Tailwind</span>
    </div>
</section>

<!-- Contact -->
<section id="contact" class="bg-gray-50 py-20">
    <div class="max-w-6xl mx-auto px-6">
        <h3 class="text-3xl font-bold mb-6">Contact</h3>

        <div class="space-y-4 text-gray-700">
            <p>Email: <a href="mailto:andrew.riker21@gmail.com" target="_blank">andrew.riker21@gmail.com</a></p>
            <p>GitHub: <a href="https://www.github.com/ZippyDaFish" target="_blank">github.com/ZippyDaFish</a></p>
            <p>LinkedIn: <a href="https://www.linkedin.com/in/andrew-riker-727a65191/" target="_blank">linkedin.com/in/andrew-riker-727a65191</a></p>
        </div>
        <a href="mailto:andrew.riker21@gmail.com" target="_blank" class="inline-block group">
            <div class="relative overflow-hidden max-w-42 mt-6 px-6 py-3 flex justify-center bg-black text-white border-2 border-black rounded-lg">
                <span class="absolute inset-0 z-0 bg-white origin-left scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100"></span>
                <span class="relative z-10 transition-colors duration-300 group-hover:text-black">Send Message</span>
            </div>
        </a>
    </div>
</section>