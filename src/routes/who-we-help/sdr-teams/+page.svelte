<script lang="ts">
    import GridBackgroundWrapper from "$lib/components/GridBackgroundWrapper.svelte";
    import SDRTeams from "$lib/assets/sdr-teams.webp";
    import { sdrChallenges, sdrFAQ, sdrSolutions } from "./sdr-teams";
    import Solutions from "$lib/components/Solutions.svelte";
    import CommonChallenges from "$lib/components/home/CommonChallenges.svelte";
    import FrequentlyAskedQuestions from "$lib/components/home/FrequentlyAskedQuestions.svelte";
</script>

<svelte:head>
    <title>SDR Teams | SalesSource</title>
    <meta
        name="description"
        content="Optimize your Sales Development function by implementing best-practices for account-based strategy and cross functional alignment within systems and data, processes, and strategies."
    />
    <meta
        name="keywords"
        content="sdr teams, sales development, account-based strategy, cross functional alignment, systems, data, processes, strategies"
    />
    <meta property="og:title" content="SDR Teams" />
    <meta
        property="og:description"
        content="Optimize your Sales Development function by implementing best-practices for account-based strategy and cross functional alignment within systems and data, processes, and strategies."
    />
    <meta property="og:url" content="https://salessource.com/who-we-help/sdr-teams" />
    <meta property="og:type" content="website" />
    <meta property="og:site_name" content="Sales Source" />
    <meta property="og:locale" content="en_US" />
</svelte:head>

<GridBackgroundWrapper>
    <section class="content-lg">
        <header>
            <h1 id="marketing">SDR Teams</h1>
            <p class="text-subtitle page-subtitle">
                Optimize your Sales Development function by implementing best-practices for
                account-based strategy and cross functional alignment within systems and data,
                processes, and strategies.
            </p>

            <img
                src={SDRTeams}
                alt="people discussing analytics on laptop"
                width="2119"
                height="1059"
                class="w-full mx-auto rounded-md shadow-lg"
            />
        </header>
    </section>

    <CommonChallenges
        textAlign="center"
        title="Common Challenges"
        subtitle="How do you effectively build pipeline with an SDR team in the most complex and competitive sales environment in history? Competing technologies, dirty data, AI, hypersensitivity to spam, and the constantly changing buyer landscape make success in SDR-driven demand generation more difficult than at any other time in the history of sales."
        challenges={sdrChallenges}
    />

    <Solutions
        title="Our Solutions"
        subtitle="An end-to-end approach to optimizing your Sales Development Organization. From strategy to execution, we have you covered."
        cards={sdrSolutions}
    />

    <FrequentlyAskedQuestions
        questions={sdrFAQ}
        subtitle="Answers to your most pressing questions about modernizing your SDR team."
        footerText="Ready to modernize your pipeline creation process? Contact us today."
    />
</GridBackgroundWrapper>

<style type="postcss">
</style>
