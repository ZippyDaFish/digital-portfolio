<script>
    const posts = [
        {
            slug: "placeholder-blog-post",
            title: "Blog Posts Coming Soon...",
            desc: "I will start posting about the projects I create here.",
            content: "...",
            date: "2026-05-4",
        },
    ];

    // show newest first
    const sortedPosts = [...posts].sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    );
</script>

<!-- Hero -->
<section class="max-w-6xl mx-auto px-6 py-32 grid md:grid-cols-2 gap-12 items-center">
    <div>
        <h2 class="text-4xl font-bold mb-4">My Blog</h2>
        <p class="text-lg text-gray-600 mb-6">
            Read about the projects I create here.
        </p>

        <div class="group inline-block">
            <a href="#posts" class="relative inline-block px-3 py-2 transition-transform duration-300
                group-hover:-translate-y-1
                after:content-[''] after:absolute after:left-1/2 after:bottom-0
                after:h-0.5 after:w-2/3 after:bg-gray-500
                after:-translate-x-1/2
                after:transition-all after:duration-300
                group-hover:after:w-full
                group-hover:after:bg-black">
                Read Latest Posts
            </a>
        </div>
    </div>
</section>

<!-- Blog Feed -->
<section class="max-w-xl mx-auto px-6 py-28">
    <div class="space-y-28">
        {#each sortedPosts as post}
            <article class="group">

                <!-- Meta -->
                <p class="text-xs text-gray-400 mb-3 tracking-wide uppercase">
                    {new Date(post.date).toLocaleDateString()}
                </p>

                <!-- Title -->
                <h2 class="text-2xl md:text-3xl font-semibold leading-tight mb-3
                           group-hover:text-blue-600 transition-colors">
                    {post.title}
                </h2>

                <!-- Optional Description (nice bridge into content) -->
                {#if post.desc}
                    <p class="text-gray-600 mb-5">
                        {post.desc}
                    </p>
                {/if}

                <!-- Content -->
                <div class="prose prose-gray max-w-none mb-6
                            prose-p:leading-relaxed
                            prose-p:mb-4">
                    {@html post.content}
                </div>

                <!-- Divider -->
                <div class="h-px bg-gray-100"></div>
            </article>
        {/each}
    </div>
</section>