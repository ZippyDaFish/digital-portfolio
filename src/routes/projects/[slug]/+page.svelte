<script lang="ts">
    export let data;
    const project = data.project;
</script>

<section class="min-h-screen px-6 py-10 bg-white">
    <div class="max-w-6xl mx-auto">
        <a href="/#projects" class="text-sm text-gray-500 hover:text-black transition">Back to projects</a>
        {#if project}
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 mt-10">
            <div class="lg:sticky lg:top-24 h-fit">
                <h1 class="text-4xl font-bold tracking-tight mb-6">{project.title}</h1>
                <p class="text-lg text-gray-600 leading-relaxed mb-10">{project.description}</p>

                <div class="space-y-10">
                    <section>
                        <h2 class="text-sm uppercase tracking-wider text-gray-500 mb-2">Problem</h2>
                        <p class="text-gray-700 leading-relaxed">{project.problem}</p>
                    </section>
                    <section>
                        <h2 class="text-sm uppercase tracking-wider text-gray-500 mb-2">Solution</h2>
                        <p class="text-gray-700 leading-relaxed">{project.solution}</p>
                    </section>
                    <section>
                        <h2 class="text-sm uppercase tracking-wider text-gray-500 mb-3">Tech Used</h2>
                        <div class="flex flex-wrap gap-2">
                            {#each project.techs as tech}
                                <span class="px-3 py-1 bg-gray-200 rounded">
                                    {tech}
                                </span>
                            {/each}
                        </div>
                    </section>
                </div>
            </div>

            <div class="space-y-10">
                <div class="bg-gray-100 rounded-lg">
                    <div class="bg-white rounded-md shadow-sm aspect-video flex items-center justify-center overflow-hidden">
                        <video class="w-full h-full object-contain" controls>
                            <source src={project.demo} type="video/mp4">
                            Your browser does not support the video tag.
                        </video>
                    </div>
                </div>
            </div>
        </div>
        {/if}
    </div>
</section>