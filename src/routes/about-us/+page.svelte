<script>
    import GridBackgroundWrapper from "$lib/components/GridBackgroundWrapper.svelte";
    import Lars from "$lib/assets/headshots/lars-nilsson.webp";
    import Remington from "$lib/assets/headshots/remington-rawlings.webp";
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
        <h1 id="team-heading">Meet The Team</h1>
        <p class="text-subtitle">
            We here at SalesSource are the go-to strategic Revenue Operations and Inside Sales
            advisory firm. We focus on helping B2B technology companies establish a scalable sales
            organization through the combination of sales process development, technology
            integration and best practice training.
        </p>

        <ul class="team-list">
            <li class="team-member">
                <article>
                    <div class="title">
                        <img
                            src={Lars}
                            loading="lazy"
                            alt="Lars Nilsson"
                            width="4784"
                            height="7175"
                        />
                        <h2 id="lars-nilsson" class="text-h4">Lars Nilsson</h2>
                        <p class="text-subtext">Chief Executive Officer</p>
                    </div>

                    <div class="about">
                        <p class="text-paragraph">
                            Lars Nilsson founded SalesSource over 12 years ago with the same vision
                            that resonates with his clients today: to help enable C-Level executives
                            and GTM leaders to scale pipeline creation and GTM success.
                        </p>
                        <p class="text-paragraph">
                            Lars accomplishes these goals through comprehensive assessments and
                            diagnostics, advisory/consulting and technical services engagements that
                            help teams reach “world class” in their pipeline creation initiatives.
                        </p>
                        <p class="text-paragraph">
                            Lars first started his career during the new age sales revolution as a
                            top sales rep at Xerox in the late 80s. His time as a rep led him to
                            realizations that would help him create his niche in leading and
                            managing strategic teams at large scale. Building off these early
                            successes, he advanced new strategies of inside sales into the industry
                            through his leadership roles across many of the world’s top companies.
                        </p>
                        <p class="text-paragraph">
                            Lars spent his first 10 years of leadership helping fine tune tactical
                            field operations for revenue growth and creating first of their kind
                            inside sales initiatives. Notably, Lars led ArcSight in its transition
                            through a historic acquisition by HP, becoming the VP of Inside Sales at
                            Hewlett Packard Enterprise after the acquisition.
                        </p>
                        <p class="text-paragraph">
                            Next, Lars became VP of Global Inside Sales at Cloudera ($CLDR), the
                            role in which he coined the term “account-based sales development” and
                            where he helped the company go from $100M to $4.1B ARR (and one of the
                            most watched tech IPOs in history). Across his career of successes, he
                            has taken companies from seed-stage to IPO 5 times, leading to the birth
                            of SalesSource 12 years ago.
                        </p>
                        <p class="text-paragraph">
                            Most recently, Lars reignited the SalesSource flame again in 2024 after
                            his 4 year run as VP of Sales Development at Snowflake. During his time
                            there, he led the initiatives to scale the company from a 65 person to a
                            300 person global SDR organization and created lasting results that
                            surpassed expectations during Snowflake’s transition to a post-pandemic
                            GTM future. A hallmark achievement of his time at Snowflake was the
                            development of the Sales Development Academy, the culmination of a
                            career’s worth of knowledge around enablement, career development, and
                            organizational leadership to help young SDRs mature into powerful
                            leaders within Snowflake across many departments.
                        </p>
                        <p class="text-paragraph">
                            Over the years, Lars has also acted, and continues to act, as the
                            in-house special revenue advisor for seed-stage venture firm True
                            Ventures ($3.8B AUM). In this role he guides, mentors and coaches early
                            stage founders and their teams to today’s modern demand generation
                            strategies helping them grow, scale and reach subsequent financing
                            goals. His singular mission is helping portfolio companies across every
                            stage of startup growth tackle GTM problems properly.
                        </p>
                        <p class="text-paragraph">
                            As Lars now leads SalesSource full-time, he brings his experiences
                            filling in-house roles and his many client engagements across the years
                            with top companies including Zoom, Uber, Procore, Intapp, Asana, and
                            more, to make an impact for SalesSource customers.
                        </p>
                        <p class="text-paragraph">
                            Lars and the SalesSource team have helped create scalability for early
                            stage companies just starting their sales and revenue journeys as well
                            as some of the largest B2B SaaS teams, and will continue to do so going
                            into the AI revolution that has captivated the world of sales
                            development.
                        </p>
                        <p class="text-paragraph">
                            Lars is well known for being a “fire in the belly” evangelist — the
                            concept of being focused and accountable to critical GTM goals, and
                            having the perseverance to achieve them through daily actions. As he
                            navigates conversations across the C-Level, with investors, with GTM
                            leaders and even SDRs directly, fostering this energy is a priority. His
                            infectious passion for winning and the seasoned tenure of his experience
                            help him to give companies the tools they need to avoid critical
                            mistakes that GTM teams often make as they grow.
                        </p>
                        <p class="text-paragraph">
                            Together, with his history of scaling companies internally as an
                            operator, advising companies externally as the founder of SalesSource,
                            and working with portfolio companies across venture backed global
                            organizations, Lars has created many proprietary templates,
                            methodologies and strategies, and assembled delivery teams ready to meet
                            your unique GTM needs.
                        </p>
                        <p class="text-paragraph">
                            Lars resides in Sausalito and regularly enjoys taking clients, friends
                            and family out on his boat to explore the bay, share stories, and plan
                            the future of the industry he has helped build.
                        </p>
                    </div>
                </article>
            </li>

            <!-- <li class="team-member">
                <article>
                    <div class="title">
                        <img
                            src={Remington}
                            loading="lazy"
                            alt="Remington Rawlings headshot"
                            width="800"
                            height="800"
                        />
                        <h2 id="remington-rawlings" class="text-h4">Remington Rawlings</h2>
                        <p class="text-subtext">Managing Partner</p>
                    </div>

                    <div class="about">
                        <p class="text-paragraph">
                            Remington is a Rev Ops, Marketing Ops and Sales Ops leader specializing
                            in driving top-of-funnel growth for B2B software companies. After
                            spending 3.5 years as a top SDR (InsideSales.com, Lucidchart,
                            Workfront), Remington moved into Operations to help formulate the plans
                            and strategy for running cross-functional Sales and Marketing Operations
                            projects at Workfront. Since then, his roles have revolved primarily
                            around aligning the data, technology, strategy and training for cross
                            functional account-based initiatives.
                        </p>
                        <p class="text-paragraph">
                            During his time at Workfront, the team achieved 100%+ attainment during
                            the height of the COVID-19 pandemic, leading up to the historic Adobe
                            acquisition. From there, Remington spent a year at Kustomer helping
                            scale Marketing and SDR Operations leading to 3x revenue as Meta
                            acquired Kustomer. His pinnacle role at Snowflake in Rev Ops was geared
                            toward optimizing the SDR and ABM tech stack processes where he was
                            responsible for strategic changes leading to the 20% decrease of
                            prospects contacted while simultaneously increasing meetings by 30%
                            globally for the team of 250 SDRs.
                        </p>
                        <p class="text-paragraph">
                            Remington has a passion for process, automation, and can navigate across
                            strategic insights and executive decisions as well as tactical focuses
                            and highly complex automations, configurations and processes. He has a
                            Bachelors of Science in Philosophy from UVU, graduating with high honors
                            as the student fellow for the Center for the Study of Ethics and the
                            lead researcher on the nationally ranked Ethics Bowl debate team.
                        </p>
                    </div>
                </article>
            </li> -->
        </ul>
    </section>

    <section class="bg-bg-soft mb-0 pb-20 md:pb-28">
        <div class="content-lg">
            <header>
                <h2 id="the-team">The Team</h2>
                <p class="text-subtitle">
                    Our team is a group of highly talented former employees at companies like
                    Outreach, Snowflake, LeanData, Lucidchart, Okta, and others. We have a team of
                    over 15+ consultants as well as consulting arms in both Brazil and Poland. We
                    have done work on 4 continents, across many industries, and are primarily
                    focused on B2B Software and SaaS companies trying to increase pipeline.
                </p>
            </header>

            <ul class="metrics">
                <li class="metric">
                    <h3>1,000+</h3>
                    <p class="text-h6 mb-2">Implementations</p>
                    <p class="text-subtext">
                        Comprehensive implementations of Sales Engagement Platforms.
                    </p>
                </li>

                <li class="metric">
                    <h3>400+</h3>
                    <p class="text-h6 mb-2">Projects</p>
                    <p class="text-subtext">
                        Strategic projects to help companies adopt new technologies.
                    </p>
                </li>

                <li class="metric">
                    <h3>75+</h3>
                    <p class="text-h6 mb-2">Clients</p>
                    <p class="text-subtext">
                        Working with companies of all sizes to improve their sales processes
                        strategically.
                    </p>
                </li>

                <li class="metric">
                    <h3>50+</h3>
                    <p class="text-h6 mb-2">CRM Implementations</p>
                    <p class="text-subtext">
                        Implementing CRM systems to help companies scale their sales operations.
                    </p>
                </li>
            </ul>
        </div>
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
            @apply grid grid-cols-1 lg:grid-cols-8 2xl:grid-cols-3 lg:gap-8;
        }
    }

    .title {
        @apply lg:col-span-3 2xl:col-span-1;
    }

    .about {
        @apply max-h-[600px] lg:rounded-md lg:p-4 lg:col-span-5 2xl:col-span-2 overflow-y-auto;
    }

    .text-h4 {
        @apply mb-0 mt-4;
    }

    .text-subtext {
        @apply mb-8 lg:mb-0;
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
