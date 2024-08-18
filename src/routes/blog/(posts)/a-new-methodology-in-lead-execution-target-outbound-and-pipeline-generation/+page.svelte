<script>
    import BlogPostWrapper from "../BlogPostWrapper.svelte";
    import LeanDataScreenshot from "$lib/assets/leandata-screenshot.webp";
    import OutreachScreenshot from "$lib/assets/outreach-screenshot.webp";

    const postContents = [
        { id: "sales-evolution", title: "The Evolution of Sales Development" },
        { id: "cloudera", title: "Account-Based Sales Development at Cloudera" },
        { id: "challenges", title: "Challenges and Solutions" },
        { id: "successful-absd", title: "Steps to Successful Account-Based Sales Development" },
        { id: "absd-future", title: "Future of Account-Based Sales Development" },
    ];
</script>

<svelte:head>
    <title>A New Methodology in Lead Execution, Target Outbound, and Pipeline Generation</title>
    <meta
        name="description"
        content="The best sales development teams today leverage technology to perform smarter, better, and faster. The proliferation of, and advances in, sales technology have presented today’s sales development teams with an opportunity to completely revolutionize the way they conduct business."
    />
    <meta
        name="keywords"
        content="sales development, account-based sales development, sales technology, sales development teams, sales development role, sales development leaders, sales development methodology, sales development strategy, sales development process, sales development technology, sales development best practices, sales development ideas, sales development approach, sales development tools, sales development techniques, sales development results, sales development campaigns, sales development challenges, sales development solutions, sales development future, sales development evolution, sales development outbound, sales development pipeline, sales development enterprise, sales development prospects, sales development accounts, sales development target accounts, sales development technology vendors, sales development big data, sales development LinkedIn, sales development outreach, sales development LeanData, sales development sequences, sales development email campaigns, sales development email open rates, sales development email reply rates, sales development meetings, sales development lines of business, sales development expansion opportunities, sales development hard bounces, sales development SFDC, sales development results, sales development email marketing, sales development marketing automation, sales development email open rates, sales development email reply rates, sales development lead generation, sales development lead execution, sales development target outbound, sales development pipeline generation, sales development enterprise accounts, sales development enterprise prospects, sales development enterprise technology, sales development enterprise outreach, sales development enterprise results, sales development enterprise campaigns, sales development enterprise email campaigns, sales development enterprise email open rates, sales development enterprise email reply rates, sales development enterprise meetings, sales development enterprise lines of business, sales development enterprise expansion opportunities, sales development enterprise hard bounces, sales development enterprise SFDC, sales development enterprise results, sales development enterprise email marketing, sales development enterprise marketing automation, sales development enterprise email open rates, sales development enterprise email reply rates, sales development enterprise lead generation, sales development enterprise lead execution, sales development enterprise target outbound, sales development enterprise pipeline generation, sales development enterprise technology, sales development enterprise outreach, sales development enterprise results, sales development enterprise campaigns, sales development enterprise email campaigns, sales development enterprise email open rates, sales development enterprise email reply
        rates, sales development enterprise meetings, sales development enterprise lines of business, sales development enterprise expansion opportunities, sales development enterprise hard bounces, sales development enterprise SFDC, sales development enterprise results, sales development enterprise email marketing, sales development enterprise marketing automation, sales development enterprise email open rates, sales development enterprise email reply rates, sales development enterprise lead generation, sales development enterprise lead execution, sales development enterprise target outbound, sales development enterprise pipeline generation, sales development enterprise technology, sales development enterprise outreach, sales development enterprise results, sales development enterprise campaigns, sales development enterprise email campaigns, sales development enterprise email open rates, sales development enterprise email reply rates, sales development enterprise meetings, sales development enterprise lines of business, sales development enterprise expansion opportunities, sales development enterprise hard bounces, sales development enterprise SFDC, sales development enterprise results, sales development enterprise email marketing, sales development enterprise marketing automation, sales development enterprise email open rates, sales development enterprise email reply rates, sales development enterprise lead generation, sales development enterprise lead execution, sales development enterprise target outbound, sales development enterprise pipeline generation, sales development enterprise technology, sales development enterprise outreach, sales development enterprise results, sales development enterprise campaigns, sales development enterprise email campaigns, sales development enterprise email open rates, sales development enterprise email reply rates, sales development enterprise meetings, sales development enterprise lines of business, sales development enterprise expansion opportunities, sales development enterprise hard bounces, sales development enterprise SFDC, sales development enterprise results, sales development enterprise email marketing, sales development enterprise marketing automation, sales development enterprise email open rates, sales development enterprise email reply rates, sales development enterprise lead generation, sales development enterprise lead execution, sales development enterprise target outbound, sales development enterprise pipeline generation, sales development enterprise technology, sales development enterprise outreach, sales development enterprise results, sales development enterprise campaigns, sales development enterprise email campaigns, sales development enterprise email open rates, sales development enterprise email reply rates, sales development enterprise meetings, sales development enterprise lines of business, sales development enterprise expansion opportunities, sales development enterprise hard bounces, sales development enterprise SFDC, sales development enterprise results, sales development enterprise email marketing, sales development enterprise marketing automation, sales development enterprise email open rates, sales development enterprise email reply rates, sales development enterprise lead generation, sales development enterprise lead execution, sales development enterprise target outbound, sales development enterprise pipeline generation, sales development enterprise technology, sales development enterprise outreach, sales development enterprise results, sales development enterprise campaigns, sales development enterprise email campaigns, sales development enterprise email open rates
        , sales development enterprise email reply rates, sales development enterprise meetings, sales development enterprise lines of business, sales development enterprise expansion opportunities, sales development enterprise hard bounces, sales development enterprise SFDC, sales development enterprise results, sales development enterprise email marketing, sales development enterprise marketing automation, sales development enterprise email open rates, sales development enterprise email reply rates, sales development enterprise lead generation, sales development enterprise lead execution, sales development enterprise target outbound, sales development enterprise pipeline generation, sales development enterprise technology, sales development enterprise outreach, sales development enterprise results, sales development enterprise campaigns, sales development enterprise email campaigns, sales development enterprise email open rates, sales development enterprise email reply rates, sales development enterprise meetings, sales development enterprise lines of business, sales development enterprise expansion opportunities, sales development enterprise hard bounces, sales development enterprise SFDC, sales development enterprise results, sales development enterprise email marketing, sales development enterprise marketing automation, sales development enterprise email open rates, sales development enterprise email reply rates, sales development enterprise lead generation, sales development enterprise lead execution, sales development enterprise target outbound, sales development enterprise pipeline generation, sales development enterprise technology, sales development enterprise outreach, sales development enterprise results, sales development enterprise campaigns, sales development enterprise email campaigns, sales development enterprise email open rates, sales development enterprise email reply rates, sales development enterprise meetings, sales development enterprise lines of business, sales development enterprise expansion opportunities, sales development enterprise hard bounces, sales development enterprise SFDC, sales development enterprise results, sales development enterprise email marketing, sales development enterprise marketing automation, sales development enterprise email open rates, sales development enterprise email reply rates, sales development enterprise lead generation, sales development enterprise lead execution, sales development enterprise target outbound, sales development enterprise pipeline generation, sales development enterprise technology, sales development enterprise outreach, sales development enterprise results, sales development enterprise campaigns, sales development enterprise email campaigns, sales development enterprise email open rates, sales development enterprise email reply rates, sales development enterprise meetings, sales development enterprise lines of business, sales development enterprise expansion opportunities, sales development enterprise hard bounces, sales development enterprise SFDC, sales development enterprise results, sales development enterprise email marketing, sales development enterprise marketing automation, sales development enterprise email open rates, sales development enterprise email reply rates, sales development enterprise lead generation, sales development enterprise lead execution, sales development enterprise target outbound, sales development enterprise pipeline generation, sales development enterprise technology, sales development enterprise outreach, sales development enterprise results, sales development enterprise campaigns, sales development enterprise email campaigns,
        sales development enterprise email open rates, sales development enterprise email reply rates, sales development enterprise meetings, sales development enterprise lines of business, sales development enterprise expansion opportunities, sales development enterprise hard bounces, sales development enterprise SFDC, sales development enterprise results, sales development enterprise email marketing, sales development enterprise marketing automation, sales development enterprise email open rates, sales development enterprise email reply rates, sales development enterprise lead generation, sales development enterprise lead execution, sales development enterprise target outbound, sales development enterprise pipeline generation, sales development enterprise technology, sales development enterprise outreach, sales development enterprise results, sales development enterprise campaigns, sales development enterprise email campaigns, sales development enterprise email open rates, sales development enterprise email reply rates, sales development enterprise meetings, sales development enterprise lines of business, sales development enterprise expansion opportunities, sales development enterprise hard bounces, sales development enterprise SFDC, sales development enterprise results, sales development enterprise email marketing, sales development enterprise marketing automation, sales development enterprise email open rates, sales development enterprise email reply rates, sales development enterprise lead generation, sales development enterprise lead execution, sales development enterprise target outbound, sales development enterprise pipeline generation, sales development enterprise technology, sales development enterprise outreach, sales development enterprise results, sales development enterprise campaigns, sales development enterprise email campaigns, sales development enterprise email open rates, sales development enterprise email reply rates, sales development enterprise meetings, sales development enterprise lines of business, sales development enterprise expansion opportunities, sales development enterprise hard bounces, sales development enterprise SFDC, sales development enterprise results, sales development enterprise email marketing, sales development enterprise marketing automation, sales development enterprise email open rates, sales development enterprise email reply rates, sales development enterprise lead generation, sales development enterprise lead execution, sales development enterprise target outbound, sales development enterprise pipeline generation, sales development enterprise technology, sales development enterprise outreach, sales development enterprise results, sales development enterprise campaigns, sales development enterprise email campaigns, sales development enterprise email open rates, sales development enterprise email reply rates, sales development enterprise meetings, sales development enterprise lines of business, sales development enterprise expansion opportunities, sales development enterprise hard bounces, sales development enterprise SFDC, sales development enterprise results, sales development enterprise email marketing, sales development enterprise marketing automation, sales development enterprise email open rates, sales development enterprise email reply rates, sales development enterprise lead generation, sales development enterprise lead execution, sales development enterprise target outbound, sales development enterprise pipeline generation, sales development enterprise technology, sales development enterprise outreach, sales development enterprise results, sales development enterprise campaigns,
        sales development enterprise email campaigns, sales development enterprise email open rates, sales development enterprise email reply rates, sales development enterprise meetings, sales development enterprise lines of business, sales development enterprise expansion opportunities, sales development enterprise hard bounces, sales development enterprise SFDC, sales development enterprise results, sales development enterprise email marketing, sales development enterprise marketing automation, sales development enterprise email open rates, sales development enterprise email reply rates, sales development enterprise lead generation, sales development enterprise lead execution, sales development enterprise target outbound, sales development enterprise pipeline generation, sales development enterprise technology, sales development enterprise outreach, sales development enterprise results, sales development enterprise campaigns, sales development enterprise email campaigns, sales development enterprise email open rates, sales development enterprise email reply rates, sales development enterprise meetings, sales development enterprise lines of business, sales development enterprise expansion opportunities, sales development enterprise hard bounces, sales development enterprise SFDC, sales development enterprise results, sales development enterprise email marketing, sales development enterprise marketing automation, sales development enterprise email open rates, sales development enterprise email reply rates, sales development enterprise lead generation, sales development enterprise lead execution, sales development enterprise target outbound, sales development enterprise pipeline generation, sales development enterprise technology, sales development enterprise outreach, sales development enterprise results, sales development enterprise campaigns, sales development enterprise email campaigns, sales development enterprise email open rates, sales development enterprise email reply rates, sales development enterprise meetings, sales development enterprise lines of business, sales development enterprise expansion opportunities, sales development enterprise hard bounces, sales development enterprise SFDC, sales development enterprise results, sales development enterprise email marketing, sales development enterprise marketing automation, sales development enterprise email open rates, sales development enterprise email reply rates, sales development enterprise lead generation, sales development enterprise lead execution, sales development enterprise target outbound, sales development enterprise pipeline generation, sales development enterprise technology, sales development enterprise outreach, sales development enterprise results, sales development enterprise campaigns, sales development enterprise email campaigns, sales development enterprise email open rates, sales development enterprise email reply rates, sales development enterprise meetings, sales development enterprise lines of business, sales development enterprise expansion opportunities, sales development enterprise hard bounces, sales development enterprise SFDC, sales development enterprise results, sales development enterprise email marketing, sales development enterprise marketing automation, sales development enterprise email open rates, sales development enterprise email reply rates, sales development enterprise lead generation, sales development enterprise lead execution, sales development enterprise target outbound, sales development enterprise pipeline generation, sales development enterprise technology, sales development enterprise outreach, sales development enterprise results"
    />
    <meta
        property="og:title"
        content="A New Methodology in Lead Execution, Target Outbound, and Pipeline Generation"
    />
    <meta
        property="og:description"
        content="The best sales development teams today leverage technology to perform smarter, better, and faster. The proliferation of, and advances in, sales technology have presented today’s sales development teams with an opportunity to completely revolutionize the way they conduct business."
    />
    <meta
        property="og:url"
        content="https://salessource.com/blog/posts/account-based-sales-development"
    />
