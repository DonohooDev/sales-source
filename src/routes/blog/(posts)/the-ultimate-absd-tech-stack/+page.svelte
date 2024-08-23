<script lang="ts">
    import Button from "$lib/components/Button.svelte";
    import BlogPostWrapper from "../BlogPostWrapper.svelte";
    const postContents = [
        { id: "intro", title: "Introduction" },
        { id: "tech-stack", title: "Your Account-Based Sales Development Tech Stack" },
        { id: "crm", title: "CRM and Marketing Automation" },
        { id: "engagement", title: "Engagement" },
        { id: "enrichment", title: "Enrichment" },
        { id: "routing", title: "Routing" },
        { id: "signals", title: "Signals" },
        { id: "enablement", title: "Enablement" },
        { id: "authors", title: "Co-Authors" },
    ];

    let frameRef: null | HTMLIFrameElement = null;
    function fullScreen() {
        if (frameRef) {
            frameRef.requestFullscreen();
        }
    }
</script>

<svelte:head>
    <title>Account-Based Sales Development: The Ultimate Tech Stack | SalesSource</title>
    <meta
        name="description"
        content="This article delves into the ultimate tech stack essential for optimizing Sales Development teams. We explore the critical tools for CRM, marketing automation, engagement, enrichment, routing, signals, and enablement, offering practical advice to enhance rep efficiency and effectiveness."
    />
    <meta
        name="keywords"
        content="account-based sales development, tech stack, sales development, CRM, marketing automation, engagement, enrichment, routing, signals, enablement"
    />
    <meta property="og:title" content="Account-Based Sales Development: The Ultimate Tech Stack" />
    <meta
        property="og:description"
        content="This article delves into the ultimate tech stack essential for optimizing Sales Development teams. We explore the critical tools for CRM, marketing automation, engagement, enrichment, routing, signals, and enablement, offering practical advice to enhance rep efficiency and effectiveness."
    />
    <meta property="og:url" content="https://salessource.com/blog/the-ultimate-absd-tech-stack" />
    <meta property="article:published_time" content="2020-02-18" />
    <meta property="article:author" content="Lars Nilsson" />
    <meta property="article:author" content="Travis Henry" />
    <meta property="article:section" content="Sales Development" />
    <meta property="article:tag" content="Account-Based Sales Development" />
    <meta property="article:tag" content="Tech Stack" />
</svelte:head>

