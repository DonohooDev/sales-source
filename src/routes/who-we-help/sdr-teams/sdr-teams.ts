import type { SolutionCard } from "../../../types/solution-card";
import type { FAQ } from "../../../types/faq";

export const sdrChallenges = [
    {
        icon: "fa-regular fa-traffic-light-slow",
        title: "Operational Inefficiency",
        subtitle:
            "Systems are rarely optimized to help your SDR Org operate with maximum efficiency, leading to inefficient and frustrated team members.",
    },
    {
        icon: "fa-regular fa-id-card",
        title: "Data Quality Issues",
        subtitle:
            "Dirty data for account and contacts can crush or significantly diminish your outreach efforts, and capturing the wrong data leads to operating on a hamster wheel of wasted efforts.",
    },
    {
        icon: "fa-regular fa-person-chalkboard",
        title: "Skills Issues",
        subtitle:
            "Without proper and ongoing training, inconsistency and poor practices diminish your success rates and make it nearly impossible to identify what's working.",
    },
    {
        icon: "fa-regular fa-building-lock",
        title: "Process & Technology Misalignment",
        subtitle:
            "The operational gridlock created when process are undefined or unclear leads to frustration and destroys productivity. ",
    },
    {
        icon: "fa-regular fa-house-person-leave",
        title: "High Turnover",
        subtitle:
            "Compensation plans that are misaligned with the goals of the organization can lead to high turnover and low morale.",
    },
    {
        icon: "fa-regular fa-handshake-angle",
        title: "Disengagement",
        subtitle:
            "Struggling to engage prospects effectively can result in low response rates and missed opportunities for conversions.",
    },
];

export const sdrSolutions: SolutionCard[] = [
    {
        icon: "fa-regular fa-tower-observation",
        title: "Assess",
        subtitle:
            "Full assessment to identify gaps and opportunities throughout your SDR organization.",
        bullets: [
            "Detailed audits across each key component of your SDR Org",
            "Identify gaps and opportunities for improvement",
            "Develop a roadmap to optimize your processes and technology",
            "Create a plan to improve data quality and accuracy",
        ],
    },
    {
        icon: "fa-regular fa-bell-concierge",
        title: "Services",
        subtitle:
            "Customized services to help you optimize and gain traction within your team moving forward.",
        bullets: [
            "Data cleansing, enrichment, and management services",
            "Comprehensive analysis of your Enablement Programs and Skill Development Efforts",
            "Operational processes assessment and performance mapping",
            "Compensation plan review and optimization with onboarding and training",
        ],
    },
    {
        icon: "fa-regular fa-laptop-mobile",
        title: "Technology",
        subtitle: "Technology stack optimization and implementation around your SDR organization.",
        bullets: [
            "Customized technology stack recommendations and implementation",
            "Admin on-demand services for your tech stack",
            "Ongoing support and optimization from our team of experts",
            "Data management and integration with dashboards and reporting",
        ],
    },
];

export const sdrFAQ: FAQ[] = [
    {
        question: "What team sizes are you willing to work with?",
        answer: "We work with teams of all sizes and stages of maturity.",
    },
    {
        question: "What is the cost of working with SalesSource?",
        answer: "Our pricing is based on the services you need and the size of your team. The audit has a flat fee, future services are scoped and billed separately.",
    },
    {
        question: "How long does an audit take?",
        answer: "The audit process typically takes 4-6 weeks, depending on the size of your team and the complexity of your marketing operations.",
    },
    {
        question:
            "Do you assist with Sales Engagement tools like Outreach, Groove, Salesloft, etc.?",
        answer: "Yes, as part of our comprehensive audit of technology and our technology services, we have expertise in a variety of Sales Engagement platforms.",
    },
];
