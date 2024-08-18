<script lang="ts">
    import GridBackgroundWrapper from "$lib/components/GridBackgroundWrapper.svelte";
    import OpsTeams from "$lib/assets/ops-teams.webp";
    import { opsChallenges, opsFAQ, opsSolutions } from "./ops-teams";
    import Solutions from "$lib/components/Solutions.svelte";
    import CommonChallenges from "$lib/components/home/CommonChallenges.svelte";
    import FrequentlyAskedQuestions from "$lib/components/home/FrequentlyAskedQuestions.svelte";
</script>

<svelte:head>
    <title>Revenue Operations Teams | SalesSource</title>
    <meta
        name="description"
        content="Accelerate your Revenue Teams with systems and processes that work while giving invaluable data insights to your stakeholders"
    />
    <meta
        name="keywords"
        content="revenue operations teams, revenue teams, systems, processes, data insights"
    />
    <meta property="og:title" content="Revenue Operations Teams" />
    <meta
        property="og:description"
        content="Accelerate your Revenue Teams with systems and processes that work while giving invaluable data insights to your stakeholders"
    />
    <meta property="og:url" content="https://salessource.com/who-we-help/ops-teams" />
    <meta property="og:type" content="website" />
    <meta property="og:site_name" content="Sales Source" />
    <meta property="og:locale" content="en_US" />
</svelte:head>

<GridBackgroundWrapper>
    <section class="content-lg">
        <header>
            <h1 id="marketing">Revenue Operations Teams</h1>
            <p class="text-subtitle page-subtitle">
                Accelerate your Revenue Teams with systems and processes that work while giving
                invaluable data insights to your stakeholders
            </p>

            <img
                src={OpsTeams}
                alt="data analytics on paper"
                width="2121"
                height="1060"
                class="w-full mx-auto rounded-md shadow-lg"
            />
        </header>
    </section>

    <CommonChallenges
        title="Common Challenges"
        subtitle="At the center of all your pipeline woes is the need for a stable and consistent pipeline engine. Navigating the dilemmas of where to invest, why and what the impacts will be can be risky in today's sales climate. We help you operationally align tech systems, data, and processes to your most important use cases."
        challenges={opsChallenges}
    />

    <Solutions
        title="Our Solutions for GTM Operational Efficiency"
        subtitle=""
        cards={opsSolutions}
    />

    <FrequentlyAskedQuestions
        questions={opsFAQ}
        subtitle=""
        footerText="Ready to modernize your GTM Operational Efficiency? Contact us today."
    />
</GridBackgroundWrapper>

<style type="postcss">
</style>
