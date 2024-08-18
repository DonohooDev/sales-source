<script lang="ts">
    import GridBackgroundWrapper from "$lib/components/GridBackgroundWrapper.svelte";
    import FrequentlyAskedQuestions from "$lib/components/home/FrequentlyAskedQuestions.svelte";
    import { servicesChallenges, servicesFAQ, servicesSolutions } from "./services";
    import Services from "$lib/assets/services.webp";
    import Solutions from "$lib/components/Solutions.svelte";
    import CommonChallenges from "$lib/components/home/CommonChallenges.svelte";
</script>

<svelte:head>
    <title>Vast Suite of Pipeline Creation Services | SalesSource</title>
    <meta
        name="description"
        content="Through our services packages, we take the learnings from the audit to help revolutionize your GTM processes."
    />
    <meta
        name="keywords"
        content="pipeline creation services, GTM processes, sales operations, sales pipeline"
    />
    <meta property="og:title" content="Vast Suite of Pipeline Creation Services" />
    <meta
        property="og:description"
        content="Through our services packages, we take the learnings from the audit to help revolutionize your GTM processes."
    />
    <meta property="og:url" content="https://salessource.com/how-we-help/services" />
</svelte:head>

<GridBackgroundWrapper>
    <section class="content-lg">
        <header>
            <h1 id="pipeline-services">Vast Suite of Pipeline Creation Services</h1>
            <p class="text-subtitle page-subtitle">
                Through our services packages, we take the learnings from the audit to help
                revolutionize your GTM processes. We partner with teams or do things in instances
                where companies lack the team members or resources to implement needed changes.
            </p>

            <img
                src={Services}
                alt="man working diligently on computer"
                width="2241"
                height="1122"
                class="w-full mx-auto rounded-md shadow-lg"
            />
        </header>
    </section>

    <CommonChallenges
        title="Challenges We Address"
        subtitle="Tackling common obstacles in sales and marketing operations and alignment."
        challenges={servicesChallenges}
    />

    <Solutions
        title="Our Services"
        subtitle="Comprehensive solutions to enhance your sales operations."
        cards={servicesSolutions}
    />

    <section class="content-lg">
        <header>
            <h2 id="key-focuses">Key Focuses</h2>
            <p class="text-subtitle">
                The value proposition we bring with every analysis throughout our suite of services.
            </p>
        </header>

        <ul class="metrics">
            <li class="metric">
                <i
                    class="fa-regular fa-chart-mixed-up-circle-dollar text-[3.85rem] md:text-[4.5rem] mb-4 text-secondary"
                />
                <p class="text-h6 mb-2">Conversion Rates</p>
                <p class="text-subtext">
                    Increasing the number of leads that convert into paying customers.
                </p>
            </li>

            <li class="metric">
                <i
                    class="fa-regular fa-person-arrow-up-from-line text-[3.85rem] md:text-[4.5rem] mb-4 text-secondary"
                />
                <p class="text-h6 mb-2">Pipeline Coverage</p>
                <p class="text-subtext">
                    Ensuring that your sales pipeline is full and healthy with potential leads.
                </p>
            </li>

            <li class="metric">
                <i
                    class="fa-regular fa-chart-pie-simple-circle-dollar text-[3.85rem] md:text-[4.5rem] mb-4 text-secondary"
                />
                <p class="text-h6 mb-2">Revenue</p>
                <p class="text-subtext">
                    Increasing the amount of revenue generated from your sales efforts.
                </p>
            </li>

            <li class="metric">
                <i
                    class="fa-regular fa-business-time text-[3.85rem] md:text-[4.5rem] mb-4 text-secondary"
                />
                <p class="text-h6 mb-2">Efficiency</p>
                <p class="text-subtext">
                    Streamlining your sales processes to maximize productivity and results.
                </p>
            </li>
        </ul>
    </section>

    <FrequentlyAskedQuestions
        questions={servicesFAQ}
        subtitle="Answers to common questions about our services."
        footerText="Ready to enable your sales team with cutting-edge technology and expert guidance? Contact us today."
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
