<script lang="ts">
    import DefaultIcon from "$lib/components/DefaultIcon.svelte";
    import Saos from "saos";
</script>

<section class="common-challenges content-lg">
    <h2 class="">Common Challenges</h2>
    <p class="text-subtitle">Identifying and addressing key obstacles in your sales strategy.</p>

    <div class="challenges">
        <Saos once={true} animation="from-bottom 1s cubic-bezier(0.35, 0.5, 0.65, 0.95)">
            <div class="challenge-card">
                <span>
                    <DefaultIcon classNames="fa-solid fa-timeline fa-lg" />
                </span>
                <h3 class="text-h5">Low Pipeline Creation</h3>
                <p>Struggling to generate enough qualified leads.</p>
            </div>
        </Saos>

        <Saos once={true} animation="from-bottom 1s cubic-bezier(0.35, 0.5, 0.65, 0.95)">
            <div class="challenge-card">
                <span>
                    <DefaultIcon classNames="fa-solid fa-arrow-up-right-dots fa-flip-both fa-lg" />
                </span>
                <h3 class="text-h5">Decreasing conversion rates</h3>
                <p>Seeing a drop in conversion rates from outreach efforts.</p>
            </div>
        </Saos>

        <Saos once={true} animation="from-bottom 1s cubic-bezier(0.35, 0.5, 0.65, 0.95)">
            <div class="challenge-card">
                <span>
                    <DefaultIcon classNames="fa-solid fa-handcuffs fa-lg" />
                </span>
                <h3 class="text-h5">Inefficient inbound processes</h3>
                <p>Failing to capitalize on incoming leads effectively.</p>
            </div>
        </Saos>

        <Saos once={true} animation="from-bottom 1s cubic-bezier(0.35, 0.5, 0.65, 0.95)">
            <div class="challenge-card">
                <span>
                    <DefaultIcon classNames="fa-solid fa-database fa-lg" />
                </span>
                <h3 class="text-h5">Operational tech stack issues</h3>
                <p>Facing operational challenges within your technology stack.</p>
            </div>
        </Saos>

        <Saos once={true} animation="from-bottom 1s cubic-bezier(0.35, 0.5, 0.65, 0.95)">
            <div class="challenge-card">
                <span>
                    <DefaultIcon classNames="fa-solid fa-comments-dollar fa-lg" />
                </span>
                <h3 class="text-h5">Poor compensation plans</h3>
                <p>Struggling with ineffective sales compensation structures.</p>
            </div>
        </Saos>

        <Saos once={true} animation="from-bottom 1s cubic-bezier(0.35, 0.5, 0.65, 0.95)">
            <div class="challenge-card">
                <span>
                    <DefaultIcon classNames="fa-solid fa-scale-unbalanced fa-lg" />
                </span>
                <h3 class="text-h5">Misalignment</h3>
                <p>
                    Experiencing misalignment and communication issues between sales and marketing
                    teams.
                </p>
            </div>
        </Saos>
    </div>
</section>

<style lang="postcss" scoped>
    @keyframes -global-from-bottom {
        0% {
            transform: rotateY(50deg) translateY(100vh) skewY(50deg);
            opacity: 1;
        }
        100% {
            transform: rotateY(0deg) translateY(0) skewY(0deg);
            opacity: 1;
        }
    }

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
