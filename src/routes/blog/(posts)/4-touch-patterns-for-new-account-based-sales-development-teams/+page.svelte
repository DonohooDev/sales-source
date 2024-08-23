<script lang="ts">
    import Button from "$lib/components/Button.svelte";
    import BlogPostWrapper from "../BlogPostWrapper.svelte";
    const postContents = [
        { id: "introduction", title: "Introduction" },
        { id: "executing", title: "Executing the Right Touch Pattern" },
        { id: "outbound-inbound", title: "Outbound vs. Inbound Touch Patterns" },
        { id: "personalization", title: "Personalization" },
        { id: "closing", title: "Closing Thoughts" },
    ];

    let frameRef: null | HTMLIFrameElement = null;
    function fullScreen() {
        if (frameRef) {
            frameRef.requestFullscreen();
        }
    }
</script>

<svelte:head>
    <title
        >4 Must-Have Touch Patterns for New Account-Based Sales Development Teams | SalesSource</title
    >
    <meta
        name="description"
        content="Learn essential touch patterns for new ABSD teams, emphasizing the importance of personalizing communication based on account potential and lead source."
    />
    <meta
        name="keywords"
        content="account-based sales development, ABSD, touch patterns, sales development, sales engagement"
    />
    <meta
        property="og:title"
        content="4 Touch Patterns for New Account Based Sales Development Teams"
    />
    <meta
        property="og:description"
        content="Learn essential touch patterns for new ABSD teams, emphasizing the importance of personalizing communication based on account potential and lead source."
    />
    <meta
        property="og:url"
        content="https://salessource.com/blog/4-touch-patterns-for-new-account-based-sales-development-teams"
    />
</svelte:head>

