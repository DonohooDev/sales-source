<script lang="ts">
    import DefaultCardImage from "$lib/assets/blog/default-blog-card-img.webp";

    export let title: string;
    export let href: string;
    export let Image = DefaultCardImage;
    export let postDate: string;

    let dateString = new Date(postDate).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
    });
</script>

<li>
    <a {href} target={href.includes("http") ? "_blank" : "_self"}>
        <div class="card-content">
            <img src={Image} alt="SalesSource blog post" width="300" height="275" loading="lazy" />

            <div class="card-text">
                <time datetime={postDate}>{dateString}</time>
                <h3 class="text-h4">{title}</h3>

                <span>
                    <slot name="preview" />
                </span>
            </div>
        </div>
    </a>
</li>

<style type="postcss">
    li {
        @apply mb-8 border border-solid border-disabled rounded-md p-6 shadow-md bg-bg-soft;

        & a {
            @apply block text-txt;
        }
    }

    .card-content {
        @apply grid grid-cols-1 gap-6 md:grid-cols-3 xl:gap-16;

        & img {
            @apply rounded-md w-full mx-auto max-w-[400px] xl:max-w-[375px];
        }
    }

    .card-text {
        @apply md:col-span-2;

        & > span {
        }
    }

    .text-h4 {
        @apply mb-4;
    }

    time {
        @apply text-sm;
    }
</style>
