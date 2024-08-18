import type { SolutionCard } from "../types/solution-card";
import type { FAQ } from "../types/faq";

export const homeSolutions: SolutionCard[] = [
    {
        icon: "fa-sharp fa-user-ninja",
        title: "Assess",
        subtitle: "Detailed Audits to identify key areas of improvement.",
        bullets: [
            "In-depth pipeline analysis",
            "Tech stack evaluation",
            "Sales process review",
            "Market strategy assessment",
            "Custom audit reports",
        ],
    },
    {
        icon: "fa-solid fa-plane-departure",
        title: "Ascend",
        subtitle: "Customized solutions tailored to your specific needs.",
        bullets: [
            "Strategic planning",
            "Team training programs",
            "Change management",
            "Technology integration",
            "Sales strategy implementation",
        ],
    },
    {
        icon: "fa-solid fa-gauge-high",
        title: "Accelerate",
        subtitle: "Tailored solutions to increase sales performance and drive growth.",
        bullets: [
            "Performance tracking",
            "Growth analytics",
            "Ongoing support",
            "Continuous optimization",
            "Long-term success planning",
        ],
    },
];

export const homeFAQ: FAQ[] = [
    {
        question: "Do you offer hourly consulting?",
        answer: "We focus on long-term GTM transformation, not ad hoc work, but as part of our engagements, we provide deliverables, consulting, and implementation services that often include hourly billing options to help teams create change.",
    },
    {
        question: "What is the cost of working with SalesSource?",
        answer: "The audit has a flat fee which will cover the full use of our consulting resources to assess your current state with our robust data analysis tools, powered by Snowflake. The future services are scoped and billed separately based on client decisions for what projects make sense to move forward with after the audit. We also offer advisory services billed on a monthly basis, where no audit is required.",
    },
    {
        question: "How long does an audit take?",
        answer: "Typically, 4-6 weeks, depending on the scope and complexity.",
    },
    {
        question: "What is included in the audit?",
        answer: "We perform a comprehensive review of your GTM strategy, tech stack, and processes to ensure a deep understanding of where things are and where the biggest gaps are. We deliver the audit in the form of a readout where clients have access to the data analysis done using our proprietary data models, a deck showcasing the findings, and other documentation as is needed.",
    },
];

export const homeChallenges = [
    {
        icon: "fa-solid fa-timeline",
        title: "Pipeline Creation",
        subtitle:
            "Facing challenges in generating a consistent flow of qualified leads, impacting overall sales performance and growth potential.",
    },
    {
        icon: "fa-solid fa-arrow-up-right-dots",
        title: "Conversion Rates",
        subtitle:
            "Experiencing a decline in conversion rates from outreach efforts, affecting the efficiency of the sales process and overall revenue growth.",
    },
    {
        icon: "fa-solid fa-phone-xmark",
        title: "Inefficient Inbound",
        subtitle:
            "Struggling to effectively manage and convert incoming leads, resulting in missed opportunities and suboptimal utilization of marketing efforts.",
    },
    {
        icon: "fa-solid fa-database",
        title: "Tech Stack",
        subtitle:
            "Encountering operational inefficiencies and integration issues within your technology stack, hindering seamless workflows and productivity.",
    },
    {
        icon: "fa-solid fa-comments-dollar",
        title: "Compensation Plans",
        subtitle:
            "Dealing with suboptimal sales compensation structures that fail to motivate the team, leading to decreased performance and revenue impact.",
    },
    {
        icon: "fa-solid fa-scale-unbalanced",
        title: "Misalignment",
        subtitle:
            "Facing misalignment and communication breakdowns between sales and marketing teams, leading to inefficiencies and missed revenue opportunities.",
    },
];
