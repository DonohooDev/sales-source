<script lang="ts">
    import DefaultIcon from "../DefaultIcon.svelte";
</script>

<section class="solutions">
    <div class="content-md">
        <h2>Our Solutions</h2>
        <p class="text-subtitle">
            Comprehensive strategies to overcome your sales challenges and drive growth.
        </p>

        <div class="cards">
            <div class="card">
                <DefaultIcon
                    classNames="fa-solid fa-user-ninja fa-xl rounded-full bg-bg-contrast p-4 m-auto mb-4"
                />
                <h3>Assess</h3>
                <p class="text-subtext">Detailed audits to identify key areas of improvement.</p>

                <ul class="solution-list">
                    <div class="flex items-center gap-4" role="listitem">
                        <i style="color: #41497E" class="fa solid fa-circle-check lg:text-lg" />
                        <p class="text-sm">In-depth pipeline analysis</p>
                    </div>

                    <div class="flex items-center gap-4" role="listitem">
                        <i style="color: #41497E" class="fa solid fa-circle-check lg:text-lg" />
                        <p class="text-sm">Tech stack evaluation</p>
                    </div>

                    <div class="flex items-center gap-4" role="listitem">
                        <i style="color: #41497E" class="fa solid fa-circle-check lg:text-lg" />
                        <p class="text-sm">Sales process review</p>
                    </div>

                    <div class="flex items-center gap-4" role="listitem">
                        <i style="color: #41497E" class="fa solid fa-circle-check lg:text-lg" />
                        <p class="text-sm">Market strategy assessment</p>
                    </div>

                    <div class="flex items-center gap-4" role="listitem">
                        <i style="color: #41497E" class="fa solid fa-circle-check lg:text-lg" />
                        <p class="text-sm">Custom audit reports</p>
                    </div>
                </ul>
            </div>

            <div class="card">
                <DefaultIcon
                    classNames="fa-solid fa-plane-departure fa-xl rounded-full bg-bg-contrast p-4 m-auto mb-4"
                />
                <h3>Ascend</h3>
                <p class="text-subtext">Customized solutions tailored to your specific needs.</p>

                <ul class="solution-list">
                    <div class="flex items-center gap-4" role="listitem">
                        <i style="color: #41497E" class="fa solid fa-circle-check lg:text-lg" />
                        <p class="text-sm">Strategic planning</p>
                    </div>

                    <div class="flex items-center gap-4" role="listitem">
                        <i style="color: #41497E" class="fa solid fa-circle-check lg:text-lg" />
                        <p class="text-sm">Team training programs</p>
                    </div>

                    <div class="flex items-center gap-4" role="listitem">
                        <i style="color: #41497E" class="fa solid fa-circle-check lg:text-lg" />
                        <p class="text-sm">Change management</p>
                    </div>

                    <div class="flex items-center gap-4" role="listitem">
                        <i style="color: #41497E" class="fa solid fa-circle-check lg:text-lg" />
                        <p class="text-sm">Technology integration</p>
                    </div>

                    <div class="flex items-center gap-4" role="listitem">
                        <i style="color: #41497E" class="fa solid fa-circle-check lg:text-lg" />
                        <p class="text-sm">Sales strategy implementation</p>
                    </div>
                </ul>
            </div>

            <div class="card">
                <DefaultIcon
                    classNames="fa-solid fa-gauge-high fa-xl rounded-full bg-bg-contrast p-4 m-auto mb-4"
                />
                <h3>Accelerate</h3>
                <p class="text-subtext">
                    Tailored solutions to increase sales performance and drive growth.
                </p>

                <ul class="solution-list">
                    <div class="flex items-center gap-4" role="listitem">
                        <i style="color: #41497E" class="fa solid fa-circle-check lg:text-lg" />
                        <p class="text-sm">Performance tracking</p>
                    </div>

                    <div class="flex items-center gap-4" role="listitem">
                        <i style="color: #41497E" class="fa solid fa-circle-check lg:text-lg" />
                        <p class="text-sm">Growth analytics</p>
                    </div>

                    <div class="flex items-center gap-4" role="listitem">
                        <i style="color: #41497E" class="fa solid fa-circle-check lg:text-lg" />
                        <p class="text-sm">Ongoing support</p>
                    </div>

                    <div class="flex items-center gap-4" role="listitem">
                        <i style="color: #41497E" class="fa solid fa-circle-check lg:text-lg" />
                        <p class="text-sm">Continuous optimization</p>
                    </div>

                    <div class="flex items-center gap-4" role="listitem">
                        <i style="color: #41497E" class="fa solid fa-circle-check lg:text-lg" />
                        <p class="text-sm">Long-term success planning</p>
                    </div>
                </ul>
            </div>
        </div>
    </div>
</section>

<style lang="postcss">
    .solutions {
        @apply bg-bg-contrast;
    }

    .cards {
        @apply flex flex-col xl:flex-row gap-12 mt-10 xl:mt-16 xl:justify-between;

        & > div {
            @apply self-stretch;

            & div {
                @apply h-full;
            }
        }
    }

    .card {
        @apply bg-bg-primary shadow-md rounded-lg  sm:w-[375px] mx-auto text-center py-8 px-6 lg:py-12 lg:px-10;
    }

    .solution-list {
        @apply text-left list-none p-0 mt-10 lg:mt-12 flex flex-col gap-3 lg:gap-4;
    }
</style>
