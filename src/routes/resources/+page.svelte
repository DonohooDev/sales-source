<script lang="ts">
    import ABSDFlowchart from "$lib/assets/absd-full-flowchart.png";
    import ABSDFlowchartDownload from "$lib/assets/absd-full-flowchart.pdf";
    import ResourceBackground from "$lib/assets/resource-background.png";
    import ButtonLink from "$lib/components/ButtonLink.svelte";
    import { CircleCheck } from "lucide-svelte";
</script>

<svelte:head>
    <title>Resources | Sales Source</title>
    <meta
        name="description"
        content="Free resources for account-based sales development — infographics, flowcharts, and guides to help you build and scale your ABSD strategy."
    />
    <meta name="keywords" content="ABSD resources, sales development infographics, SDR team guides, account-based sales tools" />
    <meta property="og:title" content="Resources | Sales Source" />
    <meta
        property="og:description"
        content="Free resources for account-based sales development — infographics, flowcharts, and guides."
    />
    <meta property="og:url" content="https://salessource.com/resources/" />
    <meta name="twitter:title" content="Resources | Sales Source" />
    <meta
        name="twitter:description"
        content="Free resources for account-based sales development — infographics, flowcharts, and guides."
    />
    <meta property="twitter:url" content="https://salessource.com/resources/" />
</svelte:head>

<div class="content-md">
    <section>
        <header>
            <h1>Resources</h1>
            <p class="text-subtitle" />
        </header>

        <ul class="resources">
            <li class="resource">
                <div class="image">
                    <p>4 Must-Have Touch Patterns For New ABSD Teams</p>
                </div>
                <div class="resource-content">
                    <h2>
                        4 Must-Have Touch Patterns for New Account-Based Sales Development Teams
                    </h2>
                    <ButtonLink
                        href="/blog/4-touch-patterns-for-new-account-based-sales-development-teams#infographic"
                        btnText="View Infographic"
                        size="sm"
                        class="w-full md:max-w-[250px]"
                    />
                </div>
            </li>

            <li class="resource">
                <div class="image">
                    <p>The Ultimate ABSD Tech Stack</p>
                </div>
                <div class="resource-content">
                    <h2>Interactive Infographic: The Ultimate ABSD Tech Stack</h2>
                    <ButtonLink
                        href="/blog/the-ultimate-absd-tech-stack#infographic"
                        btnText="View Infographic"
                        size="sm"
                        class="w-full md:max-w-[250px]"
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
                    class="max-w-[322px] max-h-[500px] object-cover object-top"
                />
                <div class="resource-content">
                    <h2>Are you ready for an Account-Based Sales Development Model?</h2>
                    <ul
                        class="text-left list-none p-0 mt-2 lg:mt-4 flex flex-col gap-3 lg:gap-4 mb-2 lg:mb-4"
                    >
                        <div class="flex items-start gap-4" role="listitem">
                            <CircleCheck size={20} color="#41497E" class="shrink-0 mt-1" />
                            <p>
                                Find out the “must-haves” to make Account-Based Sales Development a
                                success
                            </p>
                        </div>
                        <div class="flex items-start gap-4" role="listitem">
                            <CircleCheck size={20} color="#41497E" class="shrink-0 mt-1" />
                            <p>
                                Understand how the key features of your sales cycle and market
                                affect your demand generation strategy
                            </p>
                        </div>
                        <div class="flex items-start gap-4" role="listitem">
                            <CircleCheck size={20} color="#41497E" class="shrink-0 mt-1" />
                            <p>Download an ungated full version of our infographic below</p>
                        </div>
                    </ul>

                    <ButtonLink
                        href={ABSDFlowchartDownload}
                        download="absd-full-flowchart.pdf"
                        rel="noopener noreferrer"
                        btnText="Download flow chart"
                        class="max-w-[250px] mt-4"
                        size="sm"
                    />
                </div>
            </li>
        </ul>
    </section>
</div>

<style type="postcss">
    .resources {
        @apply grid grid-cols-1 gap-8 items-center;

        & > .resource {
            @apply flex flex-col lg:flex-row gap-4 lg:gap-12 xl:gap-16 mx-auto rounded-md p-8 w-full bg-bg-soft;

            & > .image {
                @apply bg-[url('$lib/assets/resource-background.png')] bg-no-repeat max-w-[300px] mx-auto h-[385px] flex items-center justify-center bg-cover;

                & > p {
                    @apply w-[300px] p-4 lg:p-8 text-h4 text-center text-txt-white tracking-wider leading-tight font-normal;
                }
            }

            & > .resource-content {
                @apply flex flex-col gap-4 mt-4 w-full justify-center;

                & > h2 {
                    @apply text-h4;
                }
            }
        }
    }
</style>
