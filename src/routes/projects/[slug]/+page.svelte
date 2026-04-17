<script lang="ts">
    export let data;
    const project = data.project;
</script>

<section class="min-h-screen px-6 py-2">
    <div class="max-w-3xl mx-auto">
        <a href="/#projects" class="text-sm text-gray-500 hover:text-black transition">Back to projects</a>

        {#if project}
        <!-- Title -->
        <header class="mt-6 mb-16">
            <h1 class="text-4xl font-bold tracking-tight mb-4">
                {project.title}
            </h1>

            <p class="text-lg text-gray-600 leading-relaxed">
                {project.description}
            </p>
        </header>

        <!-- Content -->
        <article class="space-y-12">
            <section>
                <h2 class="text-xl font-semibold">
                    Problem
                </h2>

                <p class="text-gray-600 leading-relaxed mb-3">
                    {project.problem}
                </p>
            </section>

            <section>
                <h2 class="text-xl font-semibold">
                    Solution
                </h2>

                <p class="text-gray-600 leading-relaxed mb-3">
                    {project.solution}
                </p>
            </section>

            <section>
                <h2 class="text-xl font-semibold">
                    Tech Used
                </h2>

                <div class="flex flex-wrap gap-3">
                    {#each project.techs as tech}
                        <span class="px-3 py-1 bg-gray-200 rounded">{tech}</span>
                    {/each}
                </div>
            </section>

            <section>
                <video width="640" height="480" controls>
                    <source src={project.demo} type="video/mp4">
                    <source src="movie.ogg" type="video/ogg">
                    Your browser does not support the video tag.
                </video>
            </section>
        </article>
        {/if}
    </div>
</section>