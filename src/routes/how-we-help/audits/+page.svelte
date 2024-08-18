<script lang="ts">
    import GridBackgroundWrapper from "$lib/components/GridBackgroundWrapper.svelte";
    import FrequentlyAskedQuestions from "$lib/components/home/FrequentlyAskedQuestions.svelte";
    import { auditFAQ } from "./audits";
    import Audits from "$lib/assets/audits.webp";
    import AuditBreakdown from "./AuditBreakdown.svelte";
</script>

<svelte:head>
    <title>Optimize Your Sales with Comprehensive GTM Strategy Audits | SalesSource</title>
    <meta
        name="description"
        content="SalesSource leverages extensive industry expertise in Marketing Operations, Revenue Operations, SDR Leadership, Sales Leadership, Product Marketing, and Enablement to thoroughly evaluate your internal processes."
    />
    <meta
        name="keywords"
        content="GTM strategy audits, tech stack audits, operational processes, training plans, actionable insights, industry benchmarks, competitive, efficient"
    />
    <meta
        property="og:title"
        content="Optimize Your Sales with Comprehensive GTM Strategy Audits"
    />
    <meta
        property="og:description"
        content="SalesSource leverages extensive industry expertise in Marketing Operations, Revenue Operations, SDR Leadership, Sales Leadership, Product Marketing, and Enablement to thoroughly evaluate your internal processes."
    />
    <meta property="og:url" content="https://salessource.com/how-we-help/audits" />
</svelte:head>

<GridBackgroundWrapper>
    <section class="content-lg">
        <header>
            <h1 id="audits">Optimize Your Sales with Comprehensive GTM Strategy Audits</h1>
            <p class="text-subtitle page-subtitle">
                SalesSource leverages extensive industry expertise in Marketing Operations, Revenue
                Operations, SDR Leadership, Sales Leadership, Product Marketing, and Enablement to
                thoroughly evaluate your internal processes. Our audits cover your entire tech
                stack, operational processes, and training plans, providing you with actionable
                insights. We help identify key areas for improvement to enhance performance and
                align with industry benchmarks, ensuring your organization stays competitive and
                efficient.
            </p>

            <img
                src={Audits}
                width="2121"
                height="1060"
                alt="man working on a laptop"
                class="w-full mx-auto rounded-md shadow-lg"
            />
        </header>
    </section>

    <AuditBreakdown />

    <section class="bg-bg-soft">
        <div class="content-lg">
            <header>
                <h2 id="key-metrics">Key Metrics</h2>
                <p class="text-subtitle">
                    The essential metrics that help guide the audit process.
                </p>
            </header>

            <ul class="metrics">
                <li class="metric">
                    <h3>100+</h3>
                    <p class="text-h6 mb-2">Audits Completed</p>
                    <p class="text-subtext">
                        Providing comprehensive evaluations of GTM strategies and tech stacks.
                    </p>
                </li>

                <li class="metric">
                    <h3>100K+</h3>
                    <p class="text-h6 mb-2">Sequences Analyzed</p>
                    <p class="text-subtext">
                        Evaluating the effectiveness of your CRM and engagement strategies.
                    </p>
                </li>

                <li class="metric">
                    <h3>2.5x+</h3>
                    <p class="text-h6 mb-2">Meeting Creation</p>
                    <p class="text-subtext">
                        Improving your sales team's ability to create and convert leads.
                    </p>
                </li>

                <li class="metric">
                    <h3>10+</h3>
                    <p class="text-h6 mb-2">Acquisitions</p>
                    <p class="text-subtext">
                        Through strategic acquisitions, partnerships, and IPO's.
                    </p>
                </li>
            </ul>
        </div>
    </section>

    <FrequentlyAskedQuestions
        questions={auditFAQ}
        subtitle="Answers to common questions about our audit services."
        footerText="Ready to optimize your sales with a comprehensive GTM strategy audit? Contact us today."
    />
</GridBackgroundWrapper>

<style type="postcss">
    .metrics {
        @apply grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8;
    }

    .metric {
        & h3 {
            @apply text-7xl font-bold text-secondary;
        }
    }
</style>
