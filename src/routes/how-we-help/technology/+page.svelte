<script lang="ts">
    import GridBackgroundWrapper from "$lib/components/GridBackgroundWrapper.svelte";
    import Solutions from "$lib/components/Solutions.svelte";
    import CommonChallenges from "$lib/components/home/CommonChallenges.svelte";
    import FrequentlyAskedQuestions from "$lib/components/home/FrequentlyAskedQuestions.svelte";
    import { technologyChallenges, technologyFAQ, technologySolutions } from "./technology";
    import DataGovernance from "$lib/assets/technology/data-governance.jpg";
    import TechDebt from "$lib/assets/technology/technology-tech-debt.webp";
    import TechCRM from "$lib/assets/technology/technology-crm-admin.webp";
    import TechStack from "$lib/assets/technology/technology-stack.webp";
    import { onMount } from "svelte";

    let frameHeight = 0;
    onMount(() => {
        // The iframe is roughly 2/1 aspect ratio
        // Our content-lg class maxes out at 1400px width
        // Dynamically set the height of the iframe to match the current viewport width
        if (window.innerWidth > 1400) {
            frameHeight = 700;
        } else {
            frameHeight = parseInt((window.innerWidth / 2).toFixed(0));
        }
    });
</script>

<svelte:head>
    <title>Modernize Your Sales System Infrastructure | SalesSource</title>
    <meta
        name="description"
        content="Create a strong foundation for efficient, scalable sales operations with SalesSource by leveraging technology to its fullest potential."
    />
    <meta
        name="keywords"
        content="sales system infrastructure, sales operations, scalable growth, technology solutions"
    />
    <meta property="og:title" content="Modernize Your Sales System Infrastructure" />
    <meta
        property="og:description"
        content="Create a strong foundation for efficient, scalable sales operations with SalesSource by leveraging technology to its fullest potential."
    />
    <meta property="og:url" content="https://salessource.com/how-we-help/technology" />
</svelte:head>

