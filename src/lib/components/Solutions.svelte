<script lang="ts">
    import DefaultIcon from "./DefaultIcon.svelte";
</script>

<section class="solutions">
    <div class="content-lg">
        <h2>Our Solutions</h2>
        <p class="text-subtitle">
            Comprehensive strategies to overcome your sales challenges and drive growth.
        </p>

        <div class="cards">
            <div class="card">
                <div class="card-content">
                    <DefaultIcon
                        classNames="fa-solid fa-user-ninja fa-xl rounded-full bg-bg-contrast p-4 m-auto mb-4"
                    />
                    <h3>Assess</h3>
                    <p class="text-subtext">
                        Detailed audits to identify key areas of improvement.
                    </p>

                    <ul class="solution-list">
                        <div class="flex items-center gap-2" role="listitem">
                            <i style="color: #41497E" class="fa solid fa-circle-check fa-lg" />
                            <p>In-depth pipeline analysis</p>
                        </div>

                        <div class="flex items-center gap-2" role="listitem">
                            <i style="color: #41497E" class="fa solid fa-circle-check fa-lg" />
                            <p>Tech stack evaluation</p>
                        </div>

                        <div class="flex items-center gap-2" role="listitem">
                            <i style="color: #41497E" class="fa solid fa-circle-check fa-lg" />
                            <p>Sales process review</p>
                        </div>

                        <div class="flex items-center gap-2" role="listitem">
                            <i style="color: #41497E" class="fa solid fa-circle-check fa-lg" />
                            <p>Market strategy assessment</p>
                        </div>

                        <div class="flex items-center gap-2" role="listitem">
                            <i style="color: #41497E" class="fa solid fa-circle-check fa-lg" />
                            <p>Custom audit reports</p>
                        </div>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</section>

<style lang="postcss">
    .solutions {
        @apply bg-bg-contrast;
    }

    .cards {
        @apply flex flex-col gap-8 mt-10 lg:mt-16;
    }

    .card {
        @apply bg-bg-primary shadow-md rounded-lg;
    }

    .card-content {
        @apply text-center py-8 px-6;
    }

    .solution-list {
        @apply text-left list-none p-0 mt-8 lg:mt-12 flex flex-col gap-3;

        & > li {
        }
    }
</style>
