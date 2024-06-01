<script>
    import GridBackgroundWrapper from "$lib/components/shared/GridBackgroundWrapper.svelte";
    import Lars from "$lib/assets/headshots/lars-nilsson.webp";
    import Travis from "$lib/assets/headshots/travis-henry.webp";
</script>

<svelte:head>
    <title>Meet The Team | SalesSource</title>
    <meta
        name="description"
        content="We here at SalesSource are the go-to strategic Revenue Operations and Inside Sales advisory firm."
    />
    <meta
        name="keywords"
        content="sales, revenue operations, inside sales, advisory firm, technology, sales process development, technology integration, best practice training"
    />
    <meta property="og:title" content="Meet The Team" />
    <meta
        property="og:description"
        content="We here at SalesSource are the go-to strategic Revenue Operations and Inside Sales advisory firm. Meet the team behind the magic."
    />
    <meta property="og:url" content="https://salessource.com/about-us" />
    <meta property="og:type" content="website" />
    <meta property="og:site_name" content="SalesSource" />
    <meta property="og:locale" content="en_US" />
</svelte:head>

<GridBackgroundWrapper>
    <section class="content-lg">
        <h1>Meet The Team</h1>
        <p class="text-subtitle">
            We here at SalesSource are the go-to strategic Revenue Operations and Inside Sales
            advisory firm. we focus on helping B2B technology companies establish a scalable sales
            organization through the combination of sales process development, technology
            integration and best practice training.
        </p>

        <ul class="team-list">
            <li class="team-member">
                <article>
                    <div class="title">
                        <img src={Lars} alt="Lars Nilsson" />
                        <h2 class="text-h5">Lars Nilsson</h2>
                        <p class="text-subtext">Chief Executive Officer</p>
                    </div>

                    <p class="about">
                        With almost three decades of sales and operations experience in the
                        technology sector, Lars is a global leader in enterprise software and
                        selling solutions. <br /><br /> Lars has the rare distinction and honor of
                        helping take four companies to IPO status as a Sales leader. He started his
                        career at Xerox and has since led teams at some of Silicon Valley’s most
                        influential companies. Lars has been intricately involved in every aspect of
                        the sales cycle. <br /><br /> Prior to serving as CEO of SalesSource, Lars
                        was VP of Global Inside Sales for Cloudera, the company that revolutionized
                        enterprise Big Data management. In an incredibly competitive space, he
                        focused on two areas to help make Cloudera the industry leader: <br />
                        <strong>High Velocity Inside Sales -</strong> During his tenure, his team at
                        Cloudera developed the Account Based Sales Development methodology. His
                        teams innovative approach revolutionized the way businesses communicate with
                        high-value targets. <br /><br />
                        <strong>Revenue Operations –</strong> As VP of Inside Sales at Cloudera,
                        Lars noticed the importance of supporting sales roles. He led Sales
                        Operations, Sales Enablement and GTM planning. By leveraging data and
                        streamlined systems, Lars allowed his team to focus on accounts that
                        mattered most. <br /><br />
                        Lars has served in sales executive roles at ArcSight/Hewlett Packard, Riverbed
                        Technology and Portal Software – all three of which achieved IPOs, in addition
                        to Cloudera (2017). <br /><br />
                        Lars is also a special advisor at True Ventures were he helps True portfolio
                        companies implement best-of-breed sales technologies and processes enabling efficient
                        revenue operations. His unique blend of leadership skills and sales acumen has
                        benefited dozens of startups in the Valley and beyond. Mentoring sales teams
                        is one of his greatest passions.
                    </p>
                </article>
            </li>

            <li class="team-member">
                <article>
                    <div class="title">
                        <img src={Travis} alt="Travis Henry" />
                        <h2 class="text-h5">Travis Henry</h2>
                        <p class="text-subtext">Chief Operating Officer</p>
                    </div>

                    <p class="about">
                        Having spent his career touching every part of the revenue generation chain,
                        Travis is uniquely equipped to help clients accelerate their growth
                        trajectories. He currently leads the consulting practice at SalesSource,
                        advising sales and marketing leadership on the people, process, and
                        technology necessary to building successful sales teams and the revenue
                        operations that power them. <br /><br /> He is known for his strategic insights
                        and ability to drive measurable results. Previously, Travis led the Sales Development
                        team at Bluewolf, the top global consulting partner of Salesforce.com that was
                        acquired by IBM in 2016, after holding roles in go-to-market planning and marketing
                        operations. He started his career in Oracle’s Sales Academy, first hitting the
                        phones as an SDR and later selling enterprise database solutions to emerging
                        startups. He received his BA from U.C. Berkeley, where he graduated Phi Beta
                        Kappa with High Honors.
                    </p>
                </article>
            </li>
        </ul>
    </section>
</GridBackgroundWrapper>

<style lang="postcss">
    .team-list {
        @apply flex flex-col justify-center gap-14;
    }

    .team-member {
        @apply p-6 bg-bg-contrast rounded-md;

        & img {
            @apply w-full max-w-[450px] rounded-md;
        }

        & article {
            @apply grid grid-cols-1 lg:grid-cols-8 xl:grid-cols-3 lg:gap-8;
        }
    }

    .title {
        @apply lg:col-span-3 xl:col-span-1;
    }

    .about {
        @apply max-h-[450px] lg:rounded-md lg:p-4 lg:col-span-5 xl:col-span-2 overflow-scroll;
    }

    .text-h5 {
        @apply mb-0 mt-2;
    }

    .text-subtext {
        @apply mb-8 lg:mb-0;
    }
</style>