</svelte:head>

<BlogPostWrapper postDate="09-24-2015" author="Lars Nilsson" {postContents}>
    <h1 id="introduction" slot="title">
        A New Methodology in Lead Execution, Target Outbound, and Pipeline Generation
    </h1>

    <p slot="intro">
        Here’s a plain and simple truth: the best sales development teams today leverage technology
        to perform smarter, better, and faster. The proliferation of, and advances in, sales
        technology have presented today’s sales development teams with an opportunity to completely
        revolutionize the way they conduct business.
    </p>

    <div slot="content">
        <section>
            <h3 id="sales-evolution">The Evolution of Sales Development</h3>
            <p>
                At its core, the Sales Development role remains the same as ever. Today’s Sales
                Development Teams, like their account development and telemarketing counterparts of
                the past, are specialized units focused on prospecting and building qualified
                pipeline for a company. They are measured by the quantity of their outreach (e.g.
                dials made/answered and emails sent/opened/replied to), and are typically paid on
                qualified meetings set up for their Outside and Inside Sales counterparts. The
                difference is, today’s sales development teams must be smarter and more targeted in
                their outreach to produce the same amount of pipeline, particularly in the
                Enterprise. Technology is helping today’s teams achieve this new approach, and has
                been for some years. Take the case of dialing as an example.
            </p>
            <p>
                In the early days of Sales Development, an <abbr>SDR</abbr> (Sales Development Rep)
                had to complete a hundred or more phone calls and voicemails per day hoping to
                “catch” someone live. &nbsp;Eventually, auto-dialers would make this arduous task
                easier, but then if nobody answered, the
                <abbr title="Sales Development Rep">SDR</abbr>
                would spend additional time leaving a pithy voice-mail in the hope that perhaps they
                would inspire the prospect to call them back (yeah right) or at least leave some form
                of audible company branded product message.&nbsp;<a
                    href="http://www.insidesales.com/"
                    target="_blank"
                    rel="nofollow noopener noreferrer">InsideSales.com</a
                >&nbsp;and other emerging technologies now allow
                <abbr title="Sales Development Rep">SDR</abbr>’s to pre-record voice mail messages
                so now even leaving voice mails can be automated and help the
                <abbr title="Sales Development Rep">SDR</abbr> get to his/her dial targets within an
                hour of starting their day.
            </p>
            <p>
                The point is, as the business world has changed and technology has evolved, so has
                the art and science of Sales Development. Sales Development leaders are constantly
                evaluating new technologies and best practice ideas to help cover more ground while
                keeping resources as lean as possible. As a result, many forward thinking B2B
                technology companies are breeding <abbr title="Sales Development Rep">SDR</abbr>’s
                at the same rate as their outside quota carrying sales counterparts, making a new
                outbound approach possible by a different breed of Sales 2.0 vendors.
            </p>
        </section>

        <section>
            <h3 id="cloudera">Account-Based Sales Development at Cloudera</h3>
            <p>
                Here at Cloudera, we call this approach <abbr>ABSD</abbr> (Account-Based Sales
                Development). The
                <abbr title="Sales Development Rep">SDR</abbr> team has refined its approach to
                outbound prospecting into the enterprise with the help of two cutting edge
                technology vendors;
                <a href="https://outreach.io" target="_blank" rel="nofollow noopener noreferrer"
                    >Outreach</a
                >&nbsp;and&nbsp;<a
                    href="https://leandata.com"
                    target="_blank"
                    rel="nofollow noopener noreferrer">LeanData</a
                >&nbsp;– two companies that embody the essence of big data. The ever present and
                ubiquitous&nbsp;<a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="nofollow noopener noreferrer">LinkedIn</a
                >&nbsp;Navigator is the third pillar in our outbound “<abbr
                    title="Sales Development Rep">SDR</abbr
                >
                technology stack”. &nbsp;Instead of beating on the empty phone doors we’ve seen as industry
                standard, we have changed our approach to rely on technology to help us understand those
                that would be more willing to take and accept our calls.&nbsp;Since implementing our
                <abbr title="Account-Based Sales Development">ABSD</abbr>
                strategy just 3 months ago, we have seen unprecedented results and responses. In our
                first try within a target account, we sent a three-email campaign using Outreach.io “sequences,”
                and our <abbr title="Account-Based Sales Development">ABSD</abbr> methodology delivered:
            </p>
            <ul>
                <li>60% open rate</li>
                <li>31% reply rate</li>
                <li>15 net new meetings</li>
                <li>Entry into three new lines of business</li>
                <li>Two expansion opportunities within existing lines of business</li>
                <li>22 hard bounces automatically purged out of SFDC</li>
            </ul>
            <p>
                The results of all subsequent <abbr title="Account-Based Sales Development"
                    >ABSD</abbr
                > campaigns into specifically targeted enterprise accounts netted similar results; all
                in the coveted double digit email open and reply rates. Using broader and less targeted
                techniques with Marketing Automation mass emailing, typical open rates vary in the 5-8%
                range and reply rates in the 2-3% range. I was blown away for I had never seen anything
                like this in my 20 years of building lead/demand generation teams.
            </p>
            <p>
                The coordinated process of developing qualified pipeline in a Target Addressable
                Market by running proactive sales development led multi-touch "sequences" into
                Target accounts. These coordinated and proactive email "sequences" make it possible
                to deliver relevant solutions and use case specific content to a specific buyer
                persona.
            </p>
            <ul>
                <li>
                    <span
                        >Using the "Mass" and "Auto" lead conversion tool LeanData, <abbr
                            title="Account-Based Sales Development">ABSD</abbr
                        >
                        leverages the consolidation of relevant inbound leads and account contacts. Social
                        Networks & Contact tools like
                        <a href="https://linkedin.com" target="_blank">LinkedIn</a>
                        & <a href="https://discover.org" target="_blank">Discover.org</a> also add
                        title relevant buyer persona contacts to an
                        <abbr title="Account-Based Sales Development">ABSD</abbr> campaign.</span
                    >
                </li>
                <li>
                    <span
                        >More efficient and intelligent email engagement with prospects via <a
                            href="https://outreach.io"
                            target="_blank">Outreach</a
                        >
                        (other vendors include
                        <a href="https://yesware.com" target="_blank">Yesware</a>,
                        <a href="https://sendbloom.com" target="_blank">Sendbloom</a>,
                        <a href="https://toutapp.com" target="_blank">ToutApp</a>) deliver day and
                        time specific emails to those we believe carry the pain for our solutions
                        and would/could/should be interested.</span
                    >
                </li>
                <li>
                    <span
                        >Integration of multi-touch call, email and social strategy as a follow-up
                        bring it all together.</span
                    >
                </li>
            </ul>
        </section>

        <section>
            <h3 id="challenges">Challenges and Solutions</h3>
            <p>
                When I first arrived at Cloudera, I faced a “problem” unlike any other in my career:
                we had too many leads! In our case, it wasn’t just that we had too many leads for
                the <abbr title="Sales Development Rep">SDR</abbr> team to manage, but we had too
                many of the&nbsp;<strong>wrong</strong>&nbsp;type of leads. Allow me to
                elaborate…&nbsp;<a
                    href="http://funnelholic.com/wp-content/uploads/2015/09/LeanDataForms.docx"
                    target="_blank"
                    rel="noopener">LeanDataForms</a
                >
            </p>
            <p>
                For those of you who don’t know, Cloudera provides an open source distribution of
                Apache & Hadoop – a pioneering and fundamentally new way of storing and processing
                data. It is commonly downloaded for free. In today’s hyper-connected world where
                more and more data is being created every day, Hadoop’s breakthrough advantages mean
                that businesses and organizations can now find value in data that was recently
                considered useless. Cloudera provides enterprise versions of this software alongside
                support, training, and professional services that provide a more robust
                enterprise-class experience. The Cloudera platform includes the leading analytic
                tools, simple administration technology, and compliance-ready security and
                governance.
            </p>
            <p>
                Hadoop (big data) solutions are being talked about everywhere it seems, and Cloudera
                is at the center of it all. People are downloading research, registering for online
                webinars and attending our events in record numbers. We found out quickly that most
                leads that we captured were simply investigating our free technology, and wanted to
                be left in peace to learn about the technology on their own.
            </p>
            <p>
                This goes directly against what we ask of an <abbr title="Sales Development Rep"
                    >SDR</abbr
                >; call 10x times, interrupt their day and push for a follow on meeting with their
                sales rep. In fact, not only were these individuals not interested in having
                conversations with us, quite a few of these same “prospects” were individuals we had
                no interest in either.
            </p>
            <p>
                To sum it up, our challenge was to determine which individuals were “<abbr
                    title="Sales Development Rep">SDR</abbr
                >
                actionable” versus those prospects who offered too low a value proposition for the dedicated
                attention of my <abbr title="Sales Development Rep">SDR</abbr> team.
            </p>
        </section>

        <section>
            <h3 id="successful-absd">
                Steps to Successful <abbr title="Account-Based Sales Development">ABSD</abbr>
            </h3>
            <h4>Step 1: Create a Single View of Each Target Account</h4>
            <p>
                This is critical to the success of an <abbr title="Account-Based Sales Development"
                    >ABSD</abbr
                >
                campaign. Integration with LeanData places a custom iframe into the Account Object and
                makes visible all of the unconverted leads in
                <a href="http://salesforce.com" target="_blank" rel="nofollow noopener noreferrer"
                    >Salesforce</a
                >
                that were never converted against the existing account. &nbsp;By hitting a “Mass Convert”
                button, all related leads will automatically convert into contacts. LeanData also makes
                visible any duplicate accounts that may exist in the
                <abbr>CRM</abbr> (Customer Relationship Management Tool) database making for easier consolidation
                and merging.
            </p>
            <p>
                To ensure that leads get converted into existing accounts, we also use LeanData’s
                “auto-convert” functionality, which proactively converts all new inbound leads
                within our target market straight to the account record. By isolating our high value
                target account leads and automatically associating them with their respective
                accounts we have marginalized the manual work an <abbr title="Sales Development Rep"
                    >SDR</abbr
                > has to do prior to execution and have identified the highest value leads for more efficient
                and timely follow ups.
            </p>
            <p>
                Today, 60% of our lead volume is auto-assigned to related accounts thus giving each
                <abbr title="Sales Development Rep">SDR</abbr> hours back a day to focus on inbound lead
                prosecution, and more time to dedicate towards outbound efforts.
            </p>
            <p>
                <img
                    loading="lazy"
                    decoding="async"
                    src={LeanDataScreenshot}
                    alt="LeanData Integration"
                    width="1024"
                    height="346"
                />
            </p>
            <p>
                <em
                    >Fig. 1 – LeanData’s iFrame. After integration of LeanData with Salesforce.com,
                    the LeanData detail section can be found in the Account object of
                    Salesforce.com. This will present for you all duplicate accounts and related
                    lead objects that exist against that named account.&nbsp; In this example, it
                    shows us that we have one duplicate account record and 73 existing lead objects
                    that all come from the account: American Express.&nbsp; By simply selecting the
                    “Mass Convert” button, you can automatically mass convert these leads into
                    contacts against the American Express account and thus get a consolidated view
                    of all “opt in” contacts that come from one of your target accounts</em
                >
            </p>

            <h4>Step 2: Identify Target Prospects Within Each Account</h4>
            <p>
                With visibility to all known titles in the <abbr
                    title="Customer Relationship Management Tool">CRM</abbr
                >, the <abbr title="Sales Development Rep">SDR</abbr>
                team (with account executive (AE) coordination) is able to quickly identify other relevant
                stakeholders that DID NOT exist in our
                <abbr title="Customer Relationship Management Tool">CRM</abbr>
                through inbound inquiries. By using LinkedIn Navigator and&nbsp;<a
                    href="http://www.discover.org/"
                    target="_blank"
                    rel="nofollow noopener noreferrer">DiscoverOrg</a
                >, <abbr title="Sales Development Rep">SDR</abbr>s search for people with titles
                relevant to big data, data architecture and “Hadoop” at the target account and build
                them into separate lists. The key here is to choose titles you believe carry the
                pain for the solution your products might solve for them.
            </p>
            <p>
                What we end up with is everybody that has ever come to us and a target rich group of
                new contacts we believe will care about what we present them.
            </p>

            <h4>Step 3: Develop Relevant Content</h4>
            <p>
                <abbr title="Sales Development Rep">SDR</abbr>s work directly with their AE and a
                Cloudera Industry Vertical focused Subject Matter Expert (we have SME’s at Cloudera
                aligned to our&nbsp;top five industry vertical targets) to develop three separate
                emails designed to send in a sequence a few days apart from each other (we’ve done
                2, 3 and 4 drip sequences in the past but prefer 3). The key here is to tailor the
                message to the specific account, account type and vertical to ensure the short,
                crisp, use case specific message that aligns to the target’s pain.
            </p>
            <p>
                This level of targeted outreach wasn’t something we could do had we not been able to
                combine all the relevant data we had in our <abbr
                    title="Customer Relationship Management Tool">CRM</abbr
                >; hugely valuable!
            </p>

            <h4>Step 4: Generate Outreach.io Sequences</h4>
            <p>
                After the emails have been drafted, the <abbr title="Sales Development Rep"
                    >SDR</abbr
                >
                loads them into Outreach.io and sets up the sequence to deploy over a week’s time. For
                our first few sequences we chose to have the first&nbsp;email go out Tuesday morning,
                the second on a Thursday afternoon and the third on the following Monday afternoon. Over
                the last few weeks, we have begun A/B testing with the number# of sequences, the days,
                times, and messaging of the sequences.
                <abbr title="Sales Development Rep">SDR</abbr>’s have become very prideful of their
                open and reply rates and drive each other to push the envelope on weekly performance
                metrics.
            </p>
            <p>
                <img
                    loading="lazy"
                    decoding="async"
                    src={OutreachScreenshot}
                    alt="Outreach.io Results"
                    width="1024"
                    height="449"
                />
            </p>
            <p>
                <em
                    >Fig.2 – Outreach.io screenshot showing the results of a completed three email
                    sequence <abbr title="Account-Based Sales Development">ABSD</abbr> campaign that
                    saw 56% open rate and a 25% reply rate.&nbsp; Interesting to note that there
                    were 26 hard bounces and only five “opt outs” This particular
                    <abbr title="Account-Based Sales Development">ABSD</abbr>
                    campaign executed on July 28, July 30 &amp; Aug. 1 where most of the resulting activity
                    occurred.&nbsp; <abbr title="Sales Development Rep">SDR</abbr> follow-up activity
                    resulted in nine meetings being set leading to three new opportunities being qualified
                    and forecast for $285K</em
                >
            </p>
        </section>

        <section>
            <h3 id="absd-future">
                Future of <abbr title="Account-Based Sales Development">ABSD</abbr>
            </h3>
            <p>
                To date, we have targeted 24 companies with individual <abbr
                    title="Account-Based Sales Development">ABSD</abbr
                >
                campaigns. 86 qualified meetings have been set up resulting in 45 opportunities created
                rolling up $3.7M of new forecasted pipeline. As the
                <abbr title="Sales Development Rep">SDR</abbr>’s and AE’s get comfortable with the
                process and procedure of setting up each individual campaign, there’s just more
                pipeline to go and create.&nbsp; I’ve had to adjust the comp plans for
                <abbr title="Sales Development Rep">SDR</abbr>’s as a result of
                <abbr title="Account-Based Sales Development">ABSD</abbr>
                as the average number of meetings they are setting has increased by 20%.&nbsp; This drives
                not only the increase we are seeing in pipeline generating from the
                <abbr title="Sales Development Rep">SDR</abbr>
                channel, but also speaks directly to the Efficiency OKR that our CEO has concentrated
                the entire company on. We are doing more with less and getting the right kind of activity
                in our target market segment while driving more pipeline and more revenue. Beautiful!
            </p>
            <p>
                <abbr title="Account-Based Sales Development">ABSD</abbr> is a derivative of the
                “Account-Based Marketing” (ABM) movement that has been gaining momentum as of
                late.&nbsp; I just learned that ABM was coined in 2004 by&nbsp;<a
                    href="http://www.itsma.com/"
                    target="_blank"
                    rel="nofollow noopener noreferrer">ITSMA</a
                >&nbsp;but I had not heard of it until earlier last year when Cloudera began using
                technology to target ads at specific buyer personas within strategic accounts. Jon
                Miller of&nbsp;<a
                    href="https://engagio.com"
                    target="_blank"
                    rel="nofollow noopener noreferrer">Engagio</a
                >&nbsp;and Sangram Vajre of&nbsp;<a
                    href="https://terminus.com"
                    target="_blank"
                    rel="nofollow noopener noreferrer">Terminus</a
                >&nbsp;are both building technology around ABM and I hope they plan to include more
                sales related functions along with Marketing functions. In my opinion, ABM should be
                re-coined as ABS&amp;M as the collaboration and execution between Sales AND
                Marketing needs to be near perfect to be able to pull off the surgical targeting of
                each subsequent account with the right messages from marketing together with the
                right outreach, follow-up, and execution from sales.&nbsp; I’d also say that ABM was
                made possible because Marketing Automation (MA) and Sales 2.0 mashes up the main
                componentry of out-bounding targeted content into specific accounts with the title
                relevant contacts whose email and phone numbers# can now be so easily found through
                contact vendors &nbsp;(LinkedIn, &nbsp;DiscoverOrg, Data.com,&nbsp;<a
                    href="https://netprospex.com"
                    target="_blank"
                    rel="nofollow noopener noreferrer">Netprospex</a
                >).
            </p>
            <p>
                This particular methodology was inspired by the contributions from thought leaders
                like Craig Rosenberg and the entire gang at the&nbsp;<a
                    href="https://topohq.com"
                    target="_blank"
                    rel="nofollow noopener noreferrer">Topo.</a
                >&nbsp; There, <abbr title="Sales Development Rep">SDR</abbr> leaders gather and bat
                around technology and best practice ideas and push the envelope of what is possible
                in today’s emerging Sales 3.0 world.&nbsp;<a
                    href="https://linkedin.com/in/jillrowley"
                    target="_blank"
                    rel="nofollow noopener noreferrer">Jill Rowley&nbsp;</a
                >&amp;&nbsp;<a
                    href="https://linkedin.com/in/aaronross"
                    target="_blank"
                    rel="nofollow noopener noreferrer">Aaron Ross</a
                >&nbsp;have been banging away for years on their convictions about outbound and
                social selling and I have picked up so many ideas form them as well.&nbsp; Props
                must also be given to&nbsp;<a
                    href="https://linkedin.com/pub/jim-fowler/0/34/193"
                    target="_blank"
                    rel="nofollow noopener noreferrer">Jim Fowler&nbsp;</a
                >and&nbsp;<a
                    href="https://linkedin.com/in/garthmoulton"
                    target="_blank"
                    rel="nofollow noopener noreferrer">Garth Moulton</a
                >&nbsp;(of Jigsaw, now Data.com) for creating the first ever contact exchange
                allowing reps to offer contact information from their rolodex picked up from past
                sales cycles in return for the ability to view other rep’s rolodexes. This “buyer
                persona” or title relevant contact database brought new life to my Account
                Development team at ArcSight and accelerated pipeline growth to record new levels.
                This ability changed the rules of the cold prospect outreach game forever in my
                opinion and will continue to propel
                <abbr title="Account-Based Sales Development">ABSD</abbr> to new heights.
            </p>
            <p>
                While we are still in the early days of <abbr
                    title="Account-Based Sales Development">ABSD</abbr
                > here at Cloudera, I do see this as the next evolution of inside sales prospecting efforts.
                We finally have the technology to support the ideal process for triaging, researching,
                and reaching out to target contacts at specific accounts with the right messaging.
            </p>
            <p>
                Again, if you want to learn more – TOPO has created a case documenting the
                process.&nbsp;<a
                    href="http://blog.topohq.com/account-based-sales-development-a-topo-case-on-clouderas-sales-development-process/"
                    target="_blank"
                    rel="nofollow noopener noreferrer">Click here</a
                >.
            </p>
        </section>
    </div>
</BlogPostWrapper>

<style lang="postcss">
</style>
