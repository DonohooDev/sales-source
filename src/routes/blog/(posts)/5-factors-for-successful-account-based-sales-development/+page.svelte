<script>
    import BlogPostWrapper from "../BlogPostWrapper.svelte";
    import ABSDFlowchart from "$lib/assets/absd-full-flowchart.png";
    import ABSDFlowchartDownload from "$lib/assets/absd-full-flowchart.pdf";

    const postContents = [
        { id: "right-for-you", title: "Is ABSD right for your business" },
        { id: "need-to-know", title: "What You Need to Know About SaaS GTM Models" },
        { id: "absd", title: "Is ABSD Right for You" },
        { id: "factors", title: "What Factors Determine ABSD Success" },
        { id: "bottom-line", title: "The Bottom Line" },
        { id: "about-the-author", title: "About the Author" },
    ];
</script>

<svelte:head>
    <title>5 Factors for Successful Account-Based Sales Development | SalesSource</title>
    <meta
        name="description"
        content="Are you considering whether ABSD (Account-Based Sales Development) is suitable for your business? This guide outlines essential aspects, including a detailed flowchart and five key factors influencing ABSD success."
    />
    <meta
        name="keywords"
        content="ABSD, Account-Based Sales Development, sales development, sales cycle, sales process, sales strategy"
    />
    <meta property="og:title" content="5 Factors for Successful Account-Based Sales Development" />
    <meta
        property="og:description"
        content="Are you considering whether ABSD (Account-Based Sales Development) is suitable for your business? This guide outlines essential aspects, including a detailed flowchart and five key factors influencing ABSD success."
    />
    <meta
        property="og:url"
        content="https://salessource.com/blog/5-factors-for-successful-account-based-sales-development"
    />
</svelte:head>

