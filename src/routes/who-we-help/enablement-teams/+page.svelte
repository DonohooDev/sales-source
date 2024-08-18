<script lang="ts">
    import GridBackgroundWrapper from "$lib/components/GridBackgroundWrapper.svelte";
    import EnablementTeams from "$lib/assets/enablement-teams.webp";
    import { enablementChallenges, enablementFAQ, enablementSolutions } from "./enablement-teams";
    import Solutions from "$lib/components/Solutions.svelte";
    import CommonChallenges from "$lib/components/home/CommonChallenges.svelte";
    import FrequentlyAskedQuestions from "$lib/components/home/FrequentlyAskedQuestions.svelte";
</script>

<svelte:head>
    <title>Enablement Practitioners | SalesSource</title>
    <meta
        name="description"
        content="Enhance every element of your revenue function by empowering your teams with the right tools, processes, and strategies."
    />
    <meta
        name="keywords"
        content="enablement practitioners, revenue function, tools, processes, strategies"
    />
    <meta property="og:title" content="Enablement Practitioners" />
    <meta
        property="og:description"
        content="Enhance every element of your revenue function by empowering your teams with the right tools, processes, and strategies."
    />
    <meta property="og:url" content="https://salessource.com/who-we-help/enablement-teams" />
    <meta property="og:type" content="website" />
    <meta property="og:site_name" content="Sales Source" />
    <meta property="og:locale" content="en_US" />
</svelte:head>

<GridBackgroundWrapper>
    <section class="content-lg">
        <header>
            <h1 id="marketing">Enablement Practitioners</h1>
            <p class="text-subtitle page-subtitle">
                Enhance every element of your revenue function by empowering your teams with the
                right tools, processes, and strategies.
            </p>

            <img
                src={EnablementTeams}
                alt="people discussing and working around table"
                width="2121"
                height="1060"
                class="w-full mx-auto rounded-md shadow-lg"
            />
        </header>
    </section>

    <CommonChallenges
        title="Common Challenges"
        subtitle="How can you transform your Enablement function from a project planning and execution team to one that makes a measurable impact on pipeline and revenue?"
        challenges={enablementChallenges}
    />

    <Solutions
        title="Our Solutions"
        subtitle="Create a mature and effective Enablement function that can make a big impact and drive the results your team needs."
        cards={enablementSolutions}
    />

    <FrequentlyAskedQuestions
        questions={enablementFAQ}
        subtitle=""
        footerText="Ready to modernize your Enablement function? Let's talk."
    />
</GridBackgroundWrapper>

<style type="postcss">
</style>