<GridBackgroundWrapper>
    <section class="content-lg">
        <header>
            <h1 id="sales-technology">Modernize Your Sales System Infrastructure</h1>
            <p class="text-subtitle">
                We are experts across Sales technology stacks and help your team streamline
                processes by creating a strong foundation of use cases that match your strategy,
                then implementing them while removing tech debt. We focus on efficiency, scale and
                matching technology initiatives to key metrics across the funnel.
            </p>

            <div class="hidden md:block">
                <iframe
                    id="technology-iframe"
                    title="The Ultimate ABSD Tech Stack"
                    style="border: none;"
                    src="https://xd.adobe.com/embed/26f08e90-8d27-424b-5a54-69ff760fe6f3-50c1/?fullscreen&hints=on"
                    width="100%"
                    height={frameHeight}
                    frameborder="0"
                    scrolling="no"
                    allowfullscreen
                    allow="fullscreen"
                />
            </div>
        </header>
    </section>

    <section class="content-lg">
        <header class="">
            <h2 id="what-we-do">What We Do</h2>
            <p class="text-subtitle">
                We integrate the best tools to optimize your sales processes and pipeline. Our team
                of experts will help you leverage technology to its fullest potential, ensuring your
                sales operations are efficient and scalable. We'll help you create a strong
                foundation that will drive growth and success for your business through the power of
                technology.
            </p>
        </header>

        <div class="improvement">
            <img
                src={TechDebt}
                width="2121"
                height="1414"
                alt="view of mans hands working on multiple computers profusely"
                class="improvement-graphic"
            />
            <header>
                <h3 id="remove-tech-debt">Removing Tech Debt</h3>
                <p class="text-paragraph">
                    At SalesSource, our technology solutions are designed to eliminate technical
                    debt, ensuring your systems are optimized for peak performance. Our expert team
                    excels in managing large-scale change initiatives, from seamless implementations
                    to strategic restructuring. We meticulously evaluate vendors and integrate
                    cutting-edge technologies to keep your business ahead of the curve.
                </p>
            </header>
        </div>

        <div class="improvement">
            <header>
                <h3 id="data-governance">Data Governance</h3>
                <p class="text-paragraph">
                    We have seen how frustrating bad data, inefficient list building, lack of data
                    verification, and longstanding database misalignments can be. By analyzing error
                    logs, duplicate data, and identifying the symptoms of underlying data gaps, we
                    create and monitor processes for data governance that deepen conversion and
                    minimize risk in your critical pathway. As you mature in funnel operations
                    strategies, the governance of these elements is critical for long-term growth,
                    helping you to concentrate on driving sales instead of bad data.
                </p>
            </header>
            <img
                src={DataGovernance}
                width="4256"
                height="2832"
                loading="lazy"
                alt="earth from outer space"
                class="improvement-graphic"
            />
        </div>

        <div class="improvement">
            <img
                src={TechStack}
                width="2119"
                height="1414"
                loading="lazy"
                alt="man working with multiple displays on code"
                class="improvement-graphic"
            />
            <header>
                <h3 id="technology-stack">Upgraded Technology Stack</h3>
                <p class="text-paragraph">
                    Our upgraded sales technology stack at SalesSource equips your team with
                    advanced tools to understand, segment, and engage target accounts at scale. This
                    comprehensive suite of technologies enables precise targeting and personalized
                    engagement, streamlining your sales processes and maximizing your reach to
                    high-value accounts. By providing valuable insights into customer behavior and
                    preferences, we empower your sales team to make informed decisions and achieve
                    greater success in today’s competitive market.
                </p>
            </header>
        </div>

        <div class="improvement">
            <header>
                <h3 id="crm-admin-support">CRM Administration & Support</h3>
                <p class="text-paragraph">
                    SalesSource offers CRM administration and support services designed to optimize
                    your customer relationship management system for maximum efficiency. We focus on
                    key success measures and operational metrics, providing real-time data and
                    analytics to drive your business forward. Our services include system
                    customization, user training, and ongoing maintenance, ensuring your CRM remains
                    a powerful tool for managing customer interactions and improving overall sales
                    performance.
                </p>
            </header>
            <img
                src={TechCRM}
                width="2121"
                height="1414"
                loading="lazy"
                alt="one on one training"
                class="improvement-graphic"
            />
        </div>
    </section>

    <section class="bg-bg-contrast">
        <div class="content-lg">
            <header>
                <h2 id="key-metrics">Key Metrics</h2>
                <p class="text-subtitle">Essential data points we track for your success.</p>
            </header>

            <ul class="metrics">
                <li class="metric">
                    <h3>29%</h3>
                    <p class="text-h6 mb-2">Sales Increase</p>
                    <p class="text-subtext">
                        Through leveraging your CRM and tech stack to its maximum potential (SFDC)
                    </p>
                </li>

                <li class="metric">
                    <h3>34%</h3>
                    <p class="text-h6 mb-2">Attainment Increase</p>
                    <p class="text-subtext">
                        Through sales productivity resulting from effective technology usage (SFDC)
                    </p>
                </li>

                <li class="metric">
                    <h3>42%</h3>
                    <p class="text-h6 mb-2">Forecast Accuracy Increase</p>
                    <p class="text-subtext">
                        Through a system of connected technology optimized to specific needs (SFDC)
                    </p>
                </li>

                <li class="metric">
                    <h3>3X</h3>
                    <p class="text-h6 mb-2">Data Confidence</p>
                    <p class="text-subtext">
                        Forging a data culture within your organization drives key sales outcomes
                        (HBR)
                    </p>
                </li>
            </ul>
        </div>
    </section>

    <CommonChallenges
        title="Challenges We Address"
        subtitle="Tackling common obstacles in tech integration and sales processes."
        challenges={technologyChallenges}
    />

    <Solutions
        title="Our Technology Solutions"
        subtitle="Harness the power of technology to streamline your sales operations and pipeline."
        cards={technologySolutions}
    />

    <FrequentlyAskedQuestions
        questions={technologyFAQ}
        subtitle="Answers to common questions about our technology services."
        footerText="Ready to modernize your sales tech stack? Contact us today."
    />
</GridBackgroundWrapper>

<style type="postcss">
    .improvement {
        @apply mt-8 md:mt-12 2xl:mt-20 flex flex-col lg:grid lg:grid-cols-5 lg:gap-8 items-center;

        & > header {
            @apply col-span-3;
        }

        &:nth-child(odd) {
            @apply flex-col-reverse;
        }
    }

    .improvement-graphic {
        @apply w-full justify-self-center mb-10 lg:mb-0 max-w-[400px] lg:max-w-none lg:col-span-2 lg:m-4 rounded-lg shadow-lg;
    }

    .metrics {
        @apply grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8;
    }

    .metric {
        & h3 {
            @apply text-7xl font-bold text-secondary;
        }
    }
</style>