<BlogPostWrapper postDate="02-18-2020" author="Lars Nilsson & Travis Henry" {postContents}>
    <h1 id="intro" slot="title">Account-Based Sales Development: The Ultimate Tech Stack</h1>

    <p slot="intro">
        This article, the second in our Account-Based Sales Development Series, delves into the
        ultimate tech stack essential for optimizing Sales Development teams. We explore the
        critical tools for CRM, marketing automation, engagement, enrichment, routing, signals, and
        enablement, offering practical advice to enhance rep efficiency and effectiveness.
        Co-authored by industry experts Lars Nilsson and Travis Henry, this guide provides insights
        and best practices to supercharge your ABSD strategy.
    </p>

    <div slot="content">
        <section>
            <h3 id="intro">Introduction</h3>
            <p>
                We’re excited to share Part Two of our Account-Based Sales Development Series. If
                you haven’t already, be sure to read Part One: <a
                    href="/blog/5-factors-for-successful-account-based-sales-development"
                    target="_blank"
                    rel="noopener">Account-Based Sales Development: 5 Factors For Success.</a
                >
            </p>
            <p>
                Our first installment focused on making sure your sales org is a fit for the
                Account-Based Sales Development (ABSD) model and key factors that are associated
                with its success. If you are a fit, the obvious next question is, “How do you get
                started?”, which brings us to our next installment.
            </p>
        </section>

        <section>
            <div
                id="infographic"
                class="relative h-[300px] sm:h-[425px] md:h-[500px] lg:h-[650px] xl:h-[900px]"
            >
                <iframe
                    bind:this={frameRef}
                    title="The Ultimate ABSD Tech Stack"
                    style="border: none;"
                    src="https://xd.adobe.com/embed/26f08e90-8d27-424b-5a54-69ff760fe6f3-50c1/?fullscreen&amp;hints=off"
                    height="100%"
                    class="absolute top-0 left-0 w-full h-full xl:w-[130%] xl:-left-[15%]"
                    frameborder="0"
                    scrolling="no"
                    allow="fullscreen"
                />
            </div>
            <Button clickHandler={fullScreen} icon="fa-solid fa-expand">View fullscreen</Button>

            <h3 id="tech-stack" class="mt-12">Your Account-Based Sales Development Tech Stack</h3>
            <p>
                Technology has moved to center stage for the best Sales Development teams. This
                introduces a massive opportunity for rep efficiency and effectiveness. This modern
                approach brings our clients massive results by not only generating significant
                pipeline but significant pipeline with prospects who purchase, renew, and expand at
                exceptional rates.
            </p>
            <p>
                The prevailing topic in Sales Development is, “How can I help ensure that my reps
                are spending their time on what matters most?” You can’t have this conversation
                without first discussing your tech stack. You can have the most naturally gifted
                SDRs, but if they’re not using the right tools, it’s like playing tennis with a
                baseball bat.
            </p>
            <p>
                We invite you to use this post and interactive infographic above to help cut through
                the noise of the software landscape and supercharge your SDR team.
            </p>
        </section>
        <section>
            <h3 id="crm">CRM and Marketing Automation</h3>
            <p>
                While this post and infographic focus on the ultimate Account Based Sales
                Development tech stack, we want to acknowledge and point out the importance of a
                proper CRM and Marketing Automation system.
            </p>
            <p>
                Successful execution of an ABSD methodology is dependent on a myriad of factors
                (which are laid out in this series). Your CRM hygiene and Marketing Automation lead
                quality are critical and should be assessed prior to adopting an ABSD strategy.
            </p>
        </section>
        <section>
            <h3 id="engagement">Engagement</h3>
            <p>
                The sales engagement tool landscape is perhaps the most dense and difficult to
                navigate. Also, it is the most important in the world of an SDR as these tools are
                designed to optimize prospect engagement.
            </p>
            <p>
                Account-Based Sales Development is designed to maximize personalized engagement by
                leveraging multiple communication channels. Email, Phone, Voicemail, Social
                (LinkedIn, Twitter, Instagram, etc.), chat, direct mail, and video. Instead of
                bombarding your prospect with these channels at once, you can create a sequence over
                a two week to four week span.
            </p>
        </section>
        <section>
            <h3 id="enrichment">Enrichment</h3>
            <p>
                Your SDR team’s outbound efforts are only as good as the quality of their data. When
                you think about leveraging multiple channels, you want your SDRs to have accurate
                data so that they don’t have to spend extra time digging for it. If you have a
                campaign that utilizes phone, email and direct mail, not having the right phone
                number or HQ address can hinder productivity at scale. Data enrichment solutions
                automatically update contact and account details, making your reps more productive.
            </p>
        </section>
        <section>
            <h3 id="routing">Routing</h3>
            <p>
                An inside sales rep accidentally calling into someone else’s account is not only
                frustrating, but it damages the buying experience. Whether you want to match leads
                to existing accounts, merge duplicates or notify reps when new leads are assigned to
                them, using a demand orchestration tool will help eliminate mundane and
                time-consuming tasks.
            </p>
            <p>
                Perhaps the best (and surprisingly under-utilized) advantage of using a routing tool
                is the ability to pre-seed your target accounts into your Salesforce instance. This
                allows your leads to intelligently route to the right SDR and/or AE, enabling a true
                account-based approach.
            </p>
            <p>
                An Account-Based Sales Development approach cannot succeed without proper and
                clearly defined rules of engagement. These rules help ensure that reps stay in their
                lanes and create a truly personalized experience for their prospects.
            </p>
        </section>

        <section>
            <h3 id="signals">Signals</h3>
            <p>
                The beauty of ABSD is that you can proactively identify, contact, and convert the
                customers who are the best fit for your business. These accounts not only close at a
                higher rate, they tend to renew and expand more than poor-fit accounts. The catch?
                It’s much more difficult to understand which of these best-fit accounts is ready for
                a conversation now.
            </p>
            <p>
                Data intent vendors solve for this by feeding your SDR team signals about those
                accounts who are searching for solutions to problems that are relevant to your
                product/service. For example, if you sell commercial office furniture, imagine if
                you could focus your sales team on those companies who are actively searching for a
                new office space.
            </p>
        </section>

        <section>
            <h3 id="enablement">Enablement</h3>
            <p>
                Successful Account-Based Sales Development execution takes discipline.
                Unfortunately, most companies are still lagging in providing their SDRs with proper
                enablement. Whether it be onboarding or ongoing training, programs are typically
                designed for Account Executives, with SDRs thrown in as an afterthought.
            </p>
            <p>
                Your SDRs must know how to research a given prospect, what specific personas they
                need to target, their possible titles, what messaging to use for each, what a proper
                AE handoff looks like, how to properly use your tech stack, etc. It’s smart to focus
                on SDR enablement sooner than later.
            </p>
        </section>

        <section>
            <h3 id="authors">Co-Authors</h3>
            <p><strong>Lars Nilsson, Co-Founder & CEO, SalesSource</strong></p>
            <p>
                Lars is currently the CEO of SalesSource, a premier consulting firm specializing in
                industry-leading best practices and advisory for the optimization of sales teams. He
                has served in sales executive roles at Cloudera, ArcSight/Hewlett Packard, Riverbed
                Technology and Portal Software – all four of which achieved IPOs. At Cloudera, he
                developed the sales methodology and coined the term Account-Based Sales Development
                (ABSD), which has transformed how businesses approach high-value targets.
            </p>
            <p>
                Lars is also a special advisor at True Ventures where he helps True portfolio
                companies implement best-of-breed sales technologies and processes enabling
                efficient revenue operations. His unique blend of leadership skills and sales acumen
                has benefited dozens of startups in the Valley and beyond. Mentoring sales teams is
                one of his greatest passions.
            </p>

            <p><strong>Travis Henry, Partner, SalesSource</strong></p>
            <p>
                Having spent his career operating in every part of the revenue generation chain,
                Travis deploys his deep sales and marketing expertise to help clients accelerate
                their growth trajectories. He currently serves as a partner at SalesSource, advising
                sales and marketing leadership on the people, process, and technology necessary to
                building successful pipeline generation machines.
            </p>
            <p>
                Previously, Travis led the Sales Development team at Bluewolf, the top global
                consulting partner of Salesforce.com that was acquired by IBM in 2016, after holding
                roles in go-to-market planning and marketing operations. He started his career in
                Oracle’s Sales Academy, first hitting the phones as an SDR and later selling
                enterprise database solutions to emerging startups. He received his BA from U.C.
                Berkeley, where he graduated Phi Beta Kappa with High Honors.
            </p>
        </section>
    </div>
</BlogPostWrapper>

<style lang="postcss">
</style>
