<script lang="ts">
    import ButtonLink from "$lib/components/ButtonLink.svelte";
    import type { PostContents } from "./blog-post";

    export let postDate: string;
    export let author: string;
    export let postContents: PostContents[] = [];

    let dateString = new Date(postDate).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
    });
</script>

<article>
    <header class="header-only-section">
        <nav>
            <span class="inline-block mb-4 md:mb-6 2xl:mb-8">
                <ButtonLink
                    icon="fa-sharp fa-left-long"
                    href="/blog"
                    btnText="Back"
                    btnType="outlined"
                />
            </span>
        </nav>
        <address>{author}</address>
        <time datetime={postDate}>{dateString}</time>
        <slot name="title" />
        <div class="content-md">
            <slot name="intro" />
            <slot name="image" />
        </div>
    </header>

    {#if postContents.length}
        <section class="content-md mb-0">
            <h2 id="contents">Contents</h2>
            <nav>
                <ol>
                    {#each postContents as content}
                        <li>
                            <a class="underline font-semibold" href={`#${content.id}`}
                                >{content.title}</a
                            >
                        </li>
                    {/each}
                </ol>
            </nav>
        </section>
    {/if}

    <div class="content-md header-only-section blog-content">
        <slot name="content" />
    </div>
</article>

<style lang="postcss">
    :global(.blog-content) {
        & p {
            @apply mb-3 md:mb-4 2xl:mb-6;
        }

        & a {
            @apply text-primary underline;
        }

        & section {
            @apply mb-8 md:mb-12 2xl:mb-16 mx-0 px-0 py-0;
        }

        & ul {
            @apply list-disc list-inside mb-6;

            & li {
                @apply mb-3 ml-3;
            }
        }
    }
</style>