<BlogPostWrapper postDate="06-26-2020" author="Brendan Short" {postContents}>
    <h1 id="introduction" slot="title">
        4 Must-Have Touch Patterns for New Account-Based Sales Development Teams
    </h1>

    <p slot="intro">
        <abbr>ABSD</abbr> (Account-based sales development) requires tailored strategies to
        effectively engage prospects. This article outlines essential touch patterns for new
        <abbr title="account-based sales development">ABSD</abbr> teams, emphasizing the importance of
        personalizing communication based on account potential and lead source. An interactive infographic
        helps you experiment and refine these methods, enhancing your sales development efforts for greater
        success.
    </p>

    <div slot="content">
        <section>
            <h3 id="introduction">Introduction</h3>
            <p>
                In 2016, we had a great epiphany and created what is now widely accepted as: <a
                    href="http://funnelholic.com/2015/09/24/account-based-sales-development-a-new-methodology-in-lead-execution-target-outbound-and-pipeline-generation/"
                    target="_blank"
                    rel="noopener noreferrer">Account-Based Sales Development</a
                >. Since then, the space has evolved considerably — the tools, the processes, the
                playbook.
            </p>
            <p>
                Account-Based Sales Development is a journey, not a destination. If you are early in
                your journey, consider the process in three steps:
            </p>
            <ol>
                <li>
                    <a
                        href="https://www.saleshacker.com/account-based-sales-development-success/"
                        target="_blank"
                        rel="noopener noreferrer"
                        >Is <abbr title="account-based sales development">ABSD</abbr> right for you?</a
                    >
                </li>
                <li>
                    <a
                        href="/blog/the-ultimate-absd-tech-stack"
                        target="_blank"
                        rel="noopener noreferrer">Do you have the right tech stack in place?</a
                    >
                </li>
                <li><span>How do you start executing?</span></li>
            </ol>
        </section>

        <section>
            <h3 id="executing">Executing the Right Touch Pattern</h3>
            <p>
                This is where it gets very tactical. In this infographic, we’re specifically focused
                on the “Touch Pattern” of your prospecting.
            </p>
            <p>
                But, before going any further, it is essential to keep in mind: “Your Mileage May
                Vary!” Your results will depend on many factors, such as the stage of your company,
                the industry of your ideal customer profile, the roles of the key personas you are
                targeting, the skillset of your team, and your solution’s product/market fit.
            </p>
            <p>
                We have provided a framework and recommendations based on our own experience and
                industry best practices. We have successfully implemented these touch patterns and
                strategies for our customers.
            </p>
            <p>
                <strong
                    >Remember, these touch patterns are a starting point, not a perfect solution.
                    Test, tune, and tailor them to your market.</strong
                >
            </p>
            <p>
                <strong
                    >Below is an interactive infographic that outlines 4 must-have touch patterns we
                    recommend for new sales development teams.</strong
                >
            </p>
            <p>
                We encourage you to click around, explore the comments and best practices, and
                experiment with these touch patterns in your sales engagement tool.
            </p>

            <div
                id="infographic"
                class="relative h-[300px] sm:h-[425px] md:h-[500px] lg:h-[650px] xl:h-[900px]"
            >
                <iframe
                    bind:this={frameRef}
                    title="touch-patterns-interactive-infographic"
                    style="border: none;"
                    src="https://xd.adobe.com/embed/a2c23c24-a331-4229-828c-ddab56cdaab4-f791/?fullscreen&amp;hints=off"
                    height="100%"
                    class="absolute top-0 left-0 w-full h-full xl:w-[130%] xl:-left-[15%]"
                    frameborder="0"
                    scrolling="no"
                    allow="fullscreen"
                />
            </div>

            <Button clickHandler={fullScreen} icon="fa-solid fa-expand">View fullscreen</Button>
        </section>

        <section>
            <h3 id="outbound-inbound">Outbound vs. Inbound Touch Patterns</h3>
            <p>
                Outbound and inbound touch patterns should be structured differently. Focus inbound
                on <a
                    href="https://www.outreach.io/blog/scale-up-and-three-other-tips-to-quickly-advance-inbound-leads-tl"
                    target="_blank"
                    rel="noopener noreferrer">speed and frequency</a
                > — think higher touch. Outbound should be more strategic and methodical — focus on personalization
                and nurturing.
            </p>
            <p>
                In both outbound and inbound, constantly add value to the prospect. In <a
                    href="https://www.linkedin.com/in/josh-braun/"
                    target="_blank"
                    rel="noopener noreferrer">Josh Braun’s</a
                > words, make “deposits.”
            </p>
            <p>
                The “Turing test” for this is: who do you find yourself talking about more? The
                prospect and their needs, or yourself and your solution? Always prioritize the
                prospect and solving their problems over talking about yourself.
            </p>
        </section>
        <section>
            <h4>Outbound – Differentiated by Account Tiers</h4>
            <p>
                Understanding the potential lifetime deal value of a customer is crucial before
                engaging for the first time. Knowing the different segments, such as “Tier 1” (high
                deal value potential) and “Tier 2” (lower deal value potential), allows you to
                allocate your time and resources effectively. We recommend spending 80% of your time
                on 20% of your Tier 1 Accounts.
            </p>
            <p>
                Even within an email or touch pattern, consider the <a
                    href="https://en.wikipedia.org/wiki/Pareto_principle"
                    target="_blank"
                    rel="noopener noreferrer">Pareto Principle</a
                > and personalize 20% of the email while using a template for the remaining 80%. Similarly,
                for an entire sequence/cadence, it often makes sense to have 20% of the touch pattern
                be manual and 80% automated.
            </p>
        </section>
        <section>
            <h4>Inbound – Differentiated by Lead Source</h4>
            <p>
                Your messaging should vary depending on the inbound lead source. Start by having two
                “tracks” and bucketing all potential inbound lead sources into one of those buckets.
            </p>
            <p>
                For example, be more direct with a lead source like “Demo Request.” Someone has
                explicitly requested your follow-up, inviting you to reach out more frequently. In
                contrast, a lead source like “Downloaded Whitepaper” requires a longer touch pattern
                and a more educational framework. The buyer has signaled potential interest — it’s
                still on you to personalize, educate, and add value in your outreach.
            </p>
        </section>
        <section>
            <h3 id="personalization">Personalization</h3>
            <p>
                Check out our friend, Becc Holland, over at <a
                    href="https://www.chorus.ai/blog/how-to-personalize-at-scale"
                    target="_blank"
                    rel="noopener noreferrer">Chorus.ai’s series on Personalization-at-scale</a
                >.
            </p>
            <p>
                As mentioned, dedicate most of the personalization to accounts with the highest
                potential deal value. If the company can pay you $200K per year, it’s worth spending
                more time per email and within each touch pattern manually personalizing. For a
                company that could only ever pay you $5K per year, lean more heavily on a touch
                pattern that is mostly automated.
            </p>
            <p><strong>So how do you personalize?</strong></p>
            <p>We use a framework to personalize around three areas:</p>
            <ul>
                <li>Company level (e.g., industry, location, size)</li>
                <li>Personal level (e.g., pain points associated with different titles)</li>
                <li>
                    Person-to-person (e.g., a recent blog or social post by your prospect, attended
                    the same school, from the same hometown, or another connection that adds value
                    to the conversation)
                </li>
            </ul>
        </section>
        <section>
            <h3 id="closing">Closing Thoughts</h3>
            <p>
                Be sure to click the orange “View All Comments” button to see more tips and tricks
                as you set up your Touch Pattern.
            </p>
            <p>
                Keep in mind that your results will vary depending on many factors. However, we are
                confident that implementing these 4 touch patterns will give you a significant
                jumpstart on your Account-Based Sales Development journey.
            </p>
            <p>
                We are here to support you. As you set up your Touch Pattern(s), please do not
                hesitate to reach out with any questions. Contact us at <a
                    href="mailto:team@salessource.com"
                    target="_blank"
                    rel="noopener noreferrer">team@salessource.com</a
                >. Connect with us on LinkedIn:
                <a
                    href="https://www.linkedin.com/in/lanilsson/"
                    target="_blank"
                    rel="noopener noreferrer">Lars Nilsson</a
                >
                and
                <a
                    href="https://www.linkedin.com/in/travisjhenry/"
                    target="_blank"
                    rel="noopener noreferrer">Travis Henry</a
                >.
            </p>
        </section>
    </div>
</BlogPostWrapper>

<style lang="postcss">
</style>
