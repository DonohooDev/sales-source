<script lang="ts">
    import GridBackgroundWrapper from "$lib/components/GridBackgroundWrapper.svelte";
    import MarketingTeams from "$lib/assets/marketing-professionals.webp";
    import { marketingChallenges, marketingFAQ, marketingSolutions } from "./marketing-teams";
    import Solutions from "$lib/components/Solutions.svelte";
    import CommonChallenges from "$lib/components/home/CommonChallenges.svelte";
    import FrequentlyAskedQuestions from "$lib/components/home/FrequentlyAskedQuestions.svelte";
</script>

<svelte:head>
    <title>Marketing Professionals | SalesSource</title>
    <meta
        name="description"
        content="Drive Demand and Revenue with state-of-the-art approaches in your Marketing Processes, Data, Systems, and Messaging"
    />
    <meta
        name="keywords"
        content="marketing professionals, marketing processes, marketing data, marketing systems, marketing messaging"
    />
    <meta property="og:title" content="Marketing Professionals" />
    <meta
        property="og:description"
        content="Drive Demand and Revenue with state-of-the-art approaches in your Marketing Processes, Data, Systems, and Messaging"
    />
    <meta property="og:url" content="https://salessource.com/who-we-help/marketing-teams" />
    <meta property="og:type" content="website" />
    <meta property="og:site_name" content="Sales Source" />
    <meta property="og:locale" content="en_US" />
</svelte:head>

<GridBackgroundWrapper>
    <section class="content-lg">
        <header>
            <h1 id="marketing">Marketing Professionals</h1>
            <p class="text-subtitle page-subtitle">
                Drive Demand and Revenue with state-of-the-art approaches in your Marketing
                Processes, Data, Systems, and Messaging
            </p>

            <img
                src={MarketingTeams}
                alt="people working on table"
                width="3026"
                height="1513"
                class="w-full mx-auto rounded-md shadow-lg"
            />
        </header>
    </section>

    <CommonChallenges
        title="How can Marketing teams drive quality pipeline despite the knotted mess of marketing systems and data?"
        subtitle="Disparate data sources, poorly integrated systems, outdated processes, nuanced buyers, and increased scrutiny on outbound activity make creating effective marketing functions a colossal task."
        challenges={marketingChallenges}
    />

    <Solutions
        title="Our Solutions for Marketing Teams"
        subtitle="Let us help you unwind the complexity of your Marketing Org, getting you the data to make impactful business decisions and results that drive revenue."
        cards={marketingSolutions}
    />

    <FrequentlyAskedQuestions
        questions={marketingFAQ}
        subtitle="Answers to common questions about our marketing services and how we can help you drive demand and revenue with state-of-the-art approaches in your Marketing Processes, Data, Systems, and Messaging"
        footerText="Ready to modernize your marketing processes? Contact us today."
    />
</GridBackgroundWrapper>

<style type="postcss">
</style>
