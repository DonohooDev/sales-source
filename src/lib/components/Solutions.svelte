<script lang="ts">
    import { CircleCheck } from "lucide-svelte";
    import type { SolutionCard } from "../../types/solution-card";

    export let title: string;
    export let subtitle: string;
    export let cards: SolutionCard[] = [];
</script>

<section class="solutions">
    <div class="content-lg">
        <h2 id="solutions">{title}</h2>
        <p class="text-subtitle">
            {subtitle}
        </p>

        <div class="cards">
            {#each cards as card}
                <div class="card">
                    <span class="rounded-full bg-bg-contrast m-auto p-3 md:p-4 lg:p-5 mb-4 md:mb-6 text-secondary inline-flex">
                        <svelte:component this={card.icon} size={32} class="md:w-9 md:h-9 lg:w-10 lg:h-10" />
                    </span>
                    <h3 class="text-h5">{card.title}</h3>
                    <p class="text-subtext flex-1">{card.subtitle}</p>

                    <ul class="solution-list">
                        {#each card.bullets as bullet, i}
                            <div class="flex items-start gap-4" role="listitem">
                                <CircleCheck size={20} color="#41497E" class="shrink-0 lg:w-5 lg:h-5" />
                                <p class="text-sm">{bullet}</p>
                            </div>
                        {/each}
                    </ul>
                </div>
            {/each}
        </div>
    </div>
</section>

<style lang="postcss">
    .solutions {
        @apply bg-bg-contrast;
    }

    .cards {
        @apply flex flex-col 2xl:flex-row gap-12 mt-10 2xl:mt-16 2xl:justify-between;

        & > div {
            @apply self-stretch;

            & div {
                @apply h-full;
            }
        }
    }

    .card {
        @apply bg-bg-primary shadow-md rounded-lg sm:w-[400px] mx-auto text-center py-8 px-6 lg:py-12 lg:px-10 flex flex-col;
    }

    .solution-list {
        @apply text-left list-none p-0 mt-10 lg:mt-12 flex flex-col gap-3 lg:gap-4;
    }
</style>
