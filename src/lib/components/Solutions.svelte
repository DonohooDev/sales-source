<script lang="ts">
    import DefaultIcon from "$lib/components/DefaultIcon.svelte";
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
                    <DefaultIcon
                        classNames="{card.icon} rounded-full bg-bg-contrast m-auto text-2xl md:text-3xl lg:text-4xl p-3 md:p-4 lg:p-5 mb-4 md:mb-6"
                    />
                    <h3 class="text-h5">{card.title}</h3>
                    <p class="text-subtext flex-1">{card.subtitle}</p>

                    <ul class="solution-list">
                        {#each card.bullets as bullet, i}
                            <div class="flex items-start gap-4" role="listitem">
                                <i
                                    style="color: #41497E"
                                    class="fa solid fa-circle-check lg:text-lg"
                                />
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
