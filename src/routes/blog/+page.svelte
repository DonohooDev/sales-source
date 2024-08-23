<script lang="ts">
    import BlogCard from "./BlogCard.svelte";

    // Images
    import BlogSaastrPodcast from "$lib/assets/blog/blog-saastr-podcast.webp";
    import BlogGTMNow from "$lib/assets/blog/blog-gtm-now-article.webp";
    import Skyline from "$lib/assets/blog/skyline-account-based-sales-development.jpg";
</script>

<svelte:head>
    <title>Blog | SalesSource</title>
    <meta
        name="description"
        content="Stories, frameworks, and tips from scaling the world's best companies."
    />
    <meta
        property="keywords"
        content="blog, sales, sales development, sales operations, account-based-sales-development"
    />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://salessource.com/blog" />
    <meta
        property="og:description"
        content="Stories, frameworks, and tips from scaling the world's best companies."
    />
    <meta property="og:title" content="Blog" />
</svelte:head>

<div class="content-lg">
    <section>
        <header>
            <h1>Blog</h1>
            <p class="text-subtitle">
                Stories, frameworks, and tips from scaling the world's best companies.
            </p>
        </header>

        <ul class="blog-list">
            <BlogCard
                title="Account-Based Sales Development: A New Methodology in Lead Execution, Target Outbound, and
                Pipeline Generation"
                Image={Skyline}
                postDate="09-24-2015"
                href="/blog/a-new-methodology-in-lead-execution-target-outbound-and-pipeline-generation"
            >
                <p slot="preview">
                    Here’s a plain and simple truth: the best sales development teams today leverage
                    technology to perform smarter, better, and faster. The proliferation of, and
                    advances in, sales technology have presented today’s sales development teams
                    with an opportunity to completely revolutionize the way they conduct business.
                </p>
            </BlogCard>

            <BlogCard
                title="Why SDRs Are The Most Important Role In The Sales Function"
                Image={BlogSaastrPodcast}
                href="https://www.saastr.com/saastr-podcast-152-lars-nilsson-vp-global-inside-sales-cloudera-sdrs-important-role-sales-function/"
                postDate="06-15-2021"
            >
                <p slot="preview">
                    In this SaaStr podcast, hosted by Harry Stebbings of The Twenty Minute VC, Lars
                    explains why he believes that SDRs are the most important role in sales and how
                    their role ensures a full pipeline compared to the role of demand gen and
                    marketing.
                </p>
            </BlogCard>

            <BlogCard
                title="Sales Leader Who Drove Four IPOs"
                href="https://www.uctv.tv/shows/Lars-Nilsson-Sales-Leader-Who-Drove-Four-IPOs-Tells-of-Professional-Wins-and-Personal-Losses-33675"
                postDate="04-24-2018"
            >
                <p slot="preview">
                    In this UC TV Production filmed on the <abbr>UCSB</abbr> (University of California,
                    Santa Barbara) Campus in front of a live classroom of students in the Technology
                    Management Program, Lars sits with professor John Greathouse and discusses his professional
                    wins and personal losses.
                </p>
            </BlogCard>

            <BlogCard
                title="Post IPO, Cloudera Reflects on Its Two Year ABSD Journey"
                Image={BlogGTMNow}
                href="https://gtmnow.com/account-based-sales-development-ipo-cloudera/"
                postDate="08-09-2017"
            >
                <p slot="preview">
                    A Startup’s Steep Climb to the IPO Summit Getting a venture-backed enterprise
                    B2B technology company funded and off the ground is hard, but it happens every
                    day now here in the Valley. Taking your company to a $5M run rate in two years –
                    This means you’ve found...
                </p>
            </BlogCard>

            <BlogCard
                title="5 Factors for Successful Account-Based Sales Development"
                href="/blog/5-factors-for-successful-account-based-sales-development"
                postDate="07-16-2020"
            >
                <p slot="preview">
                    Part I of our <abbr>ABSD</abbr> (Account-Based Sales Development) series focused
                    on making sure your sales org is a fit for the
                    <abbr title="Account-Based Sales Development">ABSD</abbr> model and key factors that
                    are associated with its success.
                </p>
            </BlogCard>

            <BlogCard
                title="4 Must-have Touch Patterns For New Account-Based Sales Development Teams"
                href="/blog/4-touch-patterns-for-new-account-based-sales-development-teams"
                postDate="06-26-2020"
            >
                <p slot="preview">
                    Account-based sales development <abbr>(ABSD)</abbr> requires tailored strategies
                    to effectively engage prospects. This article outlines essential touch patterns
                    for new <abbr title="Account-Based Sales Development">ABSD</abbr> teams, emphasizing
                    the importance of personalizing communication based on account potential and lead
                    source. An interactive infographic helps you e
                </p>
            </BlogCard>

            <BlogCard
                title="Take Advantage of Sales Automation Tools With a Human Touch"
                Image="https://i.ytimg.com/vi/P2O9YviRKGI/hqdefault_7233.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&amp;rs=AOn4CLAoToD9LxTirTb4hr-v-JKaVXQwiQ"
                href="https://www.youtube.com/watch?v=P2O9YviRKGI&t=47s"
                postDate="05-16-2019"
            >
                <p slot="preview">
                    On this edition of The Predictable Revenue Podcast, co-host Collin Stewart
                    welcomes Travis Henry, Director of Inside Sales Operations at renowned Bay Area
                    sales consultancy SalesSource. A respected sales operations specialist, Travis
                    honed his skills global technology companies and has consulted for startups
                    large and small. If you’re looking to grow your sales team – look no further,
                    Travis is your man.
                </p>
            </BlogCard>

            <BlogCard
                title="Account-Based Sales Development: The Ultimate Tech Stack"
                href="/blog/the-ultimate-absd-tech-stack"
                postDate="02-18-2020"
            >
                <p slot="preview">
                    This article, the second in our Account-Based Sales Development Series, delves
                    into the ultimate tech stack essential for optimizing Sales Development teams.
                    We explore the critical tools for CRM, marketing automation, engagement,
                    enrichment, routing, signals, and enablement, offering practical advice to
                    enhance rep efficiency and effectiveness. Co-authored by industry experts Lars
                    Nilsson and Travis Henry, this guide provides insights and best practices to
                    supercharge your ABSD strategy.
                </p>
            </BlogCard>

            <BlogCard
                title="Unlocking Success with Outsourced Sales Development: Key Insights for SaaS Companies"
                href="/blog/unlocking-success-with-outsourced-sales-development"
                postDate="01-07-2020"
            >
                <p slot="preview">
                    The SaaS community has seen a rise in outsourced Sales Development
                    Representative <abbr>(SDR)</abbr>
                    firms that handle appointment setting and lead qualification. This article examines
                    their evolution, current capabilities with advanced technologies, and future AI-driven
                    trends. It highlights scenarios where outsourcing is beneficial, such as entering
                    new markets, and discusses the pros and cons, including cost savings, scalability,
                    and potential disconnects. Emphasizing strategic implementation and communication,
                    the article ultimately recommends in-house teams for sustained growth.
                </p>
            </BlogCard>

            <BlogCard
                title="How To Assemble The Ultimate SDR Team"
                href="/blog/how-to-assemble-the-ultimate-sdr-team"
                postDate="12-10-2019"
            >
                <p slot="preview">
                    Discover the secrets to building an unbeatable SDR team with diverse skill sets
                    that drive success! In our latest blog post, "How to Assemble the Ultimate SDR
                    Stack," we share the key profiles you need on your team, featuring real-life
                    examples from our All-Star lineup at Bluewolf. Learn from the experiences of top
                    performers like Mark Pises, the masterful writer, and Erin Reynolds, the
                    energizing force, and see how you can elevate your sales development game to new
                    heights. Click here to unlock the strategies that will transform your sales team
                    into a powerhouse!
                </p>
            </BlogCard>

            <BlogCard
                title="How to Land a Job: Sales Career Advice from Lars Nilsson"
                href="https://www.youtube.com/watch?v=1oXCqzsRcBg"
                Image="https://kagi.com/proxy/1564678761319?c=d7Hu1iRd9QOtfcPjG7-7fh0NfssQ6NFvx4iBi22Ev69bafMFISY2aEGEt42Lblkgr8d9RcYWCtHQWN2e869rJahnXrmjOb0qIxDRyONUgRQVQFmyaQ4rtJfKzznQBCZDIjOoDZwPBHmuv5jSKIwUk_cTDdeRfjVJX2oq4bgBHn-XpUqmGnr1mGpq7c-lIvLFQN6frOVKIB8twrPK6YhKRC8AyZQDgC9ZM2m8UM_l0TfGiNWrAt_PdT_4YWT7uLf5"
                postDate="08-30-2019"
            >
                <p slot="preview">
                    Dive into the latest Gong Labs Live episode featuring exclusive career advice
                    from sales veteran Lars Nilsson! With over 20 years of experience, including his
                    role as CEO and co-founder at SalesSource, Lars shares invaluable insights on
                    how to land your first sales job and navigate your career successfully. Learn
                    what to look for in a company, how to prepare for interviews, and the importance
                    of finding the right mentors. Don’t miss this opportunity to gain expert tips
                    that can transform your career. Click here to watch the full interview and boost
                    your sales journey!
                </p>
            </BlogCard>

            <BlogCard
                title="The Future of Scaling Sales Teams (and What You Should Do Right Now)"
                href="https://www.youtube.com/watch?v=SETCqbv0idA"
                postDate="02-22-2019"
            >
                <p slot="preview">
                    Every sales leader knows the struggle of scaling: sourcing talented hires,
                    quickly ramping them up, coaching them as they grow, retaining them, and
                    offering upward trajectory in their careers. Not to mention that the world of
                    sales is changing faster than ever before. That’s why we’re sitting down with
                    two of the pros, SalesSource CEO and co-founder Lars Nilsson and Sendoso CEO and
                    co-founder Kris Rudeegraap, who have close to 40 years of combined experience
                    building strong sales teams.
                </p>
            </BlogCard>

            <BlogCard
                title="Taking a Data Driven Approach to Go-To-Market Planning"
                href="https://predictablerevenue.com/blog/taking-a-data-driven-approach-to-go-to-market-planning"
                Image="https://predictablerevenue.com/wp-content/uploads/2019/01/Karan-Singh-PR-Podcast.png"
                postDate="01-31-2019"
            >
                <p slot="preview">
                    For most young and scrappy startups, closing a deal is a top priority. It
                    doesn’t matter who the prospect is – a deal is a deal and if you want to grow,
                    you need customers. Of course, when your outbound team begins to proactively
                    reach out to prospects, in the hopes of closing more deals, companies begin to
                    define who they target: first by defining their Ideal Customer Profile and then,
                    based on that profile, their larger target market.
                </p>
            </BlogCard>

            <BlogCard
                title="Will AI Replace Sales Development?"
                href="https://www.linkedin.com/pulse/ai-replace-sales-development-give-us-superpowers-lars-nilsson/"
                Image="https://media.licdn.com/dms/image/v2/C5612AQEtFevxBNmgVQ/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1547674705446?e=1729728000&v=beta&t=6M6yVNzxKmk7H1-iMkA1Swd2uZVf2XJOnvhyD3Ja1Fs"
                postDate="01-16-2019"
            >
                <p slot="preview">
                    One thing I love about sales is how passionate people are for their teams,
                    professions, and where the industry is headed. This passion and vigor has been
                    my fuel for the last 30 years in sales and I don’t expect that gas tank to run
                    out any time soon.
                </p>
            </BlogCard>

            <BlogCard
                title="Targeting the Big Guys: Account Based Sales Development "
                href="https://www.linkedin.com/pulse/ai-replace-sales-development-give-us-superpowers-lars-nilsson/"
                postDate="07-07-2017"
            >
                <p slot="preview">
                    Account-based sales development is the hot new thing with promises of finding
                    targeted leads and pushing your sales performance to levels to dramatically
                    greater heights. That all sounds fabulous, but since we all know execution is
                    everything, you need the nitty gritty details on how to integrate ABSD into your
                    sales process. Fret not, in this session we’ve got you covered.
                </p>
            </BlogCard>
        </ul>
    </section>
</div>

<style type="postcss">
    .blog-list {
        @apply grid grid-cols-1 gap-8;
    }
</style>