<BlogPostWrapper postDate="07-16-2020" author="Lars Nilsson" {postContents}>
    <h1 id="introduction" slot="title">5 Factors for Successful Account-Based Sales Development</h1>

    <p slot="intro">
        Are you considering whether <abbr>ABSD</abbr> (Account-Based Sales Development) is suitable
        for your business? This guide outlines essential aspects, including a detailed flowchart and
        five key factors influencing <abbr title="Account-Based Sales Development">ABSD</abbr> success.
        From understanding your average selling price and sales cycle length to assessing market maturity
        and target addressable market, this article provides step-by-step directions to determine if
        ABSD can drive growth for your organization.
    </p>

    <div slot="content">
        <section>
            <h3 id="right-for-you">Is account-based sales development right for your business?</h3>
            <p>
                We’ve put together a flowchart that tells you in no uncertain terms whether it’s a
                good model for your organization, plus 5 factors that can make or break your
                account-based sales development initiatives.
            </p>
        </section>

        <section>
            <h3 id="need-to-know">
                What You Need to Know About SaaS Go-to-Market (<abbr>GTM</abbr>) Models
            </h3>
            <p>
                B2B SaaS Go-to-Market (<abbr title="go-to-market">GTM</abbr>) models range from
                no-touch, transactional approaches to highly specialized, consultative strategies.
                Your <abbr title="go-to-market">GTM</abbr> approach determines the type of sales roles
                you hire, the technology you implement, and your overall approach to demand generation.
            </p>
            <p>
                One of the most effective models to emerge in recent years is Account-Based Sales
                Development (<abbr>ABSD</abbr>), defined as the coordinated process of developing
                qualified pipeline in a target addressable market by running proactive multi-touch
                campaigns into target accounts with a non-quota carrying team.
            </p>
            <p>
                But <abbr title="Account-Based Sales Development">ABSD</abbr> is not for everyone.
                In fact, applying <abbr title="Account-Based Sales Development">ABSD</abbr> without the
                right business context could spell disaster.
            </p>
            <p>
                This guide is an effort to provide clear, step-by-step directions for determining if <abbr
                    title="Account-Based Sales Development">ABSD</abbr
                > can accelerate your growth.
            </p>
        </section>

        <section>
            <h3 id="absd">Is <abbr>ABSD</abbr> Right for You?</h3>
            <p>
                <img
                    fetchpriority="high"
                    decoding="async"
                    src={ABSDFlowchart}
                    alt="Flowchart determining if Account-Based Sales Development is right for your business"
                    width="1875"
                    height="4811"
                />
            </p>
            <p>
                <strong>Want to download a PDF of this flow chart?</strong>&nbsp;<a
                    href={ABSDFlowchartDownload}
                    target="_blank"
                    rel="noopener noreferrer">Click here</a
                >
            </p>
        </section>

        <section>
            <h3 id="factors">
                What Factors Determine <abbr title="Account-Based Sales Development">ABSD</abbr> Success?
            </h3>
            <p>
                <abbr title="Account-Based Sales Development">ABSD</abbr> success comes down to 5 key
                factors. We’ve mapped them out in the infographic, but here’s what you need to know.
            </p>

            <h4>1. Average Selling Price (<abbr>ASP</abbr>)</h4>
            <p>
                <b>Average Selling Price</b> is defined as the average value of your closed-won deals.
            </p>
            <p>
                Just as you expect a more complex experience when you’re buying a home vs. buying a
                latte, high-<abbr title="Average Selling Price">ASP</abbr> transactions can justify the
                added complexity of an account-based SDR team.
            </p>
            <p>
                For recurring revenue businesses, dedicated <abbr
                    title="Account-Based Sales Development">ABSD</abbr
                >
                efforts also increase the cost of customer acquisition (CAC), which puts a greater burden
                on the value of each customer. The higher the
                <abbr title="Average Selling Price">ASP</abbr>, the more likely you are to see
                efficient unit economics with an
                <abbr title="Account-Based Sales Development">ABSD</abbr> approach.
            </p>

            <h4>2. Sales Cycle Length</h4>
            <p>
                The <b>Sales Cycle Length</b> tells you how long it typically takes your company to close
                a deal, measured from the first meeting until the contract is booked.
            </p>
            <p>
                Short sales cycles simply don’t allow enough time for multiple people to be involved
                in deals; otherwise, you risk extending the time-to-close and frustrating your
                customers.
            </p>
            <p>
                On the other hand, longer sales cycles require the nurturing and multi-stakeholder
                outreach provided by <abbr title="Account-Based Sales Development">ABSD</abbr>.
                These deals go forwards, backward, and sideways. Account-specific content from both
                marketing and sales development provides much-needed air cover for your overburdened
                AE.
            </p>

            <h4>3. Market Maturity</h4>
            <p>
                <b>Market Maturity</b> refers to the level of awareness for products and services similar
                to yours. Are you solving completely new problems or competing against entrenched incumbents?
            </p>
            <p>
                As a rule of thumb, the more novel your solution, the more resources you need to
                invest to properly educate your buyers about how you solve their pain. People are
                not proactively searching for solutions like yours, because solutions like yours
                have not traditionally existed.
            </p>
            <p>
                <abbr>ABSD</abbr> is a powerful channel for educating these markets. On the other end
                of the spectrum are commoditized markets, where buyers are most likely to find you when
                searching for alternatives to their existing solution, usually seeking a lower cost or
                modern features.
            </p>

            <h4>4. Target Addressable Market (<abbr>TAM</abbr>)</h4>
            <p>
                The <b>Target Addressable Market</b> is defined as the total universe of companies
                that could become customers. Your <abbr title="Target Addressable Market">TAM</abbr>
                significantly impacts your go-to-market model because it dictates breadth vs. depth.
            </p>
            <p>
                If you take the same approach to engaging 100 accounts as you do to 10,000, you’ll
                run through your entire market potential in a matter of months. Companies with a
                smaller, well-defined <abbr title="Target Addressable Market">TAM</abbr> have to apply
                surgical precision to their outreach efforts, maximizing the conversion rate of any given
                target.
            </p>
            <p>
                <abbr title="Account-Based Sales Development">ABSD</abbr> provides such precision. Humans
                are not nearly as efficient at engaging a massive, distributed market as strategies like
                digital marketing.
            </p>

            <h4>5. Number of Customer Stakeholders / Departments</h4>
            <p>
                Closely related to the cycle length, the <b>Number of Customer Stakeholders</b> refers
                to the number of people involved on the customer side in any given deal.
            </p>
            <p>
                Do IT, a line of business leader, and the CFO all need to say “yes” for the deal to
                get done? If so, <abbr title="Account-Based Sales Development">ABSD</abbr> can
                efficiently deliver your value proposition to each of these stakeholders
                <i>in their own language</i>, maximizing the chances that they will support, or at
                least not block, the sale.
            </p>
        </section>

        <section>
            <h3 id="bottom-line">The Bottom Line</h3>
            <p>
                Account-based sales development isn’t for everyone. But if the model is right for
                your organization and you get the 5 success factors in place, it can be a powerful
                tactic for generating highly qualified leads for your sales team.
            </p>
            <p>
                <b
                    >What do you think? Is <abbr title="Account-Based Sales Development">ABSD</abbr>
                    for you? What’s your biggest challenge with account-based sales?</b
                >
            </p>
        </section>

        <section>
            <h3 id="about-the-author">About the Author</h3>
            <p>
                <i
                    ><b
                        >SalesSource is a sales consulting firm that brings implementation &
                        advisory together to accelerate growth. We work with B2B companies that need
                        to accelerate time to predictable pipeline and revenue – because it’s tough
                        to uplevel your revenue operation alone.</b
                    ></i
                >
            </p>
            <p>
                <i><b>Contact us at </b></i><a href="mailto:team@salessource.com"
                    ><i><b>team@salessource.com</b></i></a
                ><i><b> to learn more about building world class sales development teams.</b></i>
            </p>
        </section>
    </div>
</BlogPostWrapper>

<style lang="postcss">
</style>
