<script lang="ts">
    import ABSDFlowchart from "$lib/assets/absd-full-flowchart.png";
    import ABSDFlowchartDownload from "$lib/assets/absd-full-flowchart.pdf";
    import HomeBridge from "$lib/assets/home-bridge.jpg";
    import Skyline from "$lib/assets/blog/skyline-account-based-sales-development.jpg";
    import ButtonLink from "$lib/components/ButtonLink.svelte";
</script>

<svelte:head></svelte:head>

<div class="content-lg">
    <section>
        <header>
            <h1>Resources</h1>
            <p class="text-subtitle max-w-[1000px]">
                Our world’s leading advisory and consulting firm for strategic account-based sales
                development's go to resources at your fingertips to help you revolutionize your
                sales strategy. We provide cutting-edge technology and expert guidance to help you
                in your journey.
            </p>
        </header>

        <ul class="resources">
            <li class="resource">
                <img
                    src={Skyline}
                    alt="The Ultimate ABSD Tech Stack"
                    width="350"
                    height="350"
                    class="rounded-md bg-secondary p-1 w-full object-cover object-top lg:max-w-[300px]"
                />
                <div class="resource-content">
                    <h2>The Ultimate ABSD Tech Stack</h2>
                    <p>
                        The Ultimate ABSD Tech Stack is a comprehensive guide to the tools and
                        technologies that will help you build a successful account-based sales
                        development strategy. See the full infographic in action below.
                    </p>
                    <ButtonLink
                        href="/blog/the-ultimate-absd-tech-stack#infographic"
                        btnText="View Infographic"
                        size="sm"
                        btnType="outlined"
                    />
                </div>
            </li>

            <li class="resource resource-reverse">
                <img
                    src={HomeBridge}
                    width="600"
                    height="400"
                    alt="4 Must-Have Touch Patterns for New Account-Based Sales Development Teams"
                    class="rounded-md bg-secondary p-1 w-full object-cover object-top lg:max-w-[400px]"
                />
                <div class="resource-content">
                    <h2>
                        4 Must-Have Touch Patterns for New Account-Based Sales Development Teams
                    </h2>
                    <p>
                        The 4 must-have touch patterns for new account-based sales development teams
                        to help you build a successful account-based sales development strategy.
                    </p>
                    <ButtonLink
                        href="/blog/4-touch-patterns-for-new-account-based-sales-development-teams#infographic"
                        btnText="View Infographic"
                        size="sm"
                        btnType="outlined"
                    />
                </div>
            </li>

            <li class="resource">
                <img
                    src={ABSDFlowchart}
                    width="1875"
                    height="4811"
                    loading="lazy"
                    alt="Account-Based Sales Development Flowchart"
                    class="rounded-md bg-secondary p-1 w-[500px] object-cover object-top max-h-[375px]"
                />
                <div class="resource-content">
                    <h2>Are you ready for an Account-Based Sales Development Model?</h2>
                    <ul
                        class="text-left list-none p-0 mt-2 lg:mt-4 flex flex-col gap-3 lg:gap-4 mb-2 lg:mb-4"
                    >
                        <div class="flex items-start gap-4" role="listitem">
                            <i style="color: #41497E" class="fa solid fa-circle-check mt-1" />
                            <p>
                                Find out the “must-haves” to make Account-Based Sales Development a
                                success
                            </p>
                        </div>
                        <div class="flex items-start gap-4" role="listitem">
                            <i style="color: #41497E" class="fa solid fa-circle-check mt-1" />
                            <p>
                                Understand how the key features of your sales cycle and market
                                affect your demand generation strategy
                            </p>
                        </div>
                        <div class="flex items-start gap-4" role="listitem">
                            <i style="color: #41497E" class="fa solid fa-circle-check mt-1" />
                            <p>Download an ungated full version of our infographic below</p>
                        </div>
                    </ul>

                    <ButtonLink
                        href={ABSDFlowchartDownload}
                        download="absd-full-flowchart.pdf"
                        rel="noopener noreferrer"
                        btnText="Download flow chart"
                        size="sm"
                    />
                </div>
            </li>
        </ul>
    </section>
</div>

<style type="postcss">
    .resources {
        @apply grid grid-cols-1 gap-8 lg:gap-12 xl:gap-20 items-center;

        & > .resource {
            @apply flex flex-col lg:flex-row gap-4 lg:gap-12 xl:gap-16 max-w-[450px] lg:max-w-[1000px] mx-auto bg-bg-contrast rounded-md p-8;

            &.resource-reverse {
                @apply lg:flex-row-reverse;
            }

            & > .resource-content {
                @apply flex flex-col gap-4 mt-4;

                & > h2 {
                    @apply text-h4 mb-0;
                }

                & > p {
                    @apply mb-2 lg:mb-4 flex-1;
                }
            }
        }
    }
</style>
