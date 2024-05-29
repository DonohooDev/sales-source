<script lang="ts">
    import DefaultIcon from "$lib/components/DefaultIcon.svelte";
</script>

<section class="common-challenges content-lg">
    <h2>Common Challenges</h2>
    <p class="text-subtitle">Identifying and addressing key obstacles in your sales strategy.</p>

    <div class="challenges">
        <div class="challenge-card">
            <span>
                <DefaultIcon classNames="fa-solid fa-timeline text-xl text-3xl" />
            </span>
            <h3 class="text-h5">Low Pipeline Creation</h3>
            <p>Struggling to generate enough qualified leads.</p>
        </div>

        <div class="challenge-card">
            <span>
                <DefaultIcon
                    classNames="fa-solid fa-arrow-up-right-dots fa-flip-both text-xl text-3xl"
                />
            </span>
            <h3 class="text-h5">Decreasing Conversion Rates</h3>
            <p>Seeing a drop in conversion rates from outreach efforts.</p>
        </div>

        <div class="challenge-card">
            <span>
                <DefaultIcon classNames="fa-solid fa-handcuffs text-xl text-3xl" />
            </span>
            <h3 class="text-h5">Inefficient Inbound Processes</h3>
            <p>Failing to capitalize on incoming leads effectively.</p>
        </div>

        <div class="challenge-card">
            <span>
                <DefaultIcon classNames="fa-solid fa-database text-xl text-3xl" />
            </span>
            <h3 class="text-h5">Tech Stack Issues</h3>
            <p>Facing operational challenges within your technology stack.</p>
        </div>

        <div class="challenge-card">
            <span>
                <DefaultIcon classNames="fa-solid fa-comments-dollar text-xl text-3xl" />
            </span>
            <h3 class="text-h5">Poor Compensation Plans</h3>
            <p>Struggling with ineffective sales compensation structures.</p>
        </div>

        <div class="challenge-card">
            <span>
                <DefaultIcon classNames="fa-solid fa-scale-unbalanced text-xl text-3xl" />
            </span>
            <h3 class="text-h5">Organizational Misalignment</h3>
            <p>
                Experiencing misalignment and communication issues between sales and marketing
                teams.
            </p>
        </div>
    </div>
</section>

<style lang="postcss" scoped>
    .common-challenges {
        @apply text-center;
    }

    .challenges {
        @apply grid grid-cols-1 auto-rows-auto md:grid-cols-2 xl:grid-cols-3 items-start mt-14 lg:mt-20 gap-10 lg:gap-16;
    }

    .challenge-card {
        @apply flex flex-col items-center;

        & > span {
            @apply p-2 flex items-center justify-center border rounded-md border-solid border-gray-300 shadow-sm mb-4 lg:mb-6;
        }

        & > h3 {
            @apply mb-2 lg:mb-4;
        }
    }
</style>
