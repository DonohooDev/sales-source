<script lang="ts">
    import GridBackgroundWrapper from "$lib/components/GridBackgroundWrapper.svelte";
    import Investors from "$lib/assets/investors.webp";
    import { investorsChallenges, investorsFAQ, investorsSolutions } from "./investors";
    import Solutions from "$lib/components/Solutions.svelte";
    import CommonChallenges from "$lib/components/home/CommonChallenges.svelte";
    import FrequentlyAskedQuestions from "$lib/components/home/FrequentlyAskedQuestions.svelte";
</script>

<svelte:head>
    <title>Investors | SalesSource</title>
    <meta
        name="description"
        content="Get your Revenue teams functioning at a high-level so you can get the most out of your investment. Our solutions help you drive revenue and growth while providing the data you need to make informed decisions."
    />
    <meta
        name="keywords"
        content="investors, revenue teams, revenue growth, data-driven decisions, portfolio company initiatives, scale investments"
    />
    <meta property="og:title" content="Investors" />
    <meta
        property="og:description"
        content="Get your Revenue teams functioning at a high-level so you can get the most out of your investment. Our solutions help you drive revenue and growth while providing the data you need to make informed decisions."
    />
    <meta property="og:url" content="https://salessource.com/who-we-help/investors" />
    <meta property="og:type" content="website" />
    <meta property="og:site_name" content="Sales Source" />
    <meta property="og:locale" content="en_US" />
</svelte:head>

<GridBackgroundWrapper>
    <section class="content-lg">
        <header>
            <h1 id="marketing">Investors</h1>
            <p class="text-subtitle page-subtitle">
                Get your Revenue teams functioning at a high-level so you can get the most out of
                your investment. Our solutions help you drive revenue and growth while providing the
                data you need to make informed decisions.
            </p>

            <img
                src={Investors}
                alt="behind view of woman giving a presentation"
                width="2169"
                height="1085"
                class="w-full mx-auto rounded-md shadow-lg"
            />
        </header>
    </section>

    <CommonChallenges
        title="Common Challenges"
        subtitle="Many investors and venture capital firms have partnered with us on portfolio company initiatives. We step in as a third party to help uncover and streamline gaps that are leading to an inability to scale your investments."
        challenges={investorsChallenges}
    />

    <Solutions
        title="Our Solutions"
        subtitle="Drive an end-to-end transformation across your Go-To-Market Organization. "
        cards={investorsSolutions}
    />

    <FrequentlyAskedQuestions
        questions={investorsFAQ}
        subtitle=""
        footerText="Have questions about how we can help you drive revenue and growth? Let's talk."
    />
</GridBackgroundWrapper>

<style type="postcss">
</style>
