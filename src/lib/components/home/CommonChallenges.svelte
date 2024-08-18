<script lang="ts">
    import DefaultIcon from "$lib/components/DefaultIcon.svelte";
    import type { Challenge } from "../../../types/challenge";

    export let title: string;
    export let subtitle: string;
    export let challenges: Challenge[];
    export let textAlign: "left" | "center" = "center";
</script>

<section class="common-challenges content-lg">
    <header class={textAlign === "center" ? "text-center" : "text-left"}>
        <h2 id="common-challenges">{title}</h2>
        <p class="text-subtitle">
            {subtitle}
        </p>
    </header>

    <ul class="challenges">
        {#each challenges as challenge}
            <li class="challenge-card">
                <span>
                    <DefaultIcon white classNames="{challenge.icon} text-xl lg:text-[26px]" />
                </span>
                <h3 class="text-h5">{challenge.title}</h3>
                <p>
                    {challenge.subtitle}
                </p>
            </li>
        {/each}
    </ul>
</section>

<style lang="postcss" scoped>
    .common-challenges {
        @apply text-center;
    }

    .challenges {
        @apply grid grid-cols-1 auto-rows-auto md:grid-cols-2 2xl:grid-cols-3 items-start mt-14 lg:mt-20 gap-10 lg:gap-16;
    }

    .challenge-card {
        @apply flex flex-col items-center self-stretch p-4 md:p-6 bg-bg-soft hover:shadow-md rounded-md border-solid border-bg-contrast border-2 transition-transform hover:-translate-y-2;

        & > span {
            @apply p-2 lg:p-3 flex items-center justify-center border rounded-md border-solid border-disabled bg-secondary shadow-md mb-4 lg:mb-6;
        }

        & > h3 {
            @apply mb-4 lg:mb-6;
        }
    }
</style>
